"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order.{" "}
        <span className="underline cursor-pointer">Sign Up Now</span>
      </div>

      {/* Header */}
      <header className="container mx-auto flex justify-between space-x-2 lg:flex-wrap lg:justify-between items-center py-6 px-4 lg:px-24">
        <div className="flex items-center gap-2 space-x-2">
          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="flex lg:hidden text-4xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/images/hamburger.png"
              alt="Menu Icon"
              className="w-6"
              width={24}
              height={24}
            />
          </button>

          {/* Logo */}
          <h1 className="text-3xl lg:text-4xl font-extrabold">SHOP.CO</h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a
              href="#"
              className="text-gray-700 text-lg gap-1 flex justify-center items-center hover:text-black"
            >
              Shop <IoIosArrowDown />
            </a>
            <a href="#" className="text-gray-700 text-lg hover:text-black">
              On Sale
            </a>
            <a href="#" className="text-gray-700 text-lg hover:text-black">
              New Arrivals
            </a>
            <a href="#" className="text-gray-700 text-lg hover:text-black">
              Brands
            </a>
          </nav>
        </div>

        <div>
          {/* Search and Icons */}
          <div className="flex flex-row lg:flex-row items-center space-x-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
            {/* Mobile Search Icon */}
            <div className="flex items-center relative">
              <button
                className="lg:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Image
                  src="/images/searchsm.png"
                  alt="Search Icon"
                  className="w-6"
                  width={32}
                  height={32}
                />
              </button>

              {/* Mobile Search Bar */}
              {isSearchOpen && (
                <div className="absolute top-10 left-0 w-full px-4">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="border border-gray-300 rounded-full bg-[#f7f7f7] pl-4 pr-4 py-2 w-full text-sm focus:outline-none shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:block lg:relative lg:w-[650px] lg:h-[50px]">
              <input
                type="text"
                placeholder="Search for products..."
                className="border border-gray-300 rounded-full bg-[#f7f7f7] pl-14 lg:pl-16 pr-4 py-2 lg:py-4 w-full h-full text-sm lg:text-lg focus:outline-none"
              />
              <span className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer">
                <Image
                  src="/images/search.png"
                  alt="Search Icon"
                  className="w-4 lg:w-6"
                  width={24}
                  height={24}
                />
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <span className="cursor-pointer">
                <Image
                  src="/images/cart.png"
                  alt="Cart Icon"
                  className="w-6 lg:w-8"
                  width={32}
                  height={32}
                />
              </span>
              <span className="cursor-pointer">
                <Image
                  src="/images/profile.png"
                  alt="Profile Icon"
                  className="w-6 lg:w-8"
                  width={32}
                  height={32}
                />
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu (Visible when Menu is Open) */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:hidden text-center bg-white mt-4 py-4 space-y-2 border-t`}
      >
        <a
          href="#"
          className="text-gray-700 flex justify-center items-center text-sm px-4 py-2 hover:text-black"
        >
          Shop <IoIosArrowDown />
        </a>
        <a
          href="#"
          className="text-gray-700 text-sm px-4 py-2 block hover:text-black"
        >
          On Sale
        </a>
        <a
          href="#"
          className="text-gray-700 text-sm px-4 py-2 block hover:text-black"
        >
          New Arrivals
        </a>
        <a
          href="#"
          className="text-gray-700 text-sm px-4 py-2 block hover:text-black"
        >
          Brands
        </a>
      </nav>

      {/* Hero Section */}
      <div
        className="bg-[#f2f0f1] bg-[url('/images/background-2.png')] sm:bg-[url('/images/background-2.png')] md:bg-[url('/images/background-2.png')] lg:bg-[url('/images/Main.png')] bg-contain sm:bg-contain sm:bg-bottom lg:bg-cover"
        style={{
          backgroundPosition: "bottom", // Ensure the image is aligned to the bottom on mobile
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          height: "100vh", // Ensure the hero section takes up the full viewport height
        }}
      >
        {/* Hero Content */}
        <div className="container h-full mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-24">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl gap-y-8 pt-6 lg:pt-0 lg:text-7xl font-extrabold leading-tight">
              FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
            </h2>
            <p className="text-gray-600 text-sm lg:text-base mt-4 lg:pr-24">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="mt-6 bg-black w-full lg:w-fit text-white py-2 lg:py-3 px-8 lg:px-16 rounded-full hover:bg-gray-800">
              Shop Now
            </button>

            {/* Statistics (Visible only on Mobile Screens) */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:hidden md:flex-nowrap">
              <div className="w-1/3 md:w-auto">
                <h3 className="text-lg font-bold">200+</h3>
                <p className="text-xs text-gray-600">International Brands</p>
              </div>
              <div className="w-1/3 md:w-auto">
                <h3 className="text-lg font-bold">2,000+</h3>
                <p className="text-xs text-gray-600">High-Quality Products</p>
              </div>
              <div className="w-1/2 md:w-auto flex flex-col items-center">
                <h3 className="text-lg font-bold">30,000+</h3>
                <p className="text-xs text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default HeaderSection;
