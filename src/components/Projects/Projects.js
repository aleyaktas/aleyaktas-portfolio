import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordrace from "../../Assets/Projects/wordrace.png";
import pyl from "../../Assets/Projects/pyl.png";
import showphotos from "../../Assets/Projects/showphotos.png";
import pomodly from "../../Assets/Projects/pomodly.png";
import beautydate from "../../Assets/Projects/beautydate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordrace}
              isBlog={false}
              title="Word Race"
              descriptions={[
                "● Developed a website using MERN stack and mobile application using React Native. Screens are designed by using Figma.",
                "● Implemented atomic design for client side.",
                "● Constructed an End-to-End backend system with Node.js, Express.js, MongoDB, CyberPanel and hosted on AWS EC2.",
                "● Configured server firewalls and disabled password based SSH and enabled key based login to protect servers from unauthorized access.",
                "● Implemented Socket.io for real time multiplayer game and online chat structure.",
                "● Used Firebase for storage users’ images.",
              ]}
              technologies={[
                "JavaScript",
                "React",
                "React Native",
                "Redux",
                "NodeJS",
                "Express",
                "MongoDB",
                "AWS EC2",
                "Socket.io",
                "Firebase",
                "Material UI",
              ]}
              ghLink="https://github.com/aleyaktas/wordRace"
              demoLink="https://wordrace.aleynaaktas.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautydate}
              isBlog={false}
              title="Beauty Date"
              descriptions={[
                "● Users can register completely free of charge, record the start and expiration dates of the products they use, and receive warning notifications at any time. Thus, it uses its products more efficiently.",
                "● I have the app published on app store.",
              ]}
              technologies={[
                "React Native",
                "Redux",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Firebase",
                "StoryBook",
                "AWS EC2",
              ]}
              appStoreLink="https://apps.apple.com/tr/app/beauty-date/id6451454683?l=tr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodly}
              isBlog={false}
              title="Pomodly"
              descriptions={[
                "● With soothing sounds, you can set the time yourself and add tasks. Also you can do pomodoro online, whether you want to do it alone or with a friend. ",
              ]}
              technologies={[
                "Next.js",
                "Node.js",
                "webRTC",
                "Socket.io",
                "Tailwind",
              ]}
              demoLink="https://pomodly.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyl}
              isBlog={false}
              title="Planning Your Life"
              descriptions={[
                "● Developed a website using MERN stack.",
                "● Constructed an End-to-End backend system with Node.js, Express.js, MongoDB, CyberPanel and hosted on AWS EC2.",
                "● Configured server firewalls and disabled password based SSH and enabled key based login to protect servers from unauthorized access.",
              ]}
              technologies={[
                "JavaScript",
                "React",
                "Redux",
                "Node.js",
                "Express",
                "MongoDB",
                "AWS EC2",
                "Bootstrap",
              ]}
              ghLink="https://github.com/aleyaktas/planning-your-life"
              demoLink="https://pyl.aleynaaktas.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={showphotos}
              isBlog={false}
              title="Show Photos"
              descriptions={[
                "● It is a web platform shows photos by category.",
              ]}
              technologies={["React", "CSS", "Material UI"]}
              ghLink="https://github.com/aleyaktas/show-photos"
              demoLink="https://showphotos.aleynaaktas.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
