import React from "react";
import AllProducts from "@/components/frontend/AllProducts";
import BestProducts from "@/components/frontend/BestProducts";
import HeroSection from "@/components/frontend/HeroSection";
import NavBar from "@/components/frontend/NavBar";
import OffersTab from "@/components/frontend/OffersTab";
import ShopByCategories from "@/components/frontend/ShopByCategories";

const HomePage = () => {
  return (
    <div 

    >
      <OffersTab />
      <NavBar />
      <HeroSection />
      <BestProducts />
      <ShopByCategories />
      <AllProducts />
    </div>
  );
};

export default HomePage;
  