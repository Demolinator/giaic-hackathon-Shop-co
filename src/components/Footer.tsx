"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">SHOP.CO</h3>
            <p className="text-sm text-gray-600">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <img
                  src="/images/twitter.png"
                  alt="Twitter"
                  className="w-10 max-h-10"
                />
              </a>
              <a
                href="#"
                className="bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-10 max-h-10"
                />
              </a>
              <a
                href="#"
                className="bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-10 max-h-10"
                />
              </a>
              <a
                href="#"
                className="bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <img src="/images/github.png" alt="GitHub" className="w-10 max-h-10" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {[
            { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
            {
              title: "HELP",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
            {
              title: "FAQ",
              links: ["Account", "Manage Deliveries", "Orders", "Payments"],
            },
            {
              title: "RESOURCES",
              links: [
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist",
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center border-t pt-6">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center space-x-4">
            <img src="/images/visa.png" alt="Visa" className="h-10" />
            <img src="/images/master.png" alt="MasterCard" className="h-10" />
            <img src="/images/paypal.png" alt="PayPal" className="h-10" />
            <img src="/images/applepay.png" alt="Apple Pay" className="h-10" />
            <img src="/images/googlepay.png" alt="Google Pay" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
