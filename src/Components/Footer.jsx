import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mx-6
      mb-8 text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Company Name</h2>
            <p className='mx-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo nec nulla varius dignissim.</p>
          </div>
          {/* Middle Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            


<ul className="list-none p-0 m-0">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/services">Services</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

          </div>
          {/* Right Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className='mx-6'>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
