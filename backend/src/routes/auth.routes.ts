import express from "express"
import { loginController } from "../login/user.login";
import { userRegistration } from "../login/user.register";


const router = express.Router();

// LOGIN
router.post("/login", loginController);

//registration
router.post("/register", userRegistration);


export default router