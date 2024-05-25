import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Давайте свяжемся: способы связаться со мной
						</div>

						<div className="subtitle contact-subtitle">
							Благодарю вас за интерес к общению со мной. Буду рад вашим отзывам, вопросам и предложениям. Если у вас есть конкретный вопрос или комментарий, пожалуйста, напишите мне по адресу:
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							Я стараюсь отвечать на все сообщения в течение 24 часов, хотя в периоды занятости это может занять больше времени. Кроме того, для связи вы можете использовать контактную форму на моем сайте. Просто заполните необходимые поля, и я свяжусь с вами как можно скорее. Наконец, если вы предпочитаете общаться в социальных сетях, вы можете найти меня на{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							Я регулярно публикую обновления и общаюсь там со своими подписчиками, так что не стесняйтесь обращаться к нам. Еще раз спасибо за ваш интерес, и я с нетерпением жду вашего ответа!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
