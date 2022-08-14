const router = require('express').Router();
const AuthController = require('../controllers/auth-controller')
const ActivateController = require("../controllers/activate-controller")
router.post("/api/send-otp",AuthController.sendOtp)
router.post("/api/verify-otp",AuthController.verifyOtp)
router.post("/api/activateUser",ActivateController.activateUser)


module.exports = router;