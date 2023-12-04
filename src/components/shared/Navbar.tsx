import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavItem } from "../../types/types";
import { NavigationItems } from "../../data/data";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleMobileMenuClick = () => {
    setNav((nav) => !nav);
  };

  return (
    <div className="fixed z-20 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-2">
      <div>
        <h2 className="text-3xl text-pink-600">GK</h2>
      </div>

      {/* Navigation Menu*/}

      <ul className="hidden md:flex items-center">
        {NavigationItems.map((item: NavItem) => {
          return (
            <li
              key={item.id}
              className="hover:border-b-2 border-pink-600 duration-100 h-8 items-center"
            >
              <ScrollLink
                to={item.uri}
                smooth={true}
                offset={0}
                duration={500}
                spy={true}
                activeClass="text-pink-600"
              >
                {item.name}
              </ScrollLink>
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
            <li key={item.id} className="py-6 text-4xl">
              <ScrollLink
                to={item.uri}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={handleMobileMenuClick}
              >
                {item.name}
              </ScrollLink>
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
            <ScrollLink
              to="contact"
              smooth={true}
              offset={0}
              duration={500}
              className="flex justify-between items-center w-full text-white"
            >
              Email <HiOutlineMail size={30} />
            </ScrollLink>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/geokopa/geokopa/blob/main/George%20Kopadze%20Resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
