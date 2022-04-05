import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../stylings/Footer.css";

const Footer = () => {
	return (
		<div className="footerContainer">
			<h3 className="FooterTitle">
				App by{" "}
				<Link to={"/about"} style={{ textDecorationColor: "black" }}>
					<span className="FooterTitleSpan">BASE</span>
				</Link>
			</h3>
		</div>
	);
};

export default Footer;
