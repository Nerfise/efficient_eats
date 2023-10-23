import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../App.css';
import restaurantImage from '../../assets/logo.jpg';
import backgroundImage from '../../assets/ksi.png';

export default function LandingPage() {
  const containerStyle = {
    width: '100%',
    maxWidth: '800px', 
    margin: '0 auto',
    padding: '24px',
    borderRadius: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '800px', 
    height: 'auto', 
    borderRadius: '20px', 
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
    marginBottom: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ff4500',
  };

  const buttonVariants = {
    hover: {
      backgroundColor: '#ff4500',
      color: '#fff',
      scale: 1.05,
    },
  };

  const headerTextStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  };

  const boldTextStyles = {
    fontWeight: 'bold',
  };

  const spacingStyle = {
    marginBottom: '20px',
  };

  return (
    <motion.div
      style={{
        display:'flex',
        justifyContent:'center', 
        alignItems:'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100vw 100vh',
        minHeight: '100vh', 
        padding: '10px'
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        },
      }}
    >
      <header style={containerStyle} className='flex flex-col items-center justify-center bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 xl:flex-row'>
        <div>
          <img
            src={restaurantImage} 
            alt="Restaurant Image"
            style={imageStyle}
          />
        </div>
        <div className="p-4 rounded-lg text-black">
          <h1 style={headerTextStyles}>
            Welcome to <span style={boldTextStyles}>Efficient Eats</span>
          </h1>
          <p className="main-para text-center" style={spacingStyle}>
            <span style={boldTextStyles}>Book your table efficiently!</span>
          </p>
          <Link to="/login">
            <motion.button
              className="hover:bg-red-600"
              style={{ ...buttonStyle, ...buttonHoverStyle }}
              whileHover="hover"
              variants={buttonVariants}
            >
              Log in
            </motion.button>
          </Link>
          <Link to="/register">
            <motion.button
              className="hover:bg-blue-600"
              style={{ ...buttonStyle, ...buttonHoverStyle }}
              whileHover="hover"
              variants={buttonVariants}
            >
              Register
            </motion.button>
          </Link>
        </div>
      </header>
    </motion.div>
  );
}
