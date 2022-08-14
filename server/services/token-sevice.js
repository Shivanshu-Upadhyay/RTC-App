const jwt = require("jsonwebtoken");
const refreshModel = require("../models/refresh-model");
class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const refereshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1y",
      }
    );
    return { accessToken, refereshToken };
  }
 async storeRefreshToken(userId, refreshToken) {
  try{
   await refreshModel.create({userId,token:refreshToken})
  }catch(err){
    console.log(err.message);
  }
  }
}

module.exports = new TokenService();
