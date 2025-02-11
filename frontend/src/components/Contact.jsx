import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <Navbar />
        <div className="flex h-screen items-center justify-center">
          <div className=" w-[500px] border rounded-md shadow-md p-4 bg-linear-">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex justify-end">
                  <Link to="/" className="btn btn-sm btn-circle btn-ghost">
                    ✕
                  </Link>
                </div>

                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="name"
                    placeholder="Enter your fullname"
                    className="w-80 px-3 py-1 border rounded-md outline-none mt-2 "
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Email */}
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none mt-2"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Password */}
                <div className="mt-4 space-y-2">
                  <span>Message</span>
                  <br />
                  <textarea
                    rows={4}
                    type="text"
                    placeholder="type your message"
                    className="w-80 px-3 py-1 border rounded-md outline-none mt-2"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Button */}
                <div className="flex mt-4">
                  <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
