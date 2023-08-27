import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGoogle, CgWebsite } from "react-icons/cg";
import { BsApple } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.descriptions.map((item) => (
          <Card.Text style={{ textAlign: "start" }}>{item}</Card.Text>
        ))}
        <Card.Text style={{ textAlign: "start", textDecoration: "underline" }}>
          <strong>Technologies used:</strong>
        </Card.Text>
        <div
          className="
        d-flex
        justify-content-start
        flex-wrap
        "
        >
          {props.technologies.map((item, index) => (
            <Card.Text style={{ textAlign: "start" }}>
              {item + (props.technologies.length - 1 !== index ? "-" : "")}
            </Card.Text>
          ))}
        </div>
        <div
          className="
        d-flex
        justify-content-center
        flex-wrap
         gap-3
         mt-4
        "
        >
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.googlePlayLink && (
            <Button
              variant="primary"
              href={props.googlePlayLink}
              target="_blank"
            >
              <CgGoogle /> &nbsp;
              {"Google Play"}
            </Button>
          )}
          {props.appStoreLink && (
            <Button variant="primary" href={props.appStoreLink} target="_blank">
              <BsApple /> &nbsp;
              {"App Store"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Website"}
            </Button>
          )}
        </div>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
