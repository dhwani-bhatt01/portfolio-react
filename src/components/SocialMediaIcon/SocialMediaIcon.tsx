import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./SocialMediaIcon.scss";

interface SocialMediaTypes {
	icon: ReactNode;
	path: string;
}

const SocialMediaIcon = (props: SocialMediaTypes) => {
	const { icon, path } = props;

	return (
		<div className="icon">
			<Link
				to={{
					pathname: path,
				}}
				target="_blank"
			>
				{icon}
			</Link>
		</div>
	);
};

export default SocialMediaIcon;
