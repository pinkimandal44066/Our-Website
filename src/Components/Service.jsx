import React from 'react';

const Service= () => {
  return (
    <div className="container mt-10 mx-auto">
      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white py-20 mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mx-4 ">We offer high-quality services to meet your needs</p>
          <a href="#services" className="btn btn-primary mt-4">View Services</a>
        </div>
      </section>

      {/* About Section */}

<div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://via.placeholder.com/500" alt="About Us" className=" px-6 h-auto w-full rounded-lg shadow-md mb-4" />
        </div>
        <div className='text-center'>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4 mx-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies. Quisque vehicula convallis velit, et aliquet tortor.</p>
          <p className='mx-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies. Quisque vehicula convallis velit, et aliquet tortor.</p>
        </div>
      </div>
    </div>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md mx-4">
              <img src="https://via.placeholder.com/300" alt="Service 1" className="h-32 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Service Card 2 */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md mx-4">
              <img src="https://via.placeholder.com/300" alt="Service 2" className="h-32 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Service Card 3 */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md mx-4">
              <img src="https://via.placeholder.com/300" alt="Service 3" className="h-32 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-10 sm:py-16 mx-4">
  <div className="container mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Testimonials</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {/* Testimonial 1 */}
      <div className="testimonial bg-white rounded-lg overflow-hidden shadow-md p-4 sm:p-6">
        <p className="text-base sm:text-lg mb-3 sm:mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies. Quisque vehicula convallis velit, et aliquet tortor."</p>
        <h4 className="text-lg sm:text-xl font-semibold">John Doe</h4>
        <p className="text-sm sm:text-base text-gray-500">CEO, Company Inc.</p>
      </div>
      {/* Testimonial 2 */}
      <div className="testimonial bg-white rounded-lg overflow-hidden shadow-md p-4 sm:p-6">
        <p className="text-base sm:text-lg mb-3 sm:mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies. Quisque vehicula convallis velit, et aliquet tortor."</p>
        <h4 className="text-lg sm:text-xl font-semibold">Jane Doe</h4>
        <p className="text-sm sm:text-base text-gray-500">CTO, Another Company</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Service;
