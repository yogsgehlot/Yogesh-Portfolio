import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've developed a passion for programming and believe I've gained
              some knowledge in it. 🤷‍♂️
              <br />
              <br />I have developed a diverse skill set in both
              <b className="purple"> frontend and backend </b>
              technologies. I am proficient in programming languages such as
              <b className="purple">
                {" "}
                C++, JavaScript, TypeScript, Java, and Python.{" "}
              </b>
              <br />
              <br />
              My expertise extends to frontend development using{" "}
              <b className="purple"> HTML, CSS, Tailwind, and React, </b> as
              well as backend development with{" "}
              <b className="purple"> Node.js, Next.js and Express.js. </b> I
              also have experience working with databases like{" "}
              <b className="purple"> MongoDB and SQL, </b> and I am well-versed
              in version control using{" "}
              <b className="purple"> Git and GitHub.</b>
              <br />
              <br />I eagerly utilize my enthusiasm for creating products with
              <b className="purple">Node.js,</b> along with modern JavaScript
              libraries and frameworks such as{" "}
              <b className="purple"> React.js and Next.js,</b> whenever I can.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact Me</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yogsgehlot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/yogsgehlot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yogsgehlot/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yogsgehlot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
