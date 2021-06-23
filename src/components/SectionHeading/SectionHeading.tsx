import React from "react";
import { ReactComponent as ZigZag } from "./../../assets/zig-zag-line.svg";
import "./SectionHeading.scss";

interface PropsType {
	title: string;
}

const SectionHeading = (props: PropsType) => {
	const { title } = props;
	return (
		<div className="SectionHeading">
			<h1 className="SectionHeading__title">{title}</h1>
			<ZigZag className="SectionHeading__zigzag" />
		</div>
	);
};

export default SectionHeading;
