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
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm George, nice to meet you. Please take a look arount.</p>
          </div>
          <div className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            eveniet laborum rem beatae eligendi impedit nostrum iste, illum quam
            sed! Doloribus rem nulla amet officia obcaecati dolor aspernatur,
            quo vero?
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
