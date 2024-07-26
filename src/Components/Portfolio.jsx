import React from "react";
import image from "../images/logos.png";

const imageAltText = "logos of different technologies and tools";
const projectList = [
	{
		title: "Github Profile",
		description:
			"Here you can see a list of my repositories. I have a variety of projects that showcase my skills.",
		url: "https://github.com/AngelZhang159",
	},
	{
		title: "My Android Apps",
		description: "Download my Android Apps and test them to see some of my abilities. (APK format)",
		url: "https://drive.google.com/drive/folders/1McI1sajPHDhO5x5abWJa7G2TDVH2wnYx?usp=sharing",
	},
	{
		title: "3D Portfolio",
		description: "My 3D portfolio showcasing all my works.",
		url: "https://angelzhang159.artstation.com/",
	},
];

const Portfolio = () => {
	return (
		<section className="padding" id="portfolio">
			<h2 style={{ textAlign: "center" }}>Portfolio</h2>
			<div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
				<div style={{ maxWidth: "40%", alignSelf: "center" }}>
					<img
						src={image}
						style={{ height: "90%", width: "100%", objectFit: "cover" }}
						alt={imageAltText}
					/>
				</div>
				<div className="container">
					{projectList.map((project) => (
						<div className="box" key={project.title}>
							<a href={project.url} target="_blank" rel="noopener noreferrer">
								<h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
							</a>
							<p className="small">{project.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
