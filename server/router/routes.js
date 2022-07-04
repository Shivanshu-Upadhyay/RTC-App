const router = require('express').Router();

router.post("/",(req,res)=>{
    res.send("Hello World");
})



module.exports = router;