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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 rounded-md px-2 py-1 mt-2"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 rounded-md px-2 py-1 mt-2"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="cursor-pointer bg-pink-500 rounded-md text-white px-3 py-1">
                Login
              </button>
              <p className="text-xl">
                Not registered yet?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer text-blue-500 underline"
                >
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
