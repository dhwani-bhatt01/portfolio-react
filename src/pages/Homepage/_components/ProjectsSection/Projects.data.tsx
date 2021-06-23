import ProjectImg from "./../../../../../assets/crown-clothing.png";
import Button from "../../../../components/Button/Button";

export const cardData = [
	{
		projectImg: ProjectImg,
		projectName: "Crown Clothing",
		projectLabels: ["React", "Redux", "SASS", "Firebase"],
		projectDescription:
			"An e-commerce web app built using React, Redux and GraphQL. In this a customer can login, create account, explore various sections and can store the items in cart and make payment with an integrated payment gateway.",
		projectDemoBtn: <Button label="Demo" type="primary" />,
		projectViewCodeBtn: <Button label="View Code" type="secondary" />,
	},
];
