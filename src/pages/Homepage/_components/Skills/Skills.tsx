import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import skillsImg from "./../../../../assets/skills.svg";
import { ReactComponent as ReactIcon } from "./../../../../assets/react.svg";
import { ReactComponent as TailwindIcon } from "./../../../../assets/tailwind.svg";
import { ReactComponent as GithubIcon } from "./../../../../assets/github.svg";
import { ReactComponent as GitIcon } from "./../../../../assets/git.svg";
import { ReactComponent as XdIcon } from "./../../../../assets/xd.svg";
import { ReactComponent as FigmaIcon } from "./../../../../assets/figma.svg";
import { ReactComponent as AiIcon } from "./../../../../assets/ai.svg";
import { ReactComponent as VscodeIcon } from "./../../../../assets/vscode.svg";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills container">
      <SectionHeading title="Skills" />
      <div className="skills__content">
        <img className="skills__skillsImg" src={skillsImg} alt="skillsImage" />
        <div className="skills__right-description">
          <p className="skills__description">
            I prefer working on different skills yet mastering a skill makes me
            more consistent and focused. I cope up easily with new technologies
            and tools in order to become more tech efficient. Here are some
            tools and technologies I prefer for making my work more prominent.
          </p>
          <div className="skills__icons">
            <ReactIcon className="skills__icon" />
            <TailwindIcon className="skills__icon" />
            <GithubIcon className="skills__icon" />
            <GitIcon className="skills__icon" />
            <XdIcon className="skills__icon" />
            <FigmaIcon className="skills__icon" />
            <AiIcon className="skills__icon" />
            <VscodeIcon className="skills__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
