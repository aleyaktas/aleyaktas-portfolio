import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aleyna AKTAŞ </span>
            from <span className="purple"> Izmir, Turkey.</span>
            <br /> I graduated from Denizli Pamukkale University Computer
            Engineering. I like to improve myself and follow new technologies,
            read articles about them. So I'm familiar with a lot of technology
            and libraries.
            <br />
            <br />
          </p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
