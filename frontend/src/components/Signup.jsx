import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const signupData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3000/signup", signupData)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96 border-slate-100 p-5 rounded-lg shadow-md dark:border-1">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sign up
              </h2>
              <Link to="/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                method="dialog"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                      {...register("fullName", { required: true })}
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                  >
                    Sign up
                  </button>
                </div>

                <div className="text-sm text-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Already have an account?
                  </span>{" "}
                  <button
                    type="button"
                    className="font-semibold text-pink-600 hover:text-pink-500"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
