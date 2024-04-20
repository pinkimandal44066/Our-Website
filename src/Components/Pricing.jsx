import React from 'react';

const Pricing = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="pricing-card bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies.</p>
          <div className="text-2xl font-bold mb-4">$29.99/month</div>
          <button className="btn btn-primary">Select Plan</button>
        </div>
        {/* Plan 2 */}
        <div className="pricing-card bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Standard Plan</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies.</p>
          <div className="text-2xl font-bold mb-4">$49.99/month</div>
          <button className="btn btn-primary">Select Plan</button>
        </div>
        {/* Plan 3 */}
        <div className="pricing-card bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci in dui posuere, id viverra justo ultricies.</p>
          <div className="text-2xl font-bold mb-4">$99.99/month</div>
          <button className="btn btn-primary">Select Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
