const OtpService = require("../services/otp-service");
const HashService = require("../services/hash-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({
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
      await OtpService.sendBySms(phone, otp);
      return res.json(200,{
        message: "OTP sent successfully📱",
        hash: `${hash}.${expire}`,
        phone,
      })
    } catch (error) {
      res.status(500).json({
        message: "Error sending OTP",
        error,
      });
    }
  }
  async verifyOtp(req, res) {
    
  }
}

module.exports = new AuthController();
