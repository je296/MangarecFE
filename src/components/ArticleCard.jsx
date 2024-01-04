import React from "react";
import { images } from "../constants";

export const ArticleCard = () => {
  return (
    <div
      className={`transition-all duration-300 px-8 py-6 bg-[#fff3f3] rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:w-1/3`}
    >
      <img
        src={images.Eri}
        className="w-full object-cover object-center h-auto"
        alt="title"
      />
      <div className="font-bold pt-4 items-center">
        <h2 className="font-roboto font-bold text-2xl">Goodbye Eri</h2>
        <p className="text-gray-500 text-md lg:text-xl font-medium">
          ทำยอดขายตลอดปี 2021 ได้ทั้งหมด 30,917,746 เล่ม
        </p>
      </div>
      <div className="flex flex-col lg:flex-row pt-4 items-center text-left space-x-4">
        <span className="text-md font-medium font-opensans lg:text-xl">
          Nuttanon Ungkachan
        </span>
        <span className="text-md font-medium font-opensans lg:text-xl">
          25/12/2023
        </span>
      </div>
    </div>
  );
};
