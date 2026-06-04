import express from "express"
import { refreshTokenController } from "../controllers/refreshToken.controller";

const router = express.Router();

router.post("/refresh-token", refreshTokenController);

export default router