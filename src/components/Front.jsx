// // import React from 'react';
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom' // Import useNavigate

// function Front() {
//   const navigate = useNavigate() // Initialize useNavigate

//   return (
//     <div className="font-serif main_container">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r h-[60vh] from-blue-600 to-purple-600 text-white pt-44 relative overflow-hidden">
//         {/* Background Image */}
//         <motion.img
//           src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//           alt="Healthcare Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 1.5 }}
//         />

//         <div className="container mx-auto px-6 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             Know Your Health Risks
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-xl mb-8"
//           >
//             Get personalized insights into your health risks with our advanced
//             risk prediction tool.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate('/login')} // Redirect to HealthForm
//             className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
//           >
//             Predict My Risk
//           </motion.button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why Choose RiskPredict?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               'Personalized Insights',
//               'Advanced Algorithms',
//               'Actionable Recommendations',
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-semibold mb-4">{feature}</h3>
//                 <p className="text-gray-600">
//                   Our tool analyzes your health data to provide tailored risk
//                   predictions.
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 px-4">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {['Enter Your Data', 'Analyze Your Risks', 'Get Your Report'].map(
//               (step, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="text-center"
//                 >
//                   <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-2xl font-bold">{index + 1}</span>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-4">{step}</h3>
//                   <p className="text-gray-600">
//                     Provide your health information securely through our
//                     easy-to-use form.
//                   </p>
//                 </motion.div>
//               )
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Front
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react' // Import useState
import FloatingIcons from './FloatingIcons' // ✅ Ensure this import exists

function Front() {
  const [selectedDisease, setSelectedDisease] = useState(null)
  const navigate = useNavigate()
  return (
    <div className="font-serif main_container">
      {/* Hero Section */}
      <section className="bg-gradient-to-r h-[60vh] from-blue-600 to-purple-600 text-white pt-44 relative overflow-hidden">
        {/* Background Image */}
        <motion.img
          //src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          src="https://img.freepik.com/free-vector/watercolor-medical-background_23-2151342785.jpg?t=st=1739026381~exp=1739029981~hmac=3d594b6fe29f6b86b52eae228eba4f0f38c656b80d7ecdcda70540c0e1fc29bd&w=900"
          alt="Healthcare Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Know Your Health Risks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Get personalized insights into your health risks with our advanced
            risk prediction tool.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')} // Redirect to HealthForm
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Predict My Risk
          </motion.button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          {
            /* <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose RiskPredict?
          </h2> */
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold text-black text-center mb-12 drop-shadow-xl"
            >
              Why Choose Risk Predict?
            </motion.h2>
          }
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Personalized Insights',
              'Advanced Algorithms',
              'Actionable Recommendations',
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600">
                  Our tool analyzes your health data to provide tailored risk
                  predictions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Disease Risk Prediction Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-purple-100 relative z-[20]">
        <FloatingIcons /> {/* ✅ Floating Icons added */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-black text-center mb-12 drop-shadow-xl"
          >
            Know Your Risk for{' '}
            <span className="text-blue-600">Critical Diseases</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Diabetes',
                desc: 'Assess your risk for diabetes and get personalized prevention tips.',
                details:
                  'Diabetes is a chronic condition affecting blood sugar levels. A balanced diet and active lifestyle help reduce risks.',
              },
              {
                name: 'Heart Disease',
                desc: 'Find out your risk of heart disease and take proactive steps.',
                details:
                  'Heart disease includes high blood pressure and heart attacks. Regular check-ups and a healthy lifestyle are crucial.',
              },
              {
                name: 'Breast cancer',
                desc: 'Early detection matters. Check your risk for  cancers.',
                details:
                  'Breast cancer is a type of cancer that forms in breast cells, with early detection being crucial for effective treatment and survival.',
              },
            ].map((disease, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer relative"
                onMouseLeave={() => setSelectedDisease(null)} // 🔹 Hide when moving away
              >
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {disease.name}
                </h3>
                <p className="text-gray-600">{disease.desc}</p>
                {/* "More Info" Button with Shine Effect */}
                <button
                  className="relative overflow-hidden mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg
               shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={(e) => {
                    e.stopPropagation() // Prevent parent div click
                    setSelectedDisease((prev) =>
                      prev === disease.name ? null : disease.name
                    )
                  }}
                >
                  More Info
                  {/* Shine Effect */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                     opacity-50 rotate-12 translate-x-[-100%] hover:translate-x-[100%]
                     transition-transform duration-500 ease-in-out"
                  ></span>
                </button>
                {/* Speech Bubble */}
                {selectedDisease === disease.name && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 top-full mt-6 w-48 min-h-28 bg-white text-black
               flex items-center justify-center rounded-3xl shadow-2xl text-sm px-4 py-3 border border-gray-300
               z-[50] opacity-100"
                    onMouseLeave={() => setSelectedDisease(null)} // Closes when mouse leaves
                  >
                    <p className="text-center font-medium">{disease.details}</p>
                    {/* Cloud Tail */}
                    <div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full
                    w-6 h-6 bg-white border-t border-l border-gray-300 rotate-45"
                    ></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="relative z-[1] bg-gradient-to-r from-blue-100 to-purple-100 py-16 px-4">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Enter Your Data', 'Analyze Your Risks', 'Get Your Report'].map(
              (step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step}</h3>
                  <p className="text-gray-600">
                    {index === 0
                      ? 'Provide your health information securely.'
                      : index === 1
                      ? 'Our system analyzes your health data.'
                      : 'Receive a detailed health risk report.'}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Front
