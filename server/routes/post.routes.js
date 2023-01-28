import express from "express";
import { getAllPosts, createPost } from "../controllers/post.controller.js";

const router = express.Router();

//get all posts
router.route("/").get(getAllPosts);

//create a post
router.route("/").post(createPost);

export default router;
