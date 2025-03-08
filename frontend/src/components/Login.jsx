import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3000/login", loginData)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("login Successfully");
          setTimeout(() => {
            window.location.reload();
            document.getElementById("my_modal_3").close();
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  return (
    <div className="dark:text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Login
              </h3>
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
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
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
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
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Login
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Not registered yet?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-pink-600 hover:text-pink-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
