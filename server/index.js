import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./connections/mongodb.connection.js";
import postRoutes from "./routes/post.routes.js";
import dalleRoutes from "./routes/dall-e.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
	res.json("Hello from open-ai-image-generation-app server");
});

const startServer = () => {
	try {
		connectDB(process.env.MONGODB_URL);
		app.listen(8080, () => console.log("Server on port 8080"));
	} catch (error) {
		console.log(error.message);
	}
};

startServer();
