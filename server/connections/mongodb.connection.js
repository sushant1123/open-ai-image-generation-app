import mongoose from "mongoose";

export const connectDB = async (url) => {
	try {
		mongoose.set("strictQuery", true);
		await mongoose.connect(url);
		console.log("DB connected successfully...");
	} catch (error) {
		console.log(error);
	}
};
