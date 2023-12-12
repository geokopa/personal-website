import {
  Skill,
  NavItem,
  TestimonialItem,
  Client,
  ExperienceItem,
  CertificateItem,
} from "../types/types";
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

export const ClientList: readonly Client[] = [
  {
    id: 1,
    name: "Ardi Insurance Company",
    image: ClientLogos.Ardi,
    url: "https://ardi.ge/",
  },
  {
    id: 2,
    name: "Pangea IT",
    image: ClientLogos.Pangea,
    url: "https://pangea-it.com/",
  },

  {
    id: 3,
    name: "Congree Language Technologies GmbH",
    image: ClientLogos.Congree,
    url: "https://www.congree.com/",
  },
  {
    id: 4,
    name: "JSC TBC Bank Georgia",
    image: ClientLogos.Tbc,
    url: "https://www.tbcbank.ge/web/en/home",
  },
  {
    id: 5,
    name: "JSC VTB Bank Georgia",
    image: ClientLogos.Vtb,
    url: "https://www.vtb.ge/en",
  },
  {
    id: 6,
    name: "GPI Holding - Vienna Insurance Group",
    image: ClientLogos.Gpi,
    url: "https://gpih.ge/en/",
  },
  {
    id: 7,
    name: "Ministry of Foreign Affairs of Georgia",
    image: ClientLogos.Mfa,
    url: "https://mfa.gov.ge/MainNav/AboutMFAEN",
  },
  {
    id: 8,
    name: "Ministry of Finance of Georgia",
    image: ClientLogos.Mof,
    url: "https://mof.ge/en",
  },
  {
    id: 9,
    name: "International Migration Organization",
    image: ClientLogos.IOM,
    url: "https://www.iom.int/",
  },
  {
    id: 10,
    name: "Ministry of Education and Science of Georgia",
    image: ClientLogos.Education,
    url: "https://eqe.ge",
  },
] as const;

