import { Skill, NavItem, TestimonialItem, Client } from "../types/types";
import { SkillLogos, ClientLogos } from "../data/images";

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

export const ClientsList: readonly Client[] = [
  {
    id: 1,
    name: "Ardi Insurance Company",
    image: ClientLogos.Ardi,
    position: "Technical Lead | Senior Software Engineer",
    workYears: "Sep 2023 - Present",
    url: "https://ardi.ge/",
    description:
      "Managing and leading software development team. Making technical decisions about technologies, architecture and design. Introduced software development best practices, tools and processes.",
  },
  {
    id: 2,
    name: "Pangea IT",
    image: ClientLogos.Pangea,
    position: "Senior Software Engineer",
    workYears: "Mar 2023 - Oct 2023",
    url: "https://pangea-it.com/",
    description:
      "Designed and developed core microservices for Jamaica Election System. System is used for elections in Jamaica. Technologies used: ASP.NET Core, React, and SQL Server.",
  },

  {
    id: 3,
    name: "Congree Language Technologies GmbH",
    image: ClientLogos.Congree,
    position: "Senior Software Engineer",
    workYears: "Nov 2021 - Jun 2023",
    url: "https://www.congree.com/",
    description:
      "Developed backend services for WhatIMean system. Also, I was responsible for developing Congree Authoring Server services and Authoring Client Integrations with 3rd party systems. Technologies used: ASP.NET Core, WCF, WPF, MongoDB, Redis and SQL Server.",
  },
  {
    id: 4,
    name: "JSC TBC Bank Georgia",
    image: ClientLogos.Tbc,
    position: "Software Development Area Lead | Senior Software Engineer",
    workYears: "Sep 2020 - Jul 2022",
    url: "https://www.tbcbank.ge/web/en/home",
    description:
      "I was responsible for leading software development area with 150+ developers. I was involved in all major projects and was responsible for technical decisions. Developed microservices for TBC Mobile & Internet Banking application.",
  },
  {
    id: 5,
    name: "JSC VTB Bank Georgia",
    image: ClientLogos.Vtb,
    position:
      "Senior Software Engineer | Head of Software Development Department",
    workYears: "Mar 2017 - Sep 2020",
    url: "https://www.vtb.ge/en",
    description:
      "I designed and developed VTB Loyalty Bonus system for VTB Bank Georgia. System was used for calculate and distribute bonuses for customers based on their spendings. Technologies used: ASP.NET Core, React, RabbitMQ, Redis and SQL Server. Developed backend services for Apple Pay. Working on accounts commisions module and other internal core systems.",
  },
  {
    id: 6,
    name: "Ministry of Foreign Affairs of Georgia",
    image: ClientLogos.Mfa,
    position: "Senior Software Engineer",
    workYears: "Mar 2017 - Dec 2020",
    url: "https://mfa.gov.ge/MainNav/AboutMFAEN",
    description:
      "Developed internal software for elections. System was used for select best candidates for International Expert Council. Technologies used: ASP.NET Core, HTML5, CSS, Bootstrap and SQL Server.",
  },
  {
    id: 7,
    name: "GPI Holding - Vienna Insurance Group",
    image: ClientLogos.Gpi,
    position: "Senior Software Engineer",
    workYears: "Mar 2017 - Dec 2017",
    url: "https://www.gpih.ge/en/",
    description:
      "Working on insurance core system. Integrated with 3rd party payment systems. Technologies used: ASP.NET Core, Kendo UI, WCF and SQL Server.",
  },
  {
    id: 8,
    name: "Ministry of Finance of Georgia",
    image: ClientLogos.Mof,
    position: "Senior Software Engineer",
    workYears: "Mar 2013 - Feb 2017",
    url: "https://mof.ge/en",
    description:
      "I created students registration system for government grants. Interns hiring, managing and monitoring system. Technologies used: ASP.NET MVC, HTML5, CSS, Bootstrap and SQL Server.",
  },
  {
    id: 9,
    name: "International Migration Organization",
    image: ClientLogos.IOM,
    position: "Senior Software Engineer",
    workYears: "Mar 2018 -  Dec 2018",
    url: "https://www.iom.int/",
    description:
      "IOM Sponsored the Project for Georgian Diaspora's website development. I was responsible for the development of the website. Content management system was developed using ASP.NET MVC, HTML5, CSS, Bootstrap and SQL Server. Website: https://gda.ge/",
  },
  {
    id: 10,
    name: "Ministry of Education and Science of Georgia",
    image: ClientLogos.Education,
    position: "Software Engineer",
    workYears: "Jan 2012 - Mar 2013",
    url: "https://eqe.ge",
    description:
      "I created internal web applications like (Visitor Management System, Conference Room Reservation System, Integrations with other governemental systems and warehouse management system). Technologies used: ASP.NET MVC, HTML5, CSS, Bootstrap and SQL Server.",
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
  // {
  //   id: 3,
  //   name: "Skills",
  //   uri: "skills",
  //   offset: 0,
  // },
  {
    id: 3,
    name: "Work Experience",
    uri: "timeline",
    offset: -50,
  },
  {
    id: 4,
    name: "Clients",
    uri: "clients",
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
