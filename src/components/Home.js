import React from "react";
import { TiArrowDownOutline } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">Text here</p>
          <div>
            <Link to={"Portfolio"} smooth={true} duration={500}>
              <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-900 hover:scale-110 hover:bg-blue-600">
                Portfolio
                <span>
                  <TiArrowDownOutline className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
