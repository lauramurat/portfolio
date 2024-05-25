import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							То, что я сделал, пытаясь оставить свой след во вселенной.
						</div>

						<div className="subtitle projects-subtitle">
							На протяжении многих лет я работал над множеством проектов и горжусь достигнутым прогрессом. Многие из этих проектов имеют открытый исходный код и доступны другим для изучения и внесения в них своего вклада. Если вас заинтересовал какой-либо из проектов, над которыми я работал, пожалуйста, ознакомьтесь с кодом и предложите любые улучшения или усовершенствования, которые вы можете иметь в виду. Сотрудничество с другими — отличный способ учиться и расти, и я всегда открыт для новых идей и отзывов.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
