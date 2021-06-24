import React from "react";
import TechLabels from "../../../../../components/TechLabels/TechLabels";
import Button from "../../../../../components/Button/Button";
import projectImage from "./../../../../../assets/crown-clothing.webp";
import { ReactComponent as GithubIcon } from "./../../../../../assets/github.svg";
import "./ProjectsCard.scss";

const ProjectsCard = () => {
  const lab = ["React", "Redux", "SASS", "Firebase"];

  return (
    <div className="projectcard">
      <div className="projectcard__projectImage">
        <img
          className="projectcard__projectImg"
          src={projectImage}
          alt="projectImage"
        />
      </div>
      <div className="projectcard__content">
        <div className="projectcard__title-container">
          <div className="projectcard__pseudo"></div>
          <h2 className="projectcard__title">Crown Clothing</h2>
        </div>

        <div className="projectcard__labels">
          {lab.map((label) => (
            <TechLabels labelName={label} />
          ))}
        </div>

        <p className="projectcard__description">
          An e-commerce web app built using React, Redux and GraphQL. In this a
          customer can login, create account, explore various sections and can
          store the items in cart and make payment with an integrated payment
          gateway.
        </p>
        <div className="projectcard__buttons">
          <Button label="Demo" type="primary" />
          <Button label="View Code" type="secondary" icon={<GithubIcon />} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
