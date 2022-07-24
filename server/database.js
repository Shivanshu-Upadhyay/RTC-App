const mongoose = require("mongoose");
function DbConnect() {
  const DB_URL = process.env.DB_URL;
  mongoose.connect(DB_URL, {
    // useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error❌❌"));
  db.once("open", () => {
    console.log("Database connected✅✅");
  });
}

module.exports = DbConnect;
