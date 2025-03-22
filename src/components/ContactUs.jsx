// import React from 'react'
// import { motion } from 'framer-motion'

// function ContactUs() {
//   return (
//     <div className="w-[99vw] min-h-[100vh] flex flex-col items-center bg-gradient-to-r from-blue-50 to-purple-50 py-10">
//       {/* Image Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full flex justify-center"
//       >
//         <img
//           className="rounded-2xl mt-10 w-[80vw] h-[40vh] md:w-[70vw] md:h-[50vh] object-cover shadow-lg"
//           src="https://img.freepik.com/premium-photo/cute-baby-boy-his-mother-medical-exam-pediatrician-s-office_637285-1775.jpg"
//           alt="Medical Exam"
//         />
//       </motion.div>

//       {/* Contact Information Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="mt-12 text-center max-w-4xl w-full px-4"
//       >
//         <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-xl">
//           Contact Us
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg">
//           We'd love to hear from you! Reach out to us for any inquiries or
//           support.
//         </p>

//         <div className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-md">
//           <p className="text-lg text-gray-700">
//             <span className="font-semibold">Email:</span>{' '}
//             ishayankundu6@gmail.com
//           </p>
//           <p className="text-lg text-gray-700">
//             <span className="font-semibold">Phone:</span> 9831588960
//           </p>
//           <p className="text-lg text-gray-700">
//             <span className="font-semibold">Address:</span> KIIT University,
//             Patia, Bhubaneswar, Odisha, India - 751024
//           </p>
//           <div className="mt-6">
//             <a
//               href="mailto:ishayankundu6@gmail.com"
//               className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Us an Email
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Map Embed Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="mt-12 w-full max-w-4xl px-4"
//       >
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-2xl font-extrabold text-gray-800 mb-4 drop-shadow-xl">
//             Our Location
//           </h2>
//           <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.709852032308!2d85.8167453750122!3d20.353601681132115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19094076713875%3A0xb25b0c927e78c50f!2sKIIT%20University!5e0!3m2!1sen!2sin!4v1739028268425!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Google Maps Location"
//             ></iframe>
//           </div>
//         </div>
//       </motion.div>

//       {/* Social Media Links Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="mt-12 flex space-x-6"
//       >
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
//             alt="Facebook"
//             className="w-10 h-10 hover:opacity-75 transition duration-300"
//           />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
//             alt="Twitter"
//             className="w-10 h-10 hover:opacity-75 transition duration-300"
//           />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
//             alt="Instagram"
//             className="w-10 h-10 hover:opacity-75 transition duration-300"
//           />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
//             alt="LinkedIn"
//             className="w-10 h-10 hover:opacity-75 transition duration-300"
//           />
//         </a>
//       </motion.div>
//     </div>
//   )
// }

// export default ContactUs
import { motion } from 'framer-motion'

function ContactUs() {
  return (
    <div className="relative w-[99vw] min-h-[100vh] flex flex-col items-center bg-gradient-to-r from-blue-50 to-purple-50 py-10">
      {/* ✅ Image Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center"
      >
        <img
          className="rounded-2xl mt-10 w-[80vw] h-[40vh] md:w-[70vw] md:h-[50vh] object-cover shadow-lg"
          src="https://img.freepik.com/premium-photo/establishing-shot-active-local-indian-health-clinic-lobby-representing-modern-advanced-healthcare-services-with-nurses-doctors-diverse-patients-waiting-reception-hall-hospital_612827-31315.jpg?w=900"
          alt="Medical Exam"
        />
      </motion.div>

      {/* ✅ Contact Information Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 text-center max-w-4xl w-full px-4"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-xl">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          We'd love to hear from you! Reach out to us for any inquiries or
          support.
        </p>

        <div className="mt-8 space-y-6 bg-white p-10 rounded-xl shadow-md relative">
          {/* ✅ Floating Icons */}
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email Icon"
            className="absolute top-4 left-4 w-8 h-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Phone Icon"
            className="absolute top-16 right-4 w-8 h-8"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />

          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Address Icon"
            className="absolute bottom-4 left-4 w-8 h-8"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />

          {/* ✅ Contact Details */}
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span>{' '}
            ishayankundu6@gmail.com
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Phone:</span> 9831588960
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Address:</span> KIIT University,
            Patia, Bhubaneswar, Odisha, India - 751024
          </p>

          {/* ✅ Email Button */}
          <div className="mt-6">
            <a
              href="mailto:ishayankundu6@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </motion.div>

      {/* ✅ Map Embed Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 w-full max-w-4xl px-4"
      >
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-4 drop-shadow-xl">
            Our Location
          </h2>

          {/* ✅ Enlarging Map on Hover */}
          <motion.div
            className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.709852032308!2d85.8167453750122!3d20.353601681132115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19094076713875%3A0xb25b0c927e78c50f!2sKIIT%20University!5e0!3m2!1sen!2sin!4v1739028268425!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
      {/* Social Media Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 flex space-x-6"
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="Facebook"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt="Twitter"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="Instagram"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          />
        </a>
      </motion.div>
    </div>
  )
}

export default ContactUs
