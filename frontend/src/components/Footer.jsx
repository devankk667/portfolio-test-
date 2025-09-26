import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Me</h3>
          <p>A brief bio of the makeup artist.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            {/* Social media links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;