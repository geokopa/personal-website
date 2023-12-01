import React from "react";

const Testimonial: React.FC<TestimonialProps> = ({ text, name, position }) => (
  <div className="bg-white p-6 mx-4 rounded-lg shadow-md">
    <div className="mb-4">
      <p className="text-gray-600 font-semibold">{name}</p>
      <p className="text-gray-500">{position}</p>
    </div>
    <p className="text-gray-800 text-lg">{text}</p>
  </div>
);

const Testimonials: React.FC = () => {
  // You can replace the data with your actual testimonials
  const testimonialsData: TestimonialProps[] = [
    {
      text: `"I am writing this recommendation with great pleasure for George Kopadze who has been a team member at Congree for the past two years. In his role as a Software Engineer, he has consistently showcased exceptional technical acumen, profound problem-solving skills, and a proactive attitude.

George's expertise in modern programming languages and software development methodologies, including agile and scrum, has significantly contributed to the success of several complex projects. 

Aside from his technical prowess, George also demonstrated stellar interpersonal skills. He is an exceptional team player who collaborates well with diverse teams and efficiently communicates complex technical details in a manner that non-technical stakeholders can easily understand."`,
      name: "Stefan Krekwitz",
      position: "CEO @ Congree Language Technologies GmbH",
    },
    {
      text: `"George is motivated and always open to challenges. During our time together I was reporting to George. His dedication and leadership are outstanding. His collaboration, calm and positive attitude are remarkable. George is a great supporter of new ideas and always sets realistic goals. I learned a lot about leadership, people management, communication skills, and negotiations from him. I am absolutely confident that George would be a great fit for any forward-thinking company."`,
      name: "Merab Tato Kutalia",
      position: "Android Lead | Google Developers Expert for Android",
    },
    {
      text: `"I'm thrilled of George as a senior .Net developer, good team player and simply a good person. George is a highly skilled professional with demonstrated experience in software development, good interpersonal and communication skills. I appreciate his work and what he did in our company in Pangea and I'm happy I had a chance to work with him. I highly recommend George to everyone who seeks motivated and skillful professionals with a high sense of responsibilities"`,
      name: "Temur Japaridze",
      position: "Co-Founder and Managing Partner @ DevGate",
    },
  ];

  return (
    <div id="testimonial" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Testimonials
            </p>
          </div>
          <div></div>

          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
