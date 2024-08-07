import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const ProductCard = ({location}) => {
  return (
    <div>
      {" "}
      <div className={`min-h-96 max-h-fit bg-primary01 ${location == "AllProducts" ? "w-full": "w-72"} rounded-xl`}>
        <img
          src="/images/HeroImage.jpg"
          className="h-1/2 rounded-t-xl  object-contain object-center "
        />
        <div className="p-4 flex justify-between">
          <div>Items Name</div>
          <div>Rating</div>
        </div>
        <div className="px-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          natus non atque?
        </div>
        <div className="px-4 py-2 flex justify-between items-center">
          <button className="bg-secondary02 p-2 rounded-xl">Buy Now</button>
          <div className="flex gap-2">
            <button className="bg-secondary02 p-2 rounded-xl">
              <FaHeart className="text-[24px]" />
            </button>
            <button className="bg-secondary02 p-2 rounded-xl">
              <HiShoppingCart className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
