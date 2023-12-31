// Enter all your detials in this file
// Logo images
// import logogradient from "./assets/logo.svg";
const logogradient = require("./assets/logo.svg")
const logo = require("./assets/logo.png");
// Profile Image
const profile =  require("./assets/profile.png");
// Tech stack images
const html = require("./assets/techstack/html.png");
const css = require("./assets/techstack/css.png");
const sass = require("./assets/techstack/sass.png");
const js = require("./assets/techstack/js.png");
const react = require("./assets/techstack/react.png");
const redux = require("./assets/techstack/redux.png");
const tailwind = require("./assets/techstack/tailwind.png");
const bootstrap = require("./assets/techstack/bootstrap.png");
const vscode = require("./assets/techstack/vscode.png");
const github = require("./assets/techstack/github.png");
const git = require("./assets/techstack/git.png");
const npm = require("./assets/techstack/npm.png");
const postman = require("./assets/techstack/postman.png");
const figma = require("./assets/techstack/figma.png");
const typescript = require("./assets/techstack/typescript.png")
// Porject Images
const projectImage1 = require("./assets/projects/project1-image.png");
const projectImage2 = require("./assets/projects/project2-image.png");
const projectImage3 = require("./assets/projects/project3-image.png");
const projectImage4 = require("./assets/projects/project4.jpg");
const projectImage5 = require("./assets/projects/project5.jpg");
const projectImage6 = require("./assets/projects/project6.jpg");

// Logos
type Logos = {
  logogradient:string,
  logo: string,
}
export const logos:Logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
type Details = {
  name : string,
  tagline : string,
  img : string,
  about : string,
}
export const personalDetails: Details = {
  name: "Rahul Yadav",
  tagline: "I build things for web",
  img: profile,
  about: `Proficient in a wide range of front-end technologies, such as HTML, CSS, JavaScript, and React, with a demonstrated ability to create visually appealing user interfaces using modern design frameworks like Tailwind CSS. Leveraging React JS for developing dynamic and responsive web applications, I possess a profound understanding of version control through Git to enhance collaborative development. Additionally, adept at translating design concepts into intuitive user experiences using Figma. Skilled in Redux, Redux Toolkit, Tailwind, Bootstrap, Git, GitHub, Jira, and crafting custom visualizations, I bring dynamic expertise and leadership to collaborative environments, aiming to drive impactful solutions.`,
};

// Enter your Social Media URLs here
type URLS = {
  linkdein : string,
  github : string,
  twitter : string,
}
export const socialMediaUrl:URLS = {
  linkdein: "https://www.linkedin.com/in/rahul-yadav-reactjs",
  github: "https://github.com/electrifire-123",
  twitter: "https://twitter.com/rahulyadavda",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
type WorkDetails = {
  Position : string,
  Company : string,
  Location : string,
  Type : string,
  Duration : string,
}


export const workDetails : WorkDetails[] = [
  {
    Position: "Frontend Web Developer",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  },
  {
    Position: "Software Trainee",
    Company: `PrepBytes`,
    Location: "Remote",
    Type: "Full Time",
    Duration: "Aug 2021 - July 2022",
  },
];

// Enter your Education Details here


export const eduDetails : WorkDetails[] = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Electrical Engineering",
    Company: `Manav School of Engineering and Tech`,
    Location: "Akola",
    Type: "Full Time",
    Duration: "Sept 2017 - Aug 2021",
  },
  {
    Position: "Diploma in Electrical Engineering",
    Company: `Manav School of Engineering and Tech`,
    Location: "Akola",
    Type: "Full Time",
    Duration: "Sept 2014 - Aug 2017",
  },
];

// Tech Stack and Tools
type TechStack = {
  html : string,
  css : string,
  js : string,
  react : string,
  redux : string,
  sass : string,
  tailwind : string,
  bootstrap : string,
  vscode : string,
  postman: string,
  npm: string,
  git: string,
  github: string,
  figma: string,
  typescript: string,
}
export const techStackDetails : TechStack = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  typescript: typescript,
};

// Enter your Project Details here
type ProjectDetails = {
  title : string,
  image : string,
  description : string,
  techstack : string,
  previewLink : string,
  githubLink : string,
}
export const projectDetails : ProjectDetails[] = [
  {
    title: "React Blog App",
    image: projectImage1,
    description: ``,
    techstack: "HTML/CSS, JavaScript, React, react-router-dom",
    previewLink: "https://react-blog-app-by-rahul-yadav.netlify.app/",
    githubLink: "https://github.com/Electrifire-123/react-blog-app",
  },
  {
    title: "TO DO Application",
    image: projectImage2,
    description: `IT is a todo app created by just using html, css, javascript, it includes the functionality of creating a todo, adding deleting a todo`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://electrifire-123.github.io/todo-do-app-js/",
    githubLink: "https://github.com/Electrifire-123/todo-do-app-js",
  },
  {
    title: "Digital Clock",
    image: projectImage3,
    description: `The project is made mostly to show my CSS skills and I have build the logics with JS`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://electrifire-123.github.io/digitalclock/",
    githubLink: "https://github.com/Electrifire-123/digitalclock",
  },
  
];

// Enter your Contact Details here
type ContactType = {
  email : string,
  phone : string
}
export const contactDetails : ContactType = {
  email: "rahullyadavv77@gmail.com",
  phone: "+917745816342",
};
