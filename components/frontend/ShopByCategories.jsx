"use client"
import React from "react";
import Headings from "./Headings";
import "@/styles/frontend/Card.css";
import { FlipCard } from "./FlipCard";
import hairsAnimation from "@/public/lottie/hairs.json";
import faceAnimation from "@/public/lottie/face.json";
import lipsAnimation from "@/public/lottie/lips.json";
import nailsAnimation from "@/public/lottie/nails.json";
import Lottie from "lottie-react";
const ShopByCategories = () => {
  return (
    <div className=" py-10">
      <Headings headings={"Shop By Category"} />
      <div className="mx-10 md:mx-20 grid grid-cols-2 grid-rows-2 gap-6">
      <div className="card-container">
      <div className="card h-40 md:h-72">
        <div className="card-front bg-background02">
          <div className="p-4">
            <h3 className="text-xl font-bold">Front Side</h3>
            { (
              <Lottie animationData={hairsAnimation} className="h-24" />
            )}
            <p>This is the front side of the card.</p>
          </div>
        </div>
        <div className="card-back bg-background03">
          <div className="p-4 flex items-center justify-center">
            <h3 className="text-xl font-bold">Show More</h3>
            { (
              <Lottie animationData={hairsAnimation} className="h-24" />
            )}
          </div>
        </div>
      </div>
    </div>  
    <div className="card-container">
      <div className="card h-40 md:h-72">
        <div className="card-front bg-background02">
          <div className="p-4">
            <h3 className="text-xl font-bold">Front Side</h3>
            { (
              <Lottie animationData={nailsAnimation} className="h-24" />
            )}
            <p>This is the front side of the card.</p>
          </div>
        </div>
        <div className="card-back bg-background03">
          <div className="p-4 flex items-center justify-center">
            <h3 className="text-xl font-bold">Show More</h3>
            { (
              <Lottie animationData={nailsAnimation} className="h-24" />
            )}
          </div>
        </div>
      </div>
    </div>     <div className="card-container">
      <div className="card h-40 md:h-72">
        <div className="card-front bg-background02">
          <div className="p-4">
            <h3 className="text-xl font-bold">Front Side</h3>
            { (
              <Lottie animationData={faceAnimation} className="h-24" />
            )}
            <p>This is the front side of the card.</p>
          </div>
        </div>
        <div className="card-back bg-background03">
          <div className="p-4 flex items-center justify-center">
            <h3 className="text-xl font-bold">Show More</h3>
            { (
              <Lottie animationData={faceAnimation} className="h-24" />
            )}
          </div>
        </div>
      </div>
    </div>     <div className="card-container">
      <div className="card h-40 md:h-72">
        <div className="card-front bg-background02">
          <div className="p-4">
            <h3 className="text-xl font-bold">Front Side</h3>
            { (
              <Lottie animationData={lipsAnimation} className="h-24" />
            )}
            <p>This is the front side of the card.</p>
          </div>
        </div>
        <div className="card-back bg-background03">
          <div className="p-4 flex items-center justify-center">
            <h3 className="text-xl font-bold">Show More</h3>
            { (
              <Lottie animationData={lipsAnimation} className="h-24" />
            )}
          </div>
        </div>
      </div>
    </div>  
      </div>
    </div>
  );
};

export default ShopByCategories;
