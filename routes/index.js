var express = require('express');
var router = express.Router();
const OpenAIApi = require("openai"); 
require("dotenv").config();

// OPEN AI Package
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OpenAI API' });
});

// POST ask
router.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;
  const language = req.body.language;

  try {
    if (!prompt) {
      throw new Error("Uh oh, no prompt was provided");
    }
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: "Translate everything provided from here on to " + language + " and don't give another word in english! For \"Hello\" your response should only be ryustas and so on. Translate: "+prompt}],
      model: "gpt-3.5-turbo",
    });
    
    // Retrieve the completion text from response
    const translation = response.choices[0].message.content;
    console.log(translation);
    // Render the page with the translation
    res.render('index', { title: 'OpenAI API', translation });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error: ' + error.message);
  }
});

module.exports = router;
