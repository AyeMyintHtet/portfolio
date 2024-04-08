import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tiktik from "../../Assets/Projects/tiktik.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>.
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently by myself. <br/> You can check my <strong className="purple">Real Company Experience</strong> from my CV Form.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiktik}
              isBlog={false}
              title="Tik Tik - Inspired From Tik Tok"
              description="This Project was inspired from Tik Tok. When the user logged in, user can upload video, give like, give comment etc. If not logged in, the user can only view the video and profile. "
              ghLink="https://github.com/AyeMyintHtet/toktik-clone"
              demoLink="https://toktik-clone-v2.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CRUD project"
              description="This is CRUD Project. For the frontend used ReactJS and for the backend used NodeJS,ExpressJS and for the database used Mysql. This project is admin panel that listing a people who can speak how many languages."
              ghLink="https://github.com/AyeMyintHtet/listing-who-can-speak-many-languages"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/AyeMyintHtet/bits-of-code"
              demoLink="https://bits-of-code-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="QuickNote.io"
              description="The purpose of this project is the user make note easily. In that project, you can create, marked success and delete todos. And then, you can create Nested Todos(recursive function) also."
              ghLink="https://github.com/AyeMyintHtet/nested-todos-list"
              demoLink="https://nested-todos-list.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Incompatible Food"
              description="This project is checking the incompatible food(Focus on Code)"
              ghLink="https://github.com/AyeMyintHtet/incompatibleFood"
              demoLink="https://incompatible-food-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Meeting.Io"
              description="This is the video call web app like 'google meet'. You can screen share, send msg and you can use all the same function like google meet. "
              ghLink="https://github.com/AyeMyintHtet/v-vcall-testt"
              demoLink='https://v-vcall-testt.vercel.app/'
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
