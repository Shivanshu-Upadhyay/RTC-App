require("dotenv").config();
const DbConnect = require("./database");
const express = require("express");
const cors = require("cors");
const router = require("./router/routes.js");
const app = express();
// cors error
const corsOption = {
    origin: ["http://localhost:3000"],
  };
  app.use(cors(corsOption));
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(router);
DbConnect();
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT + "✅");
});
