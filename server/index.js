require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router   = require('./router/routes.js')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());    
app.use(router);

app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT+"✅");
})