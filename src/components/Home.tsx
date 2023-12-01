import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          George Kopadze
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          If you're seeking a results-driven software engineer with over 11
          years of experience and a proven track record of delivering innovative
          software solutions using C# and the .NET stack, I'd be delighted to
          connect with you.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="projects" smooth={true} offset={50} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
