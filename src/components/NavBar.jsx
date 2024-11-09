import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    alert("Logout successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="flex justify-between container mx-auto">
        <a className="font-medium text-xl" href="/">Logo</a>
        <button
          className="bg-red-600 px-4 py-1 rounded-md transition-all duration-300 hover:bg-green-900"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
