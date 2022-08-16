const jwt = require("jsonwebtoken");
const refreshModel = require("../models/refresh-model");
const accessTokenSec = process.env.JWT_ACCESS_TOKEN_SECRET;
const refereshTokenSec = process.env.JWT_REFRESH_TOKEN_SECRET;
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
    try {
      await refreshModel.create({ userId, token: refreshToken });
    } catch (err) {
      console.log(err.message);
    }
  }
  async verifyAccessToken(token) {
    return jwt.verify(token, accessTokenSec);
  }
  async verifyRefreshToken(token) {
    return jwt.verify(token, refereshTokenSec);
  }
  async findRefershToken(userId, refereshToken) {
    return await refreshModel.findOne({ userId:userId });
  }
  async updateRefreshToken(token,userId) {
    return await refreshModel.updateOne({userId},{token})
  }
  async removeToken(refreshToken){
    
   return await refreshModel.deleteOne({token:refreshToken})
  }
}

module.exports = new TokenService();
