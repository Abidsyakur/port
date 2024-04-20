import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  five,
  speak,
  php,
  mobile,
  backend,
  kutukode, 
  creator,
  web,
  javascript,
  css,
  reactjs,
  sql,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kripto,
  solvecovid,
  c,
  ramadhan,
  rupiah,
  py,
  laravel,
  rem, 
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "PHP Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "python",
    icon: py,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences: TExperience[] = [
  {
    title: "Content Creator",
    companyName: "Kutukode",
    icon: kutukode,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Create tutorials and videos that explain C programming concepts practically and thoroughly",
      "And actively participate in the community to share experiences and learn together",
    ],
  },
  {
    title:  "Web Developer",
    companyName: "Freelance",
    icon: kutukode,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Analyze client needs and design appropriate software solutions.",
      "Provide technical support and maintenance for applications that have been developed.",
      "Communicate regularly with clients to provide project updates and resolve problems as they arise.",
    ],
  },
  {
    title: "IT Support Volunteer",
    companyName: "Speakable Youth",
    icon: speak,
    iconBg: "#383E56",
    date: "Maret 2024 - Present",
    points: [
      "address technical issues that platform users may encounter.",
      "is involved in technical maintenance of the platform, such as ensuring that all systems and features function properly, performing regular software updates, and ensuring the security of the platform from attacks or other security vulnerabilities.",
      "tasked with collecting and reporting technical problems that often occur to the development team or platform management. It helps in improvements and development of the platform to improve the overall user experience.",
    ],
  },
  {
    title: "Software Engineer Volunteer",
    companyName: "Five Element Zone Canada",
    icon: five,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - November 2023",
    points: [
      "Designing the backend systems used in the project, including architectural design, database schema, system integration and required APIs",
      "Optimize backend systems performance to increase speed, scalabillity and operatoinal efficiency",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Solve Covid Runner Game",
    description:
      "Games that can provide education and raise awarennes of the importance of health protocols during the Covid-19 pandemic",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "unrealengine",
        color: "green-text-gradient",
      },
    ],
    image: solvecovid,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Zakat Yuk",
    description:
      "The Zakat Yuk platform is an application or website that aims to make it easier and encourage people to make zakat payments online.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "codeigniter",
        color: "pink-text-gradient",
      },
    ],
    image: ramadhan,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Kripto Talks",
    description:
      "The Krypto Talks platform is an online forum dedicated to discussing topics related to the world of cryptography, blockchain and digital currencies.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: kripto,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Rupiah Detection",
    description:
      "This project is a simple machine learning entitled Rupiah Detection. Similar to object detection, this project detects rupiah currency ranging from 100k to 2k.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: rupiah,
    sourceCodeLink: "https://rupiah-detection.abidsyakur73-bo.repl.co/",
  },
  {
    name: "Ramadhan Event Management",
    description:
      "Ramadhan Event Management is the process of planning, organizing, implementing and evaluating events held during the month of Ramadan.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: rem,
    sourceCodeLink: "https://rupiah-detection.abidsyakur73-bo.repl.co/",
  },
];

export { services, technologies, experiences, testimonials, projects };
