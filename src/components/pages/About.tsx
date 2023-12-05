export const About = () => {
  return (
    <div id="about" className="w-full h-screen  text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl sm:text-4xl font-bold flex items-center">
            <p>Hi. I'm George, nice to meet you. Please take a look around.</p>
          </div>
          <div className="py-2">
            Welcome to my digital realm! I'm a seasoned senior full-stack
            developer with over 11 years of diverse experience across various
            business domains. Having honed my skills in the banking sector for
            over 5 years, I've navigated the intricate landscapes of insurance,
            governmental ministries in Georgia, and dynamic private enterprises.
            With a proven track record, I've not only mastered the art of coding
            but also the science of team leadership, managing groups ranging
            from 20 to 150 members for the past 4 years. Join me on this journey
            of innovation and excellence as we redefine possibilities in the
            world of technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
