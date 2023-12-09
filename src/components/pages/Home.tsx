import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import ProfilePhoto from "../../assets/images/profile/me.svg";
const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-3xl sm:text-4xl pb-3">
          Hi, my name is
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
          <div className="sm:col-span-2">
            <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
              George Kopadze
            </h1>
            <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">
              I'm a Full Stack Developer.
            </h2>
          </div>
          <div className="sm:col-span-1">
            <img
              src={ProfilePhoto}
              alt="profile"
              className="w-32 md:w-56 rounded-full shadow-md hidden lg:block"
            />
          </div>
        </div>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          If you're seeking a results-driven software engineer with a proven
          track record of delivering innovative software solutions using C# and
          the .NET stack, don't hesitate to reach out to me.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link
              to="timeline"
              smooth={true}
              offset={50}
              duration={500}
              className="flex justify-center items-center"
            >
              View Experiences
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
