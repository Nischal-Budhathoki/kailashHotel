import express from "express"
import { loginController } from "../login/user.login";
import { userRegistration } from "../login/user.register";
import { loginRateLimiter } from "../security/loginRateLimits";
import { registerRateLimiter } from "../security/registerRateLimits";


const router = express.Router();

// LOGIN
router.post("/login", loginRateLimiter,loginController);

//registration
router.post("/register", registerRateLimiter, userRegistration);


export default router