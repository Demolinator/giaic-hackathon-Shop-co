"use client";
import React from "react";
import Slider from "react-slick";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Happy Customers
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-md border-gray-200 w-full h-64 max-w-sm mx-auto"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.805a1 1 0 00.95.69h3.998c.969 0 1.371 1.24.588 1.81l-3.23 2.346a1 1 0 00-.364 1.118l1.233 3.804c.3.921-.755 1.688-1.539 1.118l-3.232-2.346a1 1 0 00-1.176 0l-3.232 2.346c-.783.57-1.838-.197-1.539-1.118l1.234-3.804a1 1 0 00-.364-1.118L2.226 9.232c-.783-.57-.38-1.81.588-1.81h3.998a1 1 0 00.95-.69l1.234-3.805z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg flex items-center gap-2 font-semibold">
                {testimonial.name}{" "}
                <img
                  src="/images/tick.png"
                  alt="tick"
                  className="w-7 object-cover"
                />
              </h3>
              <p className="text-gray-600 italic mb-4">"{testimonial.review}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
