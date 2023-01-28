import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const baseRoute = (req, res) => {
	return res.send("Hello from DALL-E!");
};

export const generateImage = async (req, res) => {
	try {
		const { prompt } = req.body;
		const aiResponse = await openai.createImage({
			prompt,
			size: "1024x1024",
			response_format: "b64_json",
			n: 1,
		});

		const image = aiResponse.data.data[0].b64_json;

		return res.status(200).json({ status: "success", photo: image });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: "error", error: error?.response.data.error.message });
	}
};
