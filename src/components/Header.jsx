// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { motion } from 'framer-motion'

// function Header(props) {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen)
//   }

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-80 backdrop-blur-md shadow-md fixed w-full z-50">
//         <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//           {/* Logo with Link */}
//           <Link
//             to="/"
//             className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-200"
//           >
//             <h1>{props.title}</h1>
//           </Link>

//           {/* Navigation Links (Desktop) */}
//           <div className="hidden md:flex space-x-6">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
//                   : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
//                   : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
//               }
//             >
//               About Us
//             </NavLink>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//             >
//               <NavLink
//                 to="/login"
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 Register
//               </NavLink>
//             </motion.div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu (Dropdown) */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-lg"
//           >
//             <div className="flex flex-col space-y-4 p-4">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
//                     : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
//                 }
//                 onClick={toggleMobileMenu}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
//                     : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
//                 }
//                 onClick={toggleMobileMenu}
//               >
//                 About Us
//               </NavLink>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <NavLink
//                   to="/login"
//                   className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
//                   onClick={toggleMobileMenu}
//                 >
//                   Register
//                 </NavLink>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </nav>
//     </>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Header(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-400 to-purple-300 bg-opacity-80 backdrop-blur-md shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo with Link */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-200"
          >
            <h1 className="text-blue-900">{props.title}</h1>
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
                  : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
                  : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us" // Added ContactUs link
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
                  : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
              }
            >
              Contact Us
            </NavLink>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                to="/login"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Register
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
                    : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
                    : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
                }
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us" // Added ContactUs link
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200'
                    : 'text-gray-700 hover:text-blue-600 transition-all duration-200'
                }
                onClick={toggleMobileMenu}
              >
                Contact Us
              </NavLink>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to="/login"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                  onClick={toggleMobileMenu}
                >
                  Register
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}

export default Header
