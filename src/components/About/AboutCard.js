import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aye Myint Htet </span>. I am <span className="purple">currently seeking the developer position that would fit my experiences.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            {/* <br /> */}
            Over 5 of experience in ReactJS frontend development, working on diverse projects that have honed my skills in<span className="purple"> React,JavaScript,Typescript,NextJs,ExpressJS and Nodejs etc..</span> Demonstrated success in leading and collaborating with cross-functional teams to deliver high-quality, user-friendly applications within deadlines. <br/> Proven ability to analyze project requirements, propose innovative solutions, and implement efficient and scalable frontend solutions. Strong communication skills, both verbal and written, enabling effective collaboration with team members and clients.. <br/><br/>
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aye Myint Htet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
