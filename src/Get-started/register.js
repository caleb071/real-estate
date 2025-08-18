import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';


const Register = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setIsLogin(prev => !prev);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const isPasswordValid = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isLogin && !isPasswordValid(formData.password)) {
    toast.error('Password must be at least 8 characters long, include a capital letter and a number.');
    return;
  }

  try {
    const url = isLogin ? 'http://localhost:8080/login' : 'http://localhost:8080/register';
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (data.status === 200) {
      toast.success(data.message || (isLogin ? 'Login successful' : 'Signup successful'));
      navigate('/');
    } else {
      toast.error(data.message || 'An error occurred');
    }
  } catch (err) {
    console.error('Error:', err);
    toast.error('Something went wrong!');
  }
};

 

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google user:', decoded);

      const res = await fetch('http://localhost:8080/google-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(decoded)
      });

      const data = await res.json();

      if (data.status === 200) {
        toast.success(data.message || 'Google login successful');
        navigate('/');
      } else {
        toast.error(data.message || 'Google login failed');
      }
    } catch (error) {
      console.error('Google login failed:', error);
      toast.error('Google login failed');
    }
  };

  return (
    <>
      <div className="w-full bg-white shadow py-4 px-6">
        <Link to="/" className="text-gray-500 hover:text-blue-600 font-medium">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
          <div className="w-16 h-2 bg-yellow-400 mx-auto mb-6 rounded"></div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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

          <div className="my-4 text-center text-gray-500">or</div>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => toast.error('Google login failed')}
            width="100%"
          />

          <p className="mt-6 text-sm text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button onClick={toggleForm} className="text-blue-600 hover:underline font-medium">
              {isLogin ? 'Signup here' : 'Login here'}
            </button>
          </p>
        </div>
      </div>

       {/* Footer */}
              <footer className="w-full mt-20 py-6 border-t bg-white bg-opacity-90">
                <h3 className="text-center font-semibold mb-4">Follow us on:</h3>
                <div className="flex justify-center space-x-4 text-xl mb-4">
                  <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-700" />
                  <FontAwesomeIcon icon={faInstagram} className="hover:text-blue-700" />
                  <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-700" />
                  <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-700" />
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                 <Link to="/terms" className="text-gray-600 hover:underline">Terms & Conditions</Link>
                 <Link to="/FAQ" className="text-gray-600 hover:underline">FAQ</Link>
                 <Link to="/Privacy" className="text-gray-600 hover:underline">Privacy</Link>
                </div>
      
                <div className="flex justify-center mt-7 mb-7">
                  <p className="text-gray-500 text-center">Subscribe to our newsletter: The latest news, articles, and resources, sent to your inbox weekly.</p>
       </div>
                 <form className="flex items-center border rounded-md overflow-hidden max-w-md w-full justify-center ml-10">
          <input
            type="text"
            placeholder="Email..."
            className="px-4 py-2 w-full outline-none align-middle"
          />
          <button
            type="submit" className="bg-yellow-400 text-white px-4 py-2 hover:bg-blue-700">
            submit
          </button>
        </form>
         
                <p className="text-center text-sm text-gray-500">© 2025 All Rights Reserved</p>
              </footer>
            
    </>
  );
};

export default Register;
