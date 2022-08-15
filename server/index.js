require("dotenv").config();
const DbConnect = require("./database");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const router = require("./router/routes.js");
const app = express();
// Image accees to public
app.use("/storage",express.static("storage"))
// Cookie Parser
app.use(cookieParser())
// cors error
const corsOption = {
    credentials:true,
    origin: ["http://localhost:3000"],
  };
app.use(cors(corsOption));
const PORT = process.env.PORT || 5000;
app.use(express.json({limit:"8mb"}));
app.use(router);
DbConnect();
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT + "✅");
});
