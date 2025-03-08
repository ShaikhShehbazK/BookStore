import React from "react";

export default function Card({ item }) {
  return (
    <>
      <div className="p-4">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 bg-white dark:bg-slate-800">
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="absolute top-4 right-4">
              <span className="bg-pink-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
              {item.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              {item.title}
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
            <span className="text-xl font-bold text-pink-500">
              ${item.price}
            </span>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:-translate-y-0.5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
