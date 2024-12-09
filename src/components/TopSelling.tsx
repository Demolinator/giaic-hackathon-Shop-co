"use client"
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSelling = () => {
  const products = [
    {
      image: '/images/shirt4.png',
      name: 'T-shirt with Tape Details',
      price: 120,
      rating: 4.5,
    },
    {
      image: '/images/shirt5.png',
      name: 'Skinny Fit Jeans',
      price: 240,
      originalPrice: 260,
      discount: 20,
      rating: 3.5,
    },
    {
      image: '/images/shorts1.png',
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
    },
    {
      image: '/images/pant2.png',
      name: 'Sleeve Striped T-shirt',
      price: 130,
      originalPrice: 160,
      discount: 30,
      rating: 4.5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-7 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">TOP SELLING</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2 py-4">
              <ProductCard {...product} />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <button className="px-16 py-3 mt-2 w-full lg:w-fit rounded-full border bg-white text-black font-semibold">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
