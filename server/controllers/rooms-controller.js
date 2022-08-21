const roomService = require("../services/room-service");
class RoomsController {
  async createRoom(req, res) {
    const { topic, roomType } = req.body;

    if (topic && roomType) {
      const room = await roomService.create({
        topic,
        roomType: roomType,
        ownerId: req.user._id,
      });
      res.status(200).json({
        message: "room created successfully",
        room,
      });
    } else {
      res.status(202).json({
        message: "all field Required",
      });
    }
  }
  async getAllRooms(req,res){
    const rooms = await roomService.getAllRoomsData(["open"])
    if(rooms){
      res.status(200).json({
        message:"rooms found",
        rooms
      })
    }else{
      res.status(202).json({
        message:"no rooms found"
      })
    }
  }
}

module.exports = new RoomsController();
