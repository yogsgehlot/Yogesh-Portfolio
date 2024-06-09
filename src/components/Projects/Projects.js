import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency from "../../Assets/Projects/currency-converter.jpg";

import mystry from "../../Assets/Projects/mystry.png";
import webchat from "../../Assets/Projects/webchat.png";
import cinema from "../../Assets/Projects/cinema.png";

import blogapplication from "../../Assets/Projects/blogapplication.png";


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
              imgPath={blogapplication}
              isBlog={false}
              title="React Blog Application"
              description="My personal blog page build with React.js and Tailwind Css which takes the content from makdown files and renders it using Appwrite Backend."
              ghLink="https://github.com/yogsgehlot/MegaBlog-AppWrite-React"
              demoLink="https://mega-blog-app-write-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webchat}
              isBlog={false}
              title="Web Chat Application"
              description="Designed and implemented a responsive and interactive user interface with React.js, incorporating features such as chatrooms, message history, and user authentication."
              ghLink="https://github.com/yogsgehlot/Mern-Chat-App"
              demoLink="https://talkshpare.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mystry}
              isBlog={false}
              title="Mystry-Message Application"
              description=" Developed a comprehensive real-time anonymous messaging web application using the Next.js framework, leveraging modern web technologies like shadcn library to provide a seamless and responsive user experience with AI integreated."
              ghLink="https://github.com/yogsgehlot/MystryMessageNextjs"
              demoLink="https://mystry-message-nextjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="The Currency Converter API is an intuitive and interactive web application designed to provide accurate and real-time currency conversion between various global currencies. This project highlights my ability to integrate external APIs and develop user-friendly interfaces for financial applications."
              ghLink="https://github.com/yogsgehlot/curency-convertor-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinema}
              isBlog={false}
              title="Cinema Ticket Booking System"
              description="The Cinema Ticket Booking System is a comprehensive application developed in C++ that simulates the process of booking movie tickets. Utilizing file handling techniques, this project demonstrates my proficiency in C++ and my ability to manage persistent data storage effectively."
              ghLink="https://github.com/yogsgehlot/Cinema-Tickets-Booking-System-in-CPP-Using-file-handling"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
