import OpenAI from "openai";

import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({ apiKey });

export default openai;

// export async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// export main;