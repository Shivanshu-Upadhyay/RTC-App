const RoomModel = require("../models/rooms-model");

class RoomService {
  async create(payload) {
    const { topic, roomType, ownerId } = payload;
    const room = await RoomModel.create({
      topic,
      roomType,
      ownerId,
      speeckers: [ownerId],
    });
    return room;
  }
  async getAllRoomsData(roomType){
   
    const rooms = await RoomModel.find({roomType:{$in:roomType}}).populate("speeckers").populate("ownerId").exec();
    return rooms
  
  }
}

module.exports = new RoomService();
