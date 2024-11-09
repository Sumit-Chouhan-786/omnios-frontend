import React from "react";
import { productData } from "./common/helper";

const Products = () => {
  
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container lg:max-w-[1200px] mx-auto p-4">
      <h2 className="text-2xl font-medium mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center min-[460px]:grid-cols-2">
        {productData.map((product) => (
          <div
            key={product.id}
            className="border hover:scale-105 transition-all duration-300 p-4 rounded shadow-md flex flex-col items-center max-w-[430px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-400 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
