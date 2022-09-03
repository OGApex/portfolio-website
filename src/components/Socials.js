import React from "react";
import { socials } from "./Data";

const Socials = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socials.map(({ id, content, href }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-grey hover:ml-[-5px] duration-300`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
