import React from 'react';

function Login() {
  return (
    <>
      <div className="login w-[100vw] h-[86vh] relative overflow-hidden">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src="https://i.pinimg.com/736x/a0/b4/c9/a0b4c9d2e2641771bbf4b1c296fee163.jpg"
          alt="Background"
        />

        {/* Login Form */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;