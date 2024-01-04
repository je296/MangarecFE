import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import { Articles } from "./container/Articles";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero></Hero>
      <div className="text-center mt-8 pt-4 bg-white">
        <span className="text-black text-xl lg:text-4xl">
          Last Year Top Selling
        </span>
        <Articles />
      </div>
    </MainLayout>
  );
};

export default HomePage;
