import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
	const randomNumber = Math.floor(Math.random() * surpriseMePrompts.length);
	let randomPrompt = surpriseMePrompts[randomNumber];

	if (randomPrompt === prompt) return getRandomPrompt(prompt);

	return randomPrompt;
};