export const ExperienceList: readonly ExperienceItem[] = [
  {
    id: 1,
    name: "Ardi Insurance Company",
    position: "Technical Lead | Senior Software Engineer",
    workYears: "Sep 2023 - Present",
    description:
      "Leading Ardi Insurance's software development, I shape our tech strategy, implementing best practices, tools, and CI/CD pipelines via GitLab. I foster a culture of knowledge sharing, conduct code reviews, and introduced a centralized logging system for efficient troubleshooting—dedicated to elevating our team's prowess.",
  },
  {
    id: 2,
    name: "Pangea IT",
    position: "Senior Software Engineer",
    workYears: "Mar 2023 - Oct 2023",
    description:
      "I played a key role in designing and implementing the Electoral Registration System—a robust platform for streamlining the electoral registration process. Leveraging my expertise in system architecture and development, I contributed to creating a secure, efficient, and user-friendly system using ASP.NET Core, React, and SQL Server for reliable and up-to-date voter records.",
  },

  {
    id: 3,
    name: "Congree Language Technologies GmbH",
    position: "Senior Software Engineer",
    workYears: "Nov 2021 - Jun 2023",
    description:
      "As a Senior Software Engineer at Congree Language Technologies, I significantly contributed to the development of backend services for the WhatIMean system (https://whatimean.com/de/). I also played a key role in enhancing the functionality and interoperability of Congree's language technology solutions, using a diverse tech stack including ASP.NET Core, WCF, WPF, MongoDB, Redis, and SQL Server.",
  },
  {
    id: 4,
    name: "JSC TBC Bank Georgia",
    position: "Software Development Area Lead | Senior Software Engineer",
    workYears: "Sep 2020 - Jul 2022",
    description:
      "As TBC's Chapter Area Lead for Front System Development, I led a team of 150+ developers, guiding major projects with a focus on technical leadership. I played a hands-on role in developing microservices for the TBC Mobile & Internet Banking app, showcasing expertise in ASP.NET Core, Redis, SQL Server, and RabbitMQ.",
  },
  {
    id: 5,
    name: "JSC VTB Bank Georgia",
    position: "Head of Software Development Department",
    workYears: "Nov 2018 - Sep 2020",
    description:
      "I led software development division, overseeing a team of 17 developers. My responsibilities encompassed active participation in significant projects, making key technical decisions, and formulating Software Development Strategies. Additionally, I took charge of defining long-term goals to foster the development of team members and actively contributed to enhancing the Software Development Life Cycle (SDLC) processes.",
  },
  {
    id: 6,
    name: "JSC VTB Bank Georgia",
    position: "Senior Software Engineer",
    workYears: "Mar 2017 - Nov 2018",
    description:
      "I designed and developed of VTB Bank Georgia's crucial Loyalty Bonus system. This system, vital to the bank's operations, calculated and distributed customer bonuses based on expenditures. Using a tech stack of ASP.NET Core, React, RabbitMQ, Redis, and SQL Server, I ensured seamless integration. I also developed backend services for Apple Pay, and contributed to internal core systems, including SMS Service Billing, Cash-In ATM services, and the SME Loan Module.",
  },
  {
    id: 7,
    name: "Ministry of Foreign Affairs of Georgia",
    position: "Senior Software Engineer",
    workYears: "Mar 2017 - Dec 2020",
    description:
      "As a Senior Software Engineer at the Ministry of Foreign Affairs of Georgia, I played a key role in developing internal election software. This system, crucial for selecting International Expert Council candidates, utilized ASP.NET Core, HTML5, CSS, Bootstrap, and SQL Server. I consistently championed the use of cutting-edge technologies for transparent and efficient government processes.",
  },
  {
    id: 8,
    name: "Ministry of Finance of Georgia",
    position: "Senior Software Engineer",
    workYears: "Mar 2013 - Feb 2017",
    description:
      "I created students registration system for government grants. Interns hiring, managing and monitoring system. Technologies used: ASP.NET MVC, HTML5, CSS, Bootstrap and SQL Server.",
  },
  {
    id: 9,
    name: "International Migration Organization",
    position:
      "Lead Developer | IOM Sponsored Project - Georgian Diaspora Website",
    workYears: "Mar 2018 -  Dec 2018",
    description:
      "I spearheaded the development of the Georgian Diaspora website, a project sponsored by IOM. As the lead developer, I took charge of crafting a robust content management system using ASP.NET MVC, HTML5, CSS, Bootstrap, and SQL Server. The website, accessible at https://gda.ge/, stands as a testament to my hands-on involvement in delivering impactful web solutions within the framework of international initiatives.",
  },
  {
    id: 10,
    name: "Ministry of Education and Science of Georgia",
    position: "Software Engineer",
    workYears: "Jan 2012 - Mar 2013",
    description:
      "I pioneered the development of crucial internal web applications, including a Visitor Management System, Conference Room Reservation System, Integrations with other governmental systems, and a Warehouse Management System. Leveraging a technology stack of ASP.NET MVC, HTML5, CSS, Bootstrap, and SQL Server, I ensured the seamless integration of these systems, contributing to enhanced operational efficiency and functionality within the organizational framework..",
  },
  {
    id: 11,
    name: "Saatec Ltd",
    position: "Junior Software Engineer",
    workYears: "Apr 2010 – Mar 2012",
    description:
      "I developed and maintained web forms applications, crafted modules for an in-house CMS (later upgraded to NopCommerce), and implemented Windows Background Services for automated daily tasks.",
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
    offset: -70,
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
    offset: -80,
  },
  {
    id: 4,
    name: "Clients",
    uri: "clients",
    offset: -75,
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

export const CertificatesList: readonly CertificateItem[] = [
  {
    id: 1,
    name: "MTA: Software Development Fundamentals - Certified 2021",
    image:
      "https://images.credly.com/size/680x680/images/c2537593-9f53-4901-9207-f51376ce7150/MTA-Software_Development_Fundamentals-600x600.png",
    url: "https://www.credly.com/badges/b0dfde10-33ae-41fe-850b-e1fda66ea71d?source=linked_in_profile",
  },
  {
    id: 2,
    name: "Exam 486: Developing ASP.NET MVC Web Applications",
    image:
      "https://images.credly.com/size/680x680/images/cbab3216-025d-4601-86ee-c5970b348d48/Developing_ASP.NET_MVC_Web_Applications-01.png",
    url: "https://www.credly.com/badges/c01c5be8-33af-4053-a234-d1a64a55c1e9?source=linked_in_profile",
  },
] as const;
