// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/euphoriagenx.png';

// Education Section Logo's
import gradLogo from './assets/education_logo/glaLogo.png';
import interLogo from './assets/education_logo/bsaLogo.jpg';
import matricLogo from './assets/education_logo/gurukul.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Euphoria Genx",
      date: "Jan 2025",
      desc: "Collaborated in a group project to develop a feature-rich restaurant web app using the MERN stack. Designed a clean and responsive user interface for browsing menus, placing orders, and managing bookings. Handled frontend and backend logic including authentication, routing, and database integration.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    }]
  
  export const education = [
  {
    id: 0,
    img: gradLogo,
    school: "Haldia Institute of Technology, Haldia",
    date: "Sept 2022 - July 2026",
    grade: "7.94 SGPA (6th Sem)",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Information Technology at Haldia Institute of Technology. Here, I have studied core subjects like Data Structures, Algorithms, OOPs, DBMS, Computer Networks, and Web Development. I actively participate in coding contests and have completed several projects that helped enhance my technical and problem-solving skills.",
    degree: "Bachelor of Technology - B.Tech",
  },
  {
    id: 1,
    img: interLogo,
    school: "S.M.S.G College, Sherghati",
    date: "Sept 2018 - Aug 2020",
    grade: "73.4%",
    desc: "I completed my Intermediate (Class 12) from S.M.S.G College, Sherghati under the BSEB board with PCM (Physics, Chemistry, Mathematics) as my core subjects. During this time, I built a strong academic base and developed an interest in computers and technology.",
    degree: "Intermediate - PCM",
  },
  {
    id: 2,
    img: matricLogo,
    school: "GURUKUL",
    date: "Apr 2017 - March 2018",
    grade: "70.4%",
    desc: "I completed my Class 10 education from GURUKUL under the CBSE board. It laid the foundation for my academic journey and helped build my curiosity for science and technology.",
    degree: "Class Tenth",
  }
];
// Project Section Logo's
import Upskillr from './assets/work_logo/UpSkillr.png';
import unmaskIt from './assets/work_logo/unmaskIt.png';
import coursehub from './assets/work_logo/coursehub.png';
import gifgenerator from './assets/work_logo/rndmGIFgenerator.png';
import testimonial from './assets/work_logo/testimonial.png';
import tourplannerpage from './assets/work_logo/tourplannerpage.png';
import weather from './assets/work_logo/weather-app.png';
import tictactoe from './assets/work_logo/tictactoe.png';
import passwordgnrtr from './assets/work_logo/password.png'

  
  export const projects = [
    {
      id: 0,
      title: "UpSkillr- An Edtech Platform",
      description:
        "UpSkillr is an interactive EdTech platform built using HTML, Tailwind CSS, and React.js. It offers a clean and responsive user interface for showcasing educational content and enhancing the learning experience. The project focuses on simplicity, speed, and modern design to provide a smooth user journey for students and educators.",
      image: Upskillr,
      tags: ["HTML", "TailwindCSS", "JavaScript", "React JS"],
      github: "https://imsaurav12.github.io/UpSkillr-An-Edtech-Platform/",
    },
    {
      id: 1,
      title: "UnmaskIt - Hidden Identity, Real Feelings",
      description:
      "UnmaskIt is a full-stack anonymous grievance-sharing platform built using React (Vite), Tailwind CSS, Node.js, Express, and MongoDB. It allows users to share their feelings or societal concerns anonymously or with identity. The platform includes secure authentication, protected routes, and a modern UI, leveraging various NPM packages for enhanced functionality.",
      image: unmaskIt,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "#",
      // webapp: "",
    },
    {
      id: 2,
      title: "GIF Generator",
      description:
      "A React-based web application that allows users to search and generate trending or keyword-based GIFs using the GIPHY API. The app features a clean and responsive UI, real-time GIF fetching, and smooth user interactions for a fun and engaging experience.",

      image: gifgenerator,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://imsaurav12.github.io/GIF-Generator/",
      // webapp: "",
    },
    {
      id: 3,
      title: "CourseHUB",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: coursehub,
      tags: ["React JS",  "Tailwind CSS","HTML"],
      github: "https://imsaurav12.github.io/CourseHUB/",
      // webapp: "",
    },
    {
      id: 4,
      title: "Tour Planner Dashboard",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: tourplannerpage,
      tags: ["React JS","JavaScript", "HTML", "TailwindCSS"],
      github: "https://imsaurav12.github.io/planWithLove/",
      // webapp: "",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: weather,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://imsaurav12.github.io/Weather-App/",
      // webapp: "",
    },
    {
      id: 6,
      title: "User Testimonial",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: testimonial,
      tags: ["React JS", "Tailwind CSS","HTML"],
      github: "https://imsaurav12.github.io/User-Testimonials-App/",
      // webapp: "",
    },
    {
      id: 7,
      title: "Password Generator",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: passwordgnrtr,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://imsaurav12.github.io/Password-Generator/",
      // webapp: "",
    },
    {
      id: 8,
      title: "Tic-Tac Toe Game",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: tictactoe,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://imsaurav12.github.io/Tic-Tac-Toe-Game/",
      // webapp: "",
    },
  ];  