import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Air Pollution Monitoring System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
