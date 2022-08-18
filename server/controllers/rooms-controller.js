const roomService = require("../services/room-service");
class RoomsController {
  async createRoom(req, res) {
    const { topic, roomType } = req.body;
    

    if (!topic || !roomType) {
      res.status(400).json({
        message: "all field Required",
      });
    }
   
    const room = await roomService.create({
      topic,
      roomType:roomType,
      ownerId: req.user._id,
    });
    res.status(200).json({
      message: "room created successfully",
      room,
    });
  }
}

module.exports = new RoomsController();
