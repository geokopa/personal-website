import { ProjectsDataSet } from "../../data/data";
import { Project } from "../../types/types";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-screen text-black bg-white">
      <div className="max-w-[1000px] mx-auto p-4 mt-6 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {ProjectsDataSet.map((item: Project) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
