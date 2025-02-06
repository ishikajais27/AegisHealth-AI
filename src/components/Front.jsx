function Front() {
    return (
        <>
            <div className=" main font-serif main_container">
                

                {/* Hero Section */}
                <section className="bgimg  text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Know Your Health Risks</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Get personalized insights into your health risks with our advanced risk prediction tool.
                        </p>
                        <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
                            Predict My Risk
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4"> {/* Added px-4 for spacing on both sides */}
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose RiskPredict?</h2>
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="parts p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-semibold mb-4">Personalized Insights</h3>
                                <p className="text-gray-600">Our tool analyzes your health data to provide tailored risk predictions.</p>
                            </div>
                            <div className="parts p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-semibold mb-4">Advanced Algorithms</h3>
                                <p className="text-gray-600">Powered by cutting-edge AI to ensure accurate and reliable results.</p>
                            </div>
                            <div className="parts p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-semibold mb-4">Actionable Recommendations</h3>
                                <p className="text-gray-600">Receive practical advice to reduce your health risks and improve your well-being.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="bg-gray-50 py-16 px-4"> {/* Added px-4 for spacing on both sides */}
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Enter Your Data</h3>
                                <p className="text-gray-600">Provide your health information securely through our easy-to-use form.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Analyze Your Risks</h3>
                                <p className="text-gray-600">Our AI-powered tool evaluates your data to identify potential health risks.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Get Your Report</h3>
                                <p className="text-gray-600">Receive a detailed report with personalized insights and recommendations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                
            </div>
        </>
    );
}

export default Front;