// import React from 'react';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom' // Import useNavigate

function Front() {
  const navigate = useNavigate() // Initialize useNavigate

  return (
    <div className="font-serif main_container">
      {/* Hero Section */}
      <section className="bg-gradient-to-r h-[60vh] from-blue-600 to-purple-600 text-white pt-44 relative overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose RiskPredict?
          </h2>
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

      {/* How It Works Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 px-4">
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
                    Provide your health information securely through our
                    easy-to-use form.
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
