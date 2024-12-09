"use client";
import React from "react";

const NewsletterSubscription = () => {
  return (
    <section className="bg-gray-100 relative z-10">
      <div className="bg-black text-white rounded-lg py-8 px-6 lg:px-16 max-w-screen-lg mx-auto -mt-12 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Text Section */}
        <h2 className="text-xl md:text-4xl font-bold text-center md:text-left mb-6 md:mb-0">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>

        {/* Form Section */}
        <form className="flex flex-col sm:flex-row sm:items-center w-full max-w-md mx-auto md:mx-0">
          {/* Email Input */}
          <div className="relative flex-1">
          </div>
          <div className="flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-gray-300 px-12 py-3 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 sm:mt-0 px-6 py-3 w-full bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
