import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import '../../App.css';
import { motion } from 'framer-motion';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert(`Hello ${username}! You have successfully created an account!`);
      navigate('/home');
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '27vh',
    padding: '24px',
    borderRadius: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    marginBottom: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px 24px',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#E63946',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    outline: 'none',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ff4500',
  };

  const registerButtonHoverStyle = {
    ...buttonStyle,
    ...buttonHoverStyle,
    marginBottom: '-1px',
  };

  const buttonVariants = {
    hover: {
      backgroundColor: '#ff4500',
      scale: 1.05,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={containerStyle}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join us
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Username:"
            value={username}
            style={inputStyle}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </motion.div>
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <input
            type="email"
            placeholder="Email address:"
            value={email}
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </motion.div>
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <input
            type="password"
            placeholder="Password:"
            value={password}
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </motion.div>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <span className='text-black'> 
            I agree to all statements in{' '}
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              terms of service
            </a>
            .
          </span>
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            className="w-100 bg-red-600 text-white py-2 rounded-lg mt-2" // Reduced margin here
            type="submit"
            whileHover="hover"
            variants={buttonVariants}
            style={registerButtonHoverStyle}
          >
            Register
          </motion.button>
        </motion.div>
      </form>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Link to="/" className="flex justify-center">
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            style={registerButtonHoverStyle}
            className="w-100 bg-red-600 text-white py-2 rounded-lg mt-2" // Reduced margin here
          >
            Back to Homepage
          </motion.button>
        </Link>
      </motion.p>
    </motion.div>
  );
}
