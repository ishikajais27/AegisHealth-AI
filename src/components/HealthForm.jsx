import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HealthForm = () => {
  const [healthData, setHealthData] = useState({
    age: '',
    weight: '',
    bloodPressure: '',
    cholesterol: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Health Data Submitted:', healthData)
    // Add logic to send data to the backend or AI model
  }

  return (
    <div className="health-form w-[100vw] h-[92vh] relative overflow-hidden">
      {/* Animated Background Image */}
      <motion.img
        className="w-full h-full object-cover absolute top-0 left-0 scale-110"
        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Medical Material Background"
        initial={{ scale: 1.2, opacity: 1 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-50"></div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-7xl w-96 transition-all duration-300 hover:shadow-3xl backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Health Data Input
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
              type="number"
              id="age"
              placeholder="Enter your age"
              value={healthData.age}
              onChange={(e) =>
                setHealthData({ ...healthData, age: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="weight"
            >
              Weight (kg):
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
              type="number"
              id="weight"
              placeholder="Enter your weight"
              value={healthData.weight}
              onChange={(e) =>
                setHealthData({ ...healthData, weight: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="bloodPressure"
            >
              Blood Pressure:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
              type="number"
              id="bloodPressure"
              placeholder="Enter your blood pressure"
              value={healthData.bloodPressure}
              onChange={(e) =>
                setHealthData({ ...healthData, bloodPressure: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="cholesterol"
            >
              Cholesterol:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
              type="number"
              id="cholesterol"
              placeholder="Enter your cholesterol"
              value={healthData.cholesterol}
              onChange={(e) =>
                setHealthData({ ...healthData, cholesterol: e.target.value })
              }
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default HealthForm
