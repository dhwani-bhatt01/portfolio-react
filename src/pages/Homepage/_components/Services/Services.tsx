import React from "react";
import { CardData } from "./Services.data";
import { ServiceCard } from "./ServiceCard";
import SectionHeading from "./../../../../components/SectionHeading/SectionHeading";
import "./Services.scss";

const Services = () => {
	return (
		<div className="services container">
			<SectionHeading title="Services" />
			<div className="services__cards">
				{CardData.map((data) => (
					<ServiceCard
						CardIcon={data.CardIcon}
						CardHeading={data.CardHeading}
						CardContent={data.CardContent}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
