import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTiktok,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/socials.css";

// Компонент SocialIcon
const SocialIcon = ({ icon, url, text }) => (
	<div className="social">
		<a href={url} target="_blank" rel="noreferrer">
			<div className="social-icon">
				<FontAwesomeIcon icon={icon} className="social-icon" />
			</div>
			<div className="social-text">{text}</div>
		</a>
	</div>
);

const Socials = () => {
	const { tiktok, github, linkedin, instagram } = INFO.socials;
	const { email } = INFO.main;

	return (
		<div className="socials">
			<SocialIcon icon={faTiktok} url={tiktok} text="Follow on TikTok" />
			<SocialIcon icon={faGithub} url={github} text="Follow on GitHub" />
			<SocialIcon icon={faLinkedin} url={linkedin} text="Follow on LinkedIn" />
			<SocialIcon icon={faInstagram} url={instagram} text="Follow on Instagram" />
			<div className="email">
				<div className="email-wrapper">
					<a href={`mailto:${email}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
