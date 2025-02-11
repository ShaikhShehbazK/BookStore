import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [authData, setAuthData] = useAuth();

  const handleLogout = () => {
    setAuthData({
      ...authData,
      user: null,
    });
    localStorage.removeItem("Users");
    toast.success("Logout Successfully!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="cursor-pointer text-white bg-red-500 px-3 py-1 rounded-md "
      >
        Logout
      </button>
    </div>
  );
}
