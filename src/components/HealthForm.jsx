// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// const HealthForm = () => {
//   const [healthData, setHealthData] = useState({
//     age: '',
//     weight: '',
//     bloodPressure: '',
//     cholesterol: '',
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Health Data Submitted:', healthData)
//     // Add logic to send data to the backend or AI model
//   }

//   return (
//     <div className="health-form w-[100vw] h-[92vh] relative overflow-hidden">
//       {/* Animated Background Image */}
//       <motion.img
//         className="w-full h-full object-cover absolute top-0 left-0 scale-110"
//         src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//         alt="Medical Material Background"
//         initial={{ scale: 1.2, opacity: 1 }}
//         animate={{ scale: 1.1, opacity: 1 }}
//         transition={{ duration: 1.2, ease: 'easeInOut' }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-50"></div>

//       {/* Form Container */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//         className="relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-7xl w-96 transition-all duration-300 hover:shadow-3xl backdrop-blur-lg"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-white">
//           Health Data Input
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="age"
//             >
//               Age:
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
//               type="number"
//               id="age"
//               placeholder="Enter your age"
//               value={healthData.age}
//               onChange={(e) =>
//                 setHealthData({ ...healthData, age: e.target.value })
//               }
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="weight"
//             >
//               Weight (kg):
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
//               type="number"
//               id="weight"
//               placeholder="Enter your weight"
//               value={healthData.weight}
//               onChange={(e) =>
//                 setHealthData({ ...healthData, weight: e.target.value })
//               }
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="bloodPressure"
//             >
//               Blood Pressure:
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
//               type="number"
//               id="bloodPressure"
//               placeholder="Enter your blood pressure"
//               value={healthData.bloodPressure}
//               onChange={(e) =>
//                 setHealthData({ ...healthData, bloodPressure: e.target.value })
//               }
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="cholesterol"
//             >
//               Cholesterol:
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
//               type="number"
//               id="cholesterol"
//               placeholder="Enter your cholesterol"
//               value={healthData.cholesterol}
//               onChange={(e) =>
//                 setHealthData({ ...healthData, cholesterol: e.target.value })
//               }
//             />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   )
// }

// export default HealthForm
import React from 'react'
import { motion } from 'framer-motion'
import config from './config' // Import the configuration file

const HealthForm = () => {
  // Functions to open Streamlit apps in a new tab
  const openDiabetesApp = () => {
    window.open(config.streamlitUrls.diabetes, '_blank')
  }

  const openHeartDiseaseApp = () => {
    window.open(config.streamlitUrls.heartDisease, '_blank')
  }

  const openBreastCancerApp = () => {
    window.open(config.streamlitUrls.breastCancer, '_blank')
  }

  const openKidneyDiseaseApp = () => {
    window.open(config.streamlitUrls.kidneyDisease, '_blank')
  }

  const openLiverDiseaseApp = () => {
    window.open(config.streamlitUrls.liverDisease, '_blank')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="health-form h-[60vh] text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
          alt="Healthcare Background"
          className="absolute inset-0 mt-12 w-full h-full object-cover opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-50"></div>

        <div className="w-[85vw] mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 mb-4"
          >
            Health Prediction Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl font-light"
          >
            Predict your health risks with our advanced AI models.
          </motion.p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="w-[85vw] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Predict Your Health Risks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDiabetesApp}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              Predict Diabetes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openHeartDiseaseApp}
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
            >
              Predict Heart Disease
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openBreastCancerApp}
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-200"
            >
              Predict Breast Cancer
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openKidneyDiseaseApp}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200"
            >
              Predict Kidney Disease
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openLiverDiseaseApp}
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200"
            >
              Predict Liver Disease
            </motion.button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HealthForm
