import React, { useState } from 'react'
import { motion } from 'framer-motion'
import supabase from '../supbaseClient'
import { useNavigate } from 'react-router-dom' // Import useNavigate

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLogin, setIsLogin] = useState(true) // Toggle between Login and Signup
  const navigate = useNavigate() // Initialize useNavigate

  const handleAuth = async (e) => {
    e.preventDefault()
    setError('')

    try {
      // Inside handleAuth function
      if (isLogin) {
        // Login
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })

        if (error) {
          setError(error.message)
        } else {
          console.log('User logged in:', data.user)
          navigate('/health-form') // Redirect to HealthForm after login
        }
      } else {
        // Signup
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })

        if (error) {
          setError(error.message)
        } else {
          console.log('User signed up:', data.user)
          navigate('/health-form') // Redirect to HealthForm after signup
        }
      }
      // if (isLogin) {
      //   // Login
      //   const { data, error } = await supabase.auth.signInWithPassword({
      //     email: email,
      //     password: password,
      //   })

      //   if (error) {
      //     setError(error.message)
      //   } else {
      //     console.log('User logged in:', data.user)
      //     navigate('/health-form') // Redirect to HealthForm after login
      //   }
      // } else {
      //   // Signup
      //   const { data, error } = await supabase.auth.signUp({
      //     email: email,
      //     password: password,
      //   })

      //   if (error) {
      //     setError(error.message)
      //   } else {
      //     console.log('User signed up:', data.user)
      //     navigate('/chatbot') // Redirect to Chatbot after signup
      //   }
      // }
    } catch (error) {
      setError(error.message)
      console.error('Error:', error)
    }
  }

  return (
    <>
      <div className="login">
        <div className="w-[100vw] h-[92vh] relative overflow-hidden">
          {/* Animated Background Image */}
          <motion.img
            className="w-full h-full object-cover absolute top-0 left-0 scale-110 blur-sm"
            src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Medical Material Background"
            initial={{ scale: 1.2, opacity: 1 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          {/* Text Overlay - AegisHealth */}
          <motion.h1
            className="absolute top-1/3 right-2/3 font-bold shadow-md transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-black text-center opacity-80"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            AegisHealth
            <div>
              <h3 className="text-3xl my-4">your healthcare is our priority</h3>
              <h3 className="text-3xl my-1 mx-5">
                Please Signin/Signup to predict your Health!!!
              </h3>
            </div>
          </motion.h1>

          {/* Wavy Structure Image */}
          <motion.div
            className="custom-shape-divider-bottom-1738941601 absolute bottom-0 left-0 w-full h-72"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </motion.div>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full"></div>

          {/* Auth Form */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-7xl w-96 transition-all duration-300 hover:shadow-3xl backdrop-blur-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              {isLogin ? 'Login' : 'Sign Up'}
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleAuth}>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-300"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </motion.button>
            </form>
            <p className="text-center text-black mt-4">
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-900 hover:underline transition-all duration-200 hover:text-blue-600"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Login
