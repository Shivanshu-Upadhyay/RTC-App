const router = require('express').Router();
const AuthController = require('../controllers/auth-controller')
const ActivateController = require("../controllers/activate-controller")
const roomsController = require("../controllers/rooms-controller")
const authMiddleware = require('../middleware/auth-middelware');
const authController = require('../controllers/auth-controller');
// Public Routes📢
router.post("/api/send-otp",AuthController.sendOtp)
router.post("/api/verify-otp",AuthController.verifyOtp)
router.get("/api/refresh",AuthController.refreshToken)

// PROTECTED ROUTES💀💀
router.post("/api/activateUser",authMiddleware,ActivateController.activateUser)
router.post("/api/createRoomServer",authMiddleware,roomsController.createRoom)
router.post("/api/logout",authMiddleware,authController.logout)


module.exports = router;