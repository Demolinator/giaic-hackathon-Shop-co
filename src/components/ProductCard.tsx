import React from "react";

const ProductCard = ({
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  return (
    <div className="w-full rounded-lg p-4 text-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="h-72 w-full rounded-2xl bg-cover mx-auto mb-4"
      />
      <h3 className="text-lg text-left font-semibold">{name}</h3>
      <div className="flex items-center justify-start gap-1 my-2">
        <div className="flex text-yellow-400">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
        </div>
        <span className="text-gray-500">{rating}/5</span>
      </div>
      <div className="flex gap-2">
        <div className="text-xl text-left font-bold text-gray-800">
          ${price}{" "}
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        {discount && (
          <div className="text-sm text-red-500 bg-red-500 bg-opacity-25 px-2 py-1 mt-1 rounded-full">
            -{discount}%
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
