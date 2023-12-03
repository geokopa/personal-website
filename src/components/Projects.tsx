import { useState } from "react";
import { ProjectsDataSet } from "../data/data";
import { Project } from "../types/types";
import Modal from "../components/ui/Modal";
import ImageCard from "./ui/ImageCard";
import { Bookmark, Heart, Share2 } from "react-feather";
import Carousel from "./ui/Carousel";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  return (
    <div id="projects" className="w-full md:h-screen text-black bg-white">
      <div className="max-w-[1000px] mx-auto p-4 mt-6 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {ProjectsDataSet.map((item: Project) => (
            <ImageCard
              imgSrc={item.images[0]}
              key={item.id}
              onClick={() => openModal(item)}
            >
              <h3 className="text-md sm:text-xl font-bold mb-2 text-white">
                {item.name}
              </h3>
            </ImageCard>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="w-[800px] h-auto">
            <div className="mb-4 w-full">
              <h3 className="text-lg sm:text-4xl font-black text-black">
                {selectedProject.name}
              </h3>
              <div className="text-sm text-black mt-5 flex flex-col">
                <Carousel autoSlide={false} autoSlideInterval={3000}>
                  {selectedProject.images.map((image) => (
                    <img key={image} src={image} className="w-full h-full" />
                  ))}
                </Carousel>
                <div className="mt-4">
                  <span className="font-bold text-sm sm:text-lg">
                    Description:
                  </span>
                  <div className="text-sm sm:text-lg pt-2">
                    {selectedProject.description}
                  </div>
                </div>
              </div>
              <div className="my-4">
                <span className="font-bold text-sm sm:text-lg">
                  Used Technologies:
                </span>
                <ul className="flex mt-4 gap-x-4">
                  {selectedProject.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-red-500 shadow-md rounded-md text-white"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
