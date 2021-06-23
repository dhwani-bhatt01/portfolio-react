import React from "react";
import { data } from "./Footer.data";
import "./Footer.scss";
import SocialMediaIcon from "./../SocialMediaIcon/SocialMediaIcon";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<h2 className="footer__name">
					Dhwani <span>Bhatt</span>
				</h2>
				<div className="footer__icons">
					{data.map((iconData) => (
						<SocialMediaIcon icon={iconData.icon} path={iconData.path} />
					))}
				</div>
				<p className="footer__copyright container">
					© 2021 All rights reserved | Made with 💙 by Dhwani Bhatt
				</p>
			</div>
		</div>
	);
};

export default Footer;
