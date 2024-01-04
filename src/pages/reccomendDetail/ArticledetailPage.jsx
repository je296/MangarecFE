import React from "react";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";

function ArticledetailPage() {
  return (
    <MainLayout>
      <div className="w-full text-center my-10">
        <h3 className="text-white font-normal text-4xl">Recommend</h3>
      </div>
      <section className="bg-white px-4 lg:px-0 pt-4 pb-8 space-y-5">
        <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row px-5 py-5 bg-[#fff3f3] rounded-lg hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <article className="flex-1 ">
            <div className=" px-8 py-6 items-center flex justify-center">
              <img
                src={images.Eri}
                className="w-72 h-100 rounded-lg place-items-end shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                alt="eri"
              />
            </div>
          </article>
          <div className="flex flex-col justify-center lg:justify-start text-left py-6 lg:w-1/2">
            <span className="text-2xl font-medium">Title: Goodbye Eri</span>
            <span className="text-xl font-medium">Genre: Drama</span>
            <span className="text-lg font-medium text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row px-5 py-5 bg-[#fff3f3] rounded-lg hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <article className="flex-1 ">
            <div className=" px-8 py-6 items-center flex justify-center">
              <img
                src={images.Eri}
                className="w-72 h-100 rounded-lg place-items-end shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                alt="eri"
              />
            </div>
          </article>
          <div className="flex flex-col justify-center lg:justify-start text-left py-6 lg:w-1/2">
            <span className="text-2xl font-medium">Title: Goodbye Eri</span>
            <span className="text-xl font-medium">Genre: Drama</span>
            <span className="text-lg font-medium text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ArticledetailPage;
