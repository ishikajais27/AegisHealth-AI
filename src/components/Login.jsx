import React from 'react'
import { motion } from 'framer-motion'

function Login() {
  return (
    <div className="login w-[100vw] h-[86vh] relative overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100">
      {/* Animated Background Image */}
      <motion.img
        className="w-full h-full object-cover absolute top-0 left-0 opacity-70 scale-110"
        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Abstract Healthcare Background"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.7 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"></div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl w-96 transition-all duration-300 hover:shadow-3xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            Sign In
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-blue-500 hover:underline transition-all duration-200 hover:text-blue-600"
          >
            Register
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default Login
