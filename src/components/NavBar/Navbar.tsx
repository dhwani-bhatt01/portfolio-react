import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./Navbar.data";
import "./Navbar.scss";
import { ReactComponent as NavbarMenuIcon } from "../../assets/NavbarMenuIcon.svg";
import { ReactComponent as NavbarCloseIcon } from "../../assets/NavbarCloseIcon.svg";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const changeBackground = () => {
		console.log(window.scrollY);
		if (window.scrollY > 200) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		changeBackground();
		window.addEventListener("scroll", changeBackground);
	});

	return (
		<nav className={`navbar ${navbar || click ? "bgColor" : "bgTransparent"}`}>
			<div className="navbar__container container">
				<Link to="/">
					<h1 className="navbar__logo">Dhwani</h1>
				</Link>

				<ul className={click ? "navbar__list active" : "navbar__list"}>
					{NavItems.map((navdata) => (
						<Link
							key={navdata.index}
							to={navdata.path}
							onClick={closeMobileMenu}
						>
							<li className="navbar__item">{navdata.label}</li>
						</Link>
					))}
				</ul>

				<div className="navbar__menuIcon" onClick={handleClick}>
					{click ? (
						<NavbarCloseIcon className="navbar__closemenu" />
					) : (
						<NavbarMenuIcon
							className="navbar__hamburger"
							onClick={closeMobileMenu}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
