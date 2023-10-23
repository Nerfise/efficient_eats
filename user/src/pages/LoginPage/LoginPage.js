import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import '../../App.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(`You have successfully logged in!`);
      navigate('/home');
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: {
      backgroundColor: '#ff4500',
      color: '#fff',
      scale: 1.05,
    },
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '25vh',
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
    padding: '12px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    marginBottom: '16px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px 24px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#E63946',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ff4500',
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
        variants={inputVariants}
      >
        Sign in to your account
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          placeholder="Email address:"
          value={email}
          style={{ ...inputStyle, ...inputVariants }}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <motion.input
          type="password"
          placeholder="Password:"
          value={password}
          style={{ ...inputStyle, ...inputVariants }}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/forget-password">Forgot password?</Link>
        <motion.button
          type="submit"
          className="w-100 bg-red-600 text-white py-2 rounded-lg mt-4"
          whileHover="hover"
          variants={buttonVariants}
          style={{ ...buttonStyle, ...buttonHoverStyle }}
        >
          Login
        </motion.button>
      </form>
      <footer className="mt-2 flex flex-col items-center justify-center space-y-2">
        <motion.button
          whileHover="hover"
          variants={buttonVariants}
          onClick={() => navigate('/register')}
          className="w-100 bg-red-600 text-white py-2 rounded-lg"
          style={{ ...buttonStyle, ...buttonHoverStyle, color: '#E63946' }}
        >
          Create an account
        </motion.button>
        <motion.button
          whileHover="hover"
          variants={buttonVariants}
          onClick={() => navigate('/')}
          className="w-100 bg-red-600 text-white py-2 rounded-lg"
          style={{ ...buttonStyle, ...buttonHoverStyle, color: '#E63946' }}
        >
          Back to Homepage
        </motion.button>
      </footer>
    </motion.div>

  );
}
