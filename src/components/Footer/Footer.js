// Footer.js

import React from 'react';
import '../../styles//Footer.css'; // Import your footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} LOKESH CHOWDARY JASTI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
