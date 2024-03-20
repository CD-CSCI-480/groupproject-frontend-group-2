// Logo.js
import React from 'react';
import './Logo.css';
import logoImage from '../path-to-your-logo-image.png'; // Replace with the path to your logo image

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="Quantum Checkers" />
    </div>
  );
};

export default Logo;