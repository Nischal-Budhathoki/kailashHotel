import express from "express";
import { userController,
     userReadController
     } from "../controllers/user.controllers";

const router = express.Router();

//creating user route
router.route("/users").post(userController);
router.route("/users").get(userReadController);


export default router;
