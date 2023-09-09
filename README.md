# React Developer Portfolio template
#### Live Demo https://react-portfolio-v1.netlify.app/
#### Figma Design https://www.figma.com/community/file/1116246660507537002
### Preview 

<img src="/preview.gif" alt="preview" width="600px" />

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails: Details = {
  name: "Rahul Yadav",
  tagline: "I build things for web",
  img: profile,
  about: `With over a year of experience as a frontend developer, I have honed my expertise in a range of essential technologies, including ReactJS, JavaScript, TypeScript, CSS, Bootstrap, and HTML. I am well-versed in version control using GitHub, and proficient in project management tools such as Jira. In addition, I have experience working with performance monitoring tools like New Relic, and have even developed custom visualizations. My skills extend to serverless architecture using AWS Lambda.
Currently contributing my skills at Cloudeq, I am entrusted with the frontend responsibilities for a high-profile McDonald's project. Through this experience, I have gained valuable insights into advanced concepts like Redux, context management, and the utilization of React Form Hooks. My dedication to creating seamless user interfaces drives me to excel in the UI developer role, bringing innovation and efficiency to your team.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl:URLS = {
  linkdein: "https://www.linkedin.com/in/rahul-yadav-reactjs",
  github: "https://github.com/electrifire-123",
  twitter: "https://twitter.com/rahulyadavda",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  }
];

// Enter your Education Details here
export const eduDetails = { ... };

// Tech Stack and Tools
export const techStackDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```
