"use client"
import React from "react";
import { Lottie } from 'lottie-react';
import hairsAnimation from "@/public/lottie/hairs.json";
import faceAnimation from "@/public/lottie/face.json";
import lipsAnimation from "@/public/lottie/lips.json";
import nailsAnimation from "@/public/lottie/nails.json";

export const FlipCard = ({ data }) => {
  let animationData;
console.log(data)
  switch (data) {
    case 'hairs':
      animationData = hairsAnimation;
      break;
    case 'face':
      animationData = faceAnimation;
      break;
    case 'lips':
      animationData = lipsAnimation;
      break;
    case 'nails':
      animationData = nailsAnimation;
      break;
    default:
      animationData = null;
  }

  return (
    <div className="card-container">
      <div className="card h-40 md:h-72">
        <div className="card-front bg-background02">
          <div className="p-4">
            <h3 className="text-xl font-bold">Front Side</h3>
            {animationData && (
              <Lottie animationData={hairsAnimation} className="h-24" />
            )}
            <p>This is the front side of the card.</p>
          </div>
        </div>
        <div className="card-back bg-background03">
          <div className="p-4 flex items-center justify-center">
            <h3 className="text-xl font-bold">Show More</h3>
            {animationData && (
              <Lottie animationData={hairsAnimation} className="h-24" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
