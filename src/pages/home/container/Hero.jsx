import React from "react";

const Hero = () => {
  return (
    <section className="container px-5 py-5 mx-auto flex flex-col lg:flex-row h-full">
      <div className="mt-10 w-full text-center">
        <h1 className="font-roboto text-3xl font-bold text-white md:text-5xl">
          Best Recommendation
        </h1>
        <p className="text-white my-4 text-md md:text-xl font-medium">
          Manga reccommendation for those who want to find something
          entertaining to read. Feel free to visit our Website!!
        </p>
        <button className="transition-all duration-500 border-2 border-white mt-4 px-4 py-2 hover:border-red-500 hover:bg-red-500  text-white">
          Top Selling Series
        </button>
      </div>
    </section>
  );
};

export default Hero;
