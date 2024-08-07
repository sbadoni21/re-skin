"use client";
import React, { useState } from "react";
import Headings from "./Headings";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Product 1", img: "/images/HeroImage.jpg" },
  { id: 2, name: "Product 2", img: "/images/HeroImage.jpg" },
  { id: 3, name: "Product 3", img: "/images/HeroImage.jpg" },
  { id: 4, name: "Product 4", img: "/images/HeroImage.jpg" },
  { id: 5, name: "Product 5", img: "/images/HeroImage.jpg" },
  { id: 6, name: "Product 6", img: "/images/HeroImage.jpg" },
  { id: 7, name: "Product 7", img: "/images/HeroImage.jpg" },
  { id: 8, name: "Product 8", img: "/images/HeroImage.jpg" },
];

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; 

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" p-10">
      <Headings headings={"All Products"} />
      <div className="md:mx-20 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {currentProducts.map((product) => (
          <div key={product.id} className="rounded-lg shadow-md">
            <ProductCard location={"AllProducts"}  product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default AllProducts;
