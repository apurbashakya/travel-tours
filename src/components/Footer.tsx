import React from 'react';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between">
      
     
      <div className="mb-8 md:mb-0">
        <img src="/path-to-your-logo.svg" alt="Logo" className="h-10" />
      </div>

      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <a href="#" className="text-lg hover:text-gray-400">About Us</a>
        <a href="#" className="text-lg hover:text-gray-400">Careers</a>
        <a href="#" className="text-lg hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="text-lg hover:text-gray-400">Terms of Service</a>
      </div>

      <div className="flex space-x-6 mt-8 md:mt-0">
        <a href="#" className="text-lg hover:text-gray-400">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-lg hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-lg hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-lg hover:text-gray-400">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>


      <div className="mt-8 md:mt-0">
        <p className="text-lg mb-4">Subscribe to our newsletter</p>
        <form>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      
    </div>
  </div>


  <div className="bg-gray-700 py-4">
    <div className="container mx-auto px-6 text-center text-sm">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
