import { Skill, Project, NavItem, TestimonialItem } from "../types/types";
import { SkillLogos, ProjectsThumbnails } from "../data/images";

export const SkillsDataSet: readonly Skill[] = [
  {
    id: 1,
    name: "C#",
    icon: SkillLogos.CSharp,
  },
  {
    id: 2,
    name: ".NET CORE",
    icon: SkillLogos.NetCore,
  },
  {
    id: 3,
    name: "ASP.NET CORE",
    icon: SkillLogos.AspNet,
  },
  {
    id: 4,
    name: "SQL SERVER",
    icon: SkillLogos.Sql,
  },

  {
    id: 5,
    name: "Azure",
    icon: SkillLogos.Azure,
  },
  {
    id: 6,
    name: "TypeScript",
    icon: SkillLogos.Ts,
  },
  {
    id: 7,
    name: "JavaScript",
    icon: SkillLogos.Js,
  },
  {
    id: 8,
    name: "React JS",
    icon: SkillLogos.React,
  },
] as const;

export const ProjectsDataSet: readonly Project[] = [
  {
    id: 1,
    name: "GenteDrive",
    images: ["https://via.placeholder.com/100"],
    demoUri: "https://via.placeholder.com/150",
    sourceUri: "https://via.placeholder.com/150",
    description:
      "GenteDrive is a Trip Reservation System with advanced features like real-time booking, secure payment processing, and efficient itinerary management.",
    technologies: ["ASP.NET CORE", "SQL SERVER", "JavaScript", "React JS"],
  },
  {
    id: 2,
    name: "VTB Bank Bonus Loyalty Program System",
    images: ["https://vtb.ge/file/get/9176/VoeWNFQ4Wk65ha664SjDmQ"],
    demoUri: "https://via.placeholder.com/150",
    sourceUri: "https://via.placeholder.com/150",
    description:
      "Earn points with every transaction for cashback rewards, special discounts, and priority customer service.",
    technologies: [
      "C#",
      ".NET CORE",
      "ASP.NET CORE",
      "SQL SERVER",
      "TypeScript",
      "JavaScript",
      "React JS",
    ],
  },
  {
    id: 3,
    name: "Georgian Diaspora Website",
    images: [ProjectsThumbnails.Gda],
    demoUri: "http://www.gda.ge",
    sourceUri: "https://via.placeholder.com/150",
    description:
      "Official website of the Georgian Diaspora Association. The website is a platform for the Georgian Diaspora to connect with each other and with their homeland.",
    technologies: ["ASP.NET Core", "Razor", "Bootstrap"],
  },
  {
    id: 4,
    name: "Congree Style Guide Manager",
    images: [
      "https://www.congree.com/fileadmin/user_upload/style_guide_manager_2.png",
    ],
    demoUri: "https://www.congree.com/en/tools",
    sourceUri: "https://via.placeholder.com/150",
    description:
      "Congree Style Guide Manager integrates with various authoring tools and content management systems to ensure linguistic consistency and compliance with style guides throughout the content creation process",
    technologies: ["C#", "ASP.NET CORE", "SQL SERVER", "Azure", "Angular"],
  },
  {
    id: 5,
    name: "Congree Authoring Server",
    images: [
      "https://www.congree.com/fileadmin/_processed_/1/6/csm_standard_756a959bb0.png",
    ],
    demoUri: "https://www.congree.com/en/tools",
    sourceUri: "https://via.placeholder.com/150",
    description:
      "The Congree Authoring Server is a linguistic authoring support tool designed to assist writers and content creators in producing high-quality and consistent content. It integrates with various content creation environments, such as authoring tools and content management systems, to provide real-time linguistic support.",
    technologies: ["C#", "WPF", "SQL SERVER"],
  },
  {
    id: 6,
    name: "Ministry of Finance of Georgia Website",
    images: [ProjectsThumbnails.Mof],
    demoUri: "https://www.mof.ge",
    sourceUri: "https://via.placeholder.com/150",
    description: "Official website of the Ministry of Finance of Georgia",
    technologies: ["Kentico CMS", ".NET CORE", "HTML", "CSS", "JavaScript"],
  },
] as const;

export const NavigationItems: readonly NavItem[] = [
  {
    id: 1,
    name: "Home",
    uri: "home",
    offset: 0,
  },
  {
    id: 2,
    name: "About",
    uri: "about",
    offset: -50,
  },
  {
    id: 3,
    name: "Skills",
    uri: "skills",
    offset: 0,
  },
  {
    id: 4,
    name: "Projects",
    uri: "projects",
    offset: -100,
  },
  {
    id: 5,
    name: "Testimonials",
    uri: "testimonials",
    offset: -50,
  },
  {
    id: 6,
    name: "Contact",
    uri: "contact",
    offset: -80,
  },
] as const;

export const TestimonialsDataSource: readonly TestimonialItem[] = [
  {
    id: 1,
    text: `"I am writing this recommendation with great pleasure for George Kopadze who has been a team member at Congree for the past two years. In his role as a Software Engineer, he has consistently showcased exceptional technical acumen, profound problem-solving skills, and a proactive attitude.

George's expertise in modern programming languages and software development methodologies, including agile and scrum, has significantly contributed to the success of several complex projects. 

Aside from his technical prowess, George also demonstrated stellar interpersonal skills. He is an exceptional team player who collaborates well with diverse teams and efficiently communicates complex technical details in a manner that non-technical stakeholders can easily understand."`,
    name: "Stefan Krekwitz",
    position: "CEO @ Congree Language Technologies GmbH",
  },
  {
    id: 2,
    text: `"George is motivated and always open to challenges. During our time together I was reporting to George. His dedication and leadership are outstanding. His collaboration, calm and positive attitude are remarkable. George is a great supporter of new ideas and always sets realistic goals. I learned a lot about leadership, people management, communication skills, and negotiations from him. I am absolutely confident that George would be a great fit for any forward-thinking company."`,
    name: "Merab Tato Kutalia",
    position: "Android Lead | Google Developers Expert for Android",
  },
  {
    id: 3,
    text: `"I'm thrilled of George as a senior .Net developer, good team player and simply a good person. George is a highly skilled professional with demonstrated experience in software development, good interpersonal and communication skills. I appreciate his work and what he did in our company in Pangea and I'm happy I had a chance to work with him. I highly recommend George to everyone who seeks motivated and skillful professionals with a high sense of responsibilities"`,
    name: "Temur Japaridze",
    position: "Co-Founder and Managing Partner @ DevGate",
  },
] as const;
