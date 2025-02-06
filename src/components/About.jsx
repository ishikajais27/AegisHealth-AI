import React from 'react';

function About() {
  return (
    <>
    {/* Hero Section */}
    <section className="about h-[40vh] text-white py-20">
                    <div className="w-[85vw] mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">About RiskPredict</h1>
                        <p className="text-lg md:text-xl">
                            Empowering you with personalized health insights to make informed decisions.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 px-4">
                    <div className="w-[85vw] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-gray-600 text-lg">
                                At RiskPredict, our mission is to revolutionize healthcare by providing individuals with personalized risk predictions and actionable insights. We believe that everyone deserves access to tools that help them understand and manage their health risks effectively.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-gray-50 py-16 px-4">
                    <div className="w-[85vw] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Ishika Jaiswal</h3>
                                <p className="text-gray-600">Chief Medical Officer</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    With over 15 years of experience in healthcare, Dr. Jane ensures our predictions are accurate and reliable.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Ishayan Kundu</h3>
                                <p className="text-gray-600">Chief Medical Officer</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    With over 15 years of experience in healthcare, Dr. Jane ensures our predictions are accurate and reliable.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Nishtha Mishra</h3>
                                <p className="text-gray-600">Lead Data Scientist</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    John specializes in AI and machine learning, driving the technology behind our risk prediction models.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Ishita Dwivedi</h3>
                                <p className="text-gray-600">Product Manager</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    Sarah ensures our platform is user-friendly and meets the needs of our users.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 px-4">
                    <div className="w-[85vw] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                                <p className="text-gray-600">
                                    We leverage cutting-edge technology to deliver accurate and reliable risk predictions.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                                <p className="text-gray-600">
                                    We believe in clear and honest communication with our users.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">User-Centric</h3>
                                <p className="text-gray-600">
                                    Our users are at the heart of everything we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

</>
  );
}

export default About;
