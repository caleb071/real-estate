import React, { useState } from 'react';

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
        <div className="w-16 h-2 bg-yellow-400 mx-auto mb-6 rounded"></div>

        <form className="space-y-4">
          {/* Show Username only in Signup */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                required
              />
            </div>
          )}

          {/* Always show Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          </div>

          {/* Always show Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-blue-500 text-black font-semibold py-2 px-4 rounded transition duration-300"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={toggleForm}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? 'Signup here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
