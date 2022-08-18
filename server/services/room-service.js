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
}

module.exports = new RoomService();
