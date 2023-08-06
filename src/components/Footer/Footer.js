import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} iamnsharma All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
