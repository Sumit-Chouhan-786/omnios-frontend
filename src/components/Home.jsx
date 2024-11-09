import React from "react";
import NavBar from "./NavBar";
import Products from "./Products";

function Home() {
  return (
    <div>
      <NavBar />
      <h2 className="sm:text-3xl text-2xl  md:text-4xl lg:text-5xl text-center font-medium lg:py-10 sm:py-8 py-6">Welcome to the Home Page!</h2>
      <Products/>
    </div>
  );
}

export default Home;
