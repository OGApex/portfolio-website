import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cpp from "../assets/C++3.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import js2 from "../assets/js2.png";
import proj from "../assets/proj.png";
import reactImg from "../assets/react.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";

export const links = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Portfolio",
  },
  {
    id: 3,
    link: "Experience",
  },
  {
    id: 4,
    link: "Contact",
  },
];

export const socials = [
  {
    id: 1,
    content: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/OGApex",
  },
  {
    id: 2,
    content: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/kirils-popovs-a2606224b/",
  },
  {
    id: 3,
    content: (
      <>
        Mail <MdEmail size={30} />
      </>
    ),
    href: "mailto:kirillpopovs@gmail.com",
  },
];

export const portfolio = [
  {
    id: 1,
    src: js,
    text: "vanilla JS chat agent with API",
    href: "https://github.com/OGApex/Code/tree/master/Free%20Time%20Code/synproj",
  },
  {
    id: 2,
    src: cpp,
    text: "Memory Write/Read",
    href: "https://github.com/OGApex/Code/blob/master/Free%20Time%20Code/MemoryWriteRead.cpp",
  },
  {
    id: 3,
    src: cpp,
    text: "Language filter based on banned words",
    href: "https://github.com/OGApex/Code/tree/master/Free%20Time%20Code/Language%20Filter",
  },
  {
    id: 4,
    src: proj,
    text: "Personal Portfolio",
    href: "https://github.com/OGApex/portfolio-website",
  },
];

export const tech = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js2,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImg,
    title: "React",
    style: "shadow-cyan-500",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind CSS",
    style: "shadow-sky-500",
  },
  {
    id: 7,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 8,
    src: cpp,
    title: "C++",
    style: "shadow-blue-400",
  },
  {
    id: 9,
    src: sass,
    title: "Sass",
    style: "shadow-pink-400",
  },
];
