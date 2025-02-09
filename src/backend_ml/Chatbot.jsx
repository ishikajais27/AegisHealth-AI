import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios' // For making API requests (if needed)

const Chatbot = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [prediction, setPrediction] = useState(null)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Add user message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ])

    // Process input for diabetes prediction
    try {
      // Replace this with your actual API endpoint or local prediction logic
      const response = await axios.post('/api/predict-diabetes', {
        features: input.split(',').map(Number), // Assuming input is comma-separated values
      })

      const result = response.data.prediction
      setPrediction(result)

      // Add bot response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `Based on your input, the model predicts: ${
            result === 1 ? 'You have diabetes.' : 'You do not have diabetes.'
          }`,
          sender: 'bot',
        },
      ])
    } catch (error) {
      console.error('Error predicting diabetes:', error)
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: 'An error occurred while processing your request.',
          sender: 'bot',
        },
      ])
    }

    // Clear input
    setInput('')
  }

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your health data (e.g., glucose, BMI, etc.)"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chatbot
