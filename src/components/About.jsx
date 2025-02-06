// // import React from 'react';
// import { motion } from 'framer-motion'

// function About() {
//   const teamMembers = [
//     {
//       name: 'Ishika Jaiswal',
//       role: 'Data Scientist',
//       description: 'Experienced data scientist focused on predictive modeling.',
//     },
//     {
//       name: 'Ishayan Kundu',
//       role: 'AI Engineer',
//       description: 'Specializes in AI development and implementation.',
//     },
//     {
//       name: 'Nishtha Mishra',
//       role: 'Frontend Developer',
//       description: 'Expert in creating user-friendly interfaces.',
//     },
//     {
//       name: 'Ishita Dwivedi',
//       role: 'Backend Developer',
//       description: 'Manages server-side logic and database management.',
//     },
//   ]

//   const values = [
//     {
//       title: 'Innovation',
//       description:
//         'We leverage cutting-edge technology to deliver accurate and reliable risk predictions.',
//       icon: (
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       title: 'Transparency',
//       description:
//         'We ensure clarity in our processes and data handling, fostering trust with our users.',
//       icon: (
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
//           ></path>
//         </svg>
//       ),
//     },
//     {
//       title: 'User-Centric',
//       description:
//         "We prioritize our users' needs, designing our services to be intuitive and accessible for everyone.",
//       icon: (
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//           ></path>
//         </svg>
//       ),
//     },
//   ]

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="about h-[40vh] text-white py-20 bg-gradient-to-r from-blue-700 to-purple-700 relative overflow-hidden">
//         {/* Background Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800 opacity-30"></div>

//         <div className="w-[85vw] mx-auto px-6 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
//           >
//             About RiskPredict
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//             className="text-lg md:text-xl lg:text-2xl font-light"
//           >
//             Empowering you with personalized health insights to make informed
//             decisions.
//           </motion.p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 px-4 bg-white">
//         <div className="w-[85vw] mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//             Our Mission
//           </h2>
//           <div className="max-w-3xl mx-auto text-center">
//             <p className="text-gray-700 text-lg leading-relaxed">
//               At RiskPredict, our mission is to revolutionize healthcare by
//               providing individuals with personalized risk predictions and
//               actionable insights. We strive to empower individuals to
//               proactively manage their health through informed decisions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="w-[85vw] mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img
//                   src={`https://source.unsplash.com/150x150/?portrait&sig=${index}`} // Dynamic profile images
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-blue-600 font-medium">{member.role}</p>
//                 <p className="text-gray-600 text-sm mt-2">
//                   {member.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-4 bg-white">
//         <div className="w-[85vw] mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
//             Our Values
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-center p-4"
//               >
//                 <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default About
import React from 'react'
import { motion } from 'framer-motion'

function About() {
  const teamMembers = [
    {
      name: 'Ishika Jaiswal',
      role: 'Data Scientist',
      description: 'Experienced data scientist focused on predictive modeling.',
    },
    {
      name: 'Ishayan Kundu',
      role: 'AI Engineer',
      description: 'Specializes in AI development and implementation.',
    },
    {
      name: 'Nishtha Mishra',
      role: 'Frontend Developer',
      description: 'Expert in creating user-friendly interfaces.',
    },
    {
      name: 'Ishita Dwivedi',
      role: 'Backend Developer',
      description: 'Manages server-side logic and database management.',
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description:
        'We leverage cutting-edge technology to deliver accurate and reliable risk predictions.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
    {
      title: 'Transparency',
      description:
        'We ensure clarity in our processes and data handling, fostering trust with our users.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: 'User-Centric',
      description:
        "We prioritize our users' needs, designing our services to be intuitive and accessible for everyone.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="about h-[40vh] text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
          alt="Healthcare Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About RiskPredict
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl font-light"
          >
            Empowering you with personalized health insights to make informed
            decisions.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="w-[85vw] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Our Mission
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              At RiskPredict, our mission is to revolutionize healthcare by
              providing individuals with personalized risk predictions and
              actionable insights. We strive to empower individuals to
              proactively manage their health through informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="w-[85vw] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`https://source.unsplash.com/150x150/?portrait&sig=${index}`} // Dynamic profile images
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="w-[85vw] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
