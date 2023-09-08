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
  about: `With over a year of experience as a frontend developer, I have honed my expertise in a range of essential technologies, including ReactJS, JavaScript, TypeScript, CSS, Bootstrap, and HTML. I am well-versed in version control using GitHub, and proficient in project management tools such as Jira. In addition, I have experience working with performance monitoring tools like New Relic, and have even developed custom visualizations. My skills extend to serverless architecture using AWS Lambda.
Currently contributing my skills at Cloudeq, I am entrusted with the frontend responsibilities for a high-profile McDonald's project. Through this experience, I have gained valuable insights into advanced concepts like Redux, context management, and the utilization of React Form Hooks. My dedication to creating seamless user interfaces drives me to excel in the UI developer role, bringing innovation and efficiency to your team.`,
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
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
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
