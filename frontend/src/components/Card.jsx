import React from "react";

export default function Card({ item }) {
  return (
    <>
      <div className="mt-4 my-6 p-5">
        <div className="card bg-base-200 w-80 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-1">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex space-x-2">
              <h2 className="card-title">{item.name}</h2>
              <button className="bg-pink-400 rounded-full px-3 text-white py-0">
                {item.category}
              </button>
            </div>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <button className="border-[1px] rounded-full px-2 cursor-pointer hover:bg-pink-400 duration-300">
                ${item.price}
              </button>
              <button className="border-[1px] rounded-full px-2 py-1 cursor-pointer hover:bg-pink-400 duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
