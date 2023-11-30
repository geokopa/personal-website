import { SkillsDataSet } from "../data/data";
import { Skill } from "../types/types";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 py-4">
            Skills
          </p>
          <p className="py-8">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {SkillsDataSet.map((skill: Skill) => {
            return (
              <div key={skill.id} className="hover:scale-110 duration-500">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 mx-auto"
                />
                <p className="my-4">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
