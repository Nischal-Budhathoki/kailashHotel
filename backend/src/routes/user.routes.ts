import express from "express";
import {
  userController,
  userReadController,
  allUserController,
  updateUser,
  deleteUser,
  deleteUsersByRole,
} from "../controllers/user.controller.js";


const router = express.Router();


//CRUD-OPERATIONS
router.post("/create-users", userController);
router.get("/all-users", allUserController);
router.get("/single-user/:id", userReadController);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);
router.delete("/delete-users", deleteUsersByRole);





export default router;