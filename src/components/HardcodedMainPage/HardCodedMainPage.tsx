import React from 'react';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import './HardCodedMainPage.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { HomepageCard } from './HomepageCard/HomepageCard';

type HardCodedMainPageProps = {
	a: () => void
}

type HeaderCard = {
	header: string,
	image: string,
	blurb: string,
	link: string,
	x?: number,
	y?: number,
	size?: number
}

const headerCards: HeaderCard[] = [
	{
		header: "Project Design",
		image: "https://2019.igem.org/wiki/images/9/92/T--Washington--Wetlab_and_Simulations.png",
		blurb: "After many design iterations, our team settled on a project joining wetlab and simulations together in an effort to create a biosensor combining a split-luciferase assay with chemically induced dimerization",
		link: "https://2019.igem.org/Team:Washington/Design",
		size: 200
	},

	{
		header: "Project Description",
		image: "https://2019.igem.org/wiki/images/7/73/T--Washington--Luciferase%2BNanobody_Depiction.png",
		blurb: "Immunosense focuses on the development of technologies to help scientists in research, medicine, and the biotechnology industry detect small molecules, which traditionally have been much more difficult to detect using biological assays than larger molecules.",
		link: "https://2019.igem.org/Team:Washington/Description",
		size: 150
	},

	{
		header: "Modeling",
		image: "https://2019.igem.org/wiki/images/2/27/T--Washington--ligand-docking.gif ",
		blurb: "Using measurements from the wetlab, the Washington iGEM simulations team developed a multi-scale model for our biosensor, analyzing both the large-scale kinetics and molecular dynamics of the system. This model was then used to suggest optimizations to our biosensor to improve its binding affinity.",
		link: "https://2019.igem.org/Team:Washington/Model",
		size: 150
	},

	{
		header: "Results",
		image: "https://2019.igem.org/wiki/images/9/9f/T--Washington--Mut_BLI_Global.jpg",
		blurb: "Our results from characterizing our nanobody luciferase biosensor and protein model verification.",
		link: "https://2019.igem.org/Team:Washington/Results",
		size: 200
	},

	{
		header: "Integrated Human Practices",
		image: "https://2019.igem.org/wiki/images/5/51/T--Washington--Immunosense-JPG.jpg",
		blurb: "Our Integrated Human Practices Team focused on obtaining critical feedback from experts in research, medicine, and bioengineering in order to help direct our project purpose and future directions. The suggestions we received from the interviews we conducted helped our sub teams optimize our biosensor.",
		link: "https://2019.igem.org/Team:Washington/Integrated_Human_Practices",
		size: 150
	},

	{
		header: "Collaborations",
		image: "https://2019.igem.org/wiki/images/f/fa/T--Washington--Meetup_General_2.jpg",
		blurb: "Our activities were focused on increasing ways for collaborations to occur, both locally and remotely. This resulted in our team bringing more opportunities for iGEM teams to connect in the local area, as well as giving international teams the chance to work closely with us to spread our work in their areas, and eventually through the globe.",
		link: "https://2019.igem.org/Team:Washington/Collaborations",
		size: 175
	},

	{
		header: "Public Engagement",
		image: "https://2019.igem.org/wiki/images/c/c5/T--Washington--EDD1.png",
		blurb: "Our educational outreach efforts were centered around the concept of accessibility. We wanted to promote equity by providing educational resources to underrepresented communities by creating a 200+ page interactive curriculum.",
		link: "https://2019.igem.org/Team:Washington/Public_Engagement",
		y: 0,
		size: 150
	},

	{
		header: "Team",
		image: "https://2019.igem.org/wiki/images/3/30/T--Washington--TeamPhotoCropped.jpeg",
		blurb: "Our interdisciplinary team consists of over 40 members spread across seven different subteams.",
		link: "https://2019.igem.org/Team:Washington/Team",
		size: 250,
		x: 25
	}
];

export const HardCodedMainPage: React.FC<HardCodedMainPageProps> = ({
	a
}) => {
	return <>
		<Fade>
			<div className="hcmp-bgdiv">
				<div className="hcmp-innerbgdiv"></div>
			</div>
			<div className="hcmp-titlewrapper">
				<Grid>
					<Row>
						<Col md={6}>
							<p>Detecting small molecules using a chemically-induced dimerization system.</p>
							<div className="wi-title">Welcome to</div>
							<div className="wi-title hcmp-titlename">Immunosense</div>
							<div className="wi-caption-2 hcmp-desclink">
								<a onClick={a} href={`https://2019.igem.org/Team:Washington/Description`}>Project Description &gt;</a>
							</div>
						</Col>
						<Col md={6}>
							{/** SIDE IMAGE GOES HERE */}
						</Col>
					</Row>
				</Grid>
			</div>
			<div className="hcmp-abstractwrapper">
				<Grid>
					<Row>
						<Col>
							<h1>Abstract</h1>
							<div className="hcmp-sep"></div>
							<p>
								Although biosensors are commonly used to detect many different molecules of interest, they cannot effectively detect small hydrophobic molecules in biological systems. We propose combining chemically induced dimerization (CID), in which two proteins dimerize only in the presence of a ligand, with a traditional luciferase assay to create a biosensor that luminesces when the desired molecule is introduced. Using molecule-specific nanobodies, we can design the two CID binders to attach to a wide variety of small molecules, even those that are challenging for conventional biosensors to detect. Through its specificity and ability to bind to small or hydrophobic molecules, the CID system overcomes problems that other biosensors face. As a proof-of-concept, we implemented an in vivo CID biosensor to detect the presence of cannabidiol. With the nanobody CID system, we hope to introduce a novel biosensor that can detect a variety of important small molecules across research, biotechnology, and medicine.
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
			<div className="hcmp-learn-more-wrapper">
				<Grid>
					<Row>
						{headerCards.map(headerCard => {
							return <Col md={6} style={{ marginBottom: 15 }}>
								<HomepageCard
									{...headerCard}
									a={a}
								/>
							</Col>
						})}
					</Row>
				</Grid>
			</div>
		</Fade>
	</>
}