import React from "react";
import { portfolio } from "./Data";

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="w-full text-white md:h-screen bg-gradient-to-b from-gray-800 via-black to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6">Examples of work I've done in the past:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, text, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="flex justify-center items-center">{text}</p>
              <img src={src} alt="" className="rounded-md h-60 w-fit " />
              <div className="flex items-center justify-center">
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
