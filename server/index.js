import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
	res.json("Hello from DALL-E");
});

const startServer = () => {
	app.listen(8080, () => console.log("Server on port 8080"));
};

startServer();
