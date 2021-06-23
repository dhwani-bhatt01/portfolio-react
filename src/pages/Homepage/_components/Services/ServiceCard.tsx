import React, { ReactNode } from "react";

interface Props {
	CardIcon: ReactNode;
	CardHeading: string;
	CardContent: string;
}

export const ServiceCard = (props: Props) => {
	const { CardIcon, CardHeading, CardContent } = props;
	return (
		<div className="services__card">
			<div className="services__card-icon">{CardIcon}</div>
			<h4 className="services__card-heading">{CardHeading}</h4>
			<p className="services__card-content">{CardContent}</p>
		</div>
	);
};
