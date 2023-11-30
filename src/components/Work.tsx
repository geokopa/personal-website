import { ProjectsDataSet } from "../data/data";
import { Project } from "../types/types";

const Work = () => {
  return (
    <div id="projects" className="w-full md:h-screen text-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 py-4">
            Projects
          </p>
          <p className="py-8">// Check out some of my recent works</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          {ProjectsDataSet.map((project: Project) => {
            return (
              <div
                style={{ backgroundImage: `url(${project.imageUri})` }}
                className="shadow-lg shadow-purple-700/50 group container rounded-md flex justify-center items-center mx-auto content-div"
                key={project.id}
              >
                {/* Hover */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-black tracking-wider">
                    {project.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.demoUri}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-black hover:border-purple-600 text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={project.sourceUri}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 border-2 border-black hover:border-purple-600 text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
