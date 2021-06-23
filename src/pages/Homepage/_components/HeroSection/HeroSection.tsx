import React from "react";
import SocialMediaIcon from "../../../../components/SocialMediaIcon/SocialMediaIcon";
import { data } from "./HeroSection.data";
import "./HeroSection.scss";

const HeroSection = () => {
	return (
		<div className="hero-section">
			<div className="hero-section__container container">
				<div className="hero-section__tagline">
					<h3 className="hero-section__name">👋Hi, I'm Dhwani</h3>

					<h1 className="hero-section__oneliner">
						I <span>write</span> fun,
						<br />
						also code and run.
					</h1>
				</div>

				<div className="hero-section__socialIcons">
					{data.map((icondata) => (
						<SocialMediaIcon icon={icondata.icon} path={icondata.path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
