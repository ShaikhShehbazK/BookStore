import React from "react";
import banner from "/Banner.png";
export default function Banner() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row my-10
      "
      >
        {/* Left section*/}
        <div className="w-full md:w-1/2 mt-10 md:mt-30">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello,Welcome here to learn something{" "}
              <span className="text-pink-400">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolores sit vel sed dignissimos ratione aut ea odit, at culpa
              cupiditate iure corporis, tenetur quam obcaecati. Iste cum
              possimus nulla?
            </p>
            {/* <input type="text" placeholder="Email" /> */}
            <label className="input validator w-full  dark:bg-slate-900 dark:text-white border-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Email" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary">Get Started</button>
        </div>
        {/* Right section*/}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-15">
          <img className="h-100 w-100" src={banner} alt="" />
        </div>
      </div>
    </>
  );
}
