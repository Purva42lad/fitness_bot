const express = require('express');
const dotenv = require("dotenv")
const fitnessController = require("./controller/fitnessController")
const cors = require("cors")
dotenv.config()

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(cors({
  origin:"https://courageous-kitten-57638c.netlify.app",
  credentials: true,  // Enable sending cookies over HTTP requests
  methods: ["GET", "POST", "PUT", "DELETE"] // Specify allowed HTTP methods for cross-origin requests
})); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data

app.post('/askedQuestion', fitnessController.handleChat);

  app.listen(port, () => console.log(`Server listening on port ${port}`));