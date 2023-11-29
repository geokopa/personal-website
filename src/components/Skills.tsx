import ReactImg from "../assets/react.svg";
import AspNet from "../assets/aspnet.png";
import CSharp from "../assets/csharp.png";
import Rabbit from "../assets/rabbit.jpg";
import Sql from "../assets/sql.jpg";
import Azure from "../assets/azure.jpg";
import TypeScript from "../assets/ts.png";
import JavaScript from "../assets/js.png";

export const Skills = () => {
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
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSharp} alt="React" className="w-20 mx-auto" />
            <p className="my-4">C#</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={AspNet} alt="React" className="w-20 mx-auto" />
            <p className="my-4">ASP.NET CORE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Sql} alt="React" className="w-20 mx-auto" />
            <p className="my-4">SQL SERVER</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Rabbit} alt="React" className="w-20 mx-auto" />
            <p className="my-4">RabbitMQ</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Azure} alt="React" className="w-20 mx-auto" />
            <p className="my-4">Azure</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={TypeScript} alt="React" className="w-20 mx-auto" />
            <p className="my-4">Typescript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JavaScript} alt="React" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
