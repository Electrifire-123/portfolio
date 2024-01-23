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
const projectImage4 = require("./assets/projects/projectImage4.png");
const projectImage6 = require("./assets/projects/preview.gif");
const projectGif1 = require("./assets/projects/hack_ideas.gif")

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
  resume: string,
}
export const socialMediaUrl:URLS = {
  linkdein: "https://www.linkedin.com/in/rahul-yadav-reactjs",
  github: "https://github.com/electrifire-123",
  twitter: "https://twitter.com/rahulyadavda",
  resume : 'https://drive.google.com/file/d/1Ms1LbJWKx65jsdbKzr3ApLMspUG86XkQ/view?usp=drive_link'
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
    Position: "Software Engineer I",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Jan 24- Present",
  },
  {
    Position: "Junior Software Engineer",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Aug 2022 - Jan 24",
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
    title: " Hack Ideas ",
    image: projectGif1,
    description: `This ia Hackathon challenge site for the tech enthusiasts and job seekers to get some ideas of hackathon and share there own ideas with fellow mates, It has exciting features like creating a challenge, updating, deleting, users can upvote or like your created challenges and they sort the challenges based on votes`,
    techstack: "HTML/CSS, JavaScript, React, React-Redux, Redux-Toolkit, Appwrite, React-Router-Dom",
    previewLink: "https://hack-ideas-ochre.vercel.app/",
    githubLink: "https://github.com/Electrifire-123/Hack_Ideas",
  },
  {
    title: " Custom Blog App",
    image: projectImage4,
    description: `This is a blog sharing web application which enables users to design there own blogs in an editor on the web and then share it with world, Event after sharing the blog users can delete and edit there own blogs or they can take the blog off from the public by choosing disable opiton.`,
    techstack: "HTML/CSS, JavaScript, React, React-Redux, React-Toolkit, TailwindCSS, React-Router-Dom, TinyMCE Editor, Appwrite",
    previewLink: "https://customblogapp.vercel.app/",
    githubLink: "https://github.com/Electrifire-123/customblogapp",
  },
  {
    title: "Personal Portfolio",
    image: projectImage6,
    description: `The current one you're looking at`,
    techstack: "HTML/CSS, TypeScript, React, React-Router-Dom, TailwindCSS",
    previewLink: "https://portfolio-electrifire-123.vercel.app/",
    githubLink: "https://github.com/Electrifire-123/portfolio",
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
