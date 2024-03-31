var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OpenAI API' });
});

module.exports = router;


const OpenAIApi  = require("openai"); 
require("dotenv").config(); 

  const openai = new OpenAIApi( {
    apiKey: process.env.OPENAI_SECRET_KEY, }); 
    
  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  }
  
  main();