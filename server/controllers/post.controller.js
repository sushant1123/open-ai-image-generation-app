import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { Post } from "../models/post.js";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLDOUDINARY_CLOUD_NAME,
	api_key: process.env.CLDOUDINARY_API_KEY,
	api_secret: process.env.CLDOUDINARY_API_SECRET,
});

export const getAllPosts = async (req, res) => {
	try {
		const posts = await Post.find({}).sort({ createdAt: "-1" });

		res.status(200).json({ success: true, data: posts });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: error });
	}
};

export const createPost = async (req, res) => {
	try {
		const { name, photo, prompt } = req.body;
		const photoUrl = await cloudinary.uploader.upload(photo);

		const newPost = await Post.create({ name, photo: photoUrl.url, prompt });

		res.status(201).json({ success: true, data: newPost });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: error });
	}
};
