import React from 'react';
import './styles/FooterStyle.css';
import logo from '../components/assets/nodeLogo.png';
import logo2 from '../components/assets/expresslogo.png'; 
const Footer = () => {
    return (
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Imagen 1"  className="logo"/>
          <img src={logo2} alt="Imagen 2" className="logo2"/>
          <img src={logo} alt="Imagen 3" className="logo"/>
        </div>
      </div>
    );
  };
  
export default Footer;
