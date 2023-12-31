import { ExperienceList } from "../../data/data";
import { ExperienceItem } from "../../types/types";

const Timeline = () => {
  return (
    <div id="timeline" className=" bg-[#0a192f] pt-0 sm:pt-32 md:pt-16 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center sm:justify-center w-full h-full sm:h-screen sm:p-4">
        <div className="mt-[30px] sm:mt-0 md:mt-[30px]">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 py-4 text-[#ccd6f6]">
            Professional Timeline
          </p>
          <p className="py-8"></p>
        </div>

        <div className="p-6 sm:p-4 sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full sm:scrollbar-thin sm:scrollbar-thumb-slate-700 sm:scrollbar-track-slate-300 overflow-y-scroll">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 bg-[#0a192f] pl-6 pt-4 sm:p-4">
            {ExperienceList.map((client: ExperienceItem) => {
              return (
                <li className="mb-8 sm:ms-2 pl-1" key={client.id}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 ml-1 sm:ml-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-md sm:text-md md:text-lg font-semibold text-pink-500">
                    {client.name} - {client.position}{" "}
                    {client.id === 1 && (
                      <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                        Latest
                      </span>
                    )}
                  </h3>
                  <time className="block mb-2 text-sm sm:text-md font-normal leading-none text-gray-400 dark:text-gray-500">
                    {client.workYears}
                  </time>
                  <p className="mb-4 text-xs sm:text-lg font-normal text-gray-400 dark:text-gray-400 text-start">
                    {client.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
