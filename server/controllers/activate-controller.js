const Jimp = require("jimp");
const path = require("path");
const userService = require("../services/user-service");
class ActivateController {
  async activateUser(req, res) {
    const { name, avatar } = req.body;

    if (!name || !avatar) {
      res.status(400).json({
        message: "Invailed Data",
      });
    }

    //Image Base64 to Image
    const buffer = Buffer.from(avatar.replace(/^data:image\/(png|jpg|svg|jpeg);base64,/, ''),'base64');
    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;
    try {
      const jimpResp = await Jimp.read(buffer);
      jimpResp.resize(150, 150).write(path.resolve(__dirname, `../storage/${imagePath}`));
    } catch (error) {
      res.status(500).json({
        message: "Server Error Img Processing",
      });
    }
    try {
      const userId = req.user._id;
      const user = await userService.findUser({ _id: userId });
      if (!user) {
        res.status(404).json({
          message: "User Not Found",
        });
      }
      user.activated = true;
      user.name = name;
      user.avatar =`${process.env.BASE_URL}/storage/${imagePath}`;
      user.save();
      res.status(200).json({
        message: "User Activated",
        user,
        auth: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
      });
    }
}
}

module.exports = new ActivateController();
