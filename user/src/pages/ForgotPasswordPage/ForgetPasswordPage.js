import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../App.css';

export default function ForgetPasswordPage() {
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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
  };

  const buttonVariants = {
    hover: {
      backgroundColor: '#ff4500',
      scale: 1.05,
    },
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const headingStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const descriptionStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ff4500',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '-1px',
  };

  const linkButtonStyle = {
    ...buttonStyle,
    textDecoration: 'none',
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={containerStyle}
    >
      <motion.div
        className="text-center m-auto"
        style={formContainerStyle}
      >
        <motion.h2
          style={headingStyle}
          variants={headingVariants}
        >
          Reset your password:
        </motion.h2>
        <motion.h5
          style={descriptionStyle}
          variants={descriptionVariants}
        >
          Enter your email address, and we will send you a new password.
        </motion.h5>
        <form action="/login">
          <motion.p
            variants={inputVariants}
          >
            <input
              type="email"
              name="email"
              placeholder="Email address:"
              style={inputStyle}
              required
            />
          </motion.p>
          <motion.p
            variants={inputVariants}
          >
            <motion.button
              id="sub_btn"
              type="submit"
              style={buttonStyle}
              whileHover="hover"
              variants={buttonVariants}
            >
              Send password reset email
            </motion.button>
          </motion.p>
        </form>
        <footer>
          <motion.p
            variants={inputVariants}
          >
            <Link to="/register">
              <motion.button
                style={linkButtonStyle}
                whileHover="hover"
                variants={buttonVariants}
              >
                Create an account
              </motion.button>
            </Link>
          </motion.p>
          <motion.p
            variants={inputVariants}
          >
            <Link to="/">
              <motion.button
                style={linkButtonStyle}
                whileHover="hover"
                variants={buttonVariants}
              >
                Back to Homepage
              </motion.button>
            </Link>
          </motion.p>
        </footer>
      </motion.div>
    </motion.div>
  );
}
