import React from "react";
import "./css/App.css";
import "./LogoLoop.js";
import LogoLoop from "./LogoLoop";
import Threads from "./Threads";

const Projects = [
  {
    title: "Full-Stack POS System",
    image: require("./blue.jpg"),
    description: "End-to-end POS platform with kiosk, cashier, manager, and kitchen systems.",
    technologies: "React, Node.js, Express, MongoDB",
    gitHubLink: "https://github.com/connorrussi/Full-Stack-POS-System",
    deployedLink: "https://fullstackpossystem.example.com",
  },
  {
    title: "VR Educational Game",
    image: require("./yellow.png"),
    description: "Immersive VR game focused on education and interaction.",
    technologies: "Unity, C#, Oculus SDK",
    gitHubLink: "https://github.com/connorrussi/VR-Educational-Game",
    downloadLink: "https://vreducationalgame.example.com",
  },
  {
    title: "Single Core Y-86 Sequential architecture CPU",
    image: require("./red.jpg"),
    description: "Single-core sequential CPU implementing fetch, execute, and PC update stages.",
    technologies: "Computer Architecture",
  },
  {
    title: "Single Core Y-86 Sequential architecture CPU",
    image: require("./red.jpg"),
    description: "Single-core sequential CPU implementing fetch, execute, and PC update stages.",
    technologies: "Computer Architecture",
  },
  {
    title: "Single Core Y-86 Sequential architecture CPU",
    image: require("./red.jpg"),
    description: "Single-core sequential CPU implementing fetch, execute, and PC update stages.",
    technologies: "Computer Architecture",
  },
  
];

const Experience = [
  {
    title: "Head Supervisor",
    company: "Off Campus Aggies",
    description: "Led a team of 50+ students on an active construction site, ensuring safety and efficiency.",
    duration: "Jan 2023-Jan 2024",
    image: require("./red.jpg"), // Replace with your image or a placeholder
  },
  {
    title: "Kids Room Lead",
    company: "Grace Bible Church",
    description: "Managed and organized activities for children during church services.",
    duration: "Sep 2025-Present",
    image: require("./blue.jpg"), // Replace with your image or a placeholder
  }
];
const technologies = [
  {
    name: "React",
    img: require("./red.jpg"),
  },
  {
    name: "Node.js",
    img: require("./blue.jpg"),
  },
  // {
  //   name: "React",
  //   img: require("./red.jpg"),
  // },
  // {
  //   name: "Node.js",
  //   img: require("./blue.jpg"),
  // },
  // {
  //   name: "React",
  //   img: require("./red.jpg"),
  // },
  {
    name: "Node.js",
    img: require("./blue.jpg"),
  }
];

function App() {
  const techLogos = technologies.map(tech => ({
    src: tech.img,
    alt: tech.name,
  }));
  return (
    <div className="App">
      <section className="App-Navbar">
        <nav>
          <ul className="Nav-Links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </section>
      {/* main welcome screen */}
      <section className="Section-Heading">
        <Threads color={[1, 1, 1]} amplitude={5} distance={0} enableMouseInteraction={true} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
        <div className="Section-Heading-Content">
          <h1>Connor Russi</h1>
          <p>
            Computer Science student at Texas A&M with a minor in Business.
            I build full-stack systems, immersive VR experiences, and scalable software
            with an emphasis on clean architecture and leadership-driven design.
          </p>
        </div>
      </section>

      {/* about me */}
      <section className="Section-About AboutMe">
        <div className="Section-TopHeading"><h2>About Me</h2></div>
        <p>
          I’m a Computer Science student at Texas A&M pursuing a minor in Business.
          I enjoy building full-stack applications and learning technologies by applying them to real problems.
          Recently, I’ve been experimenting with AI techniques like LoRA fine-tuning to better understand how modern AI systems are trained and integrated into software products.
          I’m currently seeking Software Engineering internship opportunities for Summer 2026.
        </p>
        <LogoLoop logos={techLogos} speed={50} direction="left" />

      </section>

      {/* Projects */}
      
      <section className="Section-Projects">
        <div className="Section-TopHeading"><h2>Projects</h2></div>
        <div className = "Projects">
          {Projects.map((project, index) => (
            <div key={index} className="Project-Card">
              <img
                src={project.image}
                alt={project.title}
                className="Project-Image"
              />
              <div className="Project-Content">
                <h3>{project.title}</h3>
                <p className="Project-Description">{project.description}</p>
                <div className="Project-Tech">
                  {project.technologies.split(",").map((tech, idx) => (
                    <span key={idx} className="Tech-Tag">{tech.trim()}</span>
                  ))}
                </div>
                <div className="Project-Links">
                  {project.gitHubLink && (
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Project-Button"
                    >
                      GitHub
                    </a>
                  )}
                  {project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Project-Button"
                    >
                      Deployed Site
                    </a>
                  )}
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Project-Button"
                    >
                      Download Here
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* experience */}
      <section className="Section-Experience ">
        <div className="Section-TopHeading"><h2>Experience & Leadership</h2></div>
        <div className = "Experience">
          {Experience.map((exp, idx) => (
            <div className="Experience-Card" key={idx}>
              <img
                src={exp.image}
                alt={exp.title}
                className="Experience-Image"
              />
              <div className="Experience-Content">
                <div className="Experience-Header">
                  <div className="Experience-TitleGroup">
                    <span className="Experience-Title">{exp.title}</span>
                    <span className="Experience-Company">{exp.company}</span>
                  </div>
                  <span className="Experience-Duration">{exp.duration}</span>
                </div>
                <div className="Experience-Description">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact me */}
      <section className="Section-Contact">
        <div className="Section-TopHeading"><h2>Contact Me</h2></div>
        <p>
          
        </p>
          integrate email services here to email me directly from the portfolio

      </section>
      {/* <Threads color={[1, 1, 1]} amplitude={1} distance={0.2} enableMouseInteraction={false} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} /> */}

    </div>
  );
}

export default App;