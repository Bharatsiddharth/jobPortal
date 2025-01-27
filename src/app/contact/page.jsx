import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
  <>
  <Navbar/>
      <div className="container mx-auto p-6">
    <section className="bg-gray-100 p-8 rounded-2xl shadow-md transition-transform transform ">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Contact Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Have questions or need assistance? We're here to help! Reach out to
        us through the following channels:
      </p>
      <ul className="mt-6 space-y-4">
        <li className="text-gray-700 text-lg">
          <strong>Email:</strong> support@example.com
        </li>
        <li className="text-gray-700 text-lg">
          <strong>Phone:</strong> +123-456-7890
        </li>
        <li className="text-gray-700 text-lg">
          <strong>Address:</strong> 123 Job Street, Talent City, USA
        </li>
      </ul>

      <form className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  </div>
  </>
  )
}

export default page