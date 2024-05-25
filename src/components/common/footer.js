import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Главная</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">О себе</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Проекты</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Статьи</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Контакты</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Laura.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
