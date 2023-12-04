import { SkillsDataSet } from "../../data/data";
import { Skill } from "../../types/types";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center sm:justify-center w-full h-full sm:h-screen">
        <div className="mt-[100px] sm:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 py-4">
            Skills
          </p>
          <p className="py-8">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 items-center gap-4 text-center pb-[100px] sm:pb-0">
          {SkillsDataSet.map((skill: Skill) => {
            return (
              <div key={skill.id} className="hover:scale-110 duration-500">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 mx-auto sm:w-20"
                />
                <p className="my-4 text-xs sm:text-base">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
// w-full grid grid-cols-3 sm:grid-cols-4 items-center gap-4 text-center pb-[100px] sm:pb-0
