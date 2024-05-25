import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Образование"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="narxoz.jpg"
								alt="narxoz"
								className="work-image"
							/>
							<div className="work-title">Narxoz University</div>
							<div className="work-subtitle">
								Digital Managment & Design
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
