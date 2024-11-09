import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://omnios-backend-1.onrender.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.message === "User registered successfully") {
        navigate("/login");
        alert("User created successfully");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center flex-col bg-blue-950 h-screen">
      <h2 className="text-white text-5xl pb-4 lg:pb-8">Sign Up</h2>
      <form
        className="flex flex-col gap-3 md:w-5/12 sm:w-6/12 lg:w-3/12"
        onSubmit={handleSubmit}
      >
        <input
          className="py-1 px-2 rounded-md outline-none font-medium"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          className="py-1 px-2 rounded-md outline-none font-medium"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="py-1 px-2 rounded-md outline-none font-medium"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          className="bg-green-600 transition-all duration-300 hover:bg-red-900 text-white py-1 rounded-md"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-white mt-4">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-green-400 pl-1 hover:text-green-600 transition-all duration-200"
        >
          Log in here
        </a>
      </p>
    </div>
  );
}

export default Signup;
