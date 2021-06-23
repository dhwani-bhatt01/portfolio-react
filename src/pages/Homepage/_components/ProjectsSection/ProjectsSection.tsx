import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import ProjectsCard from "./_components/ProjectsCard";
import Button from "../../../../components/Button/Button";
import "./ProjectsSection.scss";

const ProjectsSection = () => {
	return (
		<div className="projects container">
			<SectionHeading title="Projects" />
			<div className="projects__cards">
				<ProjectsCard />
				<ProjectsCard />
			</div>
			<div className="projects__button">
				<Button label="View all Projects" type="large" />
			</div>
		</div>
	);
};

export default ProjectsSection;
