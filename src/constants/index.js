import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  
  html,
  css,
  reactjs,
   hd,
  ambition,
  otoclick,
  aje,
  tailwind,
  spring,
  git,
  figma,
  mysql,
  post,
  jira,
  docker,
  calendar,
  banking,
  portfolio,
  threejs,
  
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Java Web Developer",
    icon: web,
  },
  {
    title: "Business Analyst Enthusiast",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Spring-boot",
    icon: spring,
  },
  {
    name: "PostgreSql",
    icon: post,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: " React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];


const experiences = [
  {
    title: "Apprenticeship -IT Project Manager ",
    company_name: " E-Ambition",
    icon: ambition,
    iconBg: "#383E56",
    date: "July 2024 - October 2024",
    points: [
      " Responsible for overseeing and aligning project objectives with the company’s strategic goals.ping and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to the back-end development of a project management application similar to JIRA, focusing on efficient team coordination and process optimization to achieve project milestones.",
      "Actively involved in bug fixing and continuous system improvements to ensure optimal performance.",
    ],
  },
  {
    title: "Technical Internship - Java Backend Developer",
    company_name: " Otoclic-Autocash",
    icon: otoclick,
    iconBg: "#E6DEDD",
    date: "April 2024 - August 2024",
    points: [
      "Contributed to the development of a mobile application, marketplace, and back-office system aimed at securing and optimizing the automotive sector in Morocco.",
      "Implemented robust back-end services using Spring Boot, enhancing the platform's scalability and performance.",
      "Ensured high code quality by writing unit tests with JUnit and utilizing version control with Git to manage code effectively.",
      "Collaborated with cross-functional teams following Agile (Scrum) methodologies, participating in sprint planning, daily stand-ups, and retrospectives to ensure smooth project execution."
    ]
    ,
  
  },
  {
    title: "Team Leader - Prospecting ",
    company_name: " AJE (Aiac Junior Entreprise)",
    icon: aje,
    iconBg: "#383E56",
    date: "September 2023 - April 2024",
    points: [
      "Led a team of national and international commercial prospecting agents, managing and motivating the team to achieve business growth targets.",
      "Developed strategic plans for identifying and approaching new market opportunities, both domestically and internationally, enhancing the company's project portfolio.",
      "Coordinated team efforts using Agile (Scrum, Kanban) frameworks to ensure smooth project delivery and efficient workload management.",
      "Collaborated with developers and clients to align business objectives with project execution, facilitating clear communication between all stakeholders."
    ],
  },
  {
    title: "Introductory Internship - Frontend Developer",
    company_name: "HD Maroc",
    icon: hd,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Assisted in the front-end development of a custom restaurant management application designed to improve operational efficiency and customer satisfaction.",
      "Worked closely with the design team, using Figma to translate UI/UX designs into interactive, user-friendly interfaces.",
      "Developed the front-end using HTML, CSS, and JavaScript, ensuring the application was responsive and accessible across devices."
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "API REST for Appointment Management",
    description:
      "Designed and deployed a REST API for managing expert-client appointments, enabling seamless scheduling and real-time availability updates, with secure data handling and scalability for future growth.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring-boot",
        color: "blue-text-gradient",
      },
      
      {
        name: "PostgreSql",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Doker",
        color: "green-text-gradient",
      },
    ],
    image: calendar,
    source_code_link: "https://github.com/NouhaDl/calendar-expert-appointement.git",
  },
  {
    name: "Banking Application for Account and Transaction Management",
    description:
      "Development of a banking app for account management and real-time transaction tracking.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Spring-boot",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Security",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: banking,
    source_code_link: "https://github.com/NouhaDl/Banking-management-app.git",
  },
  {
    name: "Interactive Portfolio Project",
    description: "Created an interactive and responsive portfolio project featuring 3D design elements that effectively showcase my skills and experience, allowing users to navigate my work seamlessly and view detailed case studies.",
    
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css-tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/NouhaDl/Portfolio.git",
  },
];

export { services, technologies, experiences, testimonials, projects };