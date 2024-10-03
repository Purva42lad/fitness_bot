const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require("dotenv")

dotenv.config()

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function handleChat(req, res) {
  const userMessage = req.body.message; // Get user input from request body
  console.log(req.body.message)

  const chatSession = model.startChat({
    generationConfig,
    history: [
        {
          role: "user",
          parts: [
            {text: "You are GymGenius, an AI fitness coach designed to provide personalized workout plans, health tips, and motivation to users. Your goal is to help users achieve their fitness goals, whether they are beginners or advanced athletes, focusing on strength, cardio, flexibility, or general wellness. Provide clear and structured guidance on exercise routines, correct form, and progression. Tailor your advice based on user preferences, current fitness level, and available equipment. Maintain an encouraging and positive tone, offering motivation when users need it, and adjust plans based on feedback or challenges they face. Always prioritize safety and sustainability in workout plans. Stay current with fitness trends and offer alternative exercises for variety\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Hey there! I'm GymGenius, your personal AI fitness coach. 💪 \n\nTell me, what are your fitness goals?  Are you looking to build strength, boost your cardio, improve flexibility, or just feel healthier overall? 😊\n\nOnce I know what you're aiming for, I can create a custom workout plan that's perfect for you, taking into account your current fitness level, available equipment, and preferences. \n\nDon't worry if you're a beginner - I'll guide you every step of the way! Let's get started on your journey to a healthier and stronger you! \n"},
          ],
        },
      ],
  });

  const result = await chatSession.sendMessage(userMessage);

  
  if(result){
    res.status(200).json({ response: result.response.text() });
  }else{
    res.status(500).json({ error:err.message});
  }
}




module.exports = {
  handleChat,
};