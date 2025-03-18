import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordrace from "../../Assets/Projects/wordrace.png";
import pomodly from "../../Assets/Projects/pomodly.png";
import newsapp from "../../Assets/Projects/newsApp.png";
import selfEng from "../../Assets/Projects/selfEnglish.png";
import kelibu from "../../Assets/Projects/kelibu.png";
import beautyDate from "../../Assets/Projects/beautydate.png";

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
              imgPath={selfEng}
              isBlog={false}
              title="Self English"
              descriptions={[
                "● Developed a comprehensive English learning application designed for users of all proficiency levels.",
                "● Integrated speech recognition and AI-powered assessments to help users improve their pronunciation and fluency.",
                "● Implemented roadmap feature to help users track their progress and set goals.",
              ]}
              technologies={[
                "TypeScript",
                "React Native",
                "Redux",
                "RevenueCat",
                "Firebase",
              ]}
              googlePlayLink="https://play.google.com/store/apps/details?id=com.phdakademi.selfenglish"
              appStoreLink="https://play.google.com/store/apps/details?id=com.phdakademi.selfenglish"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kelibu}
              isBlog={false}
              title="Kelibu"
              descriptions={[
                "● Developed a comprehensive English learning application designed for users of all proficiency levels.",
                "● Created 5 different games to help users improve their vocabulary, grammar, and listening skills.",
              ]}
              technologies={["TypeScript", "React Native", "Redux"]}
              googlePlayLink="https://play.google.com/store/search?q=kelibu&c=apps"
              appStoreLink="https://apps.apple.com/tr/app/kelibu-i-ngilizce-kelime-%C3%B6%C4%9Fren/id6484268631?l=tr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautyDate}
              isBlog={false}
              title="Beauty Date"
              descriptions={[
                "● Developed a mobile application allowing users to track product expiration dates with automated push notifications, improving efficiency in product usage and reducing waste.",
              ]}
              technologies={[
                "TypeScript",
                "React Native",
                "Redux",
                "Firebase",
                "StoryBook",
              ]}
              googlePlayLink="https://play.google.com/store/apps/details?id=com.opiaclab.beautydate"
            />
          </Col>

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
              googlePlayLink="https://play.google.com/store/apps/details?id=com.wordraceapp"
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
              imgPath={newsapp}
              isBlog={false}
              title="News App"
              descriptions={[
                "● It is a news application where the user can view the news, filter by category, add to favorites and search. User can dark mode the app and change the language of the app. Developed with MVVM pattern.",
              ]}
              technologies={[
                "Swift",
                "UIKit",
                "Firebase",
                "Alamofire",
                "Swift",
              ]}
              ghLink="https://github.com/aleyaktas/NewsApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
