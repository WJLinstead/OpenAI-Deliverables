# OpenAI Group Tutorial

This is a Node.js project that utilizes the OpenAI API as a language translator tool.

## What is OpenAI?

OpenAI is an artificial intelligence research laboratory consisting of both a for-profit corporation, OpenAI LP, and its parent company, the non-profit OpenAI Inc. It was founded in December 2015 by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, Wojciech Zaremba, and John Schulman. The organization's goal is to advance artificial general intelligence (AGI) in a safe and beneficial manner for humanity.

It is most known for the GPT Series and DALL-E. 

The GPT Series is a large-scale language model trained on vast amounts of text data, capable of understanding and generating human-like text.  
DALL-E is an AI model developed by OpenAI capable of generating images from textual descriptions. It can create images of objects, scenes, and concepts that it has not seen before based on the provided text input.

In this project we will be focusing on the GPT Series.  

# Requirements

You will need Node.js installed and have an account created with OpenAI.  
This project requires an API key that is found in your OpenAI account.

To create an account, go to https://openai.com/

# Instructions

## Installing OpenAI

1. Open your desired code editor and create a new project

2. Install the OpenAI Node.js library using your terminal
```
npm install openai
```

This will generate a package.json file with the openAI dependency inside, a package-lock.json file and a folder labelled node_modules with required files.

## Generate your API Key

2. Log in to your OpenAI account at https://openai.com/

3. Select the "API" option

4. On the left, there will be a navigation bar that pops open when you hover over it. Select the lock icon labelled "API Keys"

5. Click the "+ Create new Secret Key" button to generate a new key

6. Name your key and set your permissions. For this we will keep it selected as "All"

7. Click the "Create secret key" button. 

8. Copy and paste the generated key into a safe place as you may only access this key once. 

# Collaborators 
Jashanpreet Singh - 200513016  
Shania Muller - 200270187  
William Linstead  

## Created for 
COMP2068  
Javascript Frameworks  
Winter 2024  

# References
https://platform.openai.com/docs/quickstart?context=node  
https://www.npmjs.com/package/openai 