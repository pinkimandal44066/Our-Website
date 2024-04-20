import React from 'react';

const About = () => {
  return (
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
  );
}

export default About;

