import express from "express";
import { baseRoute, generateImage } from "../controllers/dalle.controller.js";

const router = express.Router();

router.route("/").get(baseRoute);

router.route("/").post(generateImage);

export default router;
