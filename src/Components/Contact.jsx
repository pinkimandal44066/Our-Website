import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Send us a message</h2>
            <form>
              <div className="mb-4 mx-4">
                <label htmlFor="name" className="block mb-1 ">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div className="mb-4 mx-4">
                <label htmlFor="email" className="block mb-1">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div className="mb-4 mx-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-primary ">Send Message</button></div>
            </form>
          </div>
          {/* Contact Information */}
          <div className='text-center'>
  <h2 className="text-xl font-semibold mb-4 ">Contact Information</h2>
  <div className="flex flex-col items-center mb-4">
    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10 5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10zm0 18v-2m0-4v-4m-5 8h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
    <div>
      <p className="text-lg font-semibold">Address</p>
      <p>123 Main Street, City, Country</p>
    </div>
  </div>
  <div className="flex flex-col items-center mb-4">
    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    <div>
      <p className="text-lg font-semibold">Phone</p>
      <p>(123) 456-7890</p>
    </div>
  </div>
  <div className="flex flex-col items-center mb-4">
    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.548 3.452a.25.25 0 010 .354l-2.122 2.122a.25.25 0 01-.354 0l-1.768-1.768a.25.25 0 00-.354 0L8 12.226l4.646 4.646a.25.25 0 000 .354l-2.121 2.121a.25.25 0 01-.354 0L5.465 13.1a.25.25 0 010-.354L9.111 8.1a.25.25 0 01.354 0l6.5 6.5a.25.25 0 00.354 0l2.121-2.121a.25.25 0 010-.354L10.89 5.476a.25.25 0 00-.354 0L6.646 9.122a.25.25 0 01-.354 0L3.171 6.65a.25.25 0 010-.354l9.9-9.9a.25.25 0 01.354 0l3.375 3.375a.25.25 0 010 .354L10.89 14.476a.25.25 0 01-.354 0l-6.5-6.5a.25.25 0 00-.354 0L2.122 8.05a.25.25 0 010 .354l4.95 4.95a.25.25 0 010 .354l-2.122 2.122a.25.25 0 000 .354l9.9 9.9a.25.25 0 00.354 0l9.9-9.9a.25.25 0 000-.354L20.548 3.452z" />
    </svg>
    <div>
      <p className="text-lg font-semibold">Email</p>
      <p>info@example.com</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Contact;

