import React, { useState, useRef } from "react";
import "./css/App.css";
import "./LogoLoop.js";
import LogoLoop from "./LogoLoop";
import Threads from "./Threads";
import ProjectCard from "./ProjectCard";

import cSharp from "./Images/TechImages/C-Sharp_Logo.svg";
import cpp from "./Images/TechImages/cpp.svg";
import css from "./Images/TechImages/css.svg";
import gitH from "./Images/TechImages/github.svg";
import htmx from "./Images/TechImages/htmx.svg";
import js from "./Images/TechImages/javascript.svg";
import python from "./Images/TechImages/python.svg";
import meta from "./Images/TechImages/meta.svg";
import node from "./Images/TechImages/nodedotjs.svg";
import sql from "./Images/TechImages/postgresql.svg";
import reactImage from "./Images/TechImages/react.svg";
import unity from "./Images/TechImages/unity.svg";
import ocaml from "./Images/TechImages/ocaml.svg";
import html from "./Images/TechImages/html.svg";

const Projects = [
  {
    title: "Panda Express POS Ecosystem",
    images: [
      require("./Images/panda/pandaAI.png"),
      require("./Images/panda/cashier.png"),
      require("./Images/panda/kiosk.png"),
      require("./Images/panda/kitchen.png"),
      require("./Images/panda/man.png"),
      require("./Images/panda/pandaMain.png"),
      require("./Images/panda/pandaLogin.png"),
    ],
    description: "Full-stack restaurant management app. Features include a Kiosk with Gemini-powered assistant, cashier workflow, inventory, menu, and employee management, and real-time charts for branch performance, menu, and kitchen tracking. Feel free to explore globally deployed application using these logins: \n \n Manager: username: testMan, password: password. \n EmployeeLogin: username: testUser, password: password.",
    technologies: "React, Node.js, Express, MongoDB",
    gitHubLink: "https://github.com/connorrussi/Full-Stack-POS-System",
    deployedLink: "https://csce331-project-3-team34-dueo.onrender.com",
  },
  {
    title: "VR Educational Game",
    images: [require("./yellow.png"), require("./blue.jpg"), require("./red.jpg")],
    description: "Immersive VR game focused on education and interaction.",
    technologies: "Unity, C#, Oculus SDK",
    gitHubLink: "https://github.com/connorrussi/VR-Educational-Game",
    downloadLink: "https://vreducationalgame.example.com",
  },
  {
    title: "Single Core Y-86 Sequential architecture CPU",
    images: [require("./red.jpg"), require("./blue.jpg"), require("./yellow.png")],
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
    name: "C++",
    img: cpp,
  },
  {
    name: "Css",
    img: css,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "C#",
    img: cSharp,
  },
  {
    name: "GitHub",
    img: gitH,
  },
  {
    name: "Htmx",
    img: htmx,
  },
  {
    name: "JavaScript",
    img: js,
  },
  {
    name: "Python",
    img: python,
  },
  {
    name: "Meta",
    img: meta,
  },
  {
    name: "Node.js",
    img: node,
  },
  {
    name: "SQL",
    img: sql,
  },
  {
    name: "React",
    img: reactImage,
  },
  {
    name: "Unity",
    img: unity,
  },
  {
    name: "Ocaml",
    img: ocaml,
  }
  
];

function App() {
  const techLogos = technologies.map(tech => ({
    src: tech.img,
    alt: tech.name,
  }));
  return (
    <div className="App">
        <Threads color={[1, 1, 1]} amplitude={3} distance={0} enableMouseInteraction={true} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

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
        <div className="Section-Heading-Content">
          <h1>Connor Russi</h1>
          <p>
            Computer Science student at Texas A&M
            <br />
            Aspiring Software Engineer
          </p>
        </div>
      </section>

      {/* about me */}
      <section className="Section-About AboutMe">
        <div className="Section-TopHeading"><h2>About Me</h2></div>
        <div className="About-Content">
          <p>
            I’m a Computer Science student at Texas A&M pursuing a minor in Business.
            I enjoy building full-stack applications and learning technologies by applying them to real problems.
            Recently, I’ve been experimenting with AI techniques like LoRA fine-tuning to better understand how modern AI systems are trained and integrated into software.
            I’m currently seeking Software Engineering internship opportunities for Summer 2026.
          </p>
        </div>
        <LogoLoop logos={techLogos} speed={50} direction="left" />

      </section>

      {/* Projects */}
      
      <section className="Section-Projects">
        <div className="Section-TopHeading"><h2>Projects</h2></div>
        <div className = "Projects">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
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