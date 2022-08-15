const router = require('express').Router();
const AuthController = require('../controllers/auth-controller')
const ActivateController = require("../controllers/activate-controller")
const authMiddleware = require('../middleware/auth-middelware')
router.post("/api/send-otp",AuthController.sendOtp)
router.post("/api/verify-otp",AuthController.verifyOtp)
// PROTECTED ROUTES💀💀
router.post("/api/activateUser",authMiddleware,ActivateController.activateUser)


module.exports = router;