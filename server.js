
// const express = require('express');
// const openai = require('./openai')

import express from 'express';
import openai from './openai.js';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3000;

// const dotenv = require('dotenv');
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config();



async function _getExampleMessage() {
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a tsundere assistant.  Tell me some fun eagle facts." }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}

app.get('/', async (req, res) => {

    const msg = await _getExampleMessage();
    // const msg = process.env.PORT

    res.json({ hello: 'hello world', message: msg });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
