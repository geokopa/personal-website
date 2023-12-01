import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";
import { NavItem } from "../types/types";
import { NavigationItems } from "../data/data";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleMobileMenuClick = (e) => {
    e.preventDefault();
    setNav(false);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h2 className="text-4xl text-pink-600">GK</h2>
      </div>

      {/* Navigation Menu*/}

      <ul className="hidden md:flex h-14 items-center">
        {NavigationItems.map((item: NavItem) => {
          return (
            <li
              key={item.id}
              className="hover:border-b-2 border-pink-600 duration-100 h-8 items-center"
            >
              <Link to={item.uri} smooth={true} offset={50} duration={500}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Humberger Menu*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {NavigationItems.map((item: NavItem) => {
          return (
            <li
              key={item.id}
              className="py-6 text-4xl"
              onClick={handleMobileMenuClick}
            >
              <Link to={item.uri} smooth={true} offset={50} duration={500}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/kopadze"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/geokopa"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
              className="flex justify-between items-center w-full text-white"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
