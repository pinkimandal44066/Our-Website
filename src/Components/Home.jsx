import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-10 mx-auto ">
      {/* Hero Section */}
      <section className="hero bg-gray-800 text-white py-6 sm:py-20 mx-4">
  <div className="text-center">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Welcome to Our Website</h1>
    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-8">We offer high-quality services to meet your needs</p>
    <Link to="/services" className="btn btn-primary text-xs sm:text-sm">View Services</Link>
  </div>
</section>


      {/* Services Section */}
      <section className="services py-10 sm:py-16">
        <div className="container mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Service Card 1 */}
            <div className="service-card bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/300" alt="Service 1" className="h-32 sm:h-48 w-full object-cover mb-4" />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">Service 1</h3>
              <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Service Card 2 */}
            <div className="service-card bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/300" alt="Service 2" className="h-32 sm:h-48 w-full object-cover mb-4" />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">Service 2</h3>
              <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Service Card 3 */}
            <div className="service-card bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/300" alt="Service 3" className="h-32 sm:h-48 w-full object-cover mb-4" />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">Service 3</h3>
              <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-10 sm:py-16">
        <div className="container mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-10 text-center">About Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <img src="https://via.placeholder.com/500" alt="About Us" className="h-auto w-full px-10 rounded-lg shadow-md mb-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-base mb-4 mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies. Quisque vehicula convallis velit, et aliquet tortor.</p>
              <p className="text-xs sm:text-sm md:text-base mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies. Quisque vehicula convallis velit, et aliquet tortor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact mb-10 py-16 bg-gray-800 text-white mx-6">
        <div className="container mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center ">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  
          text-xl sm:text-xl md:text-xl lg:text-xl font-bold mb-8 text-center ">
            <div>
              <h3 className="text-xl font-semibold mb-2 ">Address</h3>
              <p>123 Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

