import project1 from "../assets/projects/project-1-1.png";
import project2 from "../assets/projects/project-1-2.png";
import project3 from "../assets/projects/project-1-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Laravel Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Laravel Node.js, MySQL, PostgreSQL, and MongoDB. I got into web development because I was always curious about how things work. I love learning new stuff and taking on new challenges. I'm a team player and I enjoy solving tough problems to create great products. When I'm not coding, you can find me staying active, checking out new tech, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - (Jan - Feb)",
    role: "Internship Programmer",
    company: "Kudus Regency Culture and Tourism Office",
    description: `Create an information system that provides information related to tourist attractions in the Kudus Regency area, using PHP programming language and using Laravel Framework. For the database using mysql. Participate in the creation of an information system for recording applications for certificates and endorsement charters, using PHP programming language by applying responsive design.`,
    technologies: ["PHP", "Laravel 8", "MySql"],
  },
  {
    year: "2023 - (Feb - July)",
    role: "Thesis/Final Project",
    company: "Griya Lestari Homestay",
    description: ` Create a homestay information system using the ReactJS Library which focuses on leasing and financial management. Create a database by deploying RESTApi using ExpressJS Framework and using a MongoDB database`,
    technologies: ["MongoDB", "Express", "ReactJS", "NodeJS"],
  },
];

export const PROJECTS = [
  {
    title: "Frelancer & CLient Platform Website",
    image: project1,
    description:
      "A website that helps connect clients with freelancers to work on projects ranging from small to large scale.",
    technologies: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
    link: "https://github.com/radmv/radm-gawebang",
  },
  {
    title: "Personal Portfolio Website",
    image: project2,
    description:
      "A website that helps everyone to know about me and my projects.",
    technologies: ["HTML", "CSS", "ReactJS", "Framer Motion", "Vercel"],
    link: "https://radm-portfolio.vercel.app/",
  },
  {
    title: "Frontend React Staycation Website",
    image: project3,
    description: "A frontend website that helps everyone to booking hotels.",
    technologies: ["HTML", "CSS", "ReactJS", "Javascript"],
    link: "https://radm-staycation.vercel.app/",
  },
];

export const CONTACT = {
  address: "Jepara, Central Java, Indonesia",
  phoneNo: "+6287771289730",
  email: "radmdev@gmail.com",
};
