import React from "react";
import cx from "classnames";
import "./Button.scss";

interface ButtonProps {
	type: string;
	label: string;
	icon?: any;
	onClick?: any;
}

export const Button = (props: ButtonProps) => {
	const { type, label, icon, onClick } = props;

	const classnames = cx(
		{
			"btn-primary": type === "primary",
			"btn-secondary": type === "secondary",
			"btn-large": type === "large",
		},
		"btn"
	);

	return (
		<button className={classnames} onClick={onClick}>
			{icon ? <div className="btn-icon">{icon}</div> : null}
			<span className="btn-label">{label}</span>
		</button>
	);
};

export default Button;
