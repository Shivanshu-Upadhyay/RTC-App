const OtpService = require("../services/otp-service");
const HashService = require("../services/hash-service");
const otpService = require("../services/otp-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-sevice");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(203).json({
        message: "Kindly provide phone Number",
      });
    }
    
    // Generate OTP
    const otp = await OtpService.generateOtp();
    // Hash the OTP
    const ttl = 1000 * 60 * 2;
    const expire = Date.now() + ttl;
    const data = `${phone}.${otp}.${expire}`;
    const hash = await HashService.hashOtp(data);
    // Send OTP to user
    try {
      // await OtpService.sendBySms(phone, otp);

      return res.json(200, {
        message: "OTP sent successfully📱",
        hash: `${hash}.${expire}`,
        phone,
        otp,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error sending OTP",
        error,
      });
    }
  }

  async verifyOtp(req, res) {
    const { hash, otp, phone } = req.body;
    if (!hash || !otp || !phone) {
      res.status(201).json({
        message: "Kindly provide phone Number",
      });
    }
    const [hashedOtp, expire] = hash.split(".");
    if (Date.now() > +expire) {
      return res.status(202).json({
        message: "OTP expired",
      });
    }
    const data = `${phone}.${otp}.${expire}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);
    if (!isValid) {
      res.status(201).json({
        message: "OTP is invalid",
      });
    }

    let user;
    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
    }

    // JWT Token
    const { accessToken, refereshToken } = tokenService.generateToken({
      _id: user._id,
      activeted: false,
    });

    await tokenService.storeRefreshToken(user._id, refereshToken);
    res.cookie("refreshToken", refereshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json({
      user,
      auth: true,
    });
  }

  async refreshToken(req, res) {
    // Get refresh token from cookie
    const { refreshToken: refreshTokenFromCookies } = req.cookies;
    if (!refreshTokenFromCookies) {
      return res.status(401).json({
        user:null,
        auth: false,
      });
    }
    let userData;
    // Verify refresh token
    try {
      userData = await tokenService.verifyRefreshToken(refreshTokenFromCookies);
    } catch (error) {
      res.status(401).json({
        message: "Refreh Token Invalid",
      });
    }
    // Cheach Token In DB
    try {
      let token = await tokenService.findRefershToken(
        userData._id,
      );
      if (!token) {
        res.status(400).json({
          message: "Invalid Token",
        });
      }
    } catch (error) {
      res.status(502).json({
        message: "Token not in DB",
      });
    }

    // Check if vailid user
    const user = await userService.findUser({ _id: userData._id });
    // Generate New tokens
    const { accessToken, refereshToken } = tokenService.generateToken({
      _id: userData._id,
    });
    try {
      // Update Refresh token
     await tokenService.updateRefreshToken(refereshToken,userData._id);
    } catch (error) {
      res.status(500).json({
        message: "Error Update Refresh token",
      });
    }
    // Put it On Cookies
    res.cookie("refreshToken", refereshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json({
      user,
      auth: true,
    });
  }
  async logout(req,res){
    const {refreshToken} = req.cookies
    // Delete Refresh Token from DB
   await tokenService.removeToken(refreshToken)
    // Delete cookies
    res.clearCookie("refreshToken")
    res.clearCookie("accessToken")
    res.status(200).json({user:null,auth:false})
  }
}

module.exports = new AuthController();
