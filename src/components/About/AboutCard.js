import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yogesh Gehlot </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />I have completed my Bachelor of Engineering in Computer
            Science from
            <b className="purple"> Chandigarh University</b>, where I have
            maintained a CGPA of 8.20.
            <br />I am looking opportunity to bring my skills in{" "}
            <b className="purple">Web Development.</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Making music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
