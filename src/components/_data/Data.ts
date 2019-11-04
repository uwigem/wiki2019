import NavbarData, { NavbarType } from './NavbarData/NavbarData';
import { COLORS } from './Constants';
import { ContentSingularData } from './ContentSingularData';

export const VERSION = "1.1.0";

// to find starts of stuff, command f FINDMARKER

export default class Data {
	static getImgsToPrefetch(): string[] {
		return imgs;
	}

	static getContentData(): ContentData {
		return contentData;
	}

	static getDisplayConstants() {
		return displayConstants;
	}

	static getTeamData() {
		return teamData;
	}

	static getSponsorsData() {
		return sponsorsData;
	}

	static getNavbarDataTitleFromLink(pageTitle: string): string {
		let returnString = "";
		NavbarData.getData().forEach((navItem: NavbarType) => {
			if (navItem.links.indexOf(pageTitle) > -1 ||
				navItem.names.indexOf(pageTitle.split("/")[1]) > -1) {
				returnString = navItem.title;
			}
		});
		return returnString;
	}
}

const imgs: string[] = [
	"https://2019.igem.org/wiki/images/5/51/T--Washington--WilliamKwok.jpg",
	"https://2019.igem.org/wiki/images/c/c5/T--Washington--AnastasiaNicolov.jpg",
	"https://2019.igem.org/wiki/images/8/8e/T--Washington--AngieDang.jpg",
	"https://2019.igem.org/wiki/images/3/35/T--Washington--ChiTruong.jpg",
	"https://2019.igem.org/wiki/images/2/2f/T--Washington--ClaraToo.jpg",
	"https://2019.igem.org/wiki/images/6/61/T--Washington--DelaneyWilde.jpg",
	"https://2019.igem.org/wiki/images/8/8d/T--Washington--ElgeneQuitevis.jpg",
	"https://2019.igem.org/wiki/images/4/41/T--Washington--ElisaTruong.jpg",
	"https://2019.igem.org/wiki/images/f/f2/T--Washington--EllenXu.jpg",
	"https://2019.igem.org/wiki/images/9/9e/T--Washington--EricYeh.jpg",
	"https://2019.igem.org/wiki/images/5/52/T--Washington--IshiraParikh.jpg",
	"https://2019.igem.org/wiki/images/8/81/T--Washington--JayYung.jpg",
	"https://2019.igem.org/wiki/images/5/53/T--Washington--JenniferTao.jpg",
	"https://2019.igem.org/wiki/images/7/72/T--Washington--JerryCao.jpg",
	"https://2019.igem.org/wiki/images/0/08/T--Washington--JoanneWong.jpg",
	"https://2019.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
	"https://2019.igem.org/wiki/images/6/65/T--Washington--MonetToschBerneburg.jpg",
	"https://2019.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png",
	"https://2019.igem.org/wiki/images/8/8b/T--Washington--AllisonLee.jpg",
	"https://2019.igem.org/wiki/images/6/67/T--Washington--AngelWong.jpg",
	"https://2019.igem.org/wiki/images/e/ef/T--Washington--KarenImmendorf.jpg",
	"https://2019.igem.org/wiki/images/b/b6/T--Washington--SidneyChan.jpg",
	"https://2019.igem.org/wiki/images/2/22/T--Washington--SijiaZhang.jpg",
	"https://2019.igem.org/wiki/images/5/5e/T--Washington--MaliaClark.jpg",
	"https://2019.igem.org/wiki/images/a/ac/T--Washington--NatalieMurren.jpg",
	"https://2019.igem.org/wiki/images/d/d2/T--Washington--GraceKim.jpg",
	"https://2019.igem.org/wiki/images/2/24/T--Washington--NiteshChetry.jpg",
	"https://2019.igem.org/wiki/images/9/9d/T--Washington--QuocTran.jpg",
	"https://2019.igem.org/wiki/images/e/ed/T--Washington--VarunSridhar.jpg",
	"https://2019.igem.org/wiki/images/3/31/T--Washington--VeraOkolo.jpg",
	"https://2019.igem.org/wiki/images/d/d3/T--Washington--VivianHuynh.jpg",
	"https://2019.igem.org/wiki/images/e/e2/T--Washington--HannahCheung.jpg",
	"https://2019.igem.org/wiki/images/4/43/T--Washington--MaxZhou.jpg",
	"https://2019.igem.org/wiki/images/d/d8/T--Washington--BrianHong.jpg",
	"https://2019.igem.org/wiki/images/5/51/T--Washington--LauraFreeman.jpg"
];

export type ContentHashMapping = {
	// If the key doesn't exist, it is possible for it to be undefined.
	[idx: string]: ContentSingularData | undefined
}

export type ContentPageData = {
	hasSidebar: boolean
	contentOrder?: string[]
	content?: ContentHashMapping
	MISC?: string
}

export type ContentData = {
	[idx: string]: ContentPageData
}

export type PageSpecificColors = {
	[idx: string]: {
		primaryColor: string,
		secondaryColor: string
	}
}

export type DisplayConstants = {
	primaryColor: string,
	secondaryColor: string,
	globalColor: boolean,
	pageSpecificColors: PageSpecificColors,
	logo: string,
	buttonHeight: string
}

export type TeamData = {
	NAME: string,
	ROLE: string,
	PICTURE: string,
	LINKEDIN?: string,
	GITHUB?: string,
	WEBSITE?: string,
	FILTER: string,
	BIO: string,
	CUSTSIZE?: number,
	XPOS?: number,
	YPOS?: number
}[]

export type SponsorsData = {
	NAME: string,
	PICTURE: string,
	FILTER: string,
	XPOS?: number,
	YPOS?: number,
	CUSTSIZE?: number,
	LINK: string,
	BIO: string,
	SUBTEXT: string
}[];

const sponsorsData: SponsorsData = [
	{
		NAME: "UW Paul G. Allen School of Computer Science and Engineering",
		PICTURE: "https://2019.igem.org/wiki/images/1/1c/T--Washington--CSELogo.png",
		FILTER: "Diamond",
		LINK: "https://www.cs.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Biochemistry",
		PICTURE: "https://2019.igem.org/wiki/images/8/88/T--Washington--BioChemLogo.png",
		FILTER: "Diamond",
		LINK: "https://depts.washington.edu/biowww/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "Institute for Protein Design",
		PICTURE: "https://2019.igem.org/wiki/images/c/c7/T--Washington--IPDLogo.png",
		FILTER: "Gold",
		LINK: "https://www.ipd.uw.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW College of Engineering",
		PICTURE: "https://2019.igem.org/wiki/images/c/c7/T--Washington--COELogo.png",
		FILTER: "Gold",
		LINK: "https://www.engr.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "PVP Biologics",
		PICTURE: "https://2019.igem.org/wiki/images/5/50/T--Washington--MSELogo.png",
		FILTER: "Gold",
		LINK: "https://www.pvpbio.com/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Biology",
		PICTURE: "https://2019.igem.org/wiki/images/5/54/T--Washington--BioLogo.png",
		FILTER: "Silver",
		LINK: "https://www.biology.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Chemistry",
		PICTURE: "https://2019.igem.org/wiki/images/5/58/T--Washington--ChemLogo.png",
		FILTER: "Silver",
		LINK: "http://depts.washington.edu/chem/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Bioengineering",
		PICTURE: "https://2019.igem.org/wiki/images/f/f4/T--Washington--BioELogo.png",
		FILTER: "Silver",
		LINK: "https://bioe.uw.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Microbiology",
		PICTURE: "https://2019.igem.org/wiki/images/0/02/T--Washington--MicroBioLogo.png",
		FILTER: "Bronze",
		LINK: "https://microbiology.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "UW Department of Applied Math",
		PICTURE: "https://2019.igem.org/wiki/images/4/41/T--Washington--AppliedMathLogo.png",
		FILTER: "Bronze",
		LINK: "https://amath.washington.edu/",
		BIO: "",
		SUBTEXT: ""
	},
	{
		NAME: "Promega",
		PICTURE: "https://2019.igem.org/wiki/images/8/84/T--Washington--Promega.png",
		FILTER: "Bronze",
		LINK: "https://www.promega.com",
		BIO: "",
		SUBTEXT: ""
	}
];

// FINDMARKER TEAM DATA

const teamData: TeamData = [
	{
		NAME: "William Kwok",
		ROLE: "Web Development Lead",
		PICTURE: "https://2019.igem.org/wiki/images/5/51/T--Washington--WilliamKwok.jpg",
		LINKEDIN: "https://linkedin.com/in/william-w-kwok",
		GITHUB: "https://github.com/kwokwilliam",
		WEBSITE: "https://williamk.info/?q=igem19",
		FILTER: "Web Dev, Leadership",
		BIO: "Coming from tropical Hawaii, William is a current senior obtaining a BS in Informatics. His focus on the team was leading the web development team to produce the team Wiki and scaling internal tooling for future development. He currently is a teaching assistant for Server Side Development, the Director of IT on the Informatics Undergraduate Association, and interned at Qualtrics this past summer. In his spare time, he enjoys playing video games, programming side projects, and going bouldering."
	},
	{
		NAME: "Anastasia Nicolov",
		ROLE: "Adviser",
		PICTURE: "https://2019.igem.org/wiki/images/c/c5/T--Washington--AnastasiaNicolov.jpg",
		FILTER: "Adviser",
		BIO: "Anastasia Nicolov is a bioreactor scientist at Just Biotherapeutics, a drug manufacturing company based in Seattle, WA. She graduated from the University of Washington in 2017 with a B.S. in Bioengineering and a Bachelor's of Music in Violin Performance. An advisor for both SoundBio iGEM and Team Washington, this is her sixth year being involved in iGEM and attending the Jamboree. Outside of work and iGEM, she enjoys playing in local orchestras, running her Etsy jewelry business, and traveling with her family."
	},
	{
		NAME: "Angie Dang",
		ROLE: "Design",
		PICTURE: "https://2019.igem.org/wiki/images/8/8e/T--Washington--AngieDang.jpg",
		FILTER: "Design",
		BIO: "Angie is a Washington native who recently graduated from the University of Washington with a double major in Biochemistry and Chemistry. After joining iGEM last year, she returned to help out with the Design team. She's an aspiring pharmacy student who spends her free time making digital art and watching mukbang videos."
	},
	{
		NAME: "Chi Truong",
		ROLE: "Fundraising Lead, Simulations, Design",
		PICTURE: "https://2019.igem.org/wiki/images/3/35/T--Washington--ChiTruong.jpg",
		FILTER: "Leadership, Simulations, Design",
		LINKEDIN: "https://www.linkedin.com/in/chi-truong-241461133/",
		BIO: "Born and raised in Vietnam, Chi Truong is currently a Junior in Biochemistry at the University of Washington. She came to UW iGEM to explore research and meet new people. She focuses on funding for the team. She also works with Simulations team to generate models using Rosetta and PyMOL. In her free time, she enjoys cooking, listening to music and reading history books.",
		CUSTSIZE: 110
	},
	{
		NAME: "Clara Too",
		PICTURE: "https://2019.igem.org/wiki/images/2/2f/T--Washington--ClaraToo.jpg",
		ROLE: "Design Lead, Fundraising",
		FILTER: "Design, Leadership, Fundraising",
		WEBSITE: "https://tooc.myportfolio.com/",
		BIO: "Clara Too is the UW iGEM Design Lead. She is an Interaction Design junior with an interest in exploring the intersection between science, medicine, and design. She is also involved with InterVarsity Undergrad Christian fellowship as a small group leader, and enjoys connecting with people on a deeper level. Other hobbies she has include playing the piano and guitar, doodling, and taking naps. Find her work below."
	},
	{
		NAME: "Delaney Wilde",
		PICTURE: "https://2019.igem.org/wiki/images/6/61/T--Washington--DelaneyWilde.jpg",
		ROLE: "Simulations, Design",
		FILTER: "Simulations, Design",
		BIO: "Delaney is a sophomore majoring in Bioengineering and minoring in Math. She joined iGEM to learn about molecular modeling, and on the simulations team, she used Rosetta to simulate protein structure. She was also responsible for designing graphics for the wiki and the materials for the industry panel, Sit Down with Synbio. If she has free time, she enjoys swimming and baking pies."
	},
	{
		NAME: "Elgene Quitevis",
		PICTURE: "https://2019.igem.org/wiki/images/8/8d/T--Washington--ElgeneQuitevis.jpg",
		ROLE: "Lab Scientist",
		FILTER: "Wetlab",
		BIO: "Elgene is a senior studying Molecular, Cellular & Developmental Biology and Biochemistry. He enjoys a wide variety of things like geeking out on all STEM-related things especially relating to the intersection between biology, technology, and engineering as well as conducting his own research outside of iGEM regarding somatosensory development in Zebrafish. When he’s not in school or in the lab, he also enjoys hanging out with friends, playing videogames, browsing the internet and among other things, collecting or sending memes to his friends.",
		LINKEDIN: "https://www.linkedin.com/in/elgene-john-quitevis-663746150"
	},
	{
		NAME: "Elisa Truong",
		PICTURE: "https://2019.igem.org/wiki/images/4/41/T--Washington--ElisaTruong.jpg",
		ROLE: "Web Developer",
		FILTER: "Web Dev",
		BIO: "Born in Redmond, raised in the birthplace of Costco (Kirkland), Elisa is a senior studying Informatics with a focus on software dev, HCI, and bioinformatics. She is a part of the web development team. She enjoys watching Netflix's, illustrating, and eating.",
		LINKEDIN: "https://linkedin.com/in/elisa-truong/",
	},
	{
		NAME: "Ellen Xu",
		PICTURE: "https://2019.igem.org/wiki/images/f/f2/T--Washington--EllenXu.jpg",
		BIO: "Ellen was born and raised in Beijing and she is currently a junior majoring in Biochemistry. She joined iGEM to learn wetlab techniques and explore more about synthetic Biology. Her role in iGEM is working in lab and together organizing the outreach events. In her spare time, she enjoys cooking, watching movies, and traveling.",
		ROLE: "Lab Scientist, Outreach",
		FILTER: "Outreach, Wetlab"
	},
	{
		NAME: "Eric Yeh",
		PICTURE: "https://2019.igem.org/wiki/images/9/9e/T--Washington--EricYeh.jpg",
		BIO: "Eric is a sophomore majoring in Computer Science and minoring in Neural Computation/Engineering. As a member of iGEM, he created simulations in Rosetta to improve protein design and helped develop a synthetic biology activity booklet/audiobook. In his free time, he enjoys playing violin and video games.",
		ROLE: "Outreach, Simulations",
		FILTER: "Outreach, Simulations"
	},
	{
		NAME: "Ishira Parikh",
		PICTURE: "https://2019.igem.org/wiki/images/5/52/T--Washington--IshiraParikh.jpg",
		BIO: "Ishira is a third year undergraduate student majoring in molecular biology and disability studies. This year, Ishira was primarily responsible for heading the development of the accessible synthetic biology curriculum. Outside of iGEM and her other academic responsibilities, Ishira enjoys photography editing, hiking, visual arts, and listening to live music.",
		ROLE: "Public Education Lead",
		FILTER: "Outreach, Leadership"
	},
	{
		NAME: "Jay Yung",
		PICTURE: "https://2019.igem.org/wiki/images/8/81/T--Washington--JayYung.jpg",
		BIO: "In his third year at the University of Washington, Jay is a plant biology major hoping to pursue a career in research. This is his second year on Washington iGEM and he has enjoyed the challenges associated with leading this years project. In his free time he enjoys playing music, dancing, watching performances, obsessing over world news, and looking at plants.",
		ROLE: "Project Manager, Wetlab Lead",
		FILTER: "Wetlab, Leadership"
	},
	{
		NAME: "Jennifer Tao",
		PICTURE: "https://2019.igem.org/wiki/images/5/53/T--Washington--JenniferTao.jpg",
		BIO: "Coming from XInjiang, China. Jennifer is currently a sophomore studying Computer Science. She focuses on programming the Wiki editor with the Web Development team. In her spare time, she enjoys painting, dancing tango, and playing card games.",
		GITHUB: "https://github.com/jentao",
		LINKEDIN: "https://www.linkedin.com/in/jennifer-tao-5bba31147/",
		ROLE: "Web Developer",
		FILTER: "Web Dev"
	},
	{
		NAME: "Jerry Cao",
		PICTURE: "https://2019.igem.org/wiki/images/7/72/T--Washington--JerryCao.jpg",
		BIO: "Jerry is a sophomore majoring in Computer Science. This year, Jerry helped organize the team as the Operations Manager and worked on the wetlab aspect of the project. Outside of iGEM, Jerry enjoys listening to music, playing tennis, and working on fabrication projects. ",
		ROLE: "Operations Manager, Fundraising, Lab Scientist",
		FILTER: "Leadership, Wetlab"
	},
	{
		NAME: "Joanne Wong",
		PICTURE: "https://2019.igem.org/wiki/images/0/08/T--Washington--JoanneWong.jpg",
		BIO: "Joanne is currently a senior studying Chemical Engineering with a focus area in Bio & Biomedical Materials, Interfaces and Systems with a minor in Applied Mathematics. Coming from Hong Kong, she never had the chance to pursue her interest in science but finding out about the iGEM team allowed her to achieve that. Being a part of the iGEM team has not only allowed her to see if research is right for her, but also has allowed her to meet so many people with similar interests. This experience has only further confirmed that she would love to continue to work in the field of research in the near future.",
		LINKEDIN: "https://linkedin.com/in/joanneytwong",
		ROLE: "Lab Manager",
		FILTER: "Wetlab, Leadership"
	},
	{
		NAME: "Shean Fu Phen",
		PICTURE: "https://2019.igem.org/wiki/images/e/e0/T--Washington--SheanPham.jpg",
		BIO: "Shean Fu is a sophomore studying Physiology at the University of Washington. He is part of both wetlab and outreach in a bid to help translate the complicated science into something much easier to understand. Outside of lab he does a lot of archery and Wushu, as well as filming dance covers for a dance team.",
		ROLE: "Outreach, Lab Scientist",
		FILTER: "Outreach, Wetlab"
	},
	{
		NAME: "Monet Tosch-Berneburg",
		PICTURE: "https://2019.igem.org/wiki/images/6/65/T--Washington--MonetToschBerneburg.jpg",
		BIO: "Monet Tosch-Berneburg is an intended bio-chemistry major with a bioethics minor. She will be perusing an evolutionary genetics PhD. Currently, she is working with Washington iGEM's outreach subteam to help introduce young students to synthetic biology.",
		ROLE: "Outreach",
		FILTER: "Outreach"
	},
	{
		NAME: "Pacy Wu",
		PICTURE: "https://2019.igem.org/wiki/images/6/67/T--Washington--PacyWu.jpg",
		BIO: "Pacy was born and raised in Taiwan. She is currently a sophomore intending to major in computer science. In iGEM, she was involved with the simulations and fundraising team. During her free time, she enjoys watching TV shows, listening to music, and hanging out with friends.",
		ROLE: "Fundraising, Simulations",
		FILTER: "Fundraising, Simulations"
	},
	{
		NAME: "Allison Lee",
		PICTURE: "https://2019.igem.org/wiki/images/8/8b/T--Washington--AllisonLee.jpg",
		BIO: "Allison is a fourth-year undergraduate student studying Informatics. She was on the web development subteam and helped create the wiki. Outside of iGEM, she enjoys baking, hiking, and bouldering.",
		ROLE: "Web Developer",
		FILTER: "Web Dev"
	},
	{
		NAME: "Angel Wong",
		PICTURE: "https://2019.igem.org/wiki/images/6/67/T--Washington--AngelWong.jpg",
		BIO: "Angel is a senior at the University of Washington obtaining a B.S in Bioengineering and a B.S. in Biochemistry. She has been involved in iGEM her since her freshman year, serving as a presenter for the 2017 season and project administrative lead for the 2018 season. She is currently an adviser for the team and provides guidance for training members, staying organized, and navigating the iGEM competition.",
		ROLE: "Adviser",
		FILTER: "Adviser",
		LINKEDIN: "https://www.linkedin.com/in/angeltanwong/"
	},
	{
		NAME: "Karen Immendorf",
		PICTURE: "https://2019.igem.org/wiki/images/e/ef/T--Washington--KarenImmendorf.jpg",
		BIO: "Karen is a 4th year student at UW majoring in Molecular, Cellular, and Developmental Biology. She is currently work in the Center for Integrative Brain Research of Seattle Children's Research Institute in a lab that focuses on uncovering how gene mutations affect protein machinery in the glutamate synapse which may ultimately lead to autism spectrum disorders. She is interested the potential applications of Washington iGEM's project across fields of Research, Medicine, and Biotechnology and learning more about product development through speaking with stakeholders in these fields.",
		ROLE: "Integrated Human Practices Lead, Fundraising, Presenter",
		FILTER: "Integrated Human Practices, Fundraising, Presenters, Leadership",
		LINKEDIN: "https://www.linkedin.com/in/karenimmendorf/"
	},
	{
		NAME: "Sidney Chan",
		BIO: "Sidney is a 3rd year student at UW who is majoring in Biochemistry and has a strong interest in pursuing research in drug delivery systems and novel therapeutics. She became interested in the UW iGEM team’s project after learning more about the field of synthetic biology and its intersection with medicine and biotechnology, and joined the Business team to learn more about the considerations that go into marketing and managing a product with biotechnological applications.",
		PICTURE: "https://2019.igem.org/wiki/images/b/b6/T--Washington--SidneyChan.jpg",
		ROLE: "Integrated Human Practices",
		FILTER: "Integrated Human Practices"
	},
	{
		NAME: "Sijia Zhang",
		BIO: "Sijia is a Junior at the University of Washington that is majoring in Bioengineering. He is interested in the development of stem cell engineering and synthetic biology. Currently, He is working in the Kwon lab at the University of Washington. He has joined the business team to explore the market of current biotechnology that is related to what he is studying and researching on.",
		PICTURE: "https://2019.igem.org/wiki/images/2/22/T--Washington--SijiaZhang.jpg",
		ROLE: "Integrated Human Practices",
		FILTER: "Integrated Human Practices"
	},
	{
		NAME: "Malia Clark",
		BIO: "Malia is a third year undergraduate majoring in Biochemistry or Molecular, Cellular & Developmental Biology. Her interest in the biotechnology field and gene-editing technologies, as well as the idea of working alongside other undergraduates drew her to iGEM, where she joined the Wetlab subteam in hopes of learning additional lab techniques and developing research skills. Outside of iGEM, she enjoys playing tennis, video games, ping pong, hiking, and reading.",
		PICTURE: "https://2019.igem.org/wiki/images/5/5e/T--Washington--MaliaClark.jpg",
		ROLE: "Lab Scientist",
		FILTER: "Wetlab"
	},
	{
		NAME: "Natalie Murren",
		PICTURE: "https://2019.igem.org/wiki/images/a/ac/T--Washington--NatalieMurren.jpg",
		BIO: "Natalie is a Sophomore planning to major in Biochemistry. This year is her first year being apart of iGEM and the wetlab subteam. She has had the opportunity to learn about basic lab techniques while also running experiments and contributing to a bigger project. In the future she plans to learn even more about synthetic biology and its applications.",
		ROLE: "Lab Scientist",
		FILTER: "Wetlab"
	},
	{
		NAME: "Grace Kim",
		PICTURE: "https://2019.igem.org/wiki/images/d/d2/T--Washington--GraceKim.jpg",
		BIO: "Born and raised in the Greater Seattle Area, Grace is currently a junior majoring in Bioengineering. She joined iGEM to explore synthetic biology and meet new people. Besides researching, she enjoys learning about immunotherapy and food science, volunteering, hanging out with friends, and trying new foods.",
		ROLE: "Lab Scheduler",
		FILTER: "Wetlab, Leadership"
	},
	{
		NAME: "Nitesh Chetry",
		PICTURE: "https://2019.igem.org/wiki/images/2/24/T--Washington--NiteshChetry.jpg",
		BIO: "Nitesh is currently a junior pursuing a B.S. in Informatics. This year, he worked on the Web Development team to help build widgets that other team members used to upload data to the wiki site, and he also improved tools to help the content uploading process. Outside of iGEM, Nitesh works part time as a Web Developer for the University of Washington’s Student Technology Fee Program.",
		LINKEDIN: "https://www.linkedin.com/in/niteshchetry/",
		GITHUB: "https://github.com/niteshchetry",
		ROLE: "Web Developer",
		FILTER: "Web Dev"
	},
	{
		NAME: "Quoc Tran",
		PICTURE: "https://2019.igem.org/wiki/images/9/9d/T--Washington--QuocTran.jpg",
		BIO: "Quoc is a Junior at the University of Washington majoring in Biochemistry alongside a minor in Real Estate. He is currently participating in a research project through Washington iGEM in which they hope to develop a biosensor using chemically induced dimerization (CID) system. The project reflects his interests in understanding how everything works in tandem, not limited to just protein interactions, in creating more practical and effective products that will help people studying the complex nature around us.",
		LINKEDIN: "https://www.linkedin.com/in/quocktran/",
		ROLE: "Lab Scientist, Fundraising, Treasurer",
		FILTER: "Wetlab, Fundraising, Leadership"
	},
	{
		NAME: "Varun Sridhar",
		PICTURE: "https://2019.igem.org/wiki/images/e/ed/T--Washington--VarunSridhar.jpg",
		BIO: "Originally from Michigan, Varun is a junior majoring in Molecular, Cellular, and Developmental Biology. His main contributions to the team this season have been working on our project in the Wetlab as well as presenting at the Jamboree. When he isn't working in iGEM, Varun can be found researching asymmetric cell division in fruit fly neuroblasts or running through Seattle's beautiful streets.",
		ROLE: "Lab Scientist, Presenter",
		FILTER: "Wetlab, Presenters"
	},
	{
		NAME: "Vera Okolo",
		PICTURE: "https://2019.igem.org/wiki/images/3/31/T--Washington--VeraOkolo.jpg",
		BIO: "Vera is a senior at the University of Washington double majoring in Molecular, Cellular, & Developmental Biology and Medical Anthropolgy & Global Health. Her role in iGEM was the taking part in the wet lab component of our team. In her spare moments of free team time, she reads any and all genres of books, bakes macarons, and practices singing and playing the piano.",
		ROLE: "Fundraising",
		FILTER: "Fundraising"
	},
	{
		NAME: "Vivian Huynh",
		PICTURE: "https://2019.igem.org/wiki/images/d/d3/T--Washington--VivianHuynh.jpg",
		BIO: "Vivian is a third year undergraduate student, majoring in Materials Science and Engineering. As a member of IGEM, she helped develop outreach curriculum for the Synthetic Biology Activity booklet and helped create simulation models using Tellurium. In her free time, she enjoys 3D printing and spending time with family and friends.",
		ROLE: "Outreach",
		FILTER: "Outreach"
	},
	{
		NAME: "Hannah Cheung",
		BIO: "Hannah is a current junior at the University of Washington majoring in Computer Science. She has been actively working on iGEM through collaborating with other iGEM teams globally, making kinetic models, increasing the accessibility of the outreach curriculum, and presenting at the Jamboree this year. When not tutoring students in Python, Hannah enjoys dancing, figure skating, watching sci-fi TV shows and movies, and listening to K-pop music.",
		PICTURE: "https://2019.igem.org/wiki/images/e/e2/T--Washington--HannahCheung.jpg",
		ROLE: "Collaborations Lead, Outreach, Simulations, Presenter",
		FILTER: "Collaborations, Outreach, Simulations, Presenters, Leadership",
		LINKEDIN: "https://www.linkedin.com/in/hannah-c-b18967139/"
	},
	{
		NAME: "Max Zhou",
		BIO: "Max is from Hangzhou, China and is currently a junior in computer science and informatics. He worked on the wiki editing tools in the web development team. Outside of iGEM he enjoys cooking and Ping Pong.",
		PICTURE: "https://2019.igem.org/wiki/images/4/43/T--Washington--MaxZhou.jpg",
		ROLE: "Web Developer",
		FILTER: "Web Dev",
		GITHUB: "https://github.com/zhouyifan0904",
		LINKEDIN: "https://www.linkedin.com/in/max-zhou-99913217a/"
	},
	{
		NAME: "Brian Hong",
		PICTURE: "https://2019.igem.org/wiki/images/d/d8/T--Washington--BrianHong.jpg",
		BIO: "Brian is a second year University of Washington student planning to major in electrical engineering and neuroscience. He joined iGEM to learn more about synthetic biology and its potential applications. Along the way, he has acquired many valuable lab research skills. Outside of iGEM, he enjoys writing, reading, film, and practicing kendo.",
		ROLE: "Lab Scientist, Fundraising",
		FILTER: "Wetlab, Fundraising"
	},
	{
		NAME: "Laura Freeman",
		PICTURE: "https://2019.igem.org/wiki/images/5/51/T--Washington--LauraFreeman.jpg",
		BIO: "Laura is a senior studying informatics and human-computer interaction. Her focus was consulting with the web development team on UI and UX, and she created the design guidelines for this year's wiki. Right now, she also works part time as a product designer for a growing commute benefits provider called Luum. She's excited to be graduating in the end of 2019!",
		ROLE: "Web Developer",
		FILTER: "Web Dev",
		LINKEDIN: "http://www.linkedin.com/in/lxfreeman"
	},
	{
		NAME: "Simran Sidhu",
		PICTURE: "https://2019.igem.org/wiki/images/4/4d/T--Washington--SimranSidhu.jpg",
		BIO: "Simran is a sophomore intending to major in bioengineering. This year, Simran was primarily responsible for organizing outreach events with schools and the community and hosting Sit Down with Synbio. Outside of iGEM and her other academic responsibilities, Simran is an avid runner and enjoys exploring the trails of the Pacific Northwest.",
		ROLE: "Public Engagement Lead, Lab Scientist, Outreach",
		FILTER: "Leadership, Integrated Human Practices, Outreach, Wetlab"
	},
	{
		NAME: "Joshua Ip",
		PICTURE: "https://2019.igem.org/wiki/images/b/bb/T--Washington--JoshuaIp.jpg",
		BIO: "Joshua Ip is a computer science major with a background in bioengineering. After iGEM, he plans to pursue software engineering.",
		ROLE: "Simulations Lead",
		FILTER: "Leadership, Simulations"
	},
	{
		NAME: "Ed van Bruggen",
		BIO: "Originally from the bay area, Ed is now a junior at UW pursuing a major in physics. He was a lead for the Simulations team, where he taught computation methods for understanding biological systems with tools such as Rosetta and Tellurium. When he's not staying up all night programming you can find him playing music or cooking.",
		PICTURE: "https://2019.igem.org/wiki/images/e/e1/T--Washington--EdvanBruggen.jpg",
		ROLE: "Simulations Lead",
		FILTER: "Simulations, Leadership"
	},
	{
		NAME: "Yoshi Goto",
		BIO: "Yoshi graduated in 2018 from the University of Washington with a B.S. in Bioengineering and a minor in Applied Mathematics, specializing in Synthetic and Systems Biology. He has been involved in iGEM for four years through team Washington, starting as a team member and moving through different positions. He now works as a Director of Operations at SoundBio Lab, Seattle's Community Lab. He is also an adviser for the SoundBio high school team. He credits iGEM as a career changer that led him to focus on synthetic and system biology, and to be involved in the DIYBio world. He is also actively involved in After iGEM Committees, and represented the iGEM Foundation as a Representative at SynBioBeta 2019. He believes that iGEM can change students' lives and foster innovation in an exciting field of biotechnology.",
		PICTURE: "https://2019.igem.org/wiki/images/c/c1/T--Washington--YoshiGoto.jpg",
		ROLE: "Adviser",
		FILTER: "Adviser",
		LINKEDIN: "https://www.linkedin.com/in/yoshigoto/"
	},
	{
		NAME: "Karl Anderson",
		PICTURE: "https://2019.igem.org/wiki/images/e/e1/T--Washington--KarlAnderson.jpg",
		BIO: "Karl is a senior studying Biochemistry and Molecular Biology. This year he assisted the wetlab and project development teams to help design the project and review lab work. He has previously been a wetlab member and project manager. Outside of iGEM, he is a researcher in the Lidstrom Lab at UW, where he is engineering enzymes to develop novel carbon assimilation pathways in bacteria.",
		LINKEDIN: "https://www.linkedin.com/in/karlbanderson/",
		ROLE: "Adviser",
		FILTER: "Adviser"
	},
	{
		NAME: "Dr. Herbert Sauro",
		BIO: "Dr. Sauro’s lab has been involved in a number of areas in systems as well as synthetic biology. He imitated the development of SBOL, the synthetic biology open language which is becoming the de facto language for describing synthetic designs. In systems biology he has developed a number of software tools, and standards most recently a Python based kit called Tellurium. He was cofounder of the SBML development teach. His modeling research involves developing new robust methods to develop more reliable predictive models that can simulate diseases such as cancer. Recently, he was appointed to lead a large Center for Reproducible Biomedical Modeling which was also recently awarded by the NIH.",
		PICTURE: "https://2019.igem.org/wiki/images/8/8f/T--Washington--HerbertSauro.jpg",
		WEBSITE: "https://www.sys-bio.org/",
		ROLE: "University of Washington Department of Bioengineering",
		FILTER: "PIs",
		YPOS: 0.01
	},
	{
		NAME: "Dr. Liangcai Gu",
		BIO: "Dr. Gu's lab use quantitative protein interaction profiling to understand molecular recognition and guide computational protein design. They develop protein interaction sequencing technologies by coupling ‘protein barcoding’ techniques—e.g., molecular attachment of proteins to barcoding DNAs, display of proteins on phage or cell surfaces, and indirect barcoding of unlabeled proteins by using DNA barcoded affinity reagents such as antibodies—to massively parallel 'in situ DNA sequencing' to quantitate protein interactions at a single-molecule or single-cell level. One example of protein interaction sequencing is a single-molecular-interaction sequencing (SMI-seq) technology (Gu, et al., Nature, 2014) for large-scale molecular counting of proteins and complexes. Our current research interests include (1) engineering of ligand-responsive protein assemblies, (2) human protein interactome profiling and drug screening, and (3) functional profiling of B-cell and T-cell receptors.",
		PICTURE: "https://2019.igem.org/wiki/images/a/ad/T--Washington--LiangcaiGu.jpg",
		WEBSITE: "https://depts.washington.edu/biowww/pages/faculty-Gu.shtml",
		ROLE: "University of Washington Department of Biochemistry",
		FILTER: "PIs"
	}
];


const displayConstants: DisplayConstants = {
	primaryColor: COLORS.PURPLE.PRIMARY,
	secondaryColor: COLORS.PURPLE.SECONDARY,
	globalColor: false,
	pageSpecificColors: {
		Home: {
			primaryColor: "#FFFFFF",
			secondaryColor: "#FFFF00"
		},
		Project: {
			primaryColor: "#FF0000",
			secondaryColor: "#00FF00"
		}
	},
	logo: "http://2017.igem.org/wiki/images/e/e9/T--Washington--WLogo.png",
	buttonHeight: "16px"
}

///////// FINDMARKER: CONTENT DATA

const contentData: ContentData = {
	"Attributions": {
	  "content": {
		"0122ab2800": {
		  "type": "SEPARATOR"
		},
		"0ca7b717015": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>Keynote Speaker at Pacific Northwest iGEM Meetup</strong></p>\n<ul>\n<li><strong>Jeff Nivala, ­</strong>Principal Investigator and Research Scientist, Molecular Information Systems Lab, Allen School of Computer Science and Engineering</li>\n</ul>\n<p><strong>Innovation in STEM panelists at Pacific Northwest iGEM Meetup</strong></p>\n<ul>\n<li><strong>Wilbert Copeland</strong>, Computational Scientist, Celgene Corp</li>\n<li><strong>Jen Eklund</strong>, Education Liaison, Institute of Systems Biology</li>\n<li><strong>Jenny Loeb</strong>, Global Commercialization Marketing Manager - Academics, Promega</li>\n<ul>\n<li>Also a Promega Representative</li>\n</ul>\n<li><strong>Zach Mueller</strong>, Co-Founder of SoundBio Lab, Data Scientist at Amazon</li>\n<li><strong>Jennifer Pang</strong>, Director of Science and Math Institute, Bellevue College</li>\n<li><strong>Regina Wu</strong>, Co-Founder of SoundBio Lab, Program Manager at Fred Hutch SEP</li>\n</ul>\n<p><strong>Biotechnology Industry panelists at Pacific Northwest iGEM Meetup</strong></p>\n<ul>\n<li><strong>Michal Galdzicki</strong>, Data Czar, Arzeda</li>\n<li><strong>Lucas Nivon</strong>, Chief Executive Officer, Cyrus Biotechnology</li>\n<li><strong>Ingrid Swanson Pultz</strong>, Chief Scientific Officer, PvP Biologics</li>\n<li><strong>David Younger</strong>, Chief Executive Officer, A-Alpha Bio</li>\n</ul>\n<p></p>\n<p><strong>Shah Bakhash </strong>&amp;<strong> Ryan Culbert</strong>, Interns, RAIN Incubator</p>\n<ul>\n<li>Hosted Agar Art Workshop at Pacific Northwest iGEM Meetup</li>\n</ul>\n<p><strong>Varun Govil</strong>, North American iGEM Ambassador</p>\n<ul>\n<li>Hosted Crafting Your Team’s Story workshop, Human Practices/Business workshop, and Jamboree information session at Pacific Northwest iGEM Meetup, &amp; provided Education &amp; Engagement advice to Outreach members</li>\n</ul>\n<p><strong>Sophie Liu</strong>, Student at Newport High School, SoundBio iGEM</p>\n<ul>\n<li>Assisted in planning and logistics of Pacific Northwest iGEM Meetup</li>\n</ul>\n<p><strong>Francesca C. Lo</strong>, Director, Husky Leadership Initiative</p>\n<ul>\n<li>Helped create Leadership workshop curriculum for Pacific Northwest iGEM Meetup</li>\n</ul>\n<p><strong>Jennifer McKee-Johnson</strong>, Head of Scientific Operations, RAIN Incubator; Laboratory Manager, LifeSpan Biosciences</p>\n<ul>\n<li>Hosted Plasmid Design workshop at Pacific Northwest iGEM Meetup</li>\n</ul>\n<p><strong>Jennifer Pope</strong>, Student Activities Advisor, Student Activities Office&nbsp;</p>\n<ul>\n<li>Assisted in planning and logistics of Pacific Northwest iGEM Meetup</li>\n</ul>\n<p></p>\n<p></p>\n"
		},
		"0ca851838150": {
		  "header_content": "Outreach",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"29a04a105d5": {
		  "header_content": "Integrated Human Practices",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"3f914c463f5a": {
		  "header_content": "Administration",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"4d6b03dac8f0": {
		  "header_content": "Simulations",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"52df11fb64": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Prof. Liangcai Gu</strong>, Assistant Professor, Department of Biochemistry, Institute of Protein Design</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Assisted us in experiment design and high-level planning as our primary PI</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Presentation feedback</span></li>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Prof. Herbert Sauro</strong>, Professor, Bioengineering, Adjunct Professor, Electrical and Computer Engineering</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Assistance with Tellurium, presentation feedback</span>&nbsp;</li>\n</ul>\n"
		},
		"56ba765eb2c2": {
		  "header_content": "Principal Investigators",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"5a8cc5682003": {
		  "header_content": "Wetlab",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"76ab32f8f844": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>Anastasia Nicolov</strong>, B.S. Bioengineering and B.M. Violin Performance, Just Biotherapeutics</p>\n<ul>\n<li>Assisted the team with Human Practices, Operational affairs, and the PNW Meetup.&nbsp;</li>\n</ul>\n<p><strong>Angel Wong</strong>, Undergraduate, Bioengineering, Biochemistry</p>\n<ul>\n<li>Assisted the team in Operational affairs</li>\n</ul>\n<p><strong>Karl Anderson</strong>, Undergraduate, Biochemistry, Molecular Biology</p>\n<ul>\n<li>Assisted the team in Project development and wetlab affairs</li>\n</ul>\n<p><strong>Yoshi Goto</strong>, B.S. Bioengineering, Director of Operations, SoundBio Lab&nbsp;</p>\n<ul>\n<li>Assisted the team with Project development, Simulations, and Operational affairs, and the PNW Meetup.</li>\n</ul>\n<p></p>\n"
		},
		"77e54293aae": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2>Wetlab</h2>\n<ul>\n<li><strong>Jay Yung: </strong>Project Manager and Wetlab Lead</li>\n<li><strong>Joanne Wong:</strong> Lab Manager</li>\n<li><strong>Grace Kim: </strong>Lab Scheduler</li>\n<li><strong>Brian Hong:</strong> Lab Scientist</li>\n<li><strong>Elgene John Quitevis:</strong> Lab Scientist</li>\n<li><strong>Ellen Xu:</strong> Lab Scientist</li>\n<li><strong>Jerry Cao: </strong>Lab Scientist</li>\n<li><strong>Malia Clark: </strong>Lab Scientist</li>\n<li><strong>Natalie Murren:</strong> Lab Scientist</li>\n<li><strong>Quoc Tran: </strong>Lab Scientist</li>\n<li><strong>Shean Fu: </strong>Lab Scientist</li>\n<li><strong>Simranjeet Sidhu: </strong>Lab Scientist</li>\n<li><strong>Varun Sridhar:</strong> Lab Scientist</li>\n</ul>\n<h2><strong>Simulations</strong></h2>\n<ul>\n<li><strong>Kinetics Modeling:</strong></li>\n<ul>\n<li><strong>Joshua Ip: </strong>Simulations Lead</li>\n<li><strong>Ed van Bruggen</strong></li>\n<li><strong>Hannah Cheung</strong></li>\n</ul>\n<li><strong>Molecular Modeling:</strong></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"><strong>Joshua Ip: </strong>Simulations Lead</span>&nbsp;</li>\n<li><strong>Chi Truong</strong></li>\n<li><strong>Delaney Wilde</strong></li>\n<li><strong>Eric Yeh</strong></li>\n</ul>\n</ul>\n<h2><strong>Integrated Human Practices</strong></h2>\n<ul>\n<li><strong>Karen Immendorf: </strong>Integrated Human Practices Lead</li>\n<li><strong>Sidney Chan</strong></li>\n<li><strong>Sijia Zhang</strong></li>\n</ul>\n<h2><strong>Outreach</strong></h2>\n<ul>\n<li><strong>Ishira Parikh: </strong>Public Education Lead</li>\n<li><strong>Simran Sidhu: </strong>Public Engagement Lead</li>\n<li><strong>Hannah Cheung</strong></li>\n<li><strong>Eric Yeh</strong></li>\n<li><strong>Monet Tosch-Berneburg</strong></li>\n<li><strong>Vivian Huynh</strong></li>\n<li><strong>Ellen Xu</strong></li>\n<li><strong>Shean Fu Phen</strong></li>\n</ul>\n<h2><strong>Collaborations</strong></h2>\n<ul>\n<li><strong>Hannah Cheung: </strong>Collaborations Lead</li>\n</ul>\n<h2><strong>Web development</strong></h2>\n<ul>\n<li><strong>William Kwok: </strong>Web-Development Lead</li>\n<li><strong>Allison Lee: </strong>built team page</li>\n<li><strong>Elisa Truong: </strong>created sidebar navigation system</li>\n<li><strong>Max Zhou: </strong>implemented live edit notification</li>\n<li><strong>Nitesh Chetry: </strong>developed widget selector</li>\n<li><strong>Jennifer Tao: </strong>worked on various widget editors</li>\n<li><strong>Laura Freeman: </strong>created redesign and design guidelines</li>\n</ul>\n<h2><strong>Design</strong></h2>\n<ul>\n<li><strong>Clara Too:</strong> Design Lead</li>\n<li><strong>Angie Dang</strong></li>\n<li><strong>Delaney Wilde</strong></li>\n<li><strong>Chi Truong</strong></li>\n</ul>\n<h2><strong>Fundraising</strong></h2>\n<ul>\n<li><strong>Chi Truong: </strong>Fundraising Lead</li>\n<li><strong>Brian Hong </strong></li>\n<li><strong>Clara Too</strong></li>\n<li><strong>Jerry Cao</strong></li>\n<li><strong>Karen Immendorf</strong></li>\n<li><strong>Pacy Wu</strong></li>\n<li><strong>Quoc Tran</strong></li>\n<li><strong>Vera Okolo</strong></li>\n</ul>\n<p></p>\n<p></p>\n"
		},
		"7dc5cb178def": {
		  "header_content": "Fundraising",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"7ee9c22a437d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>These organizations donated to Washington iGEM, making it possible for us to pursue and complete this project.&nbsp;</p>\n<ul>\n<li><strong>Jennifer Worrell</strong>, Department of Computer Science at UW, Director of Finance and Administration&nbsp;</li>\n<li><strong>Zulfiya Lafi</strong>, Department of Biochemistry at UW School of Medicine, Administrator</li>\n<li><strong>Lance Stewart</strong>, Institute for Protein Design at UW School of Medicine, Chief Strategy and Operation Officers</li>\n<li><strong>Mike Engh</strong>, College of Engineering at UW, Program Operations Specialist, Academic Affairs</li>\n<li><strong>Ingrid Swanson Pultz</strong>, <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, system-ui, \"Segoe UI\", Roboto;\">PvP Biologics, </span>Chief Scientific Officer&nbsp;</li>\n<li><strong>Toby Bradshaw</strong>, Department of Biology at UW, Professor and Chair</li>\n<li><strong>Paul Miller</strong>, Department of Chemistry at UW, Executive Director</li>\n<li><strong>Ruth Woods</strong>, UW Department of Bioengineering, Administrator, Director of Finance and Operations</li>\n<li><strong>Jeff Bowers,</strong> Department of Microbiology at UW School of Medicine, Finance- Operations Manager</li>\n<li><strong>Bernard Deconinck</strong>, Department of Applied Mathematics at UW, Professor and Chair of Applied Mathematics, Adjunct Professor of Mathematics</li>\n</ul>\n<p></p>\n"
		},
		"8798b6c6774": {
		  "bannder_content": {
			"bannerText": "Attributions",
			"imageBlur": 4,
			"imageLink": "https://2019.igem.org/wiki/images/5/5e/T--Washington--TeamBanner.png",
			"imageTopX": 19,
			"imageTopY": 33,
			"imageZoom": 100,
			"textColor": "BLACK",
			"textSize": 10
		  },
		  "banner_content": {
			"bannerText": "Attributions",
			"imageBlur": 7,
			"imageLink": "https://2019.igem.org/wiki/images/f/f8/T--Washington--PhotoCollage.jpg",
			"imageTopX": 19,
			"imageTopY": 52,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"8b429cec12": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Dr. Alexis Kaushansky</strong>, Seattle Children's Research Institute</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Provided valuable feedback for potential novel applications in biomedical research based on her experience investigating malaria</span><br></li>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Dr. Lisa Frenkel</strong>, Seattle Children's Research Institute</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Provided direction in the development of Immunosense by highlighting potential applications such as patient drug monitoring</span><br></li>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Dr. Chris Collins</strong>, Seattle Children's Research Institute</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Gave assistance with evaluating Immunosense as a tool for multiple biomarker detection in blood screening</span><br></li>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Dr. Paul Yager</strong>, Department of Bioengineering, University of Washington</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Provided feedback critical feedback on Immunosense design and potential target small molecules we can implement into our solution</span><br></li>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>EcoGen Laboratories</strong></span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Gave assistance with identifying applications for Immunosense in the CBD industry</span><br>&nbsp;</li>\n</ul>\n"
		},
		"975e73fff20": {
		  "header_content": "Design",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"9c9dbb001111": {
		  "header_content": "Team Members",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"b3b087e0c7c3": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>Dr. Shoukai Kang</strong>, Post-doctoral Fellow, Department of Biochemistry</p>\n<ul>\n<li>Assisted us in learning how to perform protein purification and biolayer interferometry, and how to use essential equipment; assisted in plasmid design; gave presentation feedback</li>\n</ul>\n<p><strong>Dr. Li Sun</strong>, Research Engineer, Department of Biochemistry</p>\n<ul>\n<li>Assisted with ordering, inventory, and lab management</li>\n</ul>\n<p><strong>Dr. Zengpeng Li</strong>, Post-doctoral Fellow, Department of Biochemistry</p>\n<ul>\n<li>Provided plasmid with FKPA chaperone protein sequence for use in biosensor</li>\n</ul>\n<p><strong>Luis Castillo</strong>, Undergraduate Research Assistant, Department of Biochemistry</p>\n<ul>\n<li>Assisted with and answered questions about protocols and procedures</li>\n</ul>\n<p><strong>Dr. Andrea Hallberg</strong>, Synthetic Biology Application Specialist, Integrated DNA Technologies</p>\n<ul>\n<li>Assisted us with DNA synthesis problems with our FKPA biobrick fragment</li>\n</ul>\n<p></p>\n"
		},
		"c965b7f13407": {
		  "header_content": "Advisers",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"d5fb720fbd8d": {
		  "header_content": "Collaborations",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"d8ac14aa2e0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>Dr. Jamey Cheek</strong>, head of DRS at UW&nbsp;</p>\n<ul>\n<li>Gave advice on adapting our outreach curriculum to an audiobook format by explaining us current standards in US schools under the ADA and current technologies available.</li>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"><strong>Sean McCormick</strong></span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Helped plan our outreach event at the Washington State School for the Blind and gave feedback on executing workshops for students with different levels of visual impairment</span></li>\n</ul>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"><strong>Erin Groth</strong>, Youth Service Librarian</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Helped plan a collaboration with WA iGEM and the Washington Talking Book and Braille Library and edited our adapted activities to be a better fit for large groups</span>&nbsp;</li>\n</ul>\n<p><strong>Panelists for Sitdown with Synbio Event:</strong></p>\n<p>Spoke at Sit Down with Synbio about their research, answered student and audience questions</p>\n<ul>\n<li>Dr. James Carothers, Professor of Chemical Engineering at UW</li>\n<li>Dr. Sean Sleight, Founder and CEO of Sleight Beer Labs and Senior Scientist at Arzeda&nbsp;</li>\n<li>Dr. Jesse Zalatan, Professor of Chemistry at UW</li>\n<li>Dr. Daniel Adriano Silva Manzano, Vice President of Research at Neoleukin&nbsp;</li>\n<li>Dr. Karin Strauss, Senior Researcher at Microsoft and MISL&nbsp;</li>\n<li>Dr. Wenying Shou, Associate Member at Fred Hutch</li>\n</ul>\n<p></p>\n"
		},
		"e85e1dc63261": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Prof. Frank Dimaio</strong>, Assistant Professor, Department of Biochemistry, Institute of Protein Design</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Provided assistance with Rosetta/PyMol</span>&nbsp;</li>\n</ul>\n"
		},
		"f32bb27206": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>The Department of Biochemistry Administrative Staff assisted us immensely with interfacing our lab with the greater university body.</p>\n<ul>\n<li><strong>Zulfiya Lafi</strong>, Administrator, Department of Biochemistry</li>\n<li><strong>Tonya Alan Hirtzel</strong>, Assistant to the Chair, Department of Biochemistry</li>\n<li><strong>Cynthia Acuario</strong>, Program Operations Analyst, Department of Biochemistry</li>\n<li><strong>John Doan</strong>, Budget/Fiscal Analyst, Department of Biochemistry</li>\n<li><strong>Tana Knight</strong>, Budget/Fiscal Analyst, Department of Biochemistry</li>\n<li><strong>Prof. Trisha Davis</strong>, Professor and Chair, Department of Biochemistry</li>\n</ul>\n<p></p>\n"
		},
		"fd49cad6895": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>Evita Wijaya</strong>, UW student studying Visual Communication Design</p>\n<ul>\n<li>Helped create figures&nbsp;</li>\n</ul>\n<p><strong>Timothy Chong</strong>, UW student studying Visual Communication Design</p>\n<ul>\n<li>Created animation to show the process of chemically-induced dimerization&nbsp;</li>\n</ul>\n<p><strong>SoundBio design team</strong></p>\n<ul>\n<li>Assisted with giving critique for meetup brochure</li>\n</ul>\n<p></p>\n"
		}
	  },
	  "contentOrder": [
		"8798b6c6774",
		"56ba765eb2c2",
		"52df11fb64",
		"c965b7f13407",
		"76ab32f8f844",
		"9c9dbb001111",
		"77e54293aae",
		"0122ab2800",
		"5a8cc5682003",
		"b3b087e0c7c3",
		"4d6b03dac8f0",
		"e85e1dc63261",
		"29a04a105d5",
		"8b429cec12",
		"0ca851838150",
		"d8ac14aa2e0",
		"975e73fff20",
		"fd49cad6895",
		"d5fb720fbd8d",
		"0ca7b717015",
		"7dc5cb178def",
		"7ee9c22a437d",
		"3f914c463f5a",
		"f32bb27206"
	  ],
	  "hasSidebar": true
	},
	"Collaborations": {
	  "content": {
		"0171d96717e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Here are the languages and teams that have translated the outreach activities, as well as the links to the documents that each team translated.</span></p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Arabic - </span><a href=\"https://2019.igem.org/Team:CU\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">CU</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">, </span><a href=\"https://2019.igem.org/Team:AFCM-Egypt\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">AFCM-Egypt</span></a></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">AFCM-Egypt’s full compiled booklet can be found </span><a href=\"https://2019.igem.org/wiki/images/6/68/T--Washington--Arabic_AFCM_Boolket.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">here</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">. They include these activities:</span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Chameleon Genetics </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Lego DNA/Jellybean Peptide</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Simulations &amp; Programming</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems</span></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">CU iGEM </span></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/f/ff/T--Washington--Arabic_CU_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/e/e4/T--Washington--Arabic_CU_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/1/12/T--Washington--Arabic_CU_Solving_Global_Problems_1_%2B_5.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Zika Virus, Antibiotic Resistance</span></a></li>\n</ul>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Basque - </span><a href=\"https://2019.igem.org/Team:UPNAvarra_Spain\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">UPNAvarra Spain</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/b/b6/T--Washington--Basque_Chameleon_Genetics.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Chameleon Genetics</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/e/ec/T--Washington--Basque_Lego_DNA_Jellybean_Peptide.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Lego DNA/Jellybean Peptide</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dutch - </span><a href=\"https://2019.igem.org/Team:TU_Eindhoven\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">TU Eindhoven</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/a/af/T--Washington--Dutch_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/97/T--Washington--Dutch_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/95/T--Washington--Dutch_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">French - </span><a href=\"https://2019.igem.org/Team:Orleans\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Orleans</span></a>&nbsp;</li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/1/11/T--Washington--French_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/01/T--Washington--French_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/d/d0/T--Washington--French_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/e/e7/T--Washington--French_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/e/eb/T--Washington--French_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/7e/T--Washington--French_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/b/b0/T--Washington--French_Simulations_Programming.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Simulations &amp; Programming</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/4/45/T--Washington--French_Solving_Global_Problems.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">German - </span><a href=\"https://2019.igem.org/Team:Nantes\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Nantes</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">, </span><a href=\"https://2019.igem.org/Team:Potsdam\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Potsdam</span></a></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Nantes </span></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/b/b7/T--Washington--German_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/4/44/T--Washington--German_Nantes_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/6/6e/T--Washington--German_Nantes_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/5/59/T--Washington--German_Nantes_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/77/T--Washington--German_Nantes_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/c/c5/T--Washington--German_Nantes_Solving_Global_Problems_3-5.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Food Shortages &amp; GMOs, Bee Population, Antibiotic Resistance</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/99/T--Washington--German_Nantes_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Nantes iGEM also voice-recorded their activities, which can be found here: </span></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/1/1b/T--Washington--gumdrop.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/b/bf/T--Washington--DNA_replication_activity_German2019_part_1.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication Part 1</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/2/2f/T--Washington--DNA_replication_activity_German2019_part_2_%28online-audio-converter.com%29.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication Part 2</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/7e/T--Washington--DNA_structurecrafting_German2019.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/c/c8/T--Washington--Engineer_organism_German2019.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/a/a6/T--Washington--Synbioscenario_foodshortage_German2019.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Food Shortages &amp; GMOs</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/e/e3/T--Washington--Synbioscenario_beepop_German2019.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Bee Population</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/76/T--Washington--Synbioscenario_antibioticresist_German2019.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Antibiotic Resistance</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/f/ff/T--Washington--Stemcells_German2019.mp3\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Potsdam</span></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/b/b2/T--Washington--German_Potsdam_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/1/1d/T--Washington--German_Potsdam_Solving_Global_Problems_Pollution.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Pollution</span></a></li>\n</ul>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Greek - </span><a href=\"https://2019.igem.org/Team:Thessaly\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Thessaly</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/9/9d/T--Washington--Greek_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/06/T--Washington--Greek_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/6/6b/T--Washington--Greek_Engineer_an_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/9d/T--Washington--Greek_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/b/b5/T--Washington--Greek_Solving_Global_Problems.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/1/17/T--Washington--Greek_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Hebrew - </span><a href=\"https://2019.igem.org/Team:TAU_Israel\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">TAU Israel</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/2/29/T--Washington--Hebrew_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Indonesian - </span><a href=\"https://2019.igem.org/Team:NCKU_Tainan\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">NCKU-Tainan</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/4/41/T--Washington--Indonesian_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/0a/T--Washington--Indonesian_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/1/16/T--Washington--Indonesian_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/c/cc/T--Washington--Indonesian_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/8/8e/T--Washington--Indonesian_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/c/c6/T--Washington--Indonesian_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/5/57/T--Washington--Indonesian_Solving_Global_Problems_1%2C_3-5.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Zika Virus, Food Shortages &amp; GMOs, Bee Population, Antibiotic Resistance</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/f/fb/T--Washington--Indonesian_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Japanese - </span><a href=\"https://2019.igem.org/Team:Botchan_Lab_Tokyo\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Botchan Lab Tokyo</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">, </span><a href=\"https://2019.igem.org/Team:NYU_Shanghai\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">NYU Shanghai</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/6/6d/T--Washington--Japanese_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/2/2a/T--Washington--Japanese_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/d/d0/T--Washington--Japanese_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/74/T--Washington--Japanese_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/77/T--Washington--Japanese_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/f/f8/T--Washington--Japanese_Simulations_Programming.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Simulations &amp; Programming</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/d/dd/T--Washington--Japanese_Solving_Global_Problems.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/71/T--Washington--Japanese_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Korean - </span><a href=\"https://2019.igem.org/Team:CCA_San_Diego\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">CCA San Diego</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/3/3d/T--Washington--Korean_Chameleon_Genetics.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Chameleon Genetics</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/0e/T--Washington--Korean_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/a/a3/T--Washington--Korean_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/d/d3/T--Washington--Korean_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/6/6d/T--Washington--Korean_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Mandarin - </span><a href=\"https://2019.igem.org/Team:Tongji_Software\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Tongji Software</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/9/99/T--Washington--Mandarin_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/7a/T--Washington--Mandarin_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/d/d4/T--Washington--Mandarin_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/9e/T--Washington--Mandarin_Engineer_an_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/2/24/T--Washington--Mandarin_DNA_Fruit_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/a/a1/T--Washington--Mandarin_Simulations_Progrmaming.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Simulations &amp; Programming</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/98/T--Washington--Mandarin_Solving_Global_Problems.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/2/25/T--Washington--Mandarin_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Norwegian - </span><a href=\"https://2019.igem.org/Team:UiOslo_Norway\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">UiOslo Norway</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/6/62/T--Washington--Norwegian_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/3/3e/T--Washington--Norwegian_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/7f/T--Washington--Norwegian_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/b/ba/T--Washington--Norwegian_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/3/3f/T--Washington--Norwegian_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/3/3c/T--Washington--Norwegian_DNA_Fruit_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/2/2f/T--Washington--Norwegian_Solving_Global_Problems.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/7d/T--Washington--Norwegian_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Portuguese - </span><a href=\"https://2019.igem.org/Team:USP-Brazil\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">USP Brasil</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/b/bd/T--Washington--Portuguese_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/2/2f/T--Washington--Portuguese_Solving_Global_Problems_Zika.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Zika Virus</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Russian - </span><a href=\"https://2019.igem.org/Team:TU_Dresden\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">TU Dresden</span></a>&nbsp;</li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/4/48/T--Washington--Russian_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/75/T--Washington--Russian_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/8/85/T--Washington--Russian_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/8/8b/T--Washington--Russian_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/a/a2/T--Washington--Russian_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/9/9a/T--Washington--Russian_Fruit_DNA_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/a/a8/T--Washington--Russian_Solving_Global_Problems_1-4.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Zika Virus, Pollution, Food Shortages &amp; GMOs, Bee Population</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/4/4e/T--Washington--Russian_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Spanish - </span><a href=\"https://2019.igem.org/Team:UANL\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">UANL</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/5/55/T--Washington--Spanish_Cover.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Booklet Cover</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/b/bc/T--Washington--Spanish_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/d/dc/T--Washington--Spanish_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/1/1e/T--Washington--Spanish_DNA_Structure_Crafting.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Structure Crafting</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/7/74/T--Washington--Spanish_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/04/T--Washington--Spanish_DNA_Fruit_Extraction.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/4/40/T--Washington--Spanish_Simulations_Programming.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Simulations &amp; Programming</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/a/ac/T--Washington--Spanish_Solving_Global_Problems_3-5_%2B_Answer_Key.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Solving Global Problems: Food Shortages &amp; GMOs, Bee Population, Antibiotic Resistance, Sample Answer Key</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/4/49/T--Washington--Spanish_Stem_Cells.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Stem Cells</span></a></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Turkish - </span><a href=\"https://2019.igem.org/Team:Bilkent-UNAMBG\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Bilkent-UNAMBG</span></a></li>\n<ul>\n<li><a href=\"https://2019.igem.org/wiki/images/c/c5/T--Washington--Turkish_DNA_Gumdrop.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Gumdrop Structure</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/wiki/images/4/42/T--Washington--Turkish_DNA_Replication.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DNA Replication</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/05/T--Washington--Turkish_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Engineer An Organism</span></a></li>\n<li><a href=\"https://2019.igem.org/wiki/images/0/05/T--Washington--Turkish_Engineer_An_Organism.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Fruit DNA Extraction</span></a></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The Bilkent-UNAMBG team also implemented one of our activities at an outreach event; details about this implementation can be found below.</span></li>\n</ul>\n</ul>\n"
		},
		"027d1619f1c7": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/0/00/T--Washington--Meetup_Simulations.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Joshua Ip, the Washington iGEM Simulations Team Lead, hosting the Simulations workshop.",
		  "type": "IMAGE"
		},
		"03934225dae": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Keynote Speaker</strong></span></h2>\n"
		},
		"0c05dfef06d": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Regina Wu - Co-Founder of SoundBio Lab, Program Manager at Fred Hutch SEP",
			  "imgLink": "https://2019.igem.org/wiki/images/6/6c/T--Washington--Meetup_Innovation_in_STEM_-_Regina_Wu.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Wilbert Copeland - Computational Scientist, Celgene Corp",
			  "imgLink": "https://2019.igem.org/wiki/images/4/4b/T--Washington--Meetup_Innovation_in_STEM_-_Wilbert_Copeland.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Zach Mueller - Co-Founder of SoundBio Lab, Data Scientist at Amazon",
			  "imgLink": "https://2019.igem.org/wiki/images/c/c9/T--Washington--Meetup_Innovation_in_STEM_-_Zach_Mueller.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"0fb5f621e41": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Jeff Nivala, a member of the Washington iGEM team from 2008 to 2010, shared his experiences in and out of iGEM in the keynote presentation \"There And Back Again.\" This included describing the iGEM project he worked on in 2008 of transferring genetic material from E. coli to yeast, and his current work of using DNA as data storage and creating a digital microfluidics platform to implement wetlab protocols at the Molecular Information Systems Lab at the University of Washington. A recording of his keynote speech can be found <a href=\"https://www.facebook.com/WashingtoniGEM/videos/2059854667654728/\" target=\"_self\">here</a>.&nbsp;</p>\n"
		},
		"107b9a58dd6": {
		  "pdfViewer_pdfHeightPixel": 700,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/f/ff/T--Washington--Arabic_CU_DNA_Gumdrop.pdf",
		  "pdfViewer_pdfWidthPercentage": 70,
		  "type": "PDF_VIEWER"
		},
		"10c7313452d": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/c9/T--Washington--Meetup_Outreach_Workshop.jpg",
		  "exampleImage_percentageSize": 50,
		  "type": "IMAGE"
		},
		"11b03a89e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>plasmid design</h3>\n"
		},
		"1521d079da26": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Questions asked and answered at the Innovation in STEM Panel:</p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Tell our your story about incorporating innovation into your initiatives and work. What led to you doing what you are doing now?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What is your education or career background, and how has that shaped how you approach innovation or your initiatives?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What is your end goal? Your vision?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What do you see hope in the future of STEM? </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What do you think is currently the most challenging for innovation in STEM? What are the traditional and non-traditional ways of overcoming those challenges?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Being a part of iGEM, we know that the possibilities for invention are boundless but we are limited by our own skills, knowledge, and resources. So, how can we change that?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What are ways we have been forced to adapt to our environment or change our environment in order to make scientific progress? </span></li>\n</ul>\n"
		},
		"1a608927731": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>This purpose of this panel was to demonstrate local examples of STEM innovation. Professionals in the Seattle biotechnology field described difficulties they encountered in STEM, the ways they overcame those obstacles using unique solutions, and how to find resources to solve future problems.</p>\n<p>Here, you can find recordings of the <a href=\"https://www.facebook.com/WashingtoniGEM/videos/727355257704747/\" target=\"_self\">panel</a> and <a href=\"https://www.facebook.com/WashingtoniGEM/videos/346095072944007/\" target=\"_self\">Q&amp;A session</a>.&nbsp;</p>\n"
		},
		"1b3eca660a3a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This year, Washington iGEM hosted its second annual Pacific Northwest iGEM Meetup. </span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 11pt;font-family: Arial;\">The event consisted of speakers and panels from industry and academia in the Seattle area, workshops dedicated to learn more about hard skills and soft skills integral to iGEM, practice presentation and poster sessions to prepare for Jamboree, and community building activities for all teams involved. </span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The meetup brochure, which details the event and its attendees, can be found </span><a href=\"https://2019.igem.org/wiki/images/3/39/T--Washington--PNW_booklet_2019_5_small.pdf\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">here</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This event was attended by members of these iGEM teams outside of Washington iGEM: </span></p>\n<ul>\n<li><a href=\"https://2019.igem.org/Team:SoundBio\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">SoundBio</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/Team:Tacoma_RAINmakers\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Tacoma-RAINmakers</span></a></li>\n<li><a href=\"https://2019.igem.org/Team:Calgary\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Calgary</span></a>&nbsp;</li>\n</ul>\n"
		},
		"1e90822404": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Meetup attendees completing the Tacoma-RAINmakers team's protein folding activity.",
			  "imgLink": "https://2019.igem.org/wiki/images/2/20/T--Washington--Meetup_Team_Building.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Students watching the Tacoma-RAINmaker team's protein activity.",
			  "imgLink": "https://2019.igem.org/wiki/images/8/81/T--Washington--Meetup_Community_Building_2.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"217b7dec91e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 16px;font-family: -apple-system, system-ui, system-ui, \"Segoe UI\", Roboto;\">Teams were also able to create handmade posters, synthesizing the information they had from all the subteams, and given the chance to succinctly describe their project to other attendees. This gave every individual attending the Jamboree the chance to summarize and answer questions about their team's work, helping them become more familiar and comfortable with the poster presentation process.</span></p>\n"
		},
		"23dac6e1af2c": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Meetup attendees watching a poster presentation.",
			  "imgLink": "https://2019.igem.org/wiki/images/8/87/T--Washington--Meetup_Poster_Presentations.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Washington iGEM team members presenting their poster to other students.",
			  "imgLink": "https://2019.igem.org/wiki/images/e/ee/T--Washington--Meetup_Poster_Presentation_2.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Tacoma RAINmakers iGEM team members presenting their poster to other students.",
			  "imgLink": "https://2019.igem.org/wiki/images/9/92/T--Washington--Meetup_Poster_Presentations_3.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"34e224696a": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Jeff Nivala presenting his keynote speech to meetup attendees.",
			  "imgLink": "https://2019.igem.org/wiki/images/3/34/T--Washington--Meetup_Keynote_Speaker_1.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Jeff Nivala talking about his experiences in STEM and the field of synthetic biology in and out of iGEM.",
			  "imgLink": "https://2019.igem.org/wiki/images/8/86/T--Washington--Meetup_Keynote_Speaker_-_Jeff_Nivala.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "One of Nivala's slides, which details his work at the MISL Lab at the University of Washington in creating a DNA data storage system.",
			  "imgLink": "https://2019.igem.org/wiki/images/8/80/T--Washington--Meetup_Keynote_Speaker_2.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"3578bc909cf": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>This informational session gave important information on what people going to Jamboree should expect, answered audience questions about the competition, and introduced the After iGEM Program.</p>\n"
		},
		"363e1d4adafe": {
		  "header_content": "Translating Washington iGEM Outreach Activities",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"394245e6e23": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>dtu-DENMARK</h3>\n"
		},
		"3ce2d86e30": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>This workshop taught the basics of computational modeling of biological systems. Along with exploring why simulations should be used in an iGEM project, this workshop taught the basics of kinetic modeling with Tellurium and molecular dynamic modeling with Rosetta, two pieces of software developed at the University of Washington and also used heavily in our modeling this year.</p>\n"
		},
		"3d198544b0d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This unique working session connected members from different teams to collaborate on an educational curriculum. All the teams participating at the meetup have built lesson plans targeted at various ages, and this session allowed students to observe and give feedback to one another.  The workshop improved each team’s educational curriculum, identified potential barriers to curriculum adoption, developed solutions for adapting protocols to different environments, and discussed ways to standardize formatting so that the materials portray a continuous learning process.</span></p>\n"
		},
		"3dedfd5f2f26": {
		  "header_content": "Overview",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"3f9a7b25c3eb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>RAIN Incubator (hosting the Tacoma-RAINmakers team), collaborating with SoundBio Lab (hosting the SoundBio team), ran a workshop to use naturally colorful microbes as “paint” onto an agar “canvas” to create art in a petri dish. These artworks were submitted as part of the American Society for Microbiology’s Agar Art Contest and encouraged participants to combine art, creativity, and science.</p>\n"
		},
		"4651e667f": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Often, lab members on iGEM teams work with plasmids. Students gained knowledge about what parts compose a plasmid and how to go about designing plasmids in order to create a genetic device crucial to their project or making sure their BioBricks are compatible.</p>\n"
		},
		"46d23bc76ef9": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>crafting your team's story</h3>\n"
		},
		"4b59b206e3f": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Biotechnology Industry Panel</strong></span></h2>\n"
		},
		"4da25324e2ee": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>A variety of workshops were held at the meetup to allow students to gain more specialized areas of knowledge, whether it be more scientific or humanities-based. These interactive sessions gave attendees the opportunity to express creativity, cooperate, and acquire information essential for iGEM and beyond.</p>\n"
		},
		"5180d61ff204": {
		  "type": "SEPARATOR"
		},
		"57ceace1c9": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We focused on increasing ways for collaborations to occur, both locally and remotely. This resulted in our team creating more opportunities for iGEM teams to connect in our local area, as well as giving international teams the chance to work closely with us to spread our work in their areas, and eventually around the globe. Our ultimate goal is to participate in undertakings that have a significant positive impact on both the teams that collaborate with us and on the general public. </span></p>\n"
		},
		"5ab78b6fb0eb": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/f/f7/T--Washington--Implementation_UNAMBG.jpg",
		  "exampleImage_percentageSize": 40,
		  "exampleImage_subtitle": "Members from the Bilkent-UNAMBG iGEM team introducing the Engineer An Organism Activity to young students.",
		  "type": "IMAGE"
		},
		"5cd03e40c6": {
		  "banner_content": {
			"bannerText": "Collaborations",
			"imageBlur": 7,
			"imageLink": "https://2019.igem.org/wiki/images/f/fa/T--Washington--Meetup_General_2.jpg",
			"imageTopX": 0,
			"imageTopY": 44,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "header_priority": 1,
		  "type": "BANNER"
		},
		"5eaa747bc75a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>As part of their school's social awareness project, the Bilkent-UNAMBG iGEM team used our \"Engineer an Organism\" activity translated to Turkish to 4th graders, allowing them to be introduced to the topic of synthetic biology at an early age.</p>\n"
		},
		"5ee607cca769": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Due to our outreach collaboration translation efforts, we increased the percentage of people who would be able to comprehend the activities from<strong> less than 20 percent</strong> to approximately <strong>63 percent</strong>, expanding the number of people that can understand our curriculum by <strong>more than 3 billion</strong> individuals.</p>\n<p>Furthermore, the teams that translated these activities translated <strong>900+</strong> <strong>pages' worth </strong>of curriculum activities.</p>\n"
		},
		"63e63f1d8795": {
		  "type": "SEPARATOR"
		},
		"650c6f63edc": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>panelists</h3>\n"
		},
		"653c1168de2": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/3/3d/T--Washington--Meetup_Leadership.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Yoshi Goto, one of Washington iGEM's advisors, hosting the Leadership workshop.",
		  "type": "IMAGE"
		},
		"6796c0bb59": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Poster Presentations</strong></span></h2>\n"
		},
		"68d9dc829efb": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/0/06/T--Washington--Implementation_DTU_Biobuilders.jpg",
		  "exampleImage_percentageSize": 50,
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "The DTU Biobuilders iGEM team presenting to high schoolers about the intersection of iGEM with the United Nation's Sustainable Development Goals.",
			  "imgLink": "https://2019.igem.org/wiki/images/0/06/T--Washington--Implementation_DTU_Biobuilders.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "High schoolers discussing the Solving Global Problems scenarios in small groups.",
			  "imgLink": "https://2019.igem.org/wiki/images/e/ed/T--Washington--Meetup_DTU_1.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"6abd63c134b9": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/2/2e/T--Washington--Meetup_Varun_Govil.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "North American iGEM Ambassador Varun Govil  explaining what teams can expect at the Jamboree.",
		  "type": "IMAGE"
		},
		"702c863a11e2": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>simulations</h3>\n"
		},
		"74145639fae": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/2/26/T--Washington--Meetup_Plasmid_Design.jpg",
		  "exampleImage_percentageSize": 50,
		  "type": "IMAGE"
		},
		"77f668ad262": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/f/f2/T--Washington--MeetupPic.jpeg",
		  "exampleImage_percentageSize": 60,
		  "exampleImage_subtitle": "Group photo of attendees at the 2019 Pacific Northwest iGEM Meetup.",
		  "type": "IMAGE"
		},
		"7a2515505c9f": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "High schoolers discussing the Solving Global Problems: Zika Virus activity.",
			  "imgLink": "https://2019.igem.org/wiki/images/5/54/T--Washington--Meetup_Implementation_Vienna.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Students discussing and creating solutions to the Zika Virus scenario.",
			  "imgLink": "https://2019.igem.org/wiki/images/f/f0/T--Washington--Meetup_Implementation_Vienna_2.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"7b295c2f4f43": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/d/d8/T--Washington--Meetup_Agar_Art_3.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Example of agar art created by a workshop attendee.",
		  "type": "IMAGE"
		},
		"80b9e3040c26": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Calgary iGEM presenting their project, yOIL.",
			  "imgLink": "https://2019.igem.org/wiki/images/c/ca/T--Washington--Calgary.jpeg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Our team presenting Immunosense.",
			  "imgLink": "https://2019.igem.org/wiki/images/d/d4/T--Washington--WashingtonPresentation.JPG"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Tacoma RAINmakers iGEM presenting their project on rhizobia.",
			  "imgLink": "https://2019.igem.org/wiki/images/d/d6/T--Washington--Tacoma.jpeg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"82495f33711": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Community Building Activities</strong></span></h2>\n"
		},
		"8b448e41eb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>human practices/business</h3>\n"
		},
		"8cc50fd7f66": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>outreach collaboration working session</h3>\n"
		},
		"94b9543fb5f": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/d/d0/T--Washington--Map.png",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "World map of where the iGEM teams are based that have translated or implemented our outreach curriculum activities.",
		  "type": "IMAGE"
		},
		"953961a16f": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Workshops</strong></span></h2>\n"
		},
		"9d527e3814d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>The DTU-Denmark iGEM team presented the Solving Global Problems activities, specifically the Food Shortages &amp; GMOs, Pollution, and Antibiotic Resistance scenarios, to local high schools. The team used specific examples from our activity to show how different iGEM teams solved the issue at hand in relation with the United Nations Sustainable Development Goals, connecting the work of iGEM teams and the United Nations together. The team suggested relating our Solving Global Problems activities more with the Sustainable Development Goals to emphasize why these issues are important to address. Our outreach team is taking this feedback into consideration and may add connections to the Sustainable Development Goals when making new edits for the given activities.</p>\n"
		},
		"9e7be3f1f05": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/5/5b/T--Washington--Meetup_General_.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Student asking questions to panelists at the 2019 Pacific Northwest iGEM Meetup.",
		  "type": "IMAGE"
		},
		"9e8b708a7461": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>This panel was meant to reshape attendees' thinking about what the current biotechnology industry is, and what it means to work in the field of biotechnology. With advice from industry professionals, students learned the different roles that exist in biotechnology companies, the range of different companies that exist beyond pharmaceuticals and healthcare, the interdisciplinary nature of biotechnology, and the role of soft skills in the industry.&nbsp;</p>\n<p>Here, you can find recordings of the <a href=\"https://www.facebook.com/WashingtoniGEM/videos/421955011996119/\" target=\"_self\">panel</a> and <a href=\"https://www.facebook.com/WashingtoniGEM/videos/418100285479188/\" target=\"_self\">Q&amp;A</a>.</p>\n"
		},
		"9f1f1996d979": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Questions asked and answered at the Industry Panel:</p>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What different roles exist in your company? How do each of these roles interact together?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What is the role of an executive in a biotech company?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What drives you to come to work every day?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">How do you explain to your family what you do?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Apart from scientific skills, what other skills are crucial in your work?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">How did you get to where you are at now?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">If you could go back in time, what would you tell your college student self?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What is one thing within the biotech field that scares you?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Do you think that biotechnology will explode like the technology boom, or develop in a different way?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Synthetic biology is a very interdisciplinary field. When starting labs and businesses, how do you approach recruiting a team that works effectively yet have diverse skillsets?</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">What are some challenges you see in translating academic research into industry?</span></li>\n</ul>\n"
		},
		"aad9757bd380": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Outside of panels and workshops, there were also iGEM team bonding moments. The Tacoma-RAINmakers team hosted a protein live action role play activity, while the UCalgary team created an iGEM Jeopardy. These structured events were opportunities for participants to not only gain general synthetic biology knowledge, but also allowed participants to socialize with each other and enjoy their time at the meetup.</p>\n"
		},
		"ac374995469": {
		  "header_content": "Pacific Northwest iGEM Meetup",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"ad81eae8529": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Practice Presentations</strong></span></h2>\n"
		},
		"b244071b649e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>agar art</h3>\n"
		},
		"b28d0ea160ea": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">All iGEM teams presented preliminary versions of their project in a low-stakes environment, receiving constructive feedback from participants. Presenters were able to use the responses they received to more effectively revise the presentation speech and slides, while audience members were able to learn about the various projects that other teams had been working on in the Pacific Northwest.</span></p>\n"
		},
		"b320602c5f36": {
		  "header_content": "Implementing Washington iGEM Outreach Activities",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"b6f8d1ae392": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><strong>Jamboree Information Session</strong></h2>\n"
		},
		"ba1c265b507": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>bilkent-unambg</h3>\n"
		},
		"bde05d586c1c": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>panelists</h3>\n"
		},
		"c2dda8bf94": {
		  "type": "SEPARATOR"
		},
		"cc3687210777": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;\"><strong>Innovation in STEM Panel</strong></span></h2>\n"
		},
		"cd0f064fe6": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We thoroughly considered content and accessibility concerns when creating the curriculum, but individuals located in different locations may have different experiences and perspectives regarding these. The teams that had the opportunity to present our curated outreach activities in different areas of the world were able to give  our team helpful feedback on compositional and cultural considerations. We will be able to continually edit and improve our booklet based on this feedback.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In implementing some activities from our </span><a href=\"https://2019.igem.org/Team:Washington/Public_Engagement\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">interactive synthetic biology curriculum</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">, we worked with the following iGEM teams:</span></p>\n<ul>\n<li><a href=\"https://2019.igem.org/Team:Bilkent-UNAMBG\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 16px;font-family: Arial;\">Bilkent-UNAMBG</span></a></li>\n<li><a href=\"https://2019.igem.org/Team:DTU-Denmark\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">DTU-Denmark</span></a>&nbsp;</li>\n<li><a href=\"https://2019.igem.org/Team:BOKU-Vienna\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">BOKU-Vienna</span></a>&nbsp;</li>\n</ul>\n"
		},
		"d64ebcd2fe": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>The iGEM competition often poses a huge challenge to students - not only must they create a viable, novel project, but they have to sell it to the judges in a creative, logical, and easy to understand way. Presentations at the Jamboree are a balance between an academic presentation and a business pitch, showing not only the team’s scientific progress but also showing that they have thought about their project’s goals in a broader practical and social context. Students learned what judges are looking for in presentations and how to create a narrative for their project to keep their audience engaged.</p>\n"
		},
		"d6e700c2d124": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>design</h3>\n"
		},
		"d8a69e0829af": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>The BOKU-Vienna iGEM team used our Solving Global Problems: Zika Virus activity at two schools, presenting to students ranging in age from 16 to 19 years old. At the first school, students stated the activity was too long and had vocabulary that was not easy to comprehend. The BOKU-Vienna team used this feedback at their second school, where they shortened the game time, used the first page of the activity, and explained the task that the students had to complete in a more thorough manner. As a result, the feedback from the students at the second school were much more positive. Taking this information into account, our outreach team will edit the Solving Global Problems activities, especially the Zika Virus scenario, to be shorter and easier to comprehend, with less advanced vocabulary.</p>\n"
		},
		"dbe56b63": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/ca/T--Washington--Meetup_Design.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Clara Too (far right), the Washington iGEM Design Lead, hosting the Design workshop.",
		  "type": "IMAGE"
		},
		"ddf6addc21": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We focused our work this year on making our outreach curriculum much more accessible globally. This includes an outreach activity booklet, which introduces younger students to synthetic biology by using interactive activities. One goal of this collaboration was to breach the <strong>language barrier</strong> which made it difficult for students whose primary language is not English to complete our activities. We reached out to iGEM teams around the world to translate the activities into different languages, and with their help it has been translated into <strong>16 different languages</strong> and counting.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Here is an example of one of the files that has been translated: </span></p>\n"
		},
		"dfcda82de1b2": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/b/b2/T--Washington--Meetup_Innovation_in_STEM_Panelists.jpg",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Group photo of Innovation in STEM panelists.",
		  "type": "IMAGE"
		},
		"e20c595fe3a": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Jen Eklund - Education Liaison, Institute of Systems Biology",
			  "imgLink": "https://2019.igem.org/wiki/images/3/33/T--Washington--Meetup_Innovation_in_STEM_-_Jen_Eklund.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Jennifer Pang - Director of Science and Math Institute, Bellevue College",
			  "imgLink": "https://2019.igem.org/wiki/images/c/c2/T--Washington--Meetup_Innovation_in_STEM_-_Jennifer_Pang.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Jenny Loeb - Global Commercialization Marketing Manager - Academics, Promega",
			  "imgLink": "https://2019.igem.org/wiki/images/c/c2/T--Washington--Meetup_Innovation_in_STEM_-_Jenny_Loeb.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"e4a5cea83a4c": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>It is integral for iGEM teams to create a brand identity that their team can be associated with. The workshop went over the design process cycle from start to finish, with a focus on logo design, to learn how to collaborate and produce designs in a team setting.</p>\n"
		},
		"e617add18d18": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Instead of using human practices as a catch-all term for the non-lab aspects of iGEM, North American iGEM Ambassador Varun Govil explained how public engagement, bioethics, entrepreneurship, among other topics can tie in and inform project direction.</p>\n"
		},
		"e98988ab5e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Every iGEM team requires student leaders who are proactive, engaged, and able to initiate work and create a team environment in which members are encouraged and motivated to succeed. This workshop taught attendees about leadership principles and skills necessary to develop a healthy atmosphere, foster collaboration and communication, and make progress towards their team's goals.</p>\n"
		},
		"ec2c94efaca1": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "David Younger - Chief Executive Officer, A-Alpha Bio",
			  "imgLink": "https://2019.igem.org/wiki/images/f/f4/T--Washington--Meetup_Biotech_Industry_-_David_Younger.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Ingrid Swanson Pultz - Chief Scientific Officer, PvP Biologics",
			  "imgLink": "https://2019.igem.org/wiki/images/3/3c/T--Washington--Meetup_Biotech_Industry_-_Ingrid_Pultz.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Lucas Nivon - Chief Executive Officer, Cyrus Biotechnology",
			  "imgLink": "https://2019.igem.org/wiki/images/b/bd/T--Washington--Meetup_Biotech_Industry_-_Lucas_Nivon.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Michal Galdzicki - Data Czar, Arzeda",
			  "imgLink": "https://2019.igem.org/wiki/images/9/9c/T--Washington--Meetup_Biotech_Industry_-_Michal_Galdzicki.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"effb90621d56": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>boku-vienna</h3>\n"
		},
		"fe949eaa4f9": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h3>leadership skills</h3>\n"
		}
	  },
	  "contentOrder": [
		"5cd03e40c6",
		"3dedfd5f2f26",
		"57ceace1c9",
		"9e7be3f1f05",
		"5180d61ff204",
		"363e1d4adafe",
		"ddf6addc21",
		"107b9a58dd6",
		"5ee607cca769",
		"94b9543fb5f",
		"0171d96717e",
		"63e63f1d8795",
		"b320602c5f36",
		"cd0f064fe6",
		"ba1c265b507",
		"5ab78b6fb0eb",
		"5eaa747bc75a",
		"394245e6e23",
		"68d9dc829efb",
		"9d527e3814d",
		"effb90621d56",
		"7a2515505c9f",
		"d8a69e0829af",
		"c2dda8bf94",
		"ac374995469",
		"77f668ad262",
		"1b3eca660a3a",
		"03934225dae",
		"34e224696a",
		"0fb5f621e41",
		"4b59b206e3f",
		"9e8b708a7461",
		"bde05d586c1c",
		"ec2c94efaca1",
		"9f1f1996d979",
		"cc3687210777",
		"dfcda82de1b2",
		"1a608927731",
		"650c6f63edc",
		"e20c595fe3a",
		"0c05dfef06d",
		"1521d079da26",
		"953961a16f",
		"4da25324e2ee",
		"b244071b649e",
		"7b295c2f4f43",
		"3f9a7b25c3eb",
		"46d23bc76ef9",
		"d64ebcd2fe",
		"d6e700c2d124",
		"dbe56b63",
		"e4a5cea83a4c",
		"8b448e41eb",
		"e617add18d18",
		"fe949eaa4f9",
		"653c1168de2",
		"e98988ab5e",
		"8cc50fd7f66",
		"10c7313452d",
		"3d198544b0d",
		"11b03a89e",
		"74145639fae",
		"4651e667f",
		"702c863a11e2",
		"027d1619f1c7",
		"3ce2d86e30",
		"ad81eae8529",
		"80b9e3040c26",
		"b28d0ea160ea",
		"6796c0bb59",
		"23dac6e1af2c",
		"217b7dec91e",
		"b6f8d1ae392",
		"6abd63c134b9",
		"3578bc909cf",
		"82495f33711",
		"1e90822404",
		"aad9757bd380"
	  ],
	  "hasSidebar": true
	},
	"Description": {
	  "content": {
		"0dbb0ec27ea1": {
		  "banner_content": {
			"bannerText": "Project Description",
			"imageBlur": 8,
			"imageLink": "https://2019.igem.org/wiki/images/c/c9/T--Washington--ProjectDescription2Header.jpeg",
			"imageTopX": 0,
			"imageTopY": 48,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"b8671199f3b": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Immunosense focuses on the development of technologies to help scientists in research, medicine, and the biotechnology industry detect small molecules, which traditionally have been much more difficult to detect using biological assays than larger molecules. Our technologies revolve around chemically induced dimerization (CID), in which two proteins dimerize in the presence of a small molecule. This method has been previously used to control cell signaling<sup>1</sup>, regulatory/metabolic pathways<sup>2</sup>, and logic gates for biological computation in living mammalian cells<sup>3</sup>. However, few naturally occurring CID systems and their derivatives are currently available for research and therapeutic purposes<sup>4</sup>. Creating a CID system with desired affinity and specificity for any given small molecule has, in the past, been unfeasible through computational design and other protein engineering approaches. However, we believe there is untapped potential in using CID systems for the development of diagnostic biosensors. Current biosensors, like FRET, or other methods of detection, like HPLC, are extremely expensive and time-consuming to run. Applying CID systems as a biosensor could allow for a simpler way to detect molecules of interest.&nbsp;</p>\n<p>This season, we specifically worked to develop a split-luciferase based biosensor using nanobodies—the binding regions of antibodies—to detect cannabidiol (CBD), a compound derived from the hemp plant. We also developed a protein model of our nanobody binder that was then verified through creating and testing a mutant of the nanobody based on the model. By doing so, we hoped to establish a working model of the nanobody that could be physically designed to perform with different characteristics.</p>\n<p></p>\n<p>We initially intended Immunosense to be used for solely CBD detection, but with the help of our human practices teams, we realized there are fields beyond the CBD industry that can use Immunosense for generalized small molecule detection by establishing CID systems for more molecules of interest. By screening for more nanobody CID binders, we can design CID systems for many other ligands. With this modification, we can apply Immunosense to many different target molecules, as long as they have nanobody CID binder pairs. To many research labs and businesses, using Immunosense in this way would be more beneficial than current methods like HPLC or ELISA, which are both expensive and time-consuming.&nbsp;</p>\n<p></p>\n<p>We hope that the result of our project will benefit the scientific community by creating a generalizable bioengineered tool that can detect the presence of small molecules with a high degree of accuracy and efficiency, at a lower cost than other tools that have been traditionally used.&nbsp;</p>\n<p></p>\n<p>This project was inspired by work in the Gu Lab at the University of Washington and their work dealing with the creation of a CID system<sup>5</sup>, as well as our own project from 2018 where we sought to identify nanobody binders for different small molecules<sup>6</sup>. Although our results from last year showed some promise of delivering usable binders, we wanted to take what we learned from last year and build a working system to show that these binders can actually be used in a detection system.</p>\n"
		},
		"bfa9da805b16": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ol>\n<li>DeRose R, Miyamoto T, Inoue T. Manipulating signaling at will: chemically-inducible dimerization (CID) techniques resolve problems in cell biology. Pflugers Arch. 2013 Mar;465(3):409-17. doi: 10.1007/s00424-012-1208-6. Epub 2013 Jan 9. PMID: 23299847; PMCID: PMC3584178.</li>\n<li>Pomerantz, J., Sharp, P. &amp; Pabo, C. Structure-based design of transcription factors. Science 267, 93–96 (1995).</li>\n<li>Miyamoto T, DeRose R, Suarez A, Ueno T, Chen M, Sun TP, Wolfgang MJ, Mukherjee C, Meyers DJ, Inoue T. Rapid and orthogonal logic gating with a gibberellin-induced dimerization system. Nat Chem Biol. 2012 Mar 25;8(5):465-70. doi: 10.1038/nchembio.922. PMID: 22446836; PMCID: PMC3368803.</li>\n<li>Stanton, B., Chory, E. &amp; Crabtree, G. Chemically induced proximity in biology and medicine. Science 359, (2018).</li>\n<li>Shoukai Kang, Kristian Davidsen, Luis Gomez-Castillo, Huayi Jiang, Xiaonan Fu, Zengpeng Li, Yu Liang, Molly Jahn, Mahmoud Moussa, Frank DiMaio, and Liangcai Gu Journal of the American Chemical Society 2019 141 (28), 10948-10952 DOI: 10.1021/jacs.9b03522</li>\n<li>https://2018.igem.org/Team:Washington</li>\n</ol>\n<p></p>\n"
		},
		"e5c23b7b572d": {
		  "header_content": "References",
		  "header_priority": 1,
		  "type": "HEADER"
		}
	  },
	  "contentOrder": [
		"0dbb0ec27ea1",
		"b8671199f3b",
		"e5c23b7b572d",
		"bfa9da805b16"
	  ],
	  "hasSidebar": false
	},
	"Design": {
	  "content": {
		"00f98b427398": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Both of these sequences were designed to be transcribed as a single mRNA strand, as they all follow a lac operon and are flanked by a terminator sequence. This design allows for only one level of variation in protein synthesis at the translational level, rather than having possible variation at both the transcriptional and translational level. The CBD anchor binder here is linked to the large subunit of the split luciferase complex via a linker sequence; likewise the CBD dimer binder is linked to the small subunit of the split luciferase complex. The figure below (figure 3) depicts how the proteins are arranged together and how they interact with different molecules.</p>\n<p></p>\n"
		},
		"0c75614c2e": {
		  "bannder_content": {
			"bannerText": "Project Design",
			"imageBlur": 0,
			"imageLink": "https://2019.igem.org/wiki/images/0/0d/T--Washington--Yuck.png",
			"imageTopX": 6,
			"imageTopY": 39,
			"imageZoom": 10,
			"textColor": "BLACK",
			"textSize": 10
		  },
		  "banner_content": {
			"bannerText": "Project Design",
			"imageBlur": 5,
			"imageLink": "https://2019.igem.org/wiki/images/5/53/T--Washington--ProjectDesign2Header.png",
			"imageTopX": 6,
			"imageTopY": 39,
			"imageZoom": 102,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"11cc1c2f5d2": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/5/50/T--Washington--CBD_Anchor_Binder_Model.png",
		  "exampleImage_percentageSize": 40,
		  "exampleImage_subtitle": "Figure 1: Blue: protein model of the CBD Anchor Binder; Red: CBD molecule",
		  "type": "IMAGE"
		},
		"3ab991a873fc": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/ce/T--Washington--Periplasm_Depiction.png",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Figure 4: Periplasmic expression of nanobodies via PelB leader sequence",
		  "type": "IMAGE"
		},
		"3dbfe76c50c": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/2/2e/T--Washington--Anchor_Binder_Biobrick_Fragment.png",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 5: Anchor Binder Biobrick Fragment",
		  "type": "IMAGE"
		},
		"54fe1956d095": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>To understand the structure and behavior of the CID anchor binder we used its amino acid sequence to build a 3-D model. We simulated binding between the anchor binder and the ligand, CBD, to identify the protein’s binding pocket and the molecular interactions it is making with CBD.&nbsp;</p>\n<p></p>\n<p>In order to verify that our simulated model (figure 1) of the binder was correct, we performed a loss-of-function mutation on the CBD anchor binder. Specifically, we performed site-directed mutagenesis on the 32nd residue of the binder which is within the binding pocket according to our model. By changing the residue from tyrosine to alanine, we strike a balance of altering the binding pocket while not destabilizing the anchor binder so much that the protein cannot fold. Therefore, this mutation would decrease the binder’s binding affinity if our model is correct. Experimentally confirming our model will help inform future work on engineering these nanobodies.&nbsp;</p>\n<p></p>\n"
		},
		"55432c916fe": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/c3/T--Washington--BLI_Summary.png",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 2: Biolayer Interferometry Assay Outline",
		  "type": "IMAGE"
		},
		"5f4305fe6f8": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/d/d2/T--Washington--CBD_Dimer_Binder_Biobrick_Fragment.png",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 6: Dimer Binder Biobrick Fragment",
		  "type": "IMAGE"
		},
		"632b02321689": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/thumb/7/7c/T--Washington--Biosensor_Plasmid.png/1197px-T--Washington--Biosensor_Plasmid.png",
			  "imgAltTag": "",
			  "imgCaption": "Biosensor Plasmid",
			  "imgLink": "https://2019.igem.org/wiki/images/thumb/7/7c/T--Washington--Biosensor_Plasmid.png/1197px-T--Washington--Biosensor_Plasmid.png"
			},
			{
			  "externalLink": "https://2019.igem.org/wiki/images/thumb/e/e3/T--Washington--Biosensor_With_FKPA_Plasmid.png/1197px-T--Washington--Biosensor_With_FKPA_Plasmid.png",
			  "imgAltTag": "",
			  "imgCaption": "Biosensor with FKPA Plasmid",
			  "imgLink": "https://2019.igem.org/wiki/images/thumb/e/e3/T--Washington--Biosensor_With_FKPA_Plasmid.png/1197px-T--Washington--Biosensor_With_FKPA_Plasmid.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"6fd4ddb230e0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2>Getting Lit</h2>\n<p>To see if our sensor functions as intended, we first needed to see if CBD could permeate the cell wall and interact with the nanobody binders within the periplasmic space. We planned to test this by preparing two different types of samples: one sample would be a live culture of the E. coli strain WK6, which we use as our protein expressing strain, and the other sample would be a protein sample after it is released from the periplasmic space. Using these two test groups, we should be able to see if the CBD is able to pass through the cell wall at a high enough rate to be detected by our nanobody binders, given that the nanobody binders worked as intended. After verifying that the binders work at all, we would then measure the luminescent response at varying levels of CBD in order to get a titration curve. This has the benefit of verifying the kinetic model that led us to do protein modelling.</p>\n<p></p>\n"
		},
		"7f2338a2b24c": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/9/92/T--Washington--Wetlab_and_Simulations.png",
		  "exampleImage_percentageSize": 70,
		  "type": "IMAGE"
		},
		"9483f64c64ea": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>We also designed these parts as a biobrick, which presented its own challenges. For DNA synthesis, having a repeat of sequences would result in synthesis failure, which was a particular problem for us as the sequences for the nanobody binders were very similar. Due to this issue, the synthesis of these parts were split up into three fragments: the anchor binder biobrick fragment (figure 5), the dimer binder biobrick fragment (figure 6), and the FKPA biobrick fragment (figure 7).&nbsp;</p>\n<ul>\n<li>The anchor binder is preceded by the biobrick prefix sequence and the lac operon and it is flanked by a BamHI cut site.&nbsp;</li>\n<li>The dimer binder is preceded by a BamHI cut site and is flanked by a BglII cut site and the biobrick suffix sequence.&nbsp;</li>\n<li>The FKPA biobrick part is preceded by a BglII cut site and is flanked by the biobrick suffix sequence. During synthesis of these fragments, the FKPA fragment failed multiple times; IDT helped us successfully synthesize the fragment using two different adapter sequences. These fragments would be subcloned into pSB1A3, as the origin of replication in this biobrick backbone is pMB1, which is the same as the pADL-23c origin of replication.</li>\n</ul>\n<p></p>\n"
		},
		"9afdc2291ba0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Our project for 2019 centers around the characterization and implementation of nanobody binders in a chemically induced dimerization (CID) system<sup>1</sup>. In 2018, our team submitted biobrick parts for the anchor and dimer nanobody binders for cannabidiol (CBD). This year, we hoped to apply a CID system in a working detection system for CBD. We eventually decided to develop a split-luciferase biosensor, but initially we sought to further characterize our CID system that would serve as the foundation for our biosensor.</p>\n<p>We first looked to understand the binders through kinetic and protein modeling. Understanding the kinetics of our CID system allows us to improve the performance of our biosensor. By changing certain parameters like the binder protein concentrations and dissociation constants, we can expand the range of molecule concentrations that we can detect and increase the intensity of the signal that is outputted. In order to make these improvements, we have  designed new variations on the structure of our nanobodies. This will allow us to optimize our biosensor without needing to rely on trial and error, thus reducing the number of iterative design cycles.&nbsp;</p>\n<h2><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The Overall Design of Our CID-based Biosensor</span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Before we created a biosensor from our CID system, we performed two types of simulations: kinetic and protein modeling. These two areas of research will inform our biosensor design and production.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our kinetic modeling examined how the parameters of our system relate to the titration curve of the biosensor. When making simulations of our system, the parameters changed were anchor binder concentration, dimerization binder concentration, dissociation constants of both proteins, and alpha (a constant that determines how much the two CID proteins bind when the ligand is present). By changing these parameters and simulating the titration curve of our biosensor, we can determine the optimal concentration of the anchor binder, dimerization binder, and small molecule ligand. </span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">From our model, we also saw that the biosensor had a wider dynamic range and outputted a greater signal if the anchor binder and dimerization binder had high binding affinities. Binding affinities are a property of the proteins, so changing the binding affinities requires modifying the protein. Therefore, we extended the results of the kinetics modeling by using the amino acid sequence given from our unoptimized binders to build a 3D model of the anchor binder. With this information, we can use molecular modeling to study the binding pocket and suggest targeted mutations that can be performed to increase binding affinity of the small molecule ligand to the anchor binder. We have closely integrated our wetlab and modeling work to optimize our biosensor as best as possible. </span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Additionally, our project also focused on constructing a working detection system for CBD, specifically using the luminescent reporting properties of luciferase. This application is just one of many possible ones, but we hope to show with the creation of this system that nanobodies binders can be effectively designed and created. Through rigorous building and testing of these designs, highly accurate and sensitive detection systems for small molecule analytes could become a process that any biological engineer could carry out. </span><br>&nbsp;</p>\n"
		},
		"9c6beb0dc70": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/7/73/T--Washington--Luciferase%2BNanobody_Depiction.png",
		  "exampleImage_percentageSize": 60,
		  "exampleImage_subtitle": "Figure 3: Nanobody-Luciferase Detection System",
		  "type": "IMAGE"
		},
		"a1eaec874e6d": {
		  "header_content": "Introduction",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"aa4c8c09c874": {
		  "header_content": "Modeling the Binder",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"b19e9ded0a7": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>It is also important to have run a “subtraction” assay in parallel to the test assay. This subtraction assay contained no CBD in any of the test wells, which served to measure the background levels of interaction between the sensor and the buffer solution. We also included a secondary subtraction assay, in which the streptavidin biosensor is not exposed to the nanobody. The sensor then follows the same procedure of measuring association and dissociation, but only measures the background levels of interaction of the buffer to the bare sensor.&nbsp;</p>\n<p></p>\n<p>After subtracting these background assays from the test assay, the response of the sensor should increase with each increased concentration of CBD. If we see this relationship, we can then apply a global fit to all of the binding curves to measure binding association (K<sub>on</sub>), dissociation (K<sub>off</sub>), and ultimately the equilibrium dissociation constant (K<sub>D</sub>), which is inversely proportional to binding affinity. Binders with strong interactions typically have a high binding affinity, such as the antibodies in our immune system. With this assay, we should expect to see that CBD binds to the wild type anchor binder and not to the mutant version, which would confirm  our models and simulations of the anchor binder.&nbsp;</p>\n<p></p>\n"
		},
		"d1e8d855f5e9": {
		  "header_content": "References",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"d69c9b9b6c1": {
		  "header_content": "Built to Sense",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"d9434b7e975": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/1/13/T--Washington--FKPA_Biobrick_Fragment.png",
		  "exampleImage_percentageSize": 69,
		  "exampleImage_subtitle": "Figure 7: FKPA Biobrick Fragment",
		  "type": "IMAGE"
		},
		"de58828a8dd0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Both binders are preceded by a PelB leader sequence, which transports the protein chain to the periplasm of E. coli to be folded<sup>4</sup>. As a result, the nanobodies will exist in the periplasm just behind the bacterial cell wall (figure 4), which we hoped to be permeable to CBD. There is also a sequence that codes for FKPA, a chaperone protein that assists in the folding of proteins in the periplasm<sup>5</sup>. These sequences are housed in the pADL-23c backbone because it is the original backbone that the nanobodies were subcloned into and it is easier to manipulate these original sequences than it is to subclone them with another backbone vector.&nbsp;</p>\n<p></p>\n<p>We also designed a different version of the plasmid that did not contain the FKPA chaperone protein; the purpose of this was to determine if FKPA was necessary to get a measurable signal.  These plasmids were constructed through homology-based cloning<sup>6</sup>, similar to a Gibson Assembly.</p>\n<p></p>\n"
		},
		"e0dbd1b9d5bb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ol>\n<li>Shoukai Kang, Kristian Davidsen, Luis Gomez-Castillo, Huayi Jiang, Xiaonan Fu, Zengpeng Li, Yu Liang, Molly Jahn, Mahmoud Moussa, Frank DiMaio, and Liangcai Gu Journal of the American Chemical Society 2019 141 (28), 10948-10952 DOI: 10.1021/jacs.9b03522</li>\n<li>Martin, E. , Wang, J. , Zaror, I. , Yu, J. , Yan, K. , Doyle, M. , Feucht, P. , Shoemaker, K. , Warne, B. , Chin, M. , Sy, B. , Leder, L. , Meyerhofer, M. , Wartchow, C. and Yao, D. (2011). Novartis Evaluation of the ForteBio Octet RED: A Versatile Instrument for Direct Binding Experiments. In Label‐Free Technologies for Drug Discovery (eds M. Cooper and L. M. Mayr). doi:10.1002/9780470979129.ch15</li>\n<li>Andrew S. Dixon, Marie K. Schwinn, Mary P. Hall, Kris Zimmerman, Paul Otto, Thomas H. Lubben, Braeden L. Butler, Brock F. Binkowski, Thomas Machleidt, Thomas A. Kirkland, Monika G. Wood, Christopher T. Eggers, Lance P. Encell, and Keith V. Wood ACS Chemical Biology 2016 11 (2), 400-408 DOI: 10.1021/acschembio.5b00753</li>\n<li>Singh P, Sharma L, Kulothungan SR, Adkar BV, Prajapati RS, Ali PS, Krishnan B, Varadarajan R. Effect of signal peptide on stability and folding of Escherichia coli thioredoxin. PLoS One. 2013 May 7;8(5):e63442. doi: 10.1371/journal.pone.0063442. PMID: 23667620; PMCID: PMC3646739.</li>\n<li>Arié, J. , Sassoon, N. and Betton, J. (2001), Chaperone function of FkpA, a heat shock prolyl isomerase, in the periplasm of Escherichia coli. Molecular Microbiology, 39: 199-210. doi:10.1046/j.1365-2958.2001.02250.x</li>\n<li>Kostylev M, Otwell AE, Richardson RE, Suzuki Y (2015) Cloning Should Be Simple: Escherichia coli DH5α-Mediated Assembly of Multiple DNA Fragments with Short End Homologies. PLoS ONE 10(9): e0137466. https://doi.org/10.1371/journal.pone.0137466</li>\n</ol>\n"
		},
		"f2c1abda90": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2>Performing Site-directed Mutagenesis</h2>\n<p>In order to verify our model, we decided to carry out mutagenesis. We designed two primers, one that includes the mutation from tyrosine to alanine in the middle of the primer and a second that starts with the same base-pair as the former but runs in the opposite direction. After the plasmid was amplified with the mutation we transformed it into the WK6 strain of E. coli, chosen because of its high protein expression levels. After confirming that the mutagenesis was successful with sanger sequencing, we moved on to verifying the proposed change to the protein’s binding affinity to see if our simulated model was accurate.</p>\n<p></p>\n<h2>Verification Steps</h2>\n<p>To test the mutated protein’s binding affinity to CBD, we used an OCTET Super Streptavidin Assay<sup>2</sup>. This type of assay utilizes biolayer interferometry to measure how fast a target molecule binds to a protein in real time. We utilized streptavidin-coated biosensors, which bind to biotin, in order to measure binding activity. To use this sensor, we needed to first purify the protein with a nickel-resin based purification protocol and biotinylate it using the Avi and His tags present in our nanobody sequence. When our target molecule attaches to the anchor binder, a computer analyzes the interference pattern of white light that is reflected from the thin layer of anchor binders.&nbsp;</p>\n<p></p>\n<p>Our experimental set-up involved exposing the nanobody coated sensor to increasing concentrations of CBD (see figure 2). The sensor would first measure a baseline reading and then be dipped into a well containing a known concentration of CBD, which would measure the association rate of the nanobody to CBD. The sensor would then be dipped into a buffer solution to measure the dissociation rate. This process would then be repeated for each test well of CBD.&nbsp;</p>\n<p></p>\n"
		},
		"f475f7edcf8a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>We started off the season by brainstorming different types of detection systems we could  test and implement using the nanobody CID system. We initially hoped to design a  microfluidic device, something akin to a pregnancy test; however, we ultimately decided to pursue the creation and characterization of a biosensor utilizing a split-luciferase system.</p>\n<p></p>\n<p></p>\n<p>We started off speaking with Dr. Paul Yager, a well-known professor at the University of Washington who specializes in building microfluidic devices for diagnostic testing. After several meetings, it became clear that we would not be able to build such a device, at least not for cannabidiol. Cannabidiol is too hydrophobic to pass through the initial membrane, and there were no clear solutions to resolve this problem. He suggested building a folding paper-based microfluidic device, which would be relatively cheap to make and easy to manufacture. Unfortunately, a major roadblock with this design was that it required an activatable signal, like a fluorescent color change, that had not been designed with our nanobody binders yet. Because of this problem, we decided to take a step back and work on building a biosensor on the molecular level rather than attempting to apply it to a hardware piece.&nbsp;</p>\n<p></p>\n<p></p>\n<p>We then discussed our options with our PI, Dr. Liangcai Gu. After several discussions with Dr. Gu, our team decided on two potential paths; we could attempt to create a circularly permuted GFP (cpGFP) that would be bound to each nanobody and change fluorescent characteristics after binding to CBD or we could use a split luciferase assay mechanism for detection<sup>3</sup>. A postdoc in Dr. Gu’s lab, Dr. Shoukai Kang, had already demonstrated that the split luciferase system could potentially work. He had cultured two colonies, one with the anchor binder and one with the dimer binder, and mixed the proteins released from the separate colonies together. Seeing this, we wanted to create a co-expression plasmid that would produce both nanobody-luciferase complexes at similar levels within the same bacteria. We believed that this would simplify the process, as the biosensor could detect concentration by applying CBD directly to the cell culture without having to take the extra steps of isolating the proteins from the cell.</p>\n<p></p>\n<p></p>\n<p>From these two options, we decided to move forward with the split luciferase system primarily because the cpGFP system would most likely not be completed in the summer.  The split luciferase system works by using fragments of a luciferase enzyme (subunits) that, when combined, form a functional enzyme that can interact with furimazine (a luciferin) to create a measurable luminescent signal. Although this luciferase system is typically used to study protein-protein interactions, we believe that it can also be used as a way to measure exact quantities of CBD, as the protein-protein interaction of the nanobody binders can only be induced by CBD. The figure below (figure 3) depicts how the proteins are arranged together and how they interact with different molecules. The design of the split luciferase system denoted as “biosensor,” is as follows:</p>\n<p></p>\n<p></p>\n"
		}
	  },
	  "contentOrder": [
		"0c75614c2e",
		"a1eaec874e6d",
		"9afdc2291ba0",
		"7f2338a2b24c",
		"aa4c8c09c874",
		"54fe1956d095",
		"11cc1c2f5d2",
		"f2c1abda90",
		"55432c916fe",
		"b19e9ded0a7",
		"d69c9b9b6c1",
		"f475f7edcf8a",
		"632b02321689",
		"00f98b427398",
		"9c6beb0dc70",
		"de58828a8dd0",
		"3ab991a873fc",
		"9483f64c64ea",
		"3dbfe76c50c",
		"5f4305fe6f8",
		"d9434b7e975",
		"6fd4ddb230e0",
		"d1e8d855f5e9",
		"e0dbd1b9d5bb"
	  ],
	  "hasSidebar": true
	},
	"Experiments": {
	  "content": {
		"04a6d8d7f6": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2>Test Plate Setup (Black 96-Well Plate)</h2>\n<ol>\n<li>Dilute the nanobody to 200uM using the buffer and fill the loading wells in the 96-well plate with 200uL of the dilution according to the following layout.</li>\n<li>Make serial dilutions of the sample molecule, and fill test wells in the 96-well plate with 200uL of each dilution according to the following layout.</li>\n<ol>\n<li>This should be in increasing concentration</li>\n<li>Remaining wells should be filled with the appropriate buffer.</li>\n<li>If running an octet assay on more than one protein, the samples should be separated by a row of buffer.</li>\n</ol>\n<li>Program how the assay will run on the computer, making sure to define the correct plate layout, biosensors, and steps.</li>\n<li>Place the sensor tray and nanobody plate into the Octet Red96 machine, making sure that well A1 is oriented to the top right corner. Close the lid and let sit for 10 minutes.</li>\n<ol>\n<li>Wait for 10 minutes to allow the biosensors and assay plate to equilibrate to a stable temperature.</li>\n</ol>\n<li>Run the small molecule binding assay.</li>\n<ol>\n<li>The assay first binds the nanobody onto the SSA biosensor and establishes a baseline reading. The sensor is then dips the sensor-bound nanobody into increasing concentrations of the small molecule. For each concentration, there is an association, disassociation, and baseline step.&nbsp;</li>\n</ol>\n<li>When the assay completes, remove both the sensor tray and assay plate from the Octet. Dispose of the used biosensors in a sharps container.</li>\n</ol>\n<p>Figure 2 is an example of the experimental plate setup. The “Load” wells contain the nanobody protein, while the “Sample” wells with values contain varying amounts of CBD. Every other well that is filled consists of only the assay buffer. The “Reference” well is used to establish a “subtraction” measurement to remove background noise.</p>\n<p></p>\n"
		},
		"0ec8cbd71c70": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Mutagenesis</h1>\n<p>We used the site-directed mutagenesis kit sold by NEB. To induce a site-directed mutagenesis, design two primers: one primer with the desired mutation placed in the middle of the primer, and one primer to run in the opposite direction</p>\n<ul>\n<li>Primer design guidelines:</li>\n<ul>\n<li>Primer A: Include 9 base pairs of homology at the 5’ end of the primer before the mutation. After the mutation, include 18-27 base pairs of homology</li>\n<li>Primer B: This primer will run in the opposite direction of Primer A, but will start at the same base pair.&nbsp;</li>\n</ul>\n</ul>\n<p><em>*note* The gene of interest must be circularized or in a plasmid for the mutagenesis to function.</em></p>\n<h2>Wetlab procedures:&nbsp;</h2>\n<ol>\n<li>Run a PCR amplification with a high-fidelity polymerase (ex. Q5) as described below</li>\n<li>KLD (Kinase, Ligase, DpnI) treatment</li>\n<ol>\n<li>Assemble the following reagents in a thin-walled PCR tube (figure 4)</li>\n</ol>\n<li>Mix well by pipetting up and down and incubate at room temperature for 5 minutes.</li>\n<li>Transform 5 uL of the KLD product into Dh5a using the transformation protocol described below</li>\n</ol>\n"
		},
		"13b5eae936ce": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Nickel-resin Based Protein Purification of His-tagged nanobodies by Fast Protein Liquid Chromatography (FPLC)</h1>\n<p></p>\n<p><em>Cell lysates were loaded into a nickel-resin column and binding of our proteinto the column was mediated by His-tags present in our protein. An FPLC machine was then used to wash and elute our proteins of interest. Specifics for your equipment will most likely differ, but the general concept of each step is still applicable.</em></p>\n<p></p>\n<h2>Loading Sample into Column</h2>\n<ol>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">Wash out the wiring with wash buffer (10 mL or 20 mL)</span>&nbsp;</li>\n<ol>\n<li>Automated pump to load onto the column in 556 far-right corners (PW: flow cell). Pump lysate through into column will take about 45mins. Once finished can remove the column and bring to FPLC machine</li>\n</ol>\n</ol>\n<h2>FPLC Elution:</h2>\n<ol>\n<li>Wash the pumps for a few minutes to replace buffer in wiring (A for wash buffer, B for elution buffer), then add nickel column.</li>\n<li>First wash with wash buffer (sans imidazole) for about 8 minutes. This contains low imidazole concentration, 20mM. Flow rate can be 0.5-0.7mL/min. UV spectra over time will first have a spike, then should be constant.</li>\n<li>Add gradient to go to 100% buffer B (elution buffer) over 10 minutes. The UV will increase at a constant rate due to imidazole. The imidazole concentration in the elution buffer is 250mM.&nbsp;</li>\n<ol>\n<li>Once the slope increases, this indicates the protein is being eluted. This will probably occur somewhere between 30-70% elution buffer, it has varied between experiments. The&nbsp;</li>\n<li>Collect by executing “Fraction900” 5mL</li>\n<ol>\n<li>To stop collection early, change flow rate to 0mL</li>\n</ol>\n<li>Make sure the falcon tube is oriented correctly to collect the elution.</li>\n</ol>\n<li>Cleaning column:</li>\n<ol>\n<li>Let flow at wash buffer for a few minutes. Let wash for 5-10 minutes to remove all imidazole.&nbsp;</li>\n</ol>\n</ol>\n"
		},
		"27e1116dd2e": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/6/68/T--Washington--Octet_Test_Plate_Setup.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 2: Octet Test Plate Setup",
			  "imgLink": "https://2019.igem.org/wiki/images/6/68/T--Washington--Octet_Test_Plate_Setup.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"32573358bde6": {
		  "header_content": "References",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"3b22e1b9ace": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Polymerase Chain Reaction (PCR)</h1>\n<p><em>A technique used in various ways from troubleshooting  to design--PCR is used to amplify pieces of genetic material for various molecular biology applications. </em></p>\n<p></p>\n<p><em>In molecular cloning experiments: PCR products are ligated into certain plasmid sequences to create new recombinant protein constructs (See Gibson Assembly)</em></p>\n<p></p>\n<p><em>For Troubleshooting, Colony PCR: aims to elucidate successful ligation of a particular DNA sequence in a plasmid or an organism OR seeks to elucidate successful transformation of a specific recombinant plasmid within a bacteria</em></p>\n<p></p>\n<ul>\n<li>We recommend assembling all reaction components on ice and quickly transferring the reactions to a thermocycler preheated to the denaturation temperature (98°C). All components should be mixed prior to use. Q5 High-Fidelity DNA Polymerase may be diluted in 1X Q5 Reaction Buffer just prior to use in order to reduce pipetting errors.&nbsp;</li>\n</ul>\n<p>Reaction Mixture Recipe (figure 5):</p>\n<p></p>\n"
		},
		"4856c370": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/thumb/e/ec/T--Washington--Luciferase_Setup.png/1596px-T--Washington--Luciferase_Setup.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 3: Luciferase Setup",
			  "imgLink": "https://2019.igem.org/wiki/images/thumb/e/ec/T--Washington--Luciferase_Setup.png/1596px-T--Washington--Luciferase_Setup.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"4a392c859664": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/e/e6/T--Washington--Q5_PCR.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 5: Q5 PCR Recipe",
			  "imgLink": "https://2019.igem.org/wiki/images/e/e6/T--Washington--Q5_PCR.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"4f1fbd27e83": {
		  "accordion_content": [
			{
			  "panel": "| Step                 | Temp   | Time         |\n|----------------------|--------|--------------|\n| Initial Denaturation | 98C    | 30sec        |\n| 25-35 cycles         | 98C    | 5-10sec      |\n| Annealing            | 50-72C | 10-30sec     |\n| Elongation           | 72C    | 20-30sec/kb  |\n| Final Extension      | 72C    | 2min         |\n| Hold                 | 4C     | Indefinitely |",
			  "title": "Thermocycler Conditions for PCR"
			}
		  ],
		  "type": "ACCORDION"
		},
		"54aba515559": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Protein Expression: Nanobodies</h1>\n<p></p>\n<p><em>Protein Expression of Nanobodies in wk6/BL21 E.coli strains--allows mass production of our nanobodies</em><sup>2</sup></p>\n<p></p>\n<ol>\n<li>Using miniprepped DNA, transform purified plasmid into E.coli WK6/BL21 cells (See transformation protocol details)</li>\n<li>After transformation, prepare a starter culture by inoculating a colony from transformation plate to 50ml sterile Falcon tube containing 10ml of LB containing 100ug/ml of ampicillin, 2% wt/vol glucose and 1mM MgCl2 → grow overnight at 37<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">°C</span>  and 170 rpm</li>\n<li>Inoculate 330ml of TB media containing 100 ug/ml of ampicillin, 0.1% wt/vol glucose and 1mM MgCl2 in a 1L flask using the 3ml of the starter culture and allow the culture to grow at 37<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">°C</span> and 170 rpm until it reaches an optical density 600 reading (OD600) of 0.7</li>\n<li>At OD 0.7, add IPTG such that the final concentration in the flask is 1mM to induce Nanobody expression. Allow the culture to grow overnight at 170 rpm and 28<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">°C</span>&nbsp;&nbsp;</li>\n<ol>\n<li>Induce expression for 4 hrs at 170 rpm and 37<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">°C</span>&nbsp;</li>\n</ol>\n<li>Collect the bacteria via centrifugation of the liquid cultures for 15 minutes at 9000g at room temperature</li>\n<li>Resuspend 1L worth of pelleted bacteria with 15mL ice-cold TES and allow to incubate on ice in on an orbital shaker for at least 1 hour</li>\n<li>Add 30ml TES/4 buffer to the resuspended pellet and again allowed to shake for 45 minutes on ice on an orbital shaker</li>\n<li>Afterwards, centrifuge the culture for 30 minutes at 10,000g at 4<span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">°C</span>  and recover the supernatant containing the protein (the periplasmic extract)</li>\n<li>Purify the His-tagged Nanobodies accordingly → see Nickel-resin Based Protein Purification of His-tagged nanobodies by FPLC</li>\n</ol>\n<p></p>\n"
		},
		"593ec64151a": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/4/4b/T--Washington--PCR_Setup.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 4: Mutagenesis PCR Setup",
			  "imgLink": "https://2019.igem.org/wiki/images/4/4b/T--Washington--PCR_Setup.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"598a4793592": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Miniprep</h1>\n<p></p>\n<p><em>DNA isolation of our designed constructs throughout the season relied on specific kits optimized to result in high yield of DNA from a bacterial culture. The kit name and protocols are listed below</em></p>\n<p></p>\n<h2>Invitrogen: Invitrogen Pure Link Quick Plasmid Miniprep Kit&nbsp;</h2>\n<p><em>Notes:</em></p>\n<ul>\n<li><em>Perform all steps at room temp</em></li>\n<li><em>Optional: Preheat aliquot of TE Buffer to 65-70C for eluting DNA. Optional for DNA 1-30kb, recommended for &gt;30kb!</em></li>\n</ul>\n<p></p>\n<h3>Protocol:</h3>\n<ol>\n<li>Harvest: Centrifuge 1-5mL of the overnight LB-culture. Remove all medium (carefully with pipette)</li>\n<ol>\n<li>3500rpm 2 mins</li>\n</ol>\n<li>Resuspend: Add 250uL Resuspension Buffer (R3) w\\ith RNAse A to the cell pellet and resuspend the pellet until it is homogeneous. DO NOT VORTEX. Incubate at RT 5 mins</li>\n<li>Lyse: Add 250uL Lysis buffer (L7)&nbsp;&nbsp;&nbsp;</li>\n<li>Precipitate: Add 350uL N4 buffer. Mix immediately by inverting the tube, or for large pellets, vigorously shaking the tube until the mixture is homogeneous. DO NOT VORTEX. Centrifuge &gt;12,000G=13,000G for 10 minutes.&nbsp;</li>\n<li>Bind. Load supernatant from step 4 onto a spin column in a 2-mL wash tube. Centrifuge column at 12,000g. Discard the flow-through and place column back into the wash tube.</li>\n<li>Optional wash: (recommended for endA+ strains, use for DH5-alphas). Add 500uL Wash Buffer (W10) with ethanol to the column. Incubate the column for 1 min at RT. Centrifuge at 12,000G for 1 minute. Discard the flow through and place column back into wash tube.</li>\n</ol>\n<p></p>\n<h2>Qiagen: QIAprep Spin Miniprep Kit (Non-Vacuum)</h2>\n<p><em>Optional: </em></p>\n<ul>\n<li><em>Add LyseBlue reagent to Buffer P1 at a ratio of 1 to 100</em></li>\n<li><em>Add the provided RNase A solution to Buffer P1, mix and store at 2–8°C. </em></li>\n<li><em>Add ethanol (96–100%) to Buffer PE before use (see bottle label for volume). </em></li>\n<li><em>All centrifugation steps are carried out at 13,000 rpm (~17,900 x g) in a conventional table-top microcentrifuge.</em></li>\n</ul>\n<h3>PROTOCOL</h3>\n<ol>\n<li>Pellet 1–5 ml bacterial overnight culture by centrifugation at &gt;8000 rpm (6800 x g) for 3 min at room temperature (15–25°C).&nbsp;</li>\n<li>Resuspend pelleted bacterial cells in 250 μl Buffer P1 and transfer to a microcentrifuge tube.&nbsp;</li>\n<li>Add 250 μl Buffer P2 and mix thoroughly by inverting the tube 4–6 times until the solution becomes clear. Do not allow the lysis reaction to proceed for more than 5 min. If using LyseBlue reagent, the solution will turn blue.&nbsp;</li>\n<li>&nbsp;Add 350 μl Buffer N3 and mix immediately and thoroughly by inverting the tube 4–6 times. If using LyseBlue reagent, the solution will turn colorless.&nbsp;</li>\n<li>Centrifuge for 10 min at 13,000 rpm (~17,900 x g) in a table-top microcentrifuge.&nbsp;</li>\n<li>Apply 800 μl supernatant from step 5 to the QIAprep 2.0 spin column by pipetting. Centrifuge for 30–60 s and discard the flow-through, or  apply vacuum to the manifold to draw the solution through the QIAprep 2.0 spin column and switch off the vacuum source.&nbsp;</li>\n<li>Recommended: Wash the QIAprep 2.0 spin column by adding 0.5 ml Buffer PB.  Centrifuge for 30–60 s and discard the flow-through.</li>\n<li>Wash the QIAprep 2.0 spin column by adding 0.75 ml Buffer PE.  Centrifuge for 30–60 s and discard the flow-through.</li>\n<li>Centrifuge for 1 min to remove residual wash buffer.&nbsp;</li>\n<li>Place the QIAprep 2.0 column in a clean 1.5 ml microcentrifuge tube. To elute DNA, add 50 μl Buffer EB (10 mM TrisCl, pH 8.5) or water to the center of the QIAprep 2.0 spin column, let stand for 1 min, and centrifuge for 1 min.</li>\n</ol>\n<p></p>\n"
		},
		"612d14033f7": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ul>\n<li>Gently mix the reaction. Collect all liquid to the bottom of the tube by a quick spin if necessary. Overlay the sample with mineral oil if using a PCR machine without a heated lid.</li>\n<li>Transfer PCR tubes to a PCR machine and begin thermocycling.</li>\n</ul>\n"
		},
		"78bdfd205010": {
		  "header_content": "Luciferase Assay",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"7aad290f432": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Gel Electrophoresis</h1>\n<h2>To prepare a 50 mL 1% w/v agarose gel:</h2>\n<ol>\n<li>Measure 50 mL TAE buffer = 50 g.</li>\n<li>Add 0.5 g agarose (specifically labelled for gel extraction)</li>\n<li>Microwave the solution in a 250 mL Erlenmeyer flask covered with a cap for ~45 seconds or until boiling. Watch carefully.</li>\n<li>Remove the flask from the microwave using heat-protective mittens.</li>\n<li>Swirl and continue briefly microwaving until all the agarose is dissolved.</li>\n<li>Let the solution cool until it is safe to handle.</li>\n<li>Add 10,000X SYBR in fume hood and swirl the solution.</li>\n<ol>\n<li>For 50 mL (= 50,000 uL) add 5 uL.</li>\n</ol>\n<li>Pour into a gel box.</li>\n<ol>\n<li>Set up so liquid sets into gel (90° off orientation when running).</li>\n<li>Place well template (\"comb\") into the gel. Alter the type of comb (varies by number of lanes or thickness of wells) as necessary.</li>\n</ol>\n<li>Once solidified, take out the comb and orient with wells next to black (-) electrode.</li>\n<li>Pour TAE buffer to the fill line.</li>\n</ol>\n<h2>To prepare the samples:</h2>\n<ol>\n<li>Dilute samples with 6X purple loading dye.</li>\n<ol>\n<li>For example, for a 25 uL of sample, add 5 uL of loading dye.</li>\n<li>May need to add dye into ladder as well.</li>\n</ol>\n</ol>\n<h2>To load samples onto the gel:</h2>\n<ol>\n<li>Add ladder in leftmost lane.</li>\n<li>If it doesn't contain loading dye, add desired quantity.</li>\n<li>Mix the sample with the pipette a few times.</li>\n<li>Dispense slowly into the desired well.</li>\n<li>Record the contents of each lane.</li>\n<li>Repeat 3-5 for the desired number of samples.</li>\n<li>If empty lanes remain, fill them with loading dye and water in the same total volume as the other samples.</li>\n<li>Run the Gel. Check for bubbles when the gel is running.</li>\n</ol>\n<p></p>\n"
		},
		"7ab7bcbdc3": {
		  "accordion_content": [
			{
			  "panel": "# Reagents needed for 1L:\n\n- 12g Tryptone\n- 24g Yeast extract\n- 4 mL Glycerol\n- 100 mL Phosphate Buffer (0.17 M KH2SO4, 0.73 K2HSO4)\n\n# Preparation:\n\n- Add 900 mL of deionized water to 24 g of yeast extract, 20 g of tryptone, and 4 mL of glycerol.\n- Stir or shake until solutes have dissolved.\n- Autoclave for at least 20 minutes.\n- Let cool to around 60°C.\n- Add 100 mL of sterile phosphate buffer.\n- Store at room temperature\n",
			  "title": "Terrific Broth"
			},
			{
			  "panel": "# Reagents needed for 1L:\n\n- 5g Yeast extract\n- 20g Tryptone\n- 0.584g NaCl\n- 0.186g KCl\n- 2.4 g MgSO4\n- 20 ml 20% glucose solution\n\n# Preparation:\n\n- Add 1L of deionized water to 5g yeast extract, 20g tryptone, 0.584g NaCl, 0.186g KCl, and 2.4 g MgSO4.\n- Stir until solutes have dissolved.\n- Autoclave for at least 20 minutes.\n- Let cool to around 50°C.\n- Add 20 mL of sterile 20% glucose solution\n- Store at room temperature\n",
			  "title": "Super Optimal Broth (SOC)"
			},
			{
			  "panel": "# Reagents needed for 1L:\n\n- 10g Tryptone\n- 5g Yeast extract\n- 10g NaCl\n\n# Preparation:\n\n- Add 800 mL of deionized water to 10g tryptone, 5g yeast extract, and 10g NaCl\n- Adjust pH to 7.5 with NaOH\n- Add deionized water to 1L\n- Autoclave for at least 20 minutes\n- Let cool and store at room temperature\n",
			  "title": "Lysogeny Broth (LB)"
			},
			{
			  "panel": "# Reagents needed for 1L:\n\n- 10g Tryptone\n- 5g Yeast Extract\n- 5g NaCl\n- 2 ml NaOH\n\n# Preparation\n\n- Add 800 mL of deionized water to 10g tryptone, 5g yeast extract, and 5g NaCl\n- Adjust pH to 7.2 with NaOH\n- Add deionized water to 1L\n- Autoclave for at least 20 minutes\n- Let cool and store at room temperature\n",
			  "title": "Rich Broth"
			}
		  ],
		  "type": "ACCORDION"
		},
		"7fdd6251cc1e": {
		  "bannder_content": {
			"bannerText": "Experiments",
			"imageBlur": 0,
			"imageLink": "",
			"imageTopX": 38,
			"imageTopY": 0,
			"imageZoom": 64,
			"textColor": "BLACK",
			"textSize": 10
		  },
		  "banner_content": {
			"bannerText": "Experiments",
			"imageBlur": 7,
			"imageLink": "https://2019.igem.org/wiki/images/5/54/T--Washington--ExperimentHeader.jpeg",
			"imageTopX": 38,
			"imageTopY": 61,
			"imageZoom": 94,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"89b69e46cdd9": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ul>\n<li>Once protocol set up, hit \"run\", and \"block\" rather than sample.</li>\n</ul>\n"
		},
		"8bfab35fbe88": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ol>\n<li>Kostylev M, Otwell AE, Richardson RE, Suzuki Y (2015) Cloning Should Be Simple: Escherichia coli DH5α-Mediated Assembly of Multiple DNA Fragments with Short End Homologies. PLoS ONE 10(9): e0137466. https://doi.org/10.1371/journal.pone.0137466</li>\n<li>Pardon, E., Laeremans, T., Triest, S., Rasmussen, S., Wohlkönig, A., Ruf, A., Muyldermans, S., Hol, W., Kobilka, B. and Steyaert, J. (2014). A general protocol for the generation of Nanobodies for structural biology. Nature Protocols, 9(3), pp.674-693.</li>\n</ol>\n"
		},
		"8fd7cd3f06": {
		  "header_content": "Protocols",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"9f33bd939ffb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Transformations</h1>\n<ol>\n<li>Thaw competent cells in single-use transformation tubes on ice for 10 minutes. For 200 µl tubes, thaw on ice until the last ice crystals disappear. Mix gently and carefully pipette 50 µl of cells into a transformation tube on ice.</li>\n<li>Add 1 pg-100 ng of plasmid DNA (1-5 µl) to cells and mix without vortexing (flick 4-5 times).</li>\n<li>Place on ice for 30 minutes.</li>\n<li>Heat shock at 42°C for 45 seconds.</li>\n<li>Place on ice for 5 minutes.</li>\n<li>Add room temperature SOC.&nbsp;</li>\n<ol>\n<li>For 50 uL of competent cells, use 70uL LB or SOC&nbsp;</li>\n</ol>\n<li>Place in the shaker at 37°C for 60 minutes. Shake vigorously (250 rpm) or rotate. (Skip this step for Amp resistant cells).&nbsp;</li>\n<li>Mix cells without vortexing and perform several 10-fold serial dilutions in SOC (optional).&nbsp;</li>\n<li>Spread 50-100 µl of each dilution onto pre-warmed selection plates and incubate at 37°C in the Bacteria fridge.  [plates go one of each for 1X, 10X and 100X]</li>\n</ol>\n<p></p>\n"
		},
		"a0e1beee023": {
		  "header_content": "Octet Biolayer Interferometry Assay",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"afb7d013314": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Homology Based Cloning</h1>\n<p>A Gibson Assembly is meant to clone multiple pieces of DNA into the same plasmid without multiple steps. While a Gibson Assembly is usually performed in vitro, we are using a modified protocol that is in vivo<sup>1</sup>.</p>\n<h2>Procedure:&nbsp;&nbsp;</h2>\n<ol>\n<li>Design a set of primers with ~20 bp of homology on both the plasmid backbone and the desired insert. Each insert should have its own set of primers.</li>\n<li>Run a PCR reaction with a high fidelity polymerase (ex. Q5) with the designed primers. Set up a reaction to amplify the plasmid backbone and each insert. This generates gene overlap on both the insert and the plasmid backbone.</li>\n<li>Run a gel to confirm that the PCR worked</li>\n<li>Digest the plasmid backbone with DpnI. This step is extremely important, as it digests any remaining template DNA.&nbsp;</li>\n<ol>\n<li>Add NEB Cutsmart buffer to the PCR reaction to a final concentration of 1X. Next add 1 uL of NEB DpnI and mix by pipetting up and down gently. Incubate at 37 C for 1 hour</li>\n</ol>\n<li>Clean the plasmid and insert DNA with a PCR Purification Kit. Nanodrop the final DNA pieces to get the concentration of each piece</li>\n<li>Transform the fragments generated with PCR into DH5a in the correct molar ratios</li>\n<li>Run single-colony PCR to verify that the assembly worked</li>\n</ol>\n<p></p>\n<p></p>\n"
		},
		"c68ee4d6475": {
		  "header_content": "Media Recipes",
		  "header_priority": 1,
		  "type": "HEADER",
		  "wysiwyg_content": "<h1>Media and Buffer Recipes</h1>\n"
		},
		"c8f19337a7d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Attached is our method file, which is usable with the Octet Assay software so that any team that wishes to replicate our experiment can do so:&nbsp;</p>\n<p><a href=\"https://2019.igem.org/wiki/images/4/49/T--Washington--Octet_Method_File.zip\" target=\"_self\">https://2019.igem.org/wiki/images/4/49/T--Washington--Octet_Method_File.zip</a>&nbsp;</p>\n"
		},
		"d477a951faa": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/a/a9/T--Washington--Octet_Sensor_Setup.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 1: Octet Sensor Setup",
			  "imgLink": "https://2019.igem.org/wiki/images/a/a9/T--Washington--Octet_Sensor_Setup.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"ec3b4103cb72": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>A reporter gene assay we used to analyze the dimerisation of our CDB biosensor system. The assay uses two subunits of NanoLuc luciferase fused to both our dimer binder and anchor binder proteins. When dimerisation occurs in the presence of CBD, the two subunits of luciferase will come together to produce luminescence that we can quantify</p>\n<h2>Procedure:&nbsp;</h2>\n<ol>\n<li>Incubate CBD with the CID biosensor for one hour. Different incubations should be set up for each concentration of CBD that is being tested.</li>\n<li>While the system is incubating, thaw the Nano-Glo Luciferase substrate and buffer on ice. Once thawed, dilute the luciferase substrate with the buffer by 20 fold.</li>\n<li>Once the system is done incubating, mix 80 uL of the incubation mix with 20 uL of the diluted luciferase substrate in one well in a 96-well plate. This makes the final dilution of the luciferase substrate 100 fold.&nbsp;</li>\n<li>Be sure to include three replicates of each treatment for this test. Example plate layout with a control and varying concentrations of CBD (figure 3).</li>\n<li>Collect luminescence data at 450 nm using a plate reader</li>\n</ol>\n"
		},
		"f8cdd78ad4af": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Nanobody Biotinylation</h1>\n<p></p>\n<p><em>We used BirA enzyme to biotinylate our nanobodies which contain an Avi-tag. This is essential future experiments using these proteins because it allows us to bind them to streptavidin-coated sensors for kinetic testing.</em></p>\n<p></p>\n<h2>Setup</h2>\n<p>This is similar to a DNA restriction digest because an enzyme catalyzes the reaction. You mix the following in some manner:</p>\n<ul>\n<li>Desalted nanobody</li>\n<li>BirA MixA, and BirA MixB  - the reaction buffers that also contain biotin</li>\n<li>BirA - The enzyme</li>\n</ul>\n<p></p>\n<p>Here is a typical reaction recipe:</p>\n<ul>\n<li>4mL of desalted nanobody&nbsp;</li>\n<li>0.5 mL of BirA mixA</li>\n<li>0.5 mL of BirA mixB</li>\n<li>3uL BirA enzyme</li>\n</ul>\n<p></p>\n<h2>Incubation</h2>\n<p>Let incubate for one hour away from light at room temperature.</p>\n<p></p>\n"
		},
		"f9db991286d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h1>Desalting/Removing residual Imidazole from eluted protein by FPLC</h1>\n<p><em>Desalting was performed using an FPLC machine to quickly replace the elution buffer with 1X PBS and 5% glycerol. (only pump A, no elution)--desalting allowed stability and proper storage of our nanobodies</em></p>\n<p></p>\n<h2>Preparation:</h2>\n<ol>\n<li>Rinse off desalting injection column with milliQ water</li>\n<li>Adjust capacity to volume of elution of protein using glass rod (ex: 5mL) and pour in to the side with the black rubber.&nbsp;</li>\n<li>Screw in cap securely</li>\n<li>Add Milli-Q water to other side and screw in caps</li>\n<li>Secure injection column and desalting column with correct wiring orientation.&nbsp;</li>\n<ol>\n<li>1 is connected to the top of the desalting column, the bottom is connected to where the column was initially connected to for the purification. Check what type of column it is for recommended flow rate. 2 connects to the bottom of the desalting injection column (protein) on the bottom, 6 (opp. side) goes to the top (milli Q water).</li>\n</ol>\n<li>Inject sample: flowpath -&gt; InjectionValve (load to inject)</li>\n<li>When there is no sample left, switch back to load (or bubble squishing)</li>\n</ol>\n<h2>Initiation</h2>\n<ol>\n<li>Change flowpath -&gt; Injection Valve to Inject</li>\n<ol>\n<li>Adjust flow-pump to 2 mL/min, pressure should be no more than ~0.5 mAU</li>\n<li>This pumps water above the injection column and pushes the sample out.</li>\n</ol>\n<li>Once the sample is completely dispensed, change flowpath -&gt; Injection Valve back to “load”</li>\n<ol>\n<li>Important to do! Otherwise pressure in injection tube might break apparatus</li>\n</ol>\n<li>Watch UV for spike. First spike will be the protein, so collect that.</li>\n<li>Same collection method: “Frac900” execution, approximately the same volume as elution volume</li>\n</ol>\n<h2>Clean up:</h2>\n<ol>\n<li>Let buffer continue washing to let imidazole flow out the column. You can stop or do the next protein once the UV peak shows imidazole went through. (around 60 mL)</li>\n<li>Closing program:</li>\n<ol>\n<li>Flow-rate to 0mL</li>\n<li>Hit “End”</li>\n<li>Turn off the machine</li>\n</ol>\n</ol>\n<p></p>\n"
		},
		"fdc59a30": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Quantitative Kinetic binding assay we used to measure the equilibrium dissociation constant of target molecules. The assay involves the use of a 96-well plate (for our purposes) with streptavidin-coated sensors placed within.&nbsp;</p>\n<h2>Setup:&nbsp;</h2>\n<ul>\n<li>On the associated computer, rows on the 96-well plate can be labeled and programmed in the software. In the first row, buffer is loaded into the sample black tray, followed by biotinylated protein and buffer again for the association/dissociation step; all can be labeled and saved on the software.</li>\n<li>In the machine, the sample plate is placed next to the plate with the sensors, and the machine takes the coated sensors and dips them into the sample plate, row-by-row, as the tray is vibrated to create a circular plate motion</li>\n</ul>\n<h2>Process:</h2>\n<ul>\n<li>Light is sent down the sensor and reflections are measured based on the streptavidin layer’s interaction with the surrounding protein solution in a process called biolayer interferometry, which “analyzes the interference pattern of white light reflected from two surfaces: a layer of immobilized protein on the biosensor tip, and an internal reference layer”</li>\n<li>Constructive interference produces peaks and destructive interference produces troughs on the spectrum measured on the computer</li>\n<li>When more of the biotinylated protein binds to the sensor, the optical thickness of the streptavidin changes</li>\n<li>During dissociation, tightly binding molecule pairs require a longer dissociation time</li>\n</ul>\n<h2>Buffer Preparation:</h2>\n<ul>\n<li>The buffer we used is 1XPBS + 0.05% Tween-20 + 0.2% BSA</li>\n</ul>\n<h2>Sensor Plate Setup (Black 96-Well Plate)</h2>\n<ul>\n<li>Fill the appropriate wells with 200uL of buffer</li>\n<li>Place plate into an empty sensor tray</li>\n<li>Place super streptavidin (SSA) biosensors into each well with buffer</li>\n<li>Let sit for at least 10 minutes</li>\n<li>See figure 1 for example of sensor plate. Rationale for sensor set-up is based on experimental set up.</li>\n</ul>\n<p></p>\n"
		}
	  },
	  "contentOrder": [
		"7fdd6251cc1e",
		"a0e1beee023",
		"fdc59a30",
		"d477a951faa",
		"04a6d8d7f6",
		"27e1116dd2e",
		"c8f19337a7d",
		"78bdfd205010",
		"ec3b4103cb72",
		"4856c370",
		"8fd7cd3f06",
		"0ec8cbd71c70",
		"593ec64151a",
		"afb7d013314",
		"54aba515559",
		"13b5eae936ce",
		"f9db991286d",
		"f8cdd78ad4af",
		"7aad290f432",
		"3b22e1b9ace",
		"4a392c859664",
		"612d14033f7",
		"4f1fbd27e83",
		"89b69e46cdd9",
		"9f33bd939ffb",
		"598a4793592",
		"c68ee4d6475",
		"7ab7bcbdc3",
		"32573358bde6",
		"8bfab35fbe88"
	  ],
	  "hasSidebar": true
	},
	"Gallery": {
	  "content": {
		"1cf1b000737b": {
		  "type": "STUB"
		},
		"23f06ee9f85": {
		  "type": "STUB"
		}
	  },
	  "contentOrder": [
		"1cf1b000737b",
		"23f06ee9f85"
	  ],
	  "hasSidebar": false
	},
	"Human_Practices": {
	  "content": {
		"29e234162520": {
		  "header_priority": 1,
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Our team sought to integrate human practices into nearly every part of our project. This was made possible by an extremely interdisciplinary team, with interests in not only science, but also design, communication, education, and public engagement. In addition to thinking carefully and creatively about the impact of our project on our world, we actively engaged with stakeholders and the public about our project. These dialogues informed and shaped the direction of our work. Furthermore, as a team, we firmly believe in giving back to our community and that having a positive presence in our neighborhoods is essential to fostering a climate open to science and innovation. Thus, our work outside of the lab, including our education projects, events for the public, and collaborations with other teams, was extremely important to us.</p>\n<p><strong>To learn more, please click on the following icons:</strong></p>\n"
		},
		"98e90ed36aa": {
		  "header_content": "Human Practices - Introduction",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"a89fd351f816": {
		  "bannder_content": {
			"bannerText": "Human Practices",
			"imageBlur": 4,
			"imageLink": "https://2019.igem.org/wiki/images/6/68/T--Washington--HPOverviewBanner.jpeg",
			"imageTopX": 50,
			"imageTopY": 16,
			"imageZoom": 92,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "banner_content": {
			"bannerText": "Human Practices",
			"imageBlur": 4,
			"imageLink": "https://2019.igem.org/wiki/images/6/68/T--Washington--HPOverviewBanner.jpeg",
			"imageTopX": 50,
			"imageTopY": 16,
			"imageZoom": 92,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "header_priority": 1,
		  "type": "BANNER"
		},
		"e98881c7d09": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/Team:Washington/Integrated_Human_Practices",
			  "imgAltTag": "",
			  "imgCaption": "> Integrated Human Practices",
			  "imgLink": "https://2019.igem.org/wiki/images/2/27/T--Washington--HPOverviewToIHP.jpeg"
			},
			{
			  "externalLink": "https://2019.igem.org/Team:Washington/Collaborations",
			  "imgAltTag": "",
			  "imgCaption": "> Collaborations",
			  "imgLink": "https://2019.igem.org/wiki/images/8/8d/T--Washington--HPOverviewToCollab.jpeg"
			},
			{
			  "externalLink": "https://2019.igem.org/Team:Washington/Public_Engagement",
			  "imgAltTag": "",
			  "imgCaption": "> Public Engagement",
			  "imgLink": "https://2019.igem.org/wiki/images/e/e0/T--Washington--HPOverviewToPE.jpeg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		}
	  },
	  "contentOrder": [
		"a89fd351f816",
		"98e90ed36aa",
		"29e234162520",
		"e98881c7d09"
	  ],
	  "hasSidebar": false
	},
	"Integrated_Human_Practices": {
	  "content": {
		"058936bad738": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\"><strong>So far we’ve heard from experts that Immunosense has great potential to monitor the presence of small molecules, like biomarkers and drugs. We decided to next contact experts in bioengineering in order to learn how Immunosense can improve other fields we have not considered yet, and if there are any other specific drugs we could create detection systems for. </strong></span></p>\n"
		},
		"0c1a1982f630": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 14pt;font-family: Arial;\"><strong>Dr. Christopher Collins</strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dr. Christopher Collins is a Research Scientist at Seattle Children’s Research Institute who has worked on the development of proteomic methods for Newborn Screening and diagnosis of congenital childhood disorders. He looks for biomarkers of deadly diseases in extremely small dry blood spots obtained from the heels of newborns. His current method of biomarker detection is Mass-Spec, but it is difficult to detect targets that are transmembrane proteins and hydrophobic peptides, as they need to be denatured in order to detect. This process is long, as it takes a few hours up to half a day. He thought the concept of our project was very interesting and could see potential in our solution to quickly and accurately detect small molecules, which would be highly valued in labs and clinics.</span><br></p>\n"
		},
		"1c27025477": {
		  "type": "SEPARATOR"
		},
		"1d95b4f752f5": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\"><strong>Once we learned how Immunosense can help with malaria research, we wanted to see how our small molecule detection system could serve other research labs studying infectious diseases.</strong></span></p>\n"
		},
		"1edfa8f0cf2": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/1/1f/T--Washington--Yager_Paul.jpg",
		  "exampleImage_percentageSize": 30,
		  "exampleImage_subtitle": "Source: Yager Research Laboratory Website",
		  "type": "IMAGE"
		},
		"21fafdc178": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><a href=\"https://www.seattlechildrens.org/research/centers-programs/global-infectious-disease-research/research-areas-and-labs/frenkel-lab/\" target=\"_self\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 14pt;font-family: Arial;\"><strong>Dr. Lisa Frenkel</strong></span></a>&nbsp;</h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We contacted Dr. Lisa Frenkel, a Pediatric Infectious Disease Specialist at the University of Washington and Seattle Children’s Research Institute. Her lab focuses on investigating mechanisms of HIV infection persistance during antiretroviral therapies and </span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">has done extensive work in developing economical assays for HIV testing.</span><br></p>\n"
		},
		"23a8058a36f": {
		  "header_content": "References",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"290f57a2f7": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We asked Dr. Yager about what specific applications he thinks Immunosense could have. We learned Immunosense could be used to monitor levels of psychoactive and epilepsy drugs in patients, so doctors can confirm their patients are taking their medication at the correct concentration. Another potential application for Immunosense is the accurate detection of warfarin, an anti-clotting drug. In order for warfarin to be effective, it's required to be at an extremely precise level in the body, which is currently difficult to monitor. With Immunosense, patients or doctors may be able to closely monitor the presence or level of this drug. We also learned our biosensor solution is applicable in the vaping industry, which is currently under fire due to an increasing amount of developing health risks in consumers, such as lung failure. The exact cause of these arising health concerns are currently unclear, but Immunosene may help detect chemical contaminants, such as pesticides and faulty flavorants, in vape products. </span>&nbsp;</p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Immunosense also has the potential to be an accurate drug test for opiates, such as fentanyl. Washington state currently has a huge opiate abuse problem, and a drug test that implements Immunosense could assist emergency physicians, first responders, parole officers, or psychiatrists to determine the presence of drugs using just a mouth swab. Saliva usually contains psychoactive elements of drugs that have entered the bloodstream and is much easier to collect than a urine sample. We learned that Immunosense can become a simple drug testing tool that any professional can use by obtaining saliva samples from patients, outpatients, and offenders.</span>&nbsp;</p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We also asked about the process for creating simple tools for diagnostics and drug testing, as we learned that our solution has the potential to detect a wide variety of drugs, such as warfarin and fentanyl. We were informed that these tools should be as easy to use as a pregnancy test and that creating the device itself is extremely difficult, as it usually requires a team to spend a large amount of time to design parameters. If we were to create a diagnostic tool or drug test using Immunosense, we should consider how fast our biosensor luminescence occurs after a small molecule is detected and whether our solution can be stored for long periods of time. These are a few parameters that may significantly affects the readout of drug monitoring systems.</span>&nbsp;</p>\n<h3 style=\"text-align:start;\"></h3>\n<h3 style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong>KEY TAKEAWAYS:</strong></span></h3>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">We learned Immunosense can serve the vaping industry, law enforcement, and businesses that depend on compliance for taking or not taking drugs </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Based on the feedback we learned about the parameters of diagnostic tools, we are currently thinking of ways to develop a drug detection product that is simple, small, and accessible for consumers in the industries mentioned.</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Before creating a prototype, we should consider how our luminescence readout will translate to a physical device and how fast this readout will occur.</span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Collaboration with our Wetlab and Simulations teams to create a prototype is key</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We would also need to work with our Design team to integrate Dr. Yager’s suggestions into our prototype.</span></li>\n</ul>\n</ul>\n"
		},
		"2b15d5eb569": {
		  "type": "SEPARATOR"
		},
		"2e7ff9a61ed": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\">The cannabidiol (CBD) industry is projected to see massive amounts of growth in upcoming years. By 2024, the collective sales for CBD in the U.S. are projected to surpass <strong>$20 billion</strong>, of which includes an expansion into general retail sales beyond licensed dispensaries and pharmaceuticals<strong>[1]</strong>. Additionally, many states in the U.S. have legalized cannabis for its use in recreational and medicinal capacities. This move into the mainstream market parallels rising demand and increases the availability of CBD, which has been proven to provide therapeutic relief from pain, inflammation, mood disorders, and seizures.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\">With this market growth, there is an increased interest among CBD manufacturers and suppliers to ensure the purity of their products. CBD is generally well tolerated at high doses, and has none of the psychoactive effects that its isomer, THC, imparts on the user. Thus, there is an incentive for manufacturers to eliminate any impurities in order to deliver a high quality product. With this in mind, we sought to develop our CID biosensor using CBD as our molecule of interest, in order to assess the viability of our technology for applications in detection and quantification within this industry.</span><br></p>\n"
		},
		"41f27285592": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/thumb/1/15/T--Washington--Newborn_Screening.jpg/1600px-T--Washington--Newborn_Screening.jpg",
		  "exampleImage_percentageSize": 45,
		  "exampleImage_subtitle": "Newborn Screening. Source: Wikipedia",
		  "type": "IMAGE"
		},
		"43b469fba62": {
		  "type": "SEPARATOR"
		},
		"46146ab7872": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><a href=\"http://faculty.washington.edu/yagerp/\" target=\"_self\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 18pt;font-family: Arial;\"><strong>Dr. Paul Yager</strong></span></a><br>&nbsp;</h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dr. Paul Yager is a professor in the Bioengineering Department at the University of Washington. His lab works on developing accessible diagnostic tools that are easy to use by all consumers- whether they perform testing at home or in a hospital lab. </span></p>\n"
		},
		"4fe14b8890f": {
		  "type": "SEPARATOR"
		},
		"504e8f133e4": {
		  "banner_content": {
			"bannerText": "Integrated Human Practices",
			"imageBlur": 6,
			"imageLink": "https://2019.igem.org/wiki/images/6/68/T--Washington--HPOverviewBanner.jpeg",
			"imageTopX": 0,
			"imageTopY": 45,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"52a3ca6161d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\"><strong>In order to ascertain potential uses for Immunosense and learn if there are specific molecules we should consider for biosensing, we started with reaching out to experts in research. We were interested in learning the opinions researchers had on comparable small molecule detection techniques, such as Mass-Spec, ELISA, and HPLC.</strong></span><strong><br></strong></p>\n"
		},
		"5de6dbfb512": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/9/92/T--Washington--Kaushansky_Alexis.jpg",
		  "exampleImage_percentageSize": 25,
		  "exampleImage_subtitle": "Source: Seattle Children's Research Institute.",
		  "type": "IMAGE"
		},
		"73452bb494d": {
		  "type": "SEPARATOR"
		},
		"74f7309506b0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\"><strong>After speaking with experts in infectious disease research and receiving valuable feedback on potential applications for Immunosense, we wanted to learn how our solution can be used in other fields, such as medicine.</strong></span></p>\n"
		},
		"7782d48dc": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/thumb/5/51/T--Washington--Immunosense-JPG.jpg/662px-T--Washington--Immunosense-JPG.jpg",
		  "exampleImage_percentageSize": 40,
		  "exampleImage_subtitle": "Immunosense Prototype Design by Clara Too",
		  "type": "IMAGE"
		},
		"7d519349f602": {
		  "type": "STUB"
		},
		"84919bd7cc38": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We first discussed current methods the Kaushansky lab uses for small molecule detection, such as miniature Western Blotting to monitor phosphorylation changes. We also discussed comparable techniques to Immunosense, such as ELISA. It was noted that a distinct advantage of Immunosense is its lack of postprocessing needed to analyze samples. </span>&nbsp;</p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Dr. Kaushanky also provided several suggestions for future directions of our work that we have taken into consideration. One suggestion for further applications of Immunosense is the quantification of the number of antigens in the blood and the diversity of these antigens. Immunosense could also detect metabolites, due to our ability to obtain specific nanobodies and modulate the sensitivity of our biosensor. In addition to this, we learned that our solution has the potential to help assess pre-existing or partial immunity against a particular disease vector - as is the case in populations which are routinely exposed to malaria and do not benefit from traditionally developed vaccines. </span>&nbsp;</p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">In conjunction with these applications, Dr. Kaushansky gave us valuable feedback on how other research labs interested in small molecule detection could benefit from Immunosense as either a product or a service. Our solution could be offered as both a product and a service, with an initial training period wherein our company first develops the biosensor in conjunction with the customer, with the option for the customer to buy the product and do it themselves if they find it useful for their work. She noted this because large datasets in research make it unlikely for labs to outsource the detection of a single molecule; however, offering the service for a huge panel of molecules would be more practical. </span>&nbsp;</p>\n<h3 style=\"text-align:start;\"></h3>\n<h3 style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong>KEY TAKEAWAYS:</strong></span></h3>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Immunosense has a desirable advantage over other small molecule detection techniques: its lack of postprocessing.</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Our solution would be extremely useful for researchers to detect various small molecules such as antigens in blood, metabolites, and markers of pre-existing or partial immunity against a particular disease vector, like malaria.</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Immunosense has the potential to become a small molecule detection product or service to assist fields beyond the CBD Industry, where many infectious disease research labs may find great benefit from its simplicity and specificity.</span></li>\n</ul>\n"
		},
		"87621b08878": {
		  "type": "SEPARATOR"
		},
		"8ad3c085a7e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Like Washington iGEM, EcoGen Labs aims to make their products widely accessible. In addition to selling high quality CBD extracts and isolates, they also provide services to sell </span><a href=\"https://ecogenlabs.com/pages/whitelabel\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\"><strong>private-label products</strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\"> to sellers across the country.</span> <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">When we spoke with EcoGen labs, we wanted to gain a better understanding of how our solution could make an impact in the CBD industry. We discussed the current methods of CBD detection they are using along with the potential for Immunosense to become a simple method for guaranteeing the purity of CBD products. </span>&nbsp;</p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We also asked more about the newly popularized CBD industry and how it will develop in the coming years. We learned the CBD industry has shifted and the demand is now more towards finished goods, such as CBD snacks, capsules, and topicals. We also learned more about the clientele for these goods, as many brands are transitioning to create their own lines of CBD products to implement into food and beverages. While CBD is predicted to have huge market growth, Cannabigerol (CBG) is another cannabinoid of interest that we could look into creating a detection system for. </span></p>\n<p></p>\n<p style=\"text-align:start;\"></p>\n<h3><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong>KEY TAKEAWAYS:</strong></span></h3>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Immunosense can be used as an accurate method of CBD detection for products in the CBD industry</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Should we consider CBG as another molecule of interest for detection through Immunosense?</span><br></li>\n</ul>\n"
		},
		"8cac912a7443": {
		  "type": "SEPARATOR"
		},
		"8d0e2b49c7": {
		  "header_content": "Expert Feedback",
		  "header_priority": 1,
		  "type": "HEADER",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 24px;\"><strong>Expert Feedback</strong></span></p>\n"
		},
		"8d8cdf13d90": {
		  "header_content": "New Perspectives on Small Molecule Detection",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"8dfd3cfcf92f": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/e/e9/T--Washington--Frenkel_Lisa.jpg",
		  "exampleImage_percentageSize": 30,
		  "exampleImage_subtitle": "Source: Seattle Children's Research Institute.",
		  "type": "IMAGE"
		},
		"8e61012665c": {
		  "type": "SEPARATOR"
		},
		"8fdc2b49ecb5": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>1: <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 13px;font-family: Open Sans\", Arial, sans-serif;\">BDS Analytics. (2019).</span> <span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 13px;font-family: Open Sans\", Arial, sans-serif;\">U.S. CBD Market Anticipated to Reach $20 Billion in Sales by 2024 | BDS Analytics. [online] Available at: https://bdsanalytics.com/u-s-cbd-market-anticipated-to-reach-20-billion-in-sales-by-2024/?fbclid=IwAR0q-G-FjyDL6n5U4iC1chIgc0PxkxsJbdgeTFsTwDA27trsV7pXSfvp9Mg.</span></p>\n"
		},
		"90ffa48d668": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">Based on expert feedback, we took into account that our potential product should be small and easy to use. We designed the detection device so that it could be plugged into a cell phone and a corresponding Immunosense app can be used to select the small molecule of detection interest and begin detection in the sample. For example, saliva could be loaded into the detection device and small molecules, such as drugs, can be detected in the sample. After the device is finished with detection of the small molecule, the app could show \"present\" or \"not present\" depending on the results from the device. </span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Further collaborative work will be done between our teams to consider further product design decisions based on suggestions from potential customers and stakeholders.</span></p>\n"
		},
		"955f190d57a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><a href=\"https://www.seattlechildrens.org/research/centers-programs/global-infectious-disease-research/research-areas-and-labs/kaushansky-lab/\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 14pt;font-family: Arial;\"><strong>Dr. Alexis Kaushansky<br></strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 14pt;font-family: Arial;\"><strong> </strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We first reached out to Dr. Alexis Kaushansky. She is currently an associate professor in the Center for Infectious Disease Research in Seattle Children’s Research Institute and affiliate associate professor at the University of Washington. She oversees a lab that investigates pathogenic diseases with a focus on malaria. She gave us insight into current techniques for biosensing and specific applications that Immunosense could be used for in her lab and in general malaria research. </span><br></p>\n"
		},
		"9cf48316320": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">She suggested one potential use for Immunosense was through drug detection and monitoring. One possible drug that we could monitor is the HIV antiretroviral Tenofovir, a small molecule which fits the criteria for our CID biosensor technology. In this respect, Immunosense could serve as an alternative to HPLC in therapeutic drug monitoring, with the benefit of Immunosense being easily accessible without the need for sophisticated hardware and extensive experience with laboratory procedures.</span>&nbsp;</p>\n<h3 style=\"text-align:start;\"></h3>\n<h3 style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong>KEY TAKEAWAYS:</strong></span></h3>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We confirmed with another expert in research that Immunosense would be a great tool to monitor drug levels in patients</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Immunosense can serve as an alternative to HPLC for therapeutic drug detection</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Tenofovir may be a candidate for a small molecule we could develop a biosensor for using our CID technology</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Immunosense can serve as a solution for easy and accurate drug monitoring- but what other molecules could we detect that will help fields such as medicine?</span></li>\n</ul>\n"
		},
		"a4119cf2ce6": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dr. Collins also mentioned that his current detection technique allows him to test for multiple biomarkers at a time. The medical field may greatly benefit from Immunosense if we were able to detect multiple markers of diseases at once, so patients could be diagnosed faster. Creating a simple detection system where more than one biomarker could be screened would save a significant amount of time for researchers and clinics.</span><br></p>\n<h3><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Key Takeaways:</strong></span></h3>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our solution has the potential to be a valuable diagnostic tool through the detection of biomarkers of deadly diseases in newborns</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Immunosense has great advantages over Mass-Spec due to its ability to simply detect small, hydrophobic molecules that would otherwise require denaturing for detection.</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We should consider optimizing Immunosense so it could detect multiple small molecules at once in order to save labs and clinics significant amounts of time.</span></li>\n</ul>\n"
		},
		"a774a46bbe91": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><a href=\"https://ecogenlabs.com\" target=\"_blank\"><strong>EcoGen Labs</strong></a>&nbsp;</h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We first spoke with EcoGen Laboratories, one of the largest CBD manufacturers based out of Colorado. Their most popular product is their </span><a href=\"https://ecogenlabs.com/collections/cbd-isolate\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>CBD isolate</strong></span></a> <span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">- a 99% pure, crystalline form of CBD. To create these isolates, their hemp plants undergo a complex CBD extraction and the extracts are then subject to filtration, which removes unwanted hemp plant compounds. This is followed by alcohol washes to crystallize the heavily filtered CBD extracts.</span></p>\n"
		},
		"a84836f0a6d": {
		  "header_content": "Overview",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"b585edccb2aa": {
		  "header_content": "From CBD Detection to Small Molecule Detection",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"b6096d811213": {
		  "separator_width": "66",
		  "type": "SEPARATOR"
		},
		"bdbcfaa8836": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We initially planned to only contact experts in the CBD industry. However, when we learned  that CBG is another cannabinoid of interest that we should detect using Immunosense, we began to consider what other small molecules could use a detection solution in fields beyond the Cannabinoid Industry. We were informed by our Wetlab team that detecting small molecules other than CBD is possible, as we have access to a very large nanobody library where we can select specific CID binders for other molecules of interest.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our team’s initial thought was that we could develop detection solutions to monitor various drugs- but we had several questions. What kinds of drugs need monitoring, who would benefit from their detection, and are there small molecules besides drugs we should consider? These were questions we needed to answer in order to help our sub-teams with next steps of this project.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">To answer these questions, we decided to speak with experts in research, medicine, and bioengineering to understand how our solution could improve their work and learn which markets may benefit from a small molecule detection system. The experts in these fields provided thoughtful feedback and asked critical questions that helped us shape the future directions of Immunosense.</span><br></p>\n"
		},
		"c9f053b10706": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">By meeting with experts in research, medicine, and bioengineering, we gained new perspectives on applications for Immunosense beyond CBD detection. We learned Immunosense can evolve to match the needs of a variety of markets that lack alternative small molecule biosensing methods. Our vast nanobody library makes it possible to find potential CID binders for many other small molecules of interest, allowing Immunosense to be extremely versatile. We were able to integrate the suggestions and feedback we received, such as adjusting small molecule sensitivity, into our Wetlab and Simulations team’s work through the optimization of our CID biosensor. By altering various parameters, these teams are able to adjust the range of detectable small molecule concentration and luminescence readout. This gives us the potential to generate customizable small molecule detection solutions depending on the variable needs of the user. We are currently taking into consideration the speed of our luminescence readout and the ability for our solution to detect multiple molecules simultaneously - as these were interesting questions raised by the experts we spoke with. In addition to integrating the feedback we received into the work of Wetlab and Simulations teams, we were also able to collaborate with our Design team to produce a preliminary prototype design for Immunosense as a small molecule detection solution. </span></p>\n"
		},
		"cf779e448a3": {
		  "type": "STUB"
		},
		"d93a3247c059": {
		  "header_content": "Designing a Prototype",
		  "header_priority": 3,
		  "type": "HEADER"
		},
		"e82839237d27": {
		  "header_content": "The CBD Industry",
		  "header_priority": 1,
		  "type": "HEADER",
		  "wysiwyg_content": "<p><strong>CBD Industry</strong></p>\n<p><strong>(in progress)</strong></p>\n"
		},
		"e8831cc8a285": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://ecogenlabs.com/",
			  "imgAltTag": "Logo of EcoGen Labs",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/c/ce/T--Washington--EcoGen_Labs.jpg"
			},
			{
			  "externalLink": "https://ecogenlabs.com/collections/cbd-isolate",
			  "imgAltTag": "Pure CBD Isolate",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/f/fc/T--Washington--CBDIsolate.jpg"
			},
			{
			  "externalLink": "https://ecogenlabs.com/pages/nursery",
			  "imgAltTag": "Hemp Plant",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/8/8e/T--Washington--HempPlant.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"e8e5e4aab9a0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Arial;\">At Washington iGEM, our goal is to create a simple and accessible solution for detecting small molecules. In order to do this, we needed to learn more about the current communities that lack alternative methods of detection and which small molecules we could develop biosensors for that will make the most impact in these communities. We consulted experts in numerous fields such as the Cannabidiol (CBD) industry, infectious disease research, and academia and gained critical feedback on Immunosense, which helped direct our project purpose and R&amp;D activities. We received many questions and comments about our project, which we integrated into the optimization of Immunosense through our Wetlab and Simulations teams. The ultimate result of our meetings was the generalization of Immunosense from solely detection of CBD to detection of small molecules of interest. </span><br></p>\n"
		},
		"ea4cc68bb2d": {
		  "type": "STUB"
		},
		"f97c65b07c": {
		  "separator_width": "66",
		  "type": "SEPARATOR"
		}
	  },
	  "contentOrder": [
		"504e8f133e4",
		"a84836f0a6d",
		"e8e5e4aab9a0",
		"b6096d811213",
		"e82839237d27",
		"2e7ff9a61ed",
		"8d0e2b49c7",
		"a774a46bbe91",
		"e8831cc8a285",
		"8ad3c085a7e",
		"b585edccb2aa",
		"bdbcfaa8836",
		"73452bb494d",
		"52a3ca6161d",
		"87621b08878",
		"955f190d57a",
		"5de6dbfb512",
		"84919bd7cc38",
		"43b469fba62",
		"1d95b4f752f5",
		"2b15d5eb569",
		"21fafdc178",
		"8dfd3cfcf92f",
		"9cf48316320",
		"1c27025477",
		"74f7309506b0",
		"8e61012665c",
		"0c1a1982f630",
		"41f27285592",
		"a4119cf2ce6",
		"4fe14b8890f",
		"058936bad738",
		"8cac912a7443",
		"46146ab7872",
		"1edfa8f0cf2",
		"290f57a2f7",
		"f97c65b07c",
		"8d8cdf13d90",
		"c9f053b10706",
		"d93a3247c059",
		"7782d48dc",
		"90ffa48d668",
		"23a8058a36f",
		"8fdc2b49ecb5"
	  ],
	  "hasSidebar": true
	},
	"Medal_Requirements": {
	  "content": {
		"2f72dbef7cb": {
		  "header_content": "Gold",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"38d7f7e080b": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">✔ Integrated Human Practices - We engaged with stakeholders and the public and used what we learned to inform our project’s direction. Read more on our </span><a href=\"http://2019.igem.org/Team:Washington/Human_Practices\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Human Practices</strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"> page.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">✔ Model Your Project - Our project included a molecular and kinetic protein modeling component which tied in closely with our wetlab work. Learn more on our </span><a href=\"http://2019.igem.org/Team:Washington/Model\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Model </strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">page.</span></p>\n"
		},
		"3b8e759fc0a": {
		  "bannder_content": {
			"bannerText": "Medal Requirements",
			"imageBlur": 6,
			"imageLink": "https://2019.igem.org/wiki/images/f/f8/T--Washington--PhotoCollage.jpg",
			"imageTopX": 47,
			"imageTopY": 56,
			"imageZoom": 94,
			"textColor": "WHITE",
			"textSize": 6
		  },
		  "banner_content": {
			"bannerText": "Medal Requirements",
			"imageBlur": 6,
			"imageLink": "https://2019.igem.org/wiki/images/f/f8/T--Washington--PhotoCollage.jpg",
			"imageTopX": 47,
			"imageTopY": 56,
			"imageZoom": 94,
			"textColor": "WHITE",
			"textSize": 6
		  },
		  "type": "BANNER"
		},
		"50061f1b090": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>✔ Competition Deliverables - We filled out our judging form and completed our wiki, poster, and presentation by the competition deadlines.</p>\n<p>✔ <a href=\"http://2019.igem.org/Team:Washington/Attributions\" target=\"_blank\"><strong>Attributions</strong></a> - Thank you again to everyone who helped us with our project!</p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">✔ </span><a href=\"https://2019.igem.org/Team:Washington/Description\" target=\"_blank\"><span style=\"color: inherit;background-color: initial;font-size: 16px;\"><strong>Description and Inspiration</strong></span></a><strong> </strong><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">- We have given a clear and concise description of our project and why we chose it.</span></p>\n<p>✔ Characterization / Contribution - We have added additional characterization data to a biobrick we created last year: <a href=\"http://parts.igem.org/Part:BBa_K2682000\" target=\"_blank\"><strong>BBa_K2682000</strong></a>&nbsp;</p>\n"
		},
		"5360b350d4c4": {
		  "header_content": "Bronze",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"80db32607": {
		  "header_priority": 1,
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>This year, we have completed the requirements to receive a gold medal, and are eligible for a number of special awards.</strong></span>&nbsp;</h4>\n"
		},
		"ad7a261e3": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ul>\n<li>Best Model Award</li>\n<li>Best Education &amp; Public Engagement Award</li>\n<li>Best Integrated Human Practices</li>\n<li>Best Wiki</li>\n<li>Best Poster</li>\n<li>Best Presentation</li>\n</ul>\n<p></p>\n"
		},
		"b9c79d9e9d0": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">✔ Validated Part / Validated Contribution - We made three biobricks, some of which have characterization data. Visit our </span><a href=\"http://2019.igem.org/Team:Washington/Parts\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Parts </strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">page to learn more.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">✔ Collaboration - We collaborated with multiple teams on outreach and through hosting another PNW iGEM Meetup. Read more on our </span><a href=\"http://2019.igem.org/Team:Washington/Collaborations\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Collaborations</strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong> </strong>page.</span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">✔ Human Practices Silver - We thought creatively and carefully about how our project could affect our world. Read more on our </span><a href=\"http://2019.igem.org/Team:Washington/Human_Practices\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Human Practices</strong></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong> </strong> page.</span></p>\n"
		},
		"bfca1ab6a7a": {
		  "header_content": "Eligible Special Awards",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"e3d83a6e991d": {
		  "header_content": "Silver",
		  "header_priority": 1,
		  "type": "HEADER"
		}
	  },
	  "contentOrder": [
		"3b8e759fc0a",
		"80db32607",
		"2f72dbef7cb",
		"38d7f7e080b",
		"e3d83a6e991d",
		"b9c79d9e9d0",
		"5360b350d4c4",
		"50061f1b090",
		"bfca1ab6a7a",
		"ad7a261e3"
	  ],
	  "hasSidebar": false
	},
	"Model": {
	  "content": {
		"024859a0aa1": {
		  "accordion_content": [
			{
			  "panel": "``` xml\n<ROSETTASCRIPTS>\n  <SCOREFXNS>\n    <ScoreFunction name=\"genpot_soft\" weights=\"beta\">\n      <Reweight scoretype=\"fa_rep\" weight=\"0.2\"/>\n    </ScoreFunction>\n    <ScoreFunction name=\"genpot\" weights=\"beta_cart\">\n      <Reweight scoretype=\"coordinate_constraint\" weight=\"0.1\"/>\n    </ScoreFunction>\n  </SCOREFXNS>\n\n  <TASKOPERATIONS>\n  </TASKOPERATIONS>\n\n  <FILTERS>\n  </FILTERS>\n\n  <MOVERS>\n    <GALigandDock name=\"dock\" scorefxn=\"genpot_soft\" scorefxn_relax=\"genpot\" grid_step=\"0.25\" hashsize=\"8.0\" subhash=\"3\" final_exact_minimize=\"bbsc1\" random_oversample=\"10\" rotprob=\"0.9\" rotEcut=\"100\" padding=\"4.0\" sidechains=\"aniso\" sc_edge_buffer=\"0\" favor_native=\"2\">\n     <Stage repeats=\"10\" npool=\"100\" pmut=\"0.2\" smoothing=\"0.375\" rmsdthreshold=\"2\" maxiter=\"50\" pack_cycles=\"100\" ramp_schedule=\"0.1,1.0\"/>\n    </GALigandDock>\n  </MOVERS>\n\n  <PROTOCOLS>\n    <Add mover=\"dock\"/>\n  </PROTOCOLS>\n  <OUTPUT scorefxn=\"genpot\"/>\n</ROSETTASCRIPTS>\n```",
			  "title": "dock.xml"
			}
		  ],
		  "type": "ACCORDION"
		},
		"0293e6dbdcc9": {
		  "header_content": "Works Cited",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"05a8e753d9f": {
		  "header_content": "Results and Conclusion",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"079a5978481": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">Autoinhibition makes it more difficult to predict the behavior of ternary systems. Though the behavior of our specific biosensor can be characterized by titration curves, we intend for our project to be a proof of concept for other CID systems, which will have different proteins and therefore binding constants. Especially with the unintuitive behavior of autoinhibition, it is important that teams which use CID biosensors have a model which relates their proteins’ characteristics to the behavior of the biosensor. </span>&nbsp;</p>\n"
		},
		"0de8864121b": {
		  "banner_content": {
			"bannerText": "Modeling",
			"imageBlur": 5,
			"imageLink": "https://2019.igem.org/wiki/images/2/22/T--Washington--ModelingHeader.jpeg",
			"imageTopX": 0,
			"imageTopY": 30,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"0ebd6e435d95": {
		  "header_content": "Genetic Algorithm (GA) Ligand Docking",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"13ea37ceb3f8": {
		  "header_content": "Introduction: Multiscale Modelling",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"1695392fe9d7": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/e/ed/T--Washington--design_flow_chart.png",
		  "exampleImage_percentageSize": 80,
		  "exampleImage_subtitle": "Figure 12: Protein design workflow",
		  "type": "IMAGE"
		},
		"185f8fc2842": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ol>\n<li>Douglass, E. F., Miller, C. J., Sparer, G., Shapiro, H. &amp; Spiegel, D. A. A Comprehensive Mathematical Model for Three-Body Binding Equilibria. J. Am. Chem. Soc. 135, 6092–6099 (2013).&nbsp;&nbsp;&nbsp;</li>\n<li>Rodbard, D., Feldman, Y., Jaffe, M. L. &amp; Miles, L. E. M. Kinetics of two-site immunoradiometric (‘sandwich’) assays—II. Immunochemistry 15, 77–82 (1978).&nbsp;</li>\n<li>Griffiths, J. R. A More General Definition of Km. (Portland Press Limited, 1978).&nbsp;&nbsp;&nbsp;</li>\n<li>Gnacadja, G. A method to calculate binding equilibrium concentrations in the allosteric ternary complex model that supports ligand depletion. Mathematical Biosciences 232, 135–141 (2011).&nbsp;</li>\n<li>Yang, J. &amp; Hlavacek, W. S. Scaffold-mediated nucleation of protein signaling complexes: Elementary principles. Mathematical Biosciences 232, 164–173 (2011).&nbsp;&nbsp;</li>\n<li><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">Kang, S. et al. COMBINES-CID: An Efficient Method for De Novo Engineering of Highly Specific Chemically Induced Protein Dimerization Systems. J. Am. Chem. Soc. 141, 10948–10952 (2019).   </span>&nbsp;&nbsp;&nbsp;</li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Das, R. Four Small Puzzles That Rosetta Doesnt Solve. PLoS ONE 6, (2011).</span>&nbsp;</li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Song, Y. et al. High-Resolution Comparative Modeling with RosettaCM. Structure 21, 1735–1742 (2013).</span>&nbsp;</li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Meiler, J. &amp; Baker, D. ROSETTALIGAND: Protein-small molecule docking with full side-chain flexibility. Proteins: Structure, Function, and Bioinformatics 65, 538–548 (2006).</span>&nbsp;</li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Kuhlman, B. et al. Design of a Novel Globular Protein Fold with Atomic-Level Accuracy. Science 302, 1364–1368 (2003).</span>&nbsp;</li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Zimmermann, L. et al. A Completely Reimplemented MPI Bioinformatics Toolkit with a New HHpred Server at its Core. Journal of Molecular Biology 430, 2237–2243 (2018).</span>&nbsp;</li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Madeira, F. et al. The EMBL-EBI search and sequence analysis tools APIs in 2019. Nucleic Acids Research 47, 636–641 (2019).</span></li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Baker, D. full-chain protein structure prediction server. Robetta Available at: http://robetta.bakerlab.org/.</span></li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">The PyMOL Molecular Graphics System, Version 1.2r3pre. (2019). Schrödinger, LLC.</span></li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">Hosseinzadeh, P. Preparing Ligands. RosettaCommons (2016). Available at: https://www.rosettacommons.org/demos/latest/tutorials/prepare_ligand/prepare_ligand_tutorial.</span></li>\n<li><span style=\"color: rgb(60,64,67);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\">O'Meara, M. &amp; Lewis, S. Resfile syntax and conventions. RosettaCommons Available at: https://www.rosettacommons.org/docs/latest/rosetta_basics/file_types/resfiles.</span></li>\n</ol>\n"
		},
		"1bb224ef7092": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4>Methodology</h4>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">After we obtained models of our protein’s structure, the next step was to simulate CBD’s binding to the nanobody to identify the location of the binding site. We did this by running genetic algorithm ligand docking. This procedure requires a params file, which contains the chemical properties of the ligand like geometry, atom types, and partial charges, giving Rosetta information about the interactions the ligand can make (more information about params files can be found at </span><a href=\"https://www.rosettacommons.org/demos/latest/tutorials/prepare_ligand/prepare_ligand_tutorial\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">RosettaCommons</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">).<sup>15</sup> Originally, the ligand docking protocol also called for a conformers file giving information about the ligand’s different conformations but the new genetic algorithm samples these conformers internally. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We concatenated our protein homology models and the pdb of CBD, the ligand: </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>cat anchor.pdb ligand.pdb &gt; anchor_ligand_pdb</code></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We opened this new pdb in PyMOL to move the ligand close to the expected binding pocket on the anchor protein. For our nanobody, we expected the ligand to bind to the loops that varied in the homology models shown in Figure 11. Since these loops were likely higher in energy, binding the ligand to them would likely lower the energy of the system. Moving the ligand close to the expected binding pocket makes the modeling procedure more efficient, because it prevents Rosetta from sampling the entire molecule, resulting in faster convergence.</span></p>\n"
		},
		"1efbe6dd": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/c4/T--Washington--GALigandDockingWorkflow.png",
		  "exampleImage_percentageSize": 90,
		  "exampleImage_subtitle": "Figure 10: GA ligand docking workflow",
		  "type": "IMAGE"
		},
		"2437485f6b63": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/5/5b/T--Washington--varloop-table.png",
		  "exampleImage_percentageSize": 75,
		  "exampleImage_subtitle": "Figure 9.1: Variable loops for our target protein, CA-14",
		  "type": "IMAGE"
		},
		"2af1c9bfc0b": {
		  "accordion_content": [
			{
			  "panel": "NATRO\n\nSTART\n\n25 A NOTAA PGC",
			  "title": "design.res"
			}
		  ],
		  "type": "ACCORDION"
		},
		"303fe105149c": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We used Rosetta’s GA ligand docking protocol to predict the binding mode of our nanobody and CBD. The binding mode can tell us which amino acids of the nanobody are interacting with CBD during the first step of the CID mechanism. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The previous ligand docking mechanism used the anchor protein and the ligand in their original states in the PDB files and kept their orientations static throughout the docking study. Molecules, however, are not static, and constantly rotate about their single bonds, creating potentially infinite conformations. This procedure’s discounting of the many different conformations of the input molecules resulted in an incomplete sample space for a potential binding mode. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The genetic algorithm allows for a wider variety of conformations to be sampled: Rosetta generates a library of conformations of the ligand by making several small stochastic rotations and runs docking with them. From this library, the few anchor-ligand conformations with the lowest energy are used to generate a new library of ligand conformations and runs docking again. The best (with lowest energy) conformer of these is the basis for the last cycle of docking where 100 different conformations are formed and the best 20 are outputted. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This procedure also lets the anchor protein move, but not as much as the ligand, which is why it is important for the homology models to be accurate. In short, GA ligand docking is more accurate and converges faster because it accounts for the natural movement of the molecules and it maintains diversity in its sampling. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">See Figure 10 below for an overview of the GA ligand docking workflow.</span></p>\n"
		},
		"3333254b3352": {
		  "exampleImage_imageLink": "https://lh4.googleusercontent.com/lsUDLmQxx0wnXEsA27Ou0APSHGUQKWW1NwDZlyE_bhTDR2r6HLPYnEwllc2xMx9nF6sNOtv--pYJRq3TC0RIgA_ExjevS9SfCsemWhnsiVvycXfN4tGJ1S13p9m6dFzfrfHtMzKx",
		  "exampleImage_percentageSize": 60,
		  "exampleImage_subtitle": "Figure 16.1: Energies of systems after making single point mutations",
		  "type": "IMAGE"
		},
		"35da0a852879": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/2/27/T--Washington--ligand-docking.gif",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 14.1: Animated view of our binding pocket",
		  "type": "IMAGE"
		},
		"3ba71cb555a5": {
		  "header_content": "Results",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"46b2301941fd": {
		  "accordion_content": [
			{
			  "panel": "``` bash\n#!/bin/bash\n# First argument is pdb file to mutate\n# Second argument is list of positions to mutate\n# Author: Eric Yeh <yehe@uw.edu>\n\nif [ ! -f \"CBD.params\" ]; then\n    echo \"Could not find CBD.params\"\n    exit 1\nfi\n\nfor i in `cat $2`; do\n    echo “NATRO” > design.res\n    echo “START” >> design.res\n    echo “$i A NOTAA PGC” >> design.res\n\n    rosetta/main/source/bin/fixbb.static.linuxgccrelease -s $1 -resfile design.res -beta_cart -extra_res_fa CBD.params -in::file::load_PDB_components false -ex1 -ex2\n    f=\"${1}\"\n    FILE=\"${f%.*}_0001.pdb\"\n    rosetta/main/source/bin/relax.static.linuxgccrelease -s $FILE -beta_cart -extra_res_fa CBD.params -in::file::load_PDB_components false -bb_move false -dualspace -jump_move true\n    tail -n 1 score.sc >> mscore.sc\n    FILE=\"${f%.*}_0001_0001.pdb\"\n    newfile=\"$(echo ${FILE} | sed -e \"s/0001_0001/$i/\")\"\n    mv \"${FILE}\" \"${newfile}\"\n    FILE=\"${FILE%.*}\"\n    newfile=\"${newfile%.*}\"\n    sed -i \"s/$FILE/$newfile/g\" mscore.sc\n    rm \"${f%.*}_0001.pdb\"\ndone\n```",
			  "title": "design.sh"
			}
		  ],
		  "type": "ACCORDION"
		},
		"48286aa36f8": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>After we mutated each residue individually (and checked for the positions that actually changed), we looked for the models that decreased the energy the most. We then used PyMOL to take a closer look at what was going on with the protein. Sometimes residues will mutate but will not actually interact with the ligand. Thus, we eliminated these models from potential candidates to implement in wetlab. We also tried different combinations of a couple mutations to see if we could decrease the energy further.</p>\n<p>Some residues will change to an amino acid like alanine, whose side chain is just a hydrogen, and will decrease the energy of the binding simply because alanine is smaller. This change is actually decreasing the energy of just the backbone protein. One way to counteract this is to calculate delta energies of the unbound mutated protein and ligand and the mutated binding mode. In PyMOL we pulled the ligand off the protein in our mutated model and ran the relax protocol. Next, we subtracted the energy of our bound (and untampered) mutated model from the energy of the relaxed unbound complex. This value should be positive if the mutation(s) decreased the energy of the binding interaction; the more positive, the better.</p>\n"
		},
		"482cac9b2749": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Though there are many biosensors which use ternary complexes to measure the concentration of a molecule, the behavior of these biosensors differ from single-protein binders. Consider a system where molecule A is the first protein, molecule B is the target molecule, and molecule C is the second protein. In the presence of B, A and C will bind and form a complex ABC.</span>&nbsp;</p>\n"
		},
		"49dba52f6a4": {
		  "header_content": "Protein Design",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"4a20b75a0ce3": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/a/ac/T--Washington--TemplatePDBs.png",
		  "exampleImage_percentageSize": 90,
		  "exampleImage_subtitle": "Figure 9.2: Template PDBs with deleted residues",
		  "type": "IMAGE"
		},
		"4d7643ff592": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4>GA Ligand Docking</h4>\n<p>We did not see much convergence in our ligand docking models. It is normal to see quite a bit of divergence due to the variability of the homology models and the randomness of the procedure. However, we expected to see a few low energy docking models from different homology models in a similar state, which would be a promising candidate for the binding mode. Unfortunately, we did not see any clear candidate, and were dismayed that in most models, the ligand was primarily interacting with the surface of the protein, which does not suggest a very strong binding affinity.&nbsp;</p>\n<p>We subtracted the energies of the docked proteins from their original homology models and analyzed the ones with the biggest difference for convergence, but again did not see a clear pattern. We also updated our params file and got some different results, but if anything, they were more divergent: the ligand was interacting with a larger sample space on the protein.&nbsp;</p>\n<p>We still wanted to see if we could design our protein to increase binding affinity, so we chose one model to base our designs off of. This particular model (below in figure 14) was a good candidate because the binding mode is deeper in the molecule suggesting that the ligand is making more interactions with protein. More interactions indicate that this binding conformation is more stable, and is therefore more likely to be an accurate representation of binding in vitro.</p>\n"
		},
		"505a40f47887": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>After running fixbb and relax on all the individual residues, as shown in Figure 16.1, we identified the few with the lowest energy and ran the same procedure on different combinations or them. Sometimes residues can have counteracting effects, which is why it is important to try all possible combinations. Upon closer look at the mutated residues in PyMOL, we discovered that two of the residues we had selected, 33 and 80, did not appear to be interacting with CBD. This implies that we saw a decrease in energy because the mutations were decreasing the energy of the anchor protein rather than of the binding mode, so we decided to leave these residues in their original states.</p>\n<p>We found that the model with the lowest energy was from mutating position 30 from serine to histidine, position 74 from arginine to phenylalanine, and position 76 from asparagine to aspartic acid. This system with these mutations had an energy score of -356.804 (energies of other combinations shown in Figure 16), a decrease of 9.018 when compared to the original. Furthermore, subtracting this from the energy of the mutated protein unbound from the ligand (-326.064) resulted in a difference of 30.74. This means that the mutations reduced the energy of the binding mode specifically, and not for instance, just the energy of the backbone protein.</p>\n"
		},
		"52654303c75": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/3/3e/T--Washington--EnergiesAfterMupleMutations.png",
		  "exampleImage_percentageSize": 60,
		  "exampleImage_subtitle": "Figure 16.2: Energies of systems after mutating multiple positions",
		  "type": "IMAGE"
		},
		"55edd0d35a9e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>The end challenge of protein simulations is to design our nanobody to increase the binding affinity with the ligand, CBD. We can do this by taking a well-converged structure generated in GA ligand docking and analyzing the interactions between the protein and ligand. In Rosetta, we can insert point mutations in the amino acid sequence of the nanobody and simulate different combinations of mutations to find a conformation with the lowest energy. This energy state indicates the strongest binding between protein and ligand, which would increase the effectiveness of our CID sensor.</p>\n<p>See Figure 12 below for an overview of the protein design workflow.</p>\n"
		},
		"5b9191c2e603": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The output grishin alignment files were used to create new PDB files that thread together each template PDB with our target protein’s FASTA sequence. We ran the following command for each template PDB to generate these files:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>rosetta/main/source/bin/partial_thread.static.linuxgccrelease </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-in:file:fasta target.fasta </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-in:file:alignment target_template.grishin </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-in:file:template_pdb template.pdb</code></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Next we generated fragment files. These are files that contain more folding information about the groups of amino acids that appear in the fasta file, which allows Rosetta to sample sections of the sequence rather than sample each residue individually. By predicting the structure of local sequences based on solved proteins, we reduced the sample space in Rosetta. Using a tool developed by the Baker Lab called </span><a href=\"http://robetta.bakerlab.org/\" target=\"_self\"><span style=\"color: rgb(17,85,204);background-color: transparent;font-size: 11pt;font-family: Arial;\">Robetta</span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">, we submitted the FASTA sequence of our target protein which generates two fragment files, both of which we used.<sup>13</sup></span><sup> </sup></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Homology modeling also requires a hybridize.xml file, which tells Rosetta the modeling protocol:</span><br>&nbsp;</p>\n"
		},
		"5c440c997205": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4><span style=\"font-size: 24px;\">Troubleshooting</span></h4>\n<p>Unfortunately, the results of our original procedure were not verified by our wetlab. Based on our model, we recommended a “knock-out” mutation that we expected would severely decrease the binding affinity between out nanobody and CBD. When wetlab performed an octet-assay on this system, they discovered that this mutation did not significantly impact binding. We believe this was because our original homology models were inaccurate. Fixing the homology models would give us a more accurate location for the nanobody’s binding site and improve the efficacy of our protein design.</p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">To improve our homology models, we proposed to lower the impact the template PDB files have on our predicted protein model. We hypothesized that the template PDB files were having too much of an influence on the position of the variable regions on the target protein. To solve this, we removed the variable loops, the amino acid sequences corresponding to those listed in Figure 9.1 below from Kang et al., from each of the template PDB files before running homology modeling, so Rosetta would have to construct these loops from scratch, and not from the templates.</span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 11px;\"><sup>6</sup></span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"> Using PyMOL, we deleted 3-5 residues from each of the loops on the temple PDBs that corresponded to the three variable loops on our target protein models, as shown in Figure 9.2. The alignment file we made with Clustal Omega shows which residues on the templates correspond to our target’s residues. </span>&nbsp;</p>\n"
		},
		"60241841362e": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/8/88/T--Washington--parameters_table.png",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Figure 4: Parameters used in our model.",
		  "type": "IMAGE",
		  "wysiwyg_content": "<p></p>\n<img src=\"https://2019.igem.org/wiki/images/8/88/T--Washington--parameters_table.png\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/>\n<p></p>\n"
		},
		"622581f10734": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/e/ed/T--Washington--BindingPocketViews.png",
		  "exampleImage_percentageSize": 90,
		  "exampleImage_subtitle": "Figure 14.2: Two views of our binding pocket ",
		  "type": "IMAGE"
		},
		"640820561211": {
		  "header_content": "Introduction: Kinetics Modeling",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"65d2382a64": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">We want to determine the molecular structure of our protein as it allows us to determine where the binding pocket for our ligand, CBD, is located. After identifying this site, we can study which amino acids interact with the ligand, which causes the molecules to bind. We want to optimize the binding affinity by simulating point mutations at this site that will cause the protein and the ligand to form more stable binding conformations, with the end goal of implementing these mutations in wetlab to design a more effective biosensor.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Modeling protein structure is a complex and difficult problem. Our protein is too small to consider using x-ray crystallography or electron microscopy, more precise “imaging” techniques, to examine its structure (nor do we have the resources to undergo these tests). Therefore, we rely solely on simulations and their energy outputs to understand our protein’s structure. To simulate our protein’s structure, the protein-ligand binding, and to mutate our backbone protein, we used a software suite developed at the University of Washington called Rosetta.<sup>7,8,9,10</sup> We chose this platform because its wide range of functions suits our needs, and we can easily get support for it at our university. </span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">However, simulating the protein’s structure introduces some uncertainty and variability, which is problematic when we run ligand docking, because it is harder for us to predict how exactly our protein and ligand bind. There are several ways each atom in the protein can interact with each other, and each of these must be considered since they may influence the overall protein structure. We use energy output as a measure of how close the protein is to its most stable state, but it is difficult to pinpoint the exact model that will lead to the lowest energy conformation. </span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">During the structure simulation, Rosetta randomly folds the protein one residue at a time, discarding folds that increase the total energy of the protein and keeping ones that decrease the energy. However, depending on how Rosetta initially folds the protein, when it finishes going through the entire sequence, it does not always reach the lowest energy conformation possible. Out of potentially infinite local energy minima there is only one general energy minimum, which is the one we want. As seen in Figure 7, when Rosetta tries to minimize the energy, the final fold will likely be one of several local energy minima rather than the lowest energy model that is the most accurate. We can try to find this by generating hundreds of models and analyzing only the few with the lowest energies.</span></p>\n"
		},
		"6abfdddbe30b": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">By sampling a wide array of different values for our parameters, we drew two interesting conclusions from our model. The first regarded the concentration of the anchor binder and dimerization binder. As expected, increasing the concentration of both anchor binder and dimerization binder increases the maximum concentration of the dimer. However, the model also predicts that increasing the concentration of one binder but not the other increases the dynamic range of the biosensor, as shown in Figures 5.1 and 5.2 below :</span>&nbsp;</p>\n"
		},
		"7824b49fd7c": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The Rosetta script is in the bin folder which performs GA ligand docking when run with the following tags:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>rosetta/main/source/bin/rosetta_scripts.default.linuxgccrelease</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>  -s input.pdb</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>  -parser:protocol dock.xml</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>  -beta_cart</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>  -extra_res_fa ligand.params</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>  -in::file::load_PDB_components false</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>  -nstruct number_of_models</code></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">For homology models that are more converged, we recommend running GA ligand docking on the best 8-10 models, several times, nstruct 5-10, on each backbone (the tag nstruct dictates how many times you run the simulation). For backbones that are more variable, we recommend using at least 20 homology models and running ga ligand docking 1 to 2 times (nstruct 1-2).</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">When the GA ligand docking is finished, 20 PDB files will be created for each nstruct. For each docking study that is run, the PDB files produced should have two numbers: the first denotes the ID of the individual simulation, and the second number is the file’s rank within that simulation, with _000#_0001 being the model with the lowest energy. We selected the best ligand docking model produced from each homology model and sorting them by the change in energy between the original homology model and the model when the ligand is added. Then we searched for low energy models with similar ligand conformations to perform protein design on.</span>&nbsp;</p>\n"
		},
		"7976bf5e6e3a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Typically, when a ligand binds to a receptor, we expect to see steady-state behavior causing the resulting titration graph to be a sigmoid curve. A sigmoid curve exhibits slow growth in the concentration of dimer at low concentrations of the ligand, followed by a period of maximum growth. At very high concentrations of the ligand, the dimer concentration stays constant.</span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">However, binding curves from ternary complexes more closely resemble a bell curve, with higher concentrations of the target molecule leading to less dimer being formed. This behavior has been referred to as the hook effect, the template mechanism, combinatorial inhibition, dose-limited activity, and autoinhibition. Here, this behavior will be referred to as “autoinhibition.” </span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Autoinhibition occurs in cooperative systems because there are multiple pathways for the target molecule to bind to the two proteins. </span></p>\n<ol>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The target molecule binds to the anchor binder and then the dimerization binder binds to the complex, forming a dimer. </span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The target molecule binds to the dimerization binder first, and then the anchor binder binds to the complex, forming a dimer. </span></li>\n</ol>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">At very high concentrations of the target molecule, the target molecule can saturate binding sites on both the anchor and dimerization binder. If the binding sites on both proteins have been filled, they cannot form a dimer, causing the overall concentration of the dimer to go down.</span>&nbsp;</p>\n"
		},
		"79d4f013c13": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>In addition to these deletions, we reduced the weight constraints in the hybridize.xml file (the file above is our current file) to give Rosetta more flexibility when folding, so it does not rely as much on the template for the parts we did not delete. Other than these two modifications, we ran the same procedure outlined above.</p>\n"
		},
		"7a3ab1ba9ee": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Figure 7: Since there are potentially infinite local energy minima, multiple models must be produced to search for the lowest energy conformation possible \n",
			  "imgLink": "https://2019.igem.org/wiki/images/f/f9/T--Washington--EnergyDiagram.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"7ecf87e40": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4><span style=\"font-size: 24px;\">Methodology</span></h4>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Homology modeling requires a FASTA file which is used to find the template structures, fragment files, and is used in the folding simulation. The format of a FASTA file is as follows:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><code>&gt;protein_name</code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><code>Amino acid sequence</code></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In addition to the amino acid sequence, homology modeling uses template PDB files of proteins that are similar in sequence to our input sequence. These proteins are likely to have a similar structure to our input protein since they have a similar amino acid sequence.  Therefore, we can use these structures to generalize the protein structure before running modeling for faster convergence.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">To obtain these template PDB files, we used a tool developed by Zimmermann et al. called </span><a href=\"https://toolkit.tuebingen.mpg.de/tools/hhpred\" target=\"_blank\"><span style=\"color: rgb(147,101,184);background-color: transparent;font-size: 11pt;font-family: Arial;\"><ins>HH_search</ins></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">.<sup>11</sup> HH-search profiling takes in the target FASTA sequence and searches for nanobodies with similar expected folding based on the amino acid sequence. We then downloaded 2-5 templates with the lowest e-values and the fewest gaps in the sequence. Some of the downloaded templates contained extra chains or information that would interfere with our modeling, so we extracted the chain we wanted on each template with a python script built into Rosetta called clean_pdb.py. The command to run the script is:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>python2 rosetta/tools/protein_tools/scripts/clean_pdb.py protein.pdb chain_id</code></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Running this python script produces a FASTA file along with the clean PDB file. To predict structure based on the templates, Rosetta needs an aligned file with the target FASTA file and the newly generated FASTA files for the template PDBs. We used a tool developed by Madeira et al. called </span><a href=\"https://www.ebi.ac.uk/Tools/msa/clustalo/\" target=\"_blank\"><span style=\"color: rgb(147,101,184);background-color: transparent;font-size: 11pt;font-family: Arial;\"><ins>Clustal Omega</ins></span></a><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">  to align these FASTA files and combine them all into a single file.<sup>12</sup> We realized after a few tries that the target FASTA needs to be first in the output file, or later steps would compare the wrong sequences to each other. To ensure this, on the website we listed the target FASTA first and under parameters, set order to “input.” </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Rosetta is unable to recognize the format of this clustal alignment file, so we converted it to a Rosetta-compatible filetype called a Grishin alignment file. The following python script we wrote will accomplish this:</span></p>\n"
		},
		"8244dadd61f9": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/0/02/T--Washington--bothgraphs.png",
		  "exampleImage_percentageSize": 50,
		  "exampleImage_subtitle": "Figure 2: A comparison of titration curves from binary complexes and ternary complexes.",
		  "type": "IMAGE"
		},
		"89173a78d29c": {
		  "separator_width": "",
		  "type": "SEPARATOR"
		},
		"94d36f905d47": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Even though we had some difficulty simulating a converged binding mode using GA ligand docking, we showed nevertheless that our nanobody’s binding affinity could be improved by mutating certain residues. Using simulations is a much less time intensive process to predict and test mutations, making it a very powerful tool and one that is becoming increasingly more important in our age of technology. However, we would still need verification from our wetlab that these mutations were indeed effective in optimizing the binding affinity in our CID system to promote a finished product. Without their verification, we could test to see if the mutations we found to be effective are also applicable in other models. A positive result would help confirm that these mutations would produce a more efficient and efficacious CID biosensor.</p>\n<p>Another way we could possibly improve our model is using de novo simulations on supercomputers to build the anchor protein’s structure. Although many more models are needed to see the structure converge, this method could in the end give us a more accurate depiction, since it doesn’t rely on templates and purely uses the protein’s own information. We could also try, if we had the resources, to use x-ray crystallography to inform the structure, and implement these ideas in Rosetta modeling.</p>\n"
		},
		"99c1be8059": {
		  "accordion_content": [
			{
			  "panel": "\timport math\n\timport matplotlib.pyplot as plt\n\n\n\t# The solution that the model uses goes backwards, from the dimer concentrations to the total molecule required to reach those concentrations.\n\tdef plotCurve(anchor_con, dimbinder_con, k_ab, k_bc, alpha, label):\n\t\t# The total con of target molecule required for the maximum formation of the dimer\n\t\tmol_max_dimer =((k_bc + dimbinder_con) * math.sqrt(k_ab) + (k_ab + anchor_con) * math.sqrt(k_bc)) / (math.sqrt(k_bc) + math.sqrt(k_ab))\n\t\t\n\t\t# The maximum concentration of the dimer\n\t\tdimer_max_coop = (anchor_con+dimbinder_con+(((math.sqrt(k_ab)+math.sqrt(k_bc))**2)/alpha)-(math.sqrt(((anchor_con+dimbinder_con+(((math.sqrt(k_ab)+math.sqrt(k_bc))**2)/alpha))**2)-(4*anchor_con*dimbinder_con))))/2\n\n\t\tequilibrium_dimer = []\n\t\tfor i in range(1,300):\n\t\t\tequilibrium_dimer.append(dimer_max_coop / 300 * i)\n\t\tequilibrium_dimer.append(dimer_max_coop)\n\t\tfor i in reversed(range(1,301)):\n\t\t\tequilibrium_dimer.append(dimer_max_coop / 300 * i)\n\t\tmol_total = []\n\t\tfor i in range(0,299):\n\t\t\tintermediate = math.pow((alpha*(equilibrium_dimer[i]-anchor_con)*(equilibrium_dimer[i]-dimbinder_con)-equilibrium_dimer[i]*k_ab),2)-2*equilibrium_dimer[i]*(alpha*(equilibrium_dimer[i]-anchor_con)*(equilibrium_dimer[i]-dimbinder_con)+equilibrium_dimer[i]*k_ab)*k_bc+math.pow(equilibrium_dimer[i],2)*math.pow(k_bc,2)\n\t\t\tradical = math.sqrt(abs(intermediate))\n\t\t\tmol_total.append(0.5*(equilibrium_dimer[i] * alpha + anchor_con + dimbinder_con - k_ab - k_bc + (1/equilibrium_dimer[i]) * (alpha * anchor_con * dimbinder_con-radical)+(1/(alpha*(anchor_con-equilibrium_dimer[i])*(equilibrium_dimer[i]-dimbinder_con))*(math.pow(equilibrium_dimer[i],2)*math.pow(alpha,2)*(anchor_con+dimbinder_con)+(anchor_con+dimbinder_con)*(math.pow(alpha,2)*anchor_con*dimbinder_con+radical)-equilibrium_dimer[i]*(math.pow(alpha,2)*math.pow((anchor_con+dimbinder_con),2)-(anchor_con-dimbinder_con)*(k_ab-k_bc)+2*radical)))))\n\t\tmol_total.append(mol_max_dimer)\n\t\tfor i in range(300,600):\n\t\t\tintermediate = math.pow((alpha*(equilibrium_dimer[i]-anchor_con)*(equilibrium_dimer[i]-dimbinder_con)-equilibrium_dimer[i]*k_ab),2)-2*equilibrium_dimer[i]*(alpha*(equilibrium_dimer[i]-anchor_con)*(equilibrium_dimer[i]-dimbinder_con)+equilibrium_dimer[i]*k_ab)*k_bc+math.pow(equilibrium_dimer[i],2)*math.pow(k_bc,2)\n\t\t\tradical = math.sqrt(abs((intermediate)))\n\t\t\tmol_total.append(0.5*(equilibrium_dimer[i]*alpha+anchor_con+dimbinder_con-k_ab-k_bc+(1/equilibrium_dimer[i])*(alpha*anchor_con*dimbinder_con+radical)+(1/(alpha*(-anchor_con+equilibrium_dimer[i])*(equilibrium_dimer[i]-dimbinder_con))*(-(math.pow(equilibrium_dimer[i],2)*math.pow(alpha,2)*(anchor_con+dimbinder_con))+(anchor_con+dimbinder_con)*(-(math.pow(alpha,2)*anchor_con*dimbinder_con)+radical)+equilibrium_dimer[i]*(math.pow(alpha,2)*math.pow((anchor_con+dimbinder_con),2)-(anchor_con-dimbinder_con)*(k_ab-k_bc)-2*radical)))))\n\t\tfor i in range(len(mol_total)):\n\t\t\tif mol_total[i] > 0:\n\t\t\t\tmol_total[i] = math.log10(mol_total[i])\n\t\t\t\n\t\tplt.plot(mol_total, equilibrium_dimer, label=label)\n\t\t#plt.suptitle(\"Total Molecule in Sample vs. Concentration of Dimer\")\n\t\tplt.title(\"Equal anchor and dimerization binder\")\n\t\tplt.xlabel('Log(Total Molecule (M))')\n\t\tplt.ylabel('Concentration of Dimer (M)')\n\n\t### Experimental Data ###\n\tanchor_con = 1e-6\n\tdimbinder_con = 1e-6\n\tk_ab = 6e-6\n\tk_bc = 56.4e-9\n\talpha = 1e5\n\n\tplotCurve(anchor_con, dimbinder_con, k_ab, k_bc, alpha)\n",
			  "title": "Python code"
			}
		  ],
		  "type": "ACCORDION"
		},
		"9c9a90cfb00": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/d/d3/T--Washington--BasicWorkflow.png",
		  "exampleImage_percentageSize": 80,
		  "exampleImage_subtitle": "Figure 1: The basic workflow of our protein modeling project",
		  "type": "IMAGE"
		},
		"9cdf11a47af": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/8/81/T--Washington--arrows-at-varloops.png",
		  "exampleImage_percentageSize": 80,
		  "exampleImage_subtitle": "Figure 11: The variable loops on our protein. Since the ligand is likely to bind to these loops, we positioned it in this area before running ligand docking.",
		  "type": "IMAGE"
		},
		"9f65b1f24": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/3/31/T--Washington--HomologyModelsBeforeAfter.png",
		  "exampleImage_percentageSize": 90,
		  "exampleImage_subtitle": "Figure 13: Homology models before and after using templates with deleted residues",
		  "type": "IMAGE"
		},
		"a0a281a6b4fd": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">After we assembled all these files, the only thing left to do was to run homology modeling:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>rosetta/main/source/bin/rosetta_scripts.static.linuxgccrelease </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-in:file:fasta target.fasta </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-parser:protocol hybridize.xml </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-default_max_cycles 200 </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-dualspace </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-nstruct number_of_models</code></span></p>\n<p>&nbsp;<span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The number of models generated can be altered with the nstruct option: we generated 100-200 models and our top models began to converge.</span></p>\n<p>&nbsp;<span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">A score file is produced when homology modeling is finished, which contains numbers used to determine which models have the lowest energy. This protocol uses an older, lower-resolution version of the score function. To compare the homology scores to the ligand docking models we made in the next step, we ran the following command to convert the score:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>rosetta/main/source/bin/score_jd2.static.linuxgccrelease </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-s *.pdb </code></span><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>-beta_cart</code></span></p>\n<p>&nbsp;<span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Finally, we sorted the scores in the score file from lowest energy to highest energy with the following command:</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Consolas, sans-serif;\"><code>sort -r score.sc &gt; sorted.sc</code></span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We used our best 10% of models with the lowest energy scores to run ligand docking on. We opened these models in PyMOL, a visualization software developed by Schödinger. to visually analyze their structure.<sup>14</sup> We found three variable loops on one side of the protein, which is the region where we observed CBD binds in ligand docking.</span></p>\n"
		},
		"a703f3210daf": {
		  "header_content": "Conclusions and Future Considerations",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"a9c4ac41bbb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In order to be suitable for a wide range of industry or research applications, a biosensor must have certain attributes.<strong> Sensitivity</strong> is the ability of a biosensor to detect a target molecule at low concentrations. <strong>Selectivity</strong> is the ability of a biosensor to measure only the target molecule and not other closely related molecules. </span><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">Though there are many biosensors which use ternary complexes to measure the concentration of a molecule, the behavior of these biosensors are not the same as the behavior in single-protein binders. Consider a system where molecule A is the first protein, molecule B is the target molecule, and molecule C is the second protein. In the presence of B, A and C will bind and form a complex ABC.</span> <span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">Early testing of our biosensor shows excellent selectivity, as the dimer forms in the presence of CBD and not in the presence of the nearly identical THC. However, when we generated a titration curve of our biosensor, we found that the titration curve resembled a bell curve rather than the sigmoid growth curve that we expected.</span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">At very high concentrations of the target molecule, the signal reported by our biosensor will decrease. In order to explain these results, we implemented a kinetics model based on a paper by Douglass et al. (2013).<sup>1</sup> Our model predicts titration curves for CID systems based on binding constants, the concentrations of the anchor binder and the dimerization binder, and the cooperativity between the two binders. Using this model, we were able to understand how the parameters of our biosensor relate to its behavior. To see our results and an explanation of our kinetic model, click on the link in the sidebar.</span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our results suggested that we could improve the dynamic range and behavior of our system both by changing the procedure through which our biosensor is used and by changing the binding affinities of the proteins themselves. Changing the binding affinity of a protein requires specific modifications to the amino acid sequence. In order to improve the binding affinity, we used a software suite called Rosetta to predict the folded molecular structure of our protein. After generating models, we recommended mutations to improve the binding affinity, which the Wetlab will implement in future projects. To see our results and an explanation of our molecular modeling, click on the link on the sidebar. See Figure 1 for a basic overview of our molecular modelling project.</span></p>\n"
		},
		"ac8c38f56153": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/e/e6/T--Washington--protein-design-square.gif",
		  "exampleImage_percentageSize": 60,
		  "exampleImage_subtitle": "Figure 15: Mutated residues interacting with our ligand.",
		  "type": "IMAGE"
		},
		"ae34f3147de": {
		  "accordion_content": [
			{
			  "panel": "```python\n#!/usr/bin/env python\n\"\"\"\nConvert clustal alignment files to grishin for use in rosetta\nAuthor: Ed van Bruggen <edvb@uw.edu>\n\"\"\"\n\nimport sys\nimport argparse\nfrom argparse import RawTextHelpFormatter\n\nparser = argparse.ArgumentParser(description=__doc__, formatter_class=RawTextHelpFormatter)\nparser.add_argument('--file', type=str, required=True,\n                    help='input clustal alignment file')\nparser.add_argument('--target', metavar='POS', type=int, default=1,\n                    help='position of target protein (default: 1)')\nargs = parser.parse_args()\n\naln = open(args.file)\nproteins = []\n\nfor i, line in enumerate(aln):\n    if i == 0 or line == '\\n' or line[0] == ' ':\n        continue\n    words = line.split()\n    skip = 0\n    for protein in proteins:\n        if protein[0] == words[0]:\n            protein[1] += words[1]\n            skip = 1\n            continue\n    if not skip:\n        proteins.append([words[0], words[1]])\n\ntarget = proteins[args.target - 1]\n\nfor protein in proteins:\n    if protein == target:\n        continue\n    grishin = open(target[0] + \"_\" + protein[0] + \".grishin\", \"w\")\n    grishin.write(\"## %s %s_thread\\n#\\nscores from program: 0\\n0 %s\\n0 %s\\n\" %\n                  (target[0], protein[0], target[1], protein[1]))\n```",
			  "title": "Grishin alignment file converter"
			}
		  ],
		  "type": "ACCORDION"
		},
		"b208105f7783": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">When deciding on a model to use from the literature, we based our search on two criteria. First, the model must be able to predict the behavior of cooperative three-body systems, not just the behavior of non-cooperative systems. This is important because we know from preliminary data that our binders are highly cooperative. Second, the model must accurately predict real-world behavior of comparable cooperative three-body systems.</span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">As Rodbard et al.</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11px;font-family: Arial;\"><sup>2</sup></span><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\"> show, the behavior of cooperative ternary complexes cannot be described using the same methods as complexes which form from only one protein and a molecule. An intuitive approach is to begin with binding constants and starting concentrations of different proteins, then create a function which can map the concentration of the target molecule to the amount of the dimer formed. Researchers such as Griffiths have created such functions for non-cooperative systems.</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11px;font-family: Arial;\"><sup>3</sup></span><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\"> However, this same approach is not applicable for cooperative systems. Douglass et al. proved that it is mathematically impossible to create such a function for ternary cooperative systems. However since analytical intractability is directional, the opposite approach, beginning from the amount of the dimer and using a function to calculate the amount of the target molecule is in fact analytically solvable. Using the function derived by Douglass et al, we evaluated the function at different concentrations of the dimer, and thereby arrived at the amount of target molecule that had to be present. </span>&nbsp;</p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">Using this fact, Douglass et al. published a comprehensive model of three-body binding </span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">equilibria</span> <span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">in cooperative systems. In addition to a well-formed mathematical proof, this paper also compared the model’s predictions to experimental data. The model accurately matched the behavior of Fluorophore-Quencher-Linker complexes, which are a type of biosensor that also use cooperative three-body systems. This suggested that the Douglass model could predict the real-world behavior of biosensors similar to ours. </span>&nbsp;</p>\n<p>&nbsp;<span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\">In order to use the model from Douglass et al, we begal by finding the range of values which the dimer can take. The range is 0 to [ABC]</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11px;font-family: Arial;\">max</span><span style=\"color: rgb(0,0,0);background-color: transparent;font-family: Arial;\"> moles, and is only dependent on the concentration of the binders, their binding constants, and the cooperativity. Equation 1 describes the maximum amount of dimer in a cooperative 3-body system, and was derived independently by Yang et al. and Gnacadja et al. </span><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11px;font-family: Arial;\"><sup>4,5</sup></span>&nbsp;</p>\n<p style=\"text-align:center;\"></p>\n<img src=\"https://2019.igem.org/wiki/images/d/da/T--Washington--abc_max_equation.png\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/>\n<p style=\"text-align:center;\"><em>Equation 1: The equation used to derive [ABC]</em><sub><em>max</em></sub></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Afterwards, we interpolate the range of values between the minimum and maximum values of dimers, and evaluate the total concentration of the target molecule [B]<sub>t</sub> at each point using Equation 2, derived by Douglass et al.</span></p>\n<p></p>\n<img src=\"https://2019.igem.org/wiki/images/0/04/T--Washington--main_equation_white.png\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/>\n<p style=\"text-align:center;\"></p>\n<p style=\"text-align:center;\"><em>Equation 2: The function which maps the concentration of the dimer to the corresponding concentrations of the target molecule</em></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Once we decided on the model to use, we translated this model into python and then populated the model with the parameters shown below. Binding constants and cooperativity were measured by Kang et al. when they characterized the nanobody binders that we used in our project.<sup>6</sup></span>&nbsp;</p>\n"
		},
		"b2630a4f49": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4>Protein Design</h4>\n"
		},
		"b4e1c5904f5": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In order to simulate our protein’s molecular structure, we used a technique in Rosetta called homology modeling. In addition to sequence information, which we received from our wetlab team, homology modeling uses template proteins to guide the folding process in Rosetta. The accuracy of the models simulated by Rosetta depends on the similarity of the template structures and the number of gaps in the sequences. The more gaps in the templates, the more Rosetta must construct on its own, leading to a lot more variability in the homology models. Templates with high homology lead to faster convergence of the protein of interest’s structure.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We preferred homology modeling to Rosetta’s other structure predicting protocol called de novo modeling. Instead of using templates to guide the folding process, de novo starts from just the amino acid sequence and uses Monte Carlo simulations to fold the protein. The individual models are less converged and less accurate than homology models as de novo must start from scratch each time, so this process is generally very inefficient. We recommend 50,000-100,000 models to see convergence, while for homology modeling, we only need about 100-200. However, de novo simulations on supercomputers could be useful if there are no similar structures available for the protein of interest, or if the homology models are suspected of relying too much on the templates.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">See Figure 8 below for an overview of the homology modeling process.</span></p>\n"
		},
		"b6a8279722e1": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">If we were to improve our binding affinities, we would also make our biosensor easier to use and useful in more applications. With this information, we then moved onto the next step of our model: redesigning the protein on a molecular scale to improve the binding constants. </span>&nbsp;</p>\n"
		},
		"bfc6279354ed": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This makes sense considering the mechanism that causes autoinhibition. Autoinhibition occurs when there is so much of the target molecule that it saturates the sites of both dimerization binder and anchor binder. If we increase the concentration of one binder, there are more sites which can accept target molecules before all sites become saturated and binding decreases. This insight suggests that future versions of our biobricks should include multiple copies of one of the binder genes to reduce the effects of autoinhibition.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Furthermore, we also found that changing the binding constants of the dimerization and anchor binders also significantly changed the behavior. If the binding affinity of either the dimerization binder or the anchor binder increased, it increased the maximum concentration of the dimer and expanded the range of concentrations that could be detected. </span>&nbsp;</p>\n"
		},
		"c091f843a7": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/cb/T--Washington--CID_reaction_network.png",
		  "exampleImage_percentageSize": 30,
		  "exampleImage_subtitle": "Figure 3: Reaction network of our binding system, with labelled binding constants. Molecule A is the anchor binder, B is the target molecule, C is the dimerization binder. ",
		  "type": "IMAGE"
		},
		"c43d6574a645": {
		  "header_content": "Homology Modeling",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"c7d369a104d1": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Figure 6.1: Changing K_ab while keeping K_bc at a constant 56.4 nM. ",
			  "imgLink": "https://2019.igem.org/wiki/images/8/80/T--Washington--k_ab_sweep.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Figure 6.2: Changing K_bc while keeping K_ab at a constant 6.0 uM. ",
			  "imgLink": "https://2019.igem.org/wiki/images/d/d2/T--Washington--k_bc_sweep.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"c9a8f8a670a9": {
		  "header_content": "Model choice and description",
		  "header_priority": 2,
		  "type": "HEADER"
		},
		"ccfc68233933": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Where A is the chain we want to mutate, in our case the nanobody and not CBD (which can be checked in the pdb file) and NOTAA means “not amino acids,” indicating the following amino acids, P, G, and C, will not be used. Other commands and protocols can be found on the resfile documentation website, <a href=\"https://www.rosettacommons.org/docs/latest/rosetta_basics/file_types/resfiles\" target=\"_blank\">RosettaCommons</a>.<sup>16</sup></p>\n<p>After the res file is finalized, the mutation protocol, a Rosetta executable called fixbb, can be run using the same params file from ligand docking and the following tags:</p>\n<p><code>rosetta/main/source/bin/fixbb.static.linuxgccrelease </code><br><code>-s input.pdb</code><br><code>-resfile design.res </code><br><code>-beta_cart </code><br><code>-extra_res_fa CBD.params </code><br><code>-in::file::load_PDB_components false </code><br><code>-ex1</code><br><code>-ex2</code></p>\n<p>Fixbb will mutate the specified amino acid residue(s) until it finds the amino acid that decreases the energy of the anchor-ligand complex the most. It is a good idea to check that the residue actually mutated, because often the original amino acid interacts best with the ligand so it will not change. The procedure also is not as random as homology modeling or ligand docking, so only one nstruct is necessary.</p>\n<p>Fixbb is short for “fixed backbone”. This means Rosetta does not allow the anchor protein or the ligand to move when it mutates the residues. Mutations will always return higher scores because the anchor-ligand interaction is changed and fixbb does not internally minimize the interaction. To minimize these mutations, we ran relax, another rosetta executable, on the mutated PDBs. Relax literally “relaxes” the structures and allows them to move so that they can form stronger interactions. It is especially important to minimize the energies when we are comparing small differences in energy. We ran relax on the original binding mode as well for comparison.</p>\n<p><code>rosetta/main/source/bin/relax.static.linuxgccrelease</code><br><code>-s input_0001.pdb </code><br><code>-beta_cart </code><br><code>-extra_res_fa ligand.params </code><br><code>-in::file::load_PDB_components false </code><br><code>-bb_move false </code><br><code>-dualspace </code><br><code>-jump_move true</code></p>\n<p>For our project, we mutated one residue at a time and analyzed their energy scores compared to the energy of the original. Since we investigated 16 different residues, it is very time intensive to mutate each one individually. We wrote a bash script that takes in the input PDB file and a list of positions to mutate and runs fixbb and relax on each residue.</p>\n"
		},
		"de98e84d427c": {
		  "header_content": "Introduction: Molecular Modeling",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"e575f4d66fc5": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Figure 5.1: Changing the concentration of the anchor binder while keeping dimerization binder at a constant 1.0 uM.",
			  "imgLink": "https://2019.igem.org/wiki/images/9/99/T--Washington--anchor_binder_sweep.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "",
			  "imgCaption": "Figure 5.2: Changing the concentration of the dimerization binder while keeping anchor binder at a constant 1.0 uM.",
			  "imgLink": "https://2019.igem.org/wiki/images/b/b7/T--Washington--dimerization_binder_sweep.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"e917f2781a00": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4>Methodology</h4>\n<p>We do not want to use Rosetta to randomly mutate all residues of the protein because that would be a waste of time since CBD is only interacting with part of the protein. We used PyMOL to look more closely at this interaction and identified the specific residues on the nanobody that are influencing CBD’s binding, which we then mutated.&nbsp;</p>\n<p>Next, we had to design a resfile, which outlines the mutation protocol for Rosetta. In the file, we specified which residues we wanted to mutate by their numbers, followed by a command indicating which amino acids we wanted to exclude from mutating at that position. For example,</p>\n"
		},
		"eb3e8288a2": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h4>Homology Modeling</h4>\n<p>As seen in Figure 13, by deleting the residues in the template files we saw an increased variability in our models. Below are some of our original models and some of the models we made using the partially-deleted templates. Two loops in particular were significantly more variable, which supports our hypothesis that the original templates decreased the sample space in Rosetta too much, and were deriving an inaccurate representation for our protein of interest.</p>\n"
		},
		"ef3f8aaf4785": {
		  "accordion_content": [
			{
			  "panel": "``` xml\n<ROSETTASCRIPTS>\n    <TASKOPERATIONS>\n    </TASKOPERATIONS>\n    <SCOREFXNS>\n        <ScoreFunction name=\"stage1\" weights=\"score3\" symmetric=\"0\">\n            <Reweight scoretype=\"atom_pair_constraint\" weight=\"0.25\"/>\n        </ScoreFunction>\n        <ScoreFunction name=\"stage2\" weights=\"score4_smooth_cart\" symmetric=\"0\">\n            <Reweight scoretype=\"atom_pair_constraint\" weight=\"0.25\"/>\n        </ScoreFunction>\n        <ScoreFunction name=\"fullatom\" weights=\"ref2015_cart\" symmetric=\"0\">\n            <Reweight scoretype=\"atom_pair_constraint\" weight=\"0.25\"/>\n        </ScoreFunction>\n    </SCOREFXNS>\n    <FILTERS>\n   </FILTERS>\n    <MOVERS>\n        <Hybridize name=\"hybridize\" stage1_scorefxn=\"stage1\" stage2_scorefxn=\"stage2\" fa_scorefxn=\"fullatom\" batch=\"1\" stage1_increase_cycles=\"1.0\" stage2_increase_cycles=\"1.0\" linmin_only=\"1\">\n            <Fragments three_mers=\"aat000_03_05.200_v1_3\" nine_mers=\"aat000_09_05.200_v1_3\"/>\n            <Template pdb=\"6cnw_A_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n            <Template pdb=\"1mqk_H_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n            <Template pdb=\"1uac_H_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n            <Template pdb=\"1t2j_A_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n        </Hybridize>\n    </MOVERS>\n    <APPLY_TO_POSE>\n    </APPLY_TO_POSE>\n    <PROTOCOLS>\n        <Add mover=\"hybridize\"/>\n    </PROTOCOLS>\n</ROSETTASCRIPTS>\n```",
			  "title": "hybridize.xml"
			}
		  ],
		  "type": "ACCORDION"
		},
		"f4b642159326": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">GA ligand docking needs an XML file (dock.xml below) which outlines the docking protocol:</span>&nbsp;</p>\n"
		},
		"f7e9131352e": {
		  "exampleImage_imageLink": "https://lh3.googleusercontent.com/we72y_BhY6cJxpWEgSmp5AE-B75VFupi4VeSb3VI6A82Al9I9j9YAF89s31EGbQGiEZ-bAj0XApaNBWCGtpJEHL2wYNQixNG5RXIU4ERraXV-2TJhUMsCT9HjAblalGqSfXNV4oa",
		  "exampleImage_percentageSize": 90,
		  "type": "IMAGE"
		},
		"fabb3cb0888": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/2/26/T--Washington--HomologyModelingWorkflow.png",
		  "exampleImage_percentageSize": 90,
		  "exampleImage_subtitle": "Figure 8: Homology modeling workflow",
		  "type": "IMAGE"
		}
	  },
	  "contentOrder": [
		"0de8864121b",
		"f7e9131352e",
		"13ea37ceb3f8",
		"a9c4ac41bbb",
		"9c9a90cfb00",
		"640820561211",
		"482cac9b2749",
		"8244dadd61f9",
		"7976bf5e6e3a",
		"c091f843a7",
		"079a5978481",
		"c9a8f8a670a9",
		"b208105f7783",
		"99c1be8059",
		"60241841362e",
		"05a8e753d9f",
		"6abfdddbe30b",
		"e575f4d66fc5",
		"bfc6279354ed",
		"c7d369a104d1",
		"b6a8279722e1",
		"89173a78d29c",
		"de98e84d427c",
		"65d2382a64",
		"7a3ab1ba9ee",
		"c43d6574a645",
		"b4e1c5904f5",
		"fabb3cb0888",
		"7ecf87e40",
		"ae34f3147de",
		"5b9191c2e603",
		"ef3f8aaf4785",
		"a0a281a6b4fd",
		"5c440c997205",
		"2437485f6b63",
		"4a20b75a0ce3",
		"79d4f013c13",
		"0ebd6e435d95",
		"303fe105149c",
		"1efbe6dd",
		"1bb224ef7092",
		"9cdf11a47af",
		"f4b642159326",
		"024859a0aa1",
		"7824b49fd7c",
		"49dba52f6a4",
		"55edd0d35a9e",
		"1695392fe9d7",
		"e917f2781a00",
		"2af1c9bfc0b",
		"ccfc68233933",
		"46b2301941fd",
		"48286aa36f8",
		"3ba71cb555a5",
		"eb3e8288a2",
		"9f65b1f24",
		"4d7643ff592",
		"35da0a852879",
		"622581f10734",
		"b2630a4f49",
		"ac8c38f56153",
		"505a40f47887",
		"3333254b3352",
		"52654303c75",
		"a703f3210daf",
		"94d36f905d47",
		"0293e6dbdcc9",
		"185f8fc2842"
	  ],
	  "hasSidebar": true
	},
	"Notebook": {
	  "content": {
		"0e65a7cf043a": {
		  "type": "STUB"
		},
		"10d26ff04bc0": {
		  "type": "STUB"
		},
		"2087d8b9dd": {
		  "header_content": "Mutagenesis Notebook",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"38560461ae0": {
		  "header_content": "Biosensor Notebook",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"6c427bcd72e": {
		  "pdfViewer_pdfHeightPixel": 1000,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/8/88/T--Washington--Biosensor_Notebook.pdf",
		  "pdfViewer_pdfWidthPercentage": 75,
		  "type": "PDF_VIEWER"
		},
		"ab8d8a5ce75": {
		  "pdfViewer_pdfHeightPixel": 1000,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/9/9f/T--Washington--Mutagenesis_Notebook.pdf",
		  "pdfViewer_pdfWidthPercentage": 75,
		  "type": "PDF_VIEWER"
		},
		"bc4c5b2954a8": {
		  "header_content": "Biosensor Notebook",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"d2a02519": {
		  "banner_content": {
			"bannerText": "Notebooks",
			"imageBlur": 1,
			"imageLink": "https://2019.igem.org/wiki/images/f/fe/T--Washington--NotebookHeader.jpeg",
			"imageTopX": 0,
			"imageTopY": 68,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		}
	  },
	  "contentOrder": [
		"d2a02519",
		"2087d8b9dd",
		"ab8d8a5ce75",
		"bc4c5b2954a8",
		"6c427bcd72e"
	  ],
	  "hasSidebar": false
	},
	"Parts": {
	  "content": {
		"0276c1211983": {
		  "header_content": "Overview",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"17d94e5a24bb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>As part of our work in verifying our protein model, we also further characterized an existing biobrick, listed below.</p>\n"
		},
		"3632f228fdd": {
		  "banner_content": {
			"bannerText": "Parts",
			"imageBlur": 5,
			"imageLink": "https://2019.igem.org/wiki/images/b/b4/T--Washington--PartsHeader.jpeg",
			"imageTopX": 0,
			"imageTopY": 21,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"4710a47719": {
		  "accordion_content": [
			{
			  "panel": "| Part Name                              | Part Number  | Link                                    |\n|----------------------------------------|--------------|-----------------------------------------|\n| CBD Nanobody Luciferase                | BBa_K3123001 | http://parts.igem.org/Part:BBa_K3123001 |\n| CBD Nanobody Luciferase with FKPA      | BBa_K3123000 | http://parts.igem.org/Part:BBa_K3123000 |\n| CBD Anchor Binder Position 32 Mutation | BBa_K3123002 | http://parts.igem.org/Part:BBa_K3123002 |",
			  "title": "2019 Biobrick Parts"
			}
		  ],
		  "type": "ACCORDION"
		},
		"93edac70f19": {
		  "accordion_content": [
			{
			  "panel": "| Part Name                              | Part Number  | Link                                    |\n|----------------------------------------|--------------|-----------------------------------------|\n| CBD Nanobody Anchor Binder             | BBa_K2682000 | http://parts.igem.org/Part:BBa_K2682000 |",
			  "title": "2018 Biobrick Part"
			}
		  ],
		  "type": "ACCORDION"
		},
		"c1dd0057bd5": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Our team has created two different types of biobricks during the course of our project; one type being a device for the detection of cannabidiol and the other being a mutated version of our cannabidiol (CBD) anchor binder to verify our protein model. All of these parts utilize nanobody binders that undergo chemically induced dimerization. The nanobodies consist of a dimerization binding pair for CBD that were selected by the Gu Lab at the University of Washington that have either been mutated or linked to another protein coding sequence. A detailed description of the design for each part can be found both in our project description page and each parts registry page.</p>\n"
		}
	  },
	  "contentOrder": [
		"3632f228fdd",
		"0276c1211983",
		"c1dd0057bd5",
		"4710a47719",
		"17d94e5a24bb",
		"93edac70f19"
	  ],
	  "hasSidebar": false
	},
	"Public_Engagement": {
	  "content": {
		"05afdc260c9d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(26,188,156);font-size: 18px;\"><strong><ins>Upcoming Event Highlight: Washington State School for the Blind</ins></strong></span></h2>\n<p>We are collaborating with the Washington State School for the Blind to hold a school visit. Washington State School for the Blind is working to provide specialized quality educational services to visually impaired and blind youth ages birth to 21 within the state of Washington. We will be visiting on December 16, 2019  and will visit various classrooms to try different activities with a variety of age groups.</p>\n<p>The activities we will use are:&nbsp;</p>\n<ul>\n<li>Chameleon Genetics&nbsp;</li>\n<li>Engineer an Organism&nbsp;</li>\n<li>Solving Global Problems&nbsp;</li>\n</ul>\n<h3><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong><em>For the Deaf:</em></strong></span></h3>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">By providing a curriculum with many pictures and words to explain concepts in depth, our curriculum is a visual resource that any student can follow. Even if the instructor does not speak sign language, deaf students can follow along using a copy of the curriculum.</span></p>\n<h3><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong><em>Physical Disabilities:</em></strong></span></h3>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">All of the activities are sedentary in nature with the exception of the DNA Replication Activity. This activity contains a skit with various roles that can be adapted for wheelchair users upon the teacher’s discretion.</span></p>\n"
		},
		"072448771203": {
		  "type": "SEPARATOR"
		},
		"12b6af1badb": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">In addition, Team DTU-Denmark also used our Solving Global Problems Activity as a basis for developing their own project to discuss how iGEM projects can impact the world. Team Bilkent-UNAMBG in Turkey also translated and used one of our activities with 4th grade student students to introduce them the concept of synthetic biology. They also distributed the curriculum to these students. More information on these implementations can be found on our </span><a href=\"https://2019.igem.org/Team:Washington/Collaborations\" target=\"_self\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">Collaborations page</span></a><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\">.</span>&nbsp;</p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;\"><strong>A copy of the Solving Global Problems Activity can be found below:</strong></span>&nbsp;</p>\n"
		},
		"19b8a1ce597d": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our educational outreach efforts were centered around the concept of accessibility. According to the National Science Foundation of the United States, only 22% of bachelor’s degrees in science and engineering were given to underrepresented minority students in 2016. As such, we wanted to promote equity by providing educational resources to underrepresented communities by creating a <strong>200+ page interactive curriculum</strong>. Hands-on activities tend to take more planning and are often more expensive, yet studies have shown they are often the most memorable and intriguing to students. Thus, we hope that our interactive and low-cost curriculum serves as an educational resource regardless of language, ability, and economic background. Furthermore, from examining William &amp; Mary’s Outreach Database and other past iGEM teams’ Wikis, we noticed that there was a gap to be filled in providing an educational resource to promote engagement with synthetic biology with a wide range of underserved groups. The key underserved groups we have identified include low-income schools, non-English speakers, people with disabilities, the LGBTQ+ community, and underrepresented racial groups. Activities from our curriculum have been translated into <strong>10+ different languages</strong>, used in <strong>3 continents</strong> (including by other iGEM teams), and made <strong>accessible to the blind</strong> by creating audiobooks and text-to-speech versions of our activities. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In addition to our inclusive curriculum, we also conducted several events in the community to generate a <strong>dialogue</strong> and foster a passion for synthetic biology. We attended several community events and also planned a synthetic biology panel event called “Sit Down with Synbio” that initiated a conversation between the general public and synthetic biology experts to consider<strong> public values</strong> and the <strong>ethics</strong> behind synthetic biology. Thus, we strive for growth and collaboration across disciplines and across accessibility barriers, forging new paths in the future of synthetic biology education and its implications for the world. </span><br></p>\n"
		},
		"1e1110648c7": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:center;\"></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">As we ventured to make science education accessible to various groups, we understood that it was important to create a conversation with these groups. Through these interactions, we became aware of barriers to adoption and various gaps in the design of our curriculum.</span></p>\n<h2><br><span style=\"font-family: Arial;\"><strong>Engineering Discovery Days:</strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">At Engineering Discovery Days, students and faculty from all UW engineering departments share their work with students, teachers, families, and the community. This two-day annual event attracts hundreds of elementary schools and is free/open to the public. Our booth this year was our jelly bean/peptide activity. We introduced the role of DNA in biology to many of the young students. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">The students we engaged with came from diverse backgrounds. It prepared us for working with diverse backgrounds and different levels of knowledge. During an explanation by one of our team members, a student explained that she was adopted and did not share DNA with her family. This prompted us edit our booklet to contain more inclusive vocabulary. For example, we changed our Chameleon Genetics activity to use words like “female and male parent” instead of “mother” and “father.” </span></p>\n"
		},
		"1f0c665978bf": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">To begin, we included a passage to introduce students to the concept of synthetic biology and the ethical implications around it. A table of contents subsequently outlines the organization of our curriculum by age group. We have a total of <strong>sixteen activities</strong> as well as <strong>five adapted activity versions for the blind.</strong> Each of our activities consists of a page for the instructor as guidance for the schematic of the activity. We also outlined the key concepts to each activity, considered cost and other accessibility barriers, and provided sample answers to discussion questions.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our activities are different in that many of our activities stemmed from innovative ideas we had during our brainstorm sessions. For instance, when developing an activity to teach DNA Replication, we wanted the interactive portion of our activity to be low-cost and appeal to all types of learners. As such we created a DNA replication skit to appeal to visual, auditory, and kinesthetic learners that has no cost associated with it. Furthermore, the Solving Global Problems Activity promotes a good awareness of current issues and how the iGEM community is approaching these problems. Moreover, many of our activities regarding controversial topics have an ethics portion to initiate a two-way <strong>dialogue</strong> with students by discussing<strong> public values</strong> and the science behind synthetic biology. For instance, both the Stem Cells Activity and CRISPR Ethics Activity prompt students to consider different values associated with the controversy around them through a debate.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The display below depicts the variety of topics that our activities cover:</span></p>\n"
		},
		"2549b873b8": {
		  "type": "SEPARATOR"
		},
		"302523cf8fec": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2 style=\"text-align:left;\"><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong><ins>Disabilities:</ins></strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Using the concepts of universal design, we have addressed various types of disabilities in the following ways:</span><br></p>\n<h3><span style=\"color: rgb(147,101,184);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Intellectual Disabilities:</strong></span></h3>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Our curriculum consists of activities with copious pictures. Visuals often serve as a way to simplify more complex concepts, thus appealing to a range of skills. Additionally, many kids are at various stages of learning. Having lots of pictures thus makes our curriculum accessible to all skill levels, regardless of ability to read. This is especially true of our activities for younger kids.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">For instance, we taught a summer camp for autistic kids about the synthesis of proteins through our Lego DNA/Jellybean Peptide activity. The challenging aspect of teaching the kids was that they were not all the same age and had various attention capabilities. However, all of the kids appeared to be drawn to the colorful pictures and were able to engage with the activity given to them. Hence, by appealing to different types of learners --kinesthetic, visual, auditory-- in this type of setting, we were able to immerse the students in the lesson.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In the past, one of the contributors to this curriculum even said: </span></p>\n<p><span style=\"color: rgb(85,57,130);background-color: transparent;font-size: 11pt;font-family: Arial;\"><em>\"I couldn’t read up to the fourth grade, because I’m dyslexic. I would have loved having visual activities when I was younger. This is why I am so proud of our lessons for younger kids like the Lego DNA/Jellybean Peptide Activity and the Gel Electrophoresis Bunny Activity. These activities do an amazing job illustrating the concepts, allowing people who have a hard time reading have a better understanding of what is going on since they have visual diagrams and clues to follow along with while doing the activity.\"</em></span>&nbsp;</p>\n<p><span style=\"color: rgb(85,57,130);background-color: transparent;font-size: 11pt;font-family: Arial;\">~ Aimee Ellis</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Additionally, upon meeting with the Director of Disability Resources for Students at the University of Washington, we learned that a text-to-speech version of the curriculum would be extremely helpful for people with intellectual disabilities, especially people with dyslexia. In fact, even if a student cannot read, this student can still learn synthetic biology concepts through the audio functionality and visuals present in our curriculum.</span><br></p>\n<h3><span style=\"color: rgb(65,168,95);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Sensory Disabilities:</strong></span></h3>\n<h4><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong><em>For the Blind</em></strong></span></h4>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Upon reflection, we realized that the PDF version of our curriculum was most inaccessible to students with visual impairments as were the design of our activities. Thus, we adapted five of our activities to be used for the blind. This required some creativity, as the visual component to our activities was often the most essential part of learning. For instance, we used objects with different textures as a metaphor for genes in our adaption of the Engineer an Organism Activity. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Next, we met up with Dr. Jamey Cheek, the Director of Disability Resources (DRS) at the University of Washington to get guidance on how to further adapt our curriculum. He explained to us that the current standard is text-to-speech books, as this format allows students to change the speed of the narrator as well as pause and replay information. We also learned that many laptops already have an in-built text-to-speech program, enabling blind students to access the information. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">However, the University of Washington also has scanners that make text-to-speech access easier, so we scanned our activities to create a more accessible version. In collaboration with the University of Washington, we were also able to easily print an activity in Braille to demonstrate that this curriculum can easily be converted to Braille if a student needs it in this format.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Then, we considered cost. In the United States, the Americans with Disabilities Act (ADA) provides funding for disabled students to get the resources they need to learn. This means that visually impaired students are often provided laptops with an in-built text-to-speech function. Nonetheless, a law like this does not exist internationally in every country. Thus, to increase the accessibility of our activities, we created audiobook versions of our activities. This would decrease the cost associated with learning, as it just requires one computer and a speaker for an entire classroom to listen instead of a computer for every student. Moreover, the audiobook versions of our activities also promote collaboration within the classroom, as all of the students would listen to the audiobook at the same time.</span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Here is an example of our Chameleon Genetics adapted activity:</strong></span></p>\n"
		},
		"3140d443aa31": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/d/d0/T--Washington--Map.png",
		  "exampleImage_percentageSize": 65,
		  "type": "IMAGE"
		},
		"3245cf2cc458": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "wash",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/d/de/T--Washington--Wtb1.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "aaa",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/0/01/T--Washington--Library.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "aaaa",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/e/e9/T--Washington--Wtb2.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"3dc4a834f275": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:center;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">To initiate a dialogue between synthetic biology experts, the general public, and university students, we planned, organized, and hosted a synthetic biology panel event called “Sit Down with Synbio.” The two-hour event consisted of two Q&amp;A style segments with the panelists: pre-submitted questions and questions asked by the audience during the event. Questions ranged from topics surrounding bioethics, the intersections of industry and academia, interdisciplinary cross-sections in synthetic biology and even science fiction novels. </span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">The panel represented the diverse field of synthetic biology with backgrounds researching data storage, CRISPR, RNA Engineering, de-novo protein design and mutual/symbiotic relations. Additionally, our panel represented diversity in terms of age, race and gender.  Our goal was to create a panel that represented a wide range of academic and social experiences. There are not very many opportunities for the general public to speak to experts and researchers. This helped our younger attendees envision the roles they could have in the field of synthetic biology. For many, Sit Down with Synbio was their first formal connection to synthetic biology and their first step in creating a collaborative and professional network. </span><br></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This year, we emphasized that this was a community event meaning our primary audience was those who are new to synthetic biology. Not only was this panel an opportunity to introduce a new topic, but for many, it was also an introduction to scientific research in general.  Often, panels consist of experts presenting to their peers and using language that can only be understood by their peers. </span><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\">We wanted to create a platform free from complex scientific terms so we invited attendees to submit their own questions.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">We even received questions like “What recent event in synbio could be used for science fiction novel?” However, some questions forced the panelist to evaluate the shortcomings of research in making information accessible. These ethical questions allowed researchers to become aware of public values and perceptions of synthetic biology.  The combination of pressing questions and honest answers created an environment that encouraged mutual learning. </span><br></p>\n<h2><span style=\"color: rgb(147,101,184);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong><em>Key moments during the discussion: </em></strong></span></h2>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">A student asked: What is something ethically questionable that is happening in the field of synthetic biology, and what is the responsibility of scientists in addressing this issue? One example is biological warfare, including genetically engineered viruses.  </span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">As a response, Lee Organick emphasized the importance of transparency between the scientific community and the greater public: “I really do think we can do a better job at being transparent and communicative. One thing that is really easy to do is make this knowledge weaponizable and that nobody can have it. But there is an interesting dialogue especially at Makerspaces and community labs that everybody should have access to this knowledge and we should incentivize individuals to not misuse this information.”</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Reflection:</strong> This dialogue considers <em>ethics</em> by emphasizing the great potential synthetic biology has to do good and equally, the potential it has to do harm. However, Lee recognized the responsibility of researchers to share their findings and validated the concerns of the audience.</span><br></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Another student asked: Synbio is a very interdisciplinary field. What kind of backgrounds, disciplines, or specialties do you wish to see more of in synthetic biology research labs or companies?</span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dr. James Carothers on interdisciplinary research teams: “Code base can get really long and complicated over time after many different people work on it and edit/adapt it which is why my laptop doesn’t work sometimes. Likewise, synthetic biology takes a lot of different people, a lot of different people to break it apart and we need to use systems level thinking to do that. This one major reason this field has attracted so many groups of people.”</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Reflection:</strong> Dr. Carothers emphasized that synthetic biology is not restricted to biologists. Collaboration is at the heart of synthetic biology and it requires different. This was especially important for our younger attendees who came from diverse backgrounds and represented various majors/interests. Conequently, Dr. Carothers' words highlighted the idea that collaboration is an important <em>public value</em> in synthetic biology, and his words invited all to participate.</span><br></li>\n</ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">A student asked:  What is some advice you would give to your younger self? </span></li>\n<ul>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dr. Wenying Shou with an ending note: “I essentially have become a student again and I am learning from students in my lab and my colleagues. The advice I would give to my younger self is to enjoy the process because life is so unpredictable.”</span></li>\n<li><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>Reflection:</strong> Dr. Shou’s advice shared a humble insight about the field of synthetic biology: researchers learn most from their peers. While research can have lofty goals, we all benefit from being adaptable and constantly learning from our surroundings. To advance our current understanding, we must maintain a growth mindset.</span><br></li>\n</ul>\n</ul>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">This event was extensively advertised to the community by putting up and handing out posters, posting on Facebook groups, and being featured on websites like Geekwire. While it was easier to attract individuals within the STEM community, we recognized from the previous year that it was a challenge to engage those who outside of STEM. As a result, most of our advertising efforts were directed towards public libraries, high schools and coffee shops. With a more diverse audience, the conversation generated was broader and intelligible for many groups of people This event required months of planning including reserving an auditorium and equipment, creating a website, making advertising material and a pamphlet.</span><br></p>\n<p><strong>Information about the panelists can be found in the pamphlet below:</strong></p>\n"
		},
		"40d30d86582a": {
		  "pdfViewer_pdfHeightPixel": 700,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/f/f9/T--Washington--Brochure.pdf",
		  "pdfViewer_pdfWidthPercentage": 100,
		  "type": "PDF_VIEWER"
		},
		"42c16cc88b81": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"font-size: 18px;font-family: Arial;\"><strong>Universal Design</strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Overall, we were guided by the principles of universal design. In particular, we were inspired by Sheryl Burgstahler’s<em> Universal Design in Higher Education: From Principles to Practice</em>. Burgstahler outlines universal design as being both a process and goal to make an application accessible to the widest range of people possible while considering both the application’s macroscopic and microscopic parts. The principles and guidelines for universal design in education are outlined the web diagram below.</span></p>\n"
		},
		"470b0b862c6": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(26,188,156);background-color: rgb(255,255,255);font-size: 18px;font-family: Arial;\"><strong>With Other iGEM Teams</strong></span></h2>\n<p><br><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">To us, iGEM represents a space to work with other students globally to advance the future of synthetic biology. Our curriculum reflects the spirit of iGEM through our outreach collaboration efforts with other iGEM teams as well as in our activities, especially through the Solving Global Problems Activity. The Solving Global Problems Activity considers five pressing global issues that can be addressed with synthetic biology: the Zika Virus, pollution, food shortages and GMOs, the rapidly decreasing bee population, and antibiotic resistance.The first part of the activity provides an overview of the global issue and how past iGEM teams have approached these issues, while the second activity presents a more specific issue and prompts students to critically think and develop their own solutions using synthetic biology. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In the past, we tried this activity during visits to Rainier Beach High School and Kent Meridian High School which are underserved schools in our region. While the students became immersed in the activity, they were confused on how to start creating their own solution to the problem. Thus, during our editing process, we improved this activity by providing a thorough sample answer key for instructors to have additional guidance and by creating a “Design Process” chart that encourages critical thinking and provides additional guidance to students to develop a synthetic biology solution. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Moreover, not only did we want to generate a dialogue with students in the United States, but we also collaborated with other iGEM teams to translate our activities into different languages and complete them in different contents. Thus, we want our curriculum to serve as a resource to the iGEM community to make outreach efforts more accessible around the world and to foster the global synthetic biology community.</span><br></p>\n"
		},
		"4713852f960": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Moreover, our curriculum is unique to the illustrations included in it. We spent copious hours designing illustrations and subsequently graphically illustrating our activities. According to a study by the Social Science Research Network, an estimated 65% of people are visual learners. Creating custom visuals thus helped us to highlight key scientific concepts specific to our activities. Visuals are also extremely helpful for people with dyslexia and intellectual disabilities.</span>&nbsp;</p>\n"
		},
		"503c5c29e53": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(26,188,156);background-color: rgb(255,255,255);font-size: 18px;font-family: Arial;\"><strong>Collaboration Highlight: Team BOKU-Vienna</strong></span></h2>\n<p>Team BOKU-Vienna used our Solving Global Problems Activity with students of ages 16-19 during a high school visit:</p>\n"
		},
		"54426b167a96": {
		  "type": "STUB"
		},
		"55c20281eb95": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/f/f8/T--Washington--UpdatedTable.png",
		  "exampleImage_percentageSize": 75,
		  "type": "IMAGE"
		},
		"5d5ef45c9de": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(26,188,156);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial;\"><strong>Collaboration: Washington Talking Book and Braille Library</strong></span>&nbsp;</h2>\n<p>We have begun working with the Washington Talking Book and Braille Library which provides library services state-wide to any Washington resident unable to read standard print material. Their youth services staff edited our adapted activities in preparation for upcoming activity workshops at the library. Text-to-speech is an easy to use but novel technology. It took many rounds of edits to create a functional and smooth dialogue that could be implemented.&nbsp;</p>\n"
		},
		"5d8a7d07cee8": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "text",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/5/57/T--Washington--Bunny1.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "rrr",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/8/8c/T--Washington--Bunny2.jpg"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "aaaaa",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/a/a1/T--Washington--Bunny3.jpg"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"5e3bbfdb13be": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong><ins>Considering Socioeconomic Factors: Underserved Schools</ins></strong></span></h2>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Initially, one of our primary reasons for creating this curriculum was due to the educational inequity around us in Seattle, Washington. According to the Seattle Times, Seattle, Washington has one of the largest equity gaps in the United States with white students being almost ten times more likely than black students to attend a school with reading test scores in the city’s top 20th percentile. In general, lower income students are about four times as likely to attend low-performing schools. In fact, over 6,000 students in Seattle alone were given low-income housing by the school district, and over 35,000 students were counted as homeless in Washington State.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">More broadly speaking, underserved schools represent a majority of schools in low-income areas across the United States. They are defined by both students from low-income families, minority groups and other academic pipelines, as well as existing in low-income areas that do not receive a lot of federal and state funding. Many of these students have so much potential and ambition, yet they do not have access to textbooks and interactive activities due to the cost associated with them. Thus, we aim to provide a free educational resource with low cost activities to equalize educational opportunities available to students at underserved schools.</span><br></p>\n<h2><span style=\"color: rgb(147,101,184);background-color: transparent;font-size: 16px;font-family: Arial;\"><strong>Event Highlight: Dimmitt Middle School</strong></span></h2>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Dimmitt Middle School is an underserved middle school in Seattle. Over <strong>70%</strong> of the students in grades 6-8 receive free or reduced lunch. Also, over <strong>80%</strong> of the students come from minority ethnic groups. We guided three class periods with around twenty students each through an activity where they made a model of DNA out of gumdrops and licorice. We started by introducing the students to what DNA was by asking some questions about what the students knew about DNA. Then, we handed out supplies and gave instructions on how to construct the DNA model. After each step we walked around to direct students in the right direction and check their work. After the activity was finished, we went through the rest of the discussion questions to assess their newly acquired knowledge. A lot of the kids could not pronounce the different nucleotides, so it was fun to help them learn the new words. After the questions were answered, the students ate their DNA strands. We have also enacted our activities in other underserved schools in the greater Seattle in the past such as Rainier Beach High School, Kent Meridian High School, and Northgate Elementary.</span><br><br></p>\n"
		},
		"5edcecd57bb3": {
		  "header_content": "The Process",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"5fb54f4e818": {
		  "carousel_imagesContents": [
			{
			  "imgAltTag": "Synthetic Biology activity booklet cover page",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/2/24/T--Washington--booklet-cover-h.png"
			},
			{
			  "imgAltTag": "Chameleon Genetics activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/b/b4/T--Washington--chameleon-genetics-h.png"
			},
			{
			  "imgAltTag": "DNA gumdrop activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/b/b5/T--Washington--dna-gumdrop-h.png"
			},
			{
			  "imgAltTag": "DNA replication activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/f/f9/T--Washington--dna-replication-h.png"
			},
			{
			  "imgAltTag": "DNA structure activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/8/80/T--Washington--dna-structure-h.png"
			},
			{
			  "imgAltTag": "Engineer an Organism activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/7/70/T--Washington--engineer-an-organism-h.png"
			},
			{
			  "imgAltTag": "Enzyme activity part 1",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/0/0e/T--Washington--enzyme-1-h.png"
			},
			{
			  "imgAltTag": "Enzyme activity part 2",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/9/98/T--Washington--enzyme-2-h.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/f/f9/T--Washington--fruit-dna-h.png"
			},
			{
			  "imgAltTag": "Gel electrophoresis activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/b/ba/T--Washington--gel-electrophoresis-h.png"
			},
			{
			  "imgAltTag": "Solving global problems activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/7/79/T--Washington--solving-global-problems-h.png"
			},
			{
			  "imgAltTag": "Stem cells activity",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/6/6d/T--Washington--stem-cells-h.png"
			}
		  ],
		  "carousel_settings": {
			"fontSize": 200,
			"height": 40,
			"interval": 3500,
			"showCaptions": true,
			"showControls": true,
			"showIndicators": true,
			"width": 60
		  },
		  "type": "CAROUSEL"
		},
		"61bb135e79a3": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "Dimmitt Middle School",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/f/fd/T--Washington--dim2.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "Dimmitt Middle School",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/3/3a/T--Washington--dim1.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "Dimmitt Middle School",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/b/bd/T--Washington--dim3.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"6dc0ef6847": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "Engineering Discovery Days 1",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/c/c5/T--Washington--EDD1.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "Engineering Discovery Days 2",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/d/de/T--Washington--EDD2.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "Engineering Discovery Days 3",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/7/7f/T--Washington--EDD4.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"7130f0e5305": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2 style=\"text-align:start;\"><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 16px;font-family: Arial;\"><strong><ins>Engineering Launch:</ins></strong></span></h2>\n<p style=\"text-align:start;\"></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">At UW’s Engineering Launch, we engaged incoming college students interested in engineering with discussions about synthetic biology, iGEM, our project, and the potential impact that synthetic biology has. This event attracted students from various majors and we emphasized how interdisciplinary our team is. With the University of Washington’s Direct to College engineering program, the ethnic and racial profile of the college has become more diverse. For many this was their first exposure to synthetic biology and they were eager to network with experts. We encouraged them to attend our synthetic biology panel event, Sit Down with Synbio. Since our event was catered to the general public, incoming college students would provide a fresh perspective. Ultimately, many students that we spoke directly to at this event went on to ask our panelist questions at the event. </span> <br></p>\n"
		},
		"715709ada551": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2 style=\"text-align:left;\"><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong><ins>Race &amp; Orientation</ins></strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Even though we were primarily focused on accessibility for underserved schools, we recognized that students come from a vast variety of backgrounds. In order to create a universal feel to our booklet, we did not want to use any discriminatory terms. This is exemplified through the edits we made in our Gel Electrophoresis Bunny and Chameleon Genetics Activities. The Gel Electrophoresis Bunny Crime Scene Activity features a story about bunnies, because they are an abstract, universal concept. The bunnies are brightly colored to depict them as fictional characters to avoid controversy about race, allowing the students to focus on the concept of the activity. Moreover, in the Chameleon Genetics activity, we avoided labels as “mom” and “dad” Not every child has parents of opposite genders, both parents, or they are not living with their biological parents. Thus, we changed the labels to “female” and “male” in relation to genetics to avoid making any students feel unrepresented or that their family dynamic was unnatural. </span><br></p>\n<p><strong>The images from the Gel Electropheresis Bunny Crime Scene Activity below reflect our portrayal of the bunnies as an abstract, universal concept to avoid discrimination:</strong><br></p>\n"
		},
		"72c768cc69": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>The following table outlines how we have considered and implemented each of the principles into our work.</strong></p>\n"
		},
		"74df8df61417": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/f/f0/T--Washington--Meetup_Implementation_Vienna_2.jpg",
		  "exampleImage_percentageSize": 35,
		  "exampleImage_subtitle": "Team BOKU-Vienna implementing our Solving Global Problems Activity",
		  "type": "IMAGE"
		},
		"877bc5f4d0da": {
		  "header_content": "Sit Down with Synbio",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"87b13e6f3ad": {
		  "carousel_imagesContents": [
			{
			  "imgAltTag": "Fruit DNA activity in Arabic",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/5/53/T--Washington--fruit-dna-arabic.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in French",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/c/c9/T--Washington--fruit-dna-french.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in German",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/a/ab/T--Washington--fruit-dna-german.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Greek",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/8/80/T--Washington--fruit-dna-greek.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Japanese",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/4/44/T--Washington--fruit-dna-japanese.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Mandarin",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/7/71/T--Washington--fruit-dna-mandarin.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Mandarin",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/1/1b/T--Washington--fruit-dna-norwegian.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Russian",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/3/36/T--Washington--fruit-dna-russian.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Spanish",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/d/d1/T--Washington--fruit-dna-spanish.png"
			},
			{
			  "imgAltTag": "Fruit DNA activity in Turkish",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/2/22/T--Washington--fruit-dna-turkish.png"
			}
		  ],
		  "carousel_settings": {
			"fontSize": 200,
			"height": 30,
			"interval": 3500,
			"showCaptions": true,
			"showControls": true,
			"showIndicators": true,
			"width": 55
		  },
		  "type": "CAROUSEL"
		},
		"91729797b": {
		  "pdfViewer_pdfHeightPixel": 600,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/9/97/T--Washington--ChameleonGenetics.pdf",
		  "pdfViewer_pdfWidthPercentage": 100,
		  "type": "PDF_VIEWER"
		},
		"934ff2b6ad": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2 style=\"text-align:start;\"><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 16px;font-family: Arial;\"><strong><ins>Shoreline STEM Fest:</ins></strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Held at Shoreline Community College, this festival combines a traditional science fair servicing hundreds of K-12 students in the Shoreline School District with hands-on exhibits and demonstrations presented by university groups, research institutes, and industry professionals. Many students at this event attended with parents. At this fair, we conducted our Lego DNA/Jelly Bean Peptide Activity to teach kids about the central dogma of molecular biology. </span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 16px;font-family: Arial;\">Families questioned the ethics surrounding GMO and CRISPR and referenced news in mainstream media. This event emphasized family involvement as many parents expressed interest in the booklet and posed their own questions. Parents and caregivers play a crucial role in the children’s scientific learning and exploration. Many parents asked where they could access the book to use at home. Our curriculum requires no prior biology knowledge to use and can be used by parents at home.</span><br></p>\n"
		},
		"9c525d1914": {
		  "pdfViewer_pdfHeightPixel": 600,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/a/a9/T--Washington--SolvingGlobalProblems.pdf",
		  "pdfViewer_pdfWidthPercentage": 100,
		  "type": "PDF_VIEWER"
		},
		"a4134244f1f": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/c/cd/T--Washington--OutreachWeb.png",
		  "exampleImage_percentageSize": 60,
		  "type": "IMAGE"
		},
		"ae6e3684b8b6": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "sws",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/b/b6/T--Washington--SwS1.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "aaaa",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/b/bd/T--Washington--Header.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "aaaa",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/1/10/T--Washington--SwS2.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"aea038622749": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2 style=\"text-align:left;\"><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong><ins>A Universal Standard</ins></strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">In the United States, Common Core Standards outline clear expectations and goals for students in grade school to learn to be prepared for college, future careers, and in life overall. While individual schools have different expectations as do different states, the Common Core Standards are essential to providing a universal set of guidelines. Therefore, we initially set out to find Common Core Standards that aligned with our activities. However, we soon discovered that Common Core Standards largely only exist for English language arts and mathematics. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Upon research, we discovered NGSS Standards, which are a multi-state effort to make education standards for science. 40/50 states in the United States have shown interest in these standards, while 19/50 states have adopted them currently. To highlight which standards relate to specific activities, we compiled a list. We aim to further increase ease of use by providing this list in our curriculum. </span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">Moreover, upon compiling a list of NGSS Standards, we found that some activities did not have applicable NGSS standards, because of the specificity of synthetic biology content. This signaled that the curriculum needed more activities to create a bigger scope for K-12 science education standards. This prompted our team to create new activities that had one or more applicable NGSS standards, including the Parts of the Cell activity, to create richer content for our booklet that also met recommended guidelines. There are also currently activities that are being developed, such as a Mitosis and Meiosis activity, to continue to expand the amount of content that has applicable NGSS Standards.</span></p>\n"
		},
		"b3a788c121": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\"><strong>The video below depicts the accessibility of the text-to-speech function for blind students using the adapted version of the Chameleon Genetics Activity: </strong></span><strong> </strong></p>\n"
		},
		"c4410b0537a": {
		  "type": "SEPARATOR"
		},
		"c8da9725260": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "Shoreline STEM Fest 1",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/f/fa/T--Washington--SSF1.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "Shoreline STEM Fest 2",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/d/d6/T--Washington--SSF2.png"
			},
			{
			  "externalLink": "",
			  "imgAltTag": "Shoreline STEM Fest 3",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/d/de/T--Washington--SSF3.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"c9c52d4ece": {
		  "header_content": "Additional Engagement",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"cdfd0ce2a74d": {
		  "imagesInRow_items": [
			{
			  "externalLink": "",
			  "imgAltTag": "Engineering Freshmen looking at iGEM Display",
			  "imgCaption": "",
			  "imgLink": "https://2019.igem.org/wiki/images/a/af/T--Washington--EL1.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"d683dc61419": {
		  "type": "VIDEO",
		  "video_videoLink": "https://2019.igem.org/wiki/images/0/0a/T--Washington--Video.mov",
		  "video_videoWidthPercentage": 75
		},
		"e0c5c1aeb1": {
		  "header_content": "Improving Accessibility & Generating a Dialogue",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"e36e17d67d8": {
		  "header_content": "Overview",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"ea22c78ef0c1": {
		  "type": "SEPARATOR"
		},
		"f338221f30c": {
		  "banner_content": {
			"bannerText": "Education & Public Engagement",
			"imageBlur": 6,
			"imageLink": "https://2019.igem.org/wiki/images/b/bd/T--Washington--Header.png",
			"imageTopX": 0,
			"imageTopY": 53,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 8
		  },
		  "header_priority": 1,
		  "type": "BANNER"
		},
		"f4dd16bfa813": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2><span style=\"color: rgb(26,188,156);background-color: transparent;font-size: 18px;font-family: Arial;\"><strong><ins>Non-English Speakers</ins></strong></span></h2>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\">According to Ethnologue, around 1.1 billion people in the world speak English, which accounts for <strong>less than 20% of the world’s population</strong>. This means our curriculum would not be accessible to around 80% of the people in the world due to language barriers. Since our focus is on creating a curriculum that is accessible to as many people as possible, we created translations for our booklet so it can be used to teach synthetic biology in several countries around the world. We collaborated with other iGEM teams around the world who speak different languages to translate our booklet so it could be used by speakers of other languages. Currently, we have <strong>over 900 pages</strong> of our curriculum translated into 16 different languages, including in Arabic, Basque, Dutch, French, German, Greek, Hebrew, Indonesisan, Japanese, Korean, Mandarin, Norwegian, Portuguese, Russian, Spanish, and Turkish. This means that our curriculum is now more accessible to approximately<strong> 63% of people in the world</strong>.</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: transparent;font-size: 11pt;font-family: Arial;\"><strong>The map below depicts the locations of all of the iGEM teams across the world that translated and implemented our activities.</strong> By collaborating with other iGEM teams, we have now had our activities used in <strong>3 continents.</strong></span></p>\n"
		},
		"f550c245a40": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto;\">In 2018, we had a 100-paged rough draft of this curriculum. However, it did not consider accessibility beyond cost and had many typos. We have since then corrected these errors, added additional activities, adapted activities for the blind, and considered other marginalized groups with a universal design perspective. In the following sections, we will outline how we approached these edits and further considered accessibility. </span><br>&nbsp;</p>\n"
		},
		"fb126f3f016a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p><strong>The gallery below depicts some of the translations by other iGEM teams: </strong></p>\n"
		},
		"fe50ea09dc7": {
		  "pdfViewer_pdfHeightPixel": 600,
		  "pdfViewer_pdfLink": "https://2019.igem.org/wiki/images/e/ed/T--Washington--NGSSStandards.pdf",
		  "pdfViewer_pdfWidthPercentage": 100,
		  "type": "PDF_VIEWER"
		}
	  },
	  "contentOrder": [
		"f338221f30c",
		"e36e17d67d8",
		"19b8a1ce597d",
		"072448771203",
		"5edcecd57bb3",
		"1f0c665978bf",
		"5fb54f4e818",
		"4713852f960",
		"42c16cc88b81",
		"a4134244f1f",
		"72c768cc69",
		"55c20281eb95",
		"f550c245a40",
		"ea22c78ef0c1",
		"e0c5c1aeb1",
		"470b0b862c6",
		"503c5c29e53",
		"74df8df61417",
		"12b6af1badb",
		"9c525d1914",
		"5e3bbfdb13be",
		"61bb135e79a3",
		"302523cf8fec",
		"91729797b",
		"b3a788c121",
		"d683dc61419",
		"5d5ef45c9de",
		"3245cf2cc458",
		"05afdc260c9d",
		"715709ada551",
		"5d8a7d07cee8",
		"f4dd16bfa813",
		"3140d443aa31",
		"fb126f3f016a",
		"87b13e6f3ad",
		"aea038622749",
		"fe50ea09dc7",
		"c4410b0537a",
		"877bc5f4d0da",
		"3dc4a834f275",
		"40d30d86582a",
		"ae6e3684b8b6",
		"2549b873b8",
		"c9c52d4ece",
		"1e1110648c7",
		"6dc0ef6847",
		"934ff2b6ad",
		"c8da9725260",
		"7130f0e5305",
		"cdfd0ce2a74d"
	  ],
	  "hasSidebar": true
	},
	"Results": {
	  "content": {
		"09ddf5cf1bc": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>In the beginning of October, we moved forward with our biosensor construct and tested it by exposing it to CBD and the luciferin molecule to measure the luminescent readout. After multiple attempts, we repeatedly measured no signal, so we sequenced the plasmid. Before, we had only done verification through restriction digests and gel electrophoresis. However, additional verification by sanger sequencing revealed that the backbone we used in the homology-based assembly was different from what we expected. The plasmid construct we had been working with successfully inserted the CBD dimer binder+luciferase sequence, but the backbone was an empty pADL-23c plasmid (the vector that these binders were originally cloned into). At some point in the beginning of the project, we had mixed up DNA samples and used the wrong one to assemble our biosensor construct.</p>\n<p></p>\n<p>Upon discovering this, we quickly set out to re-construct the plasmid with the correct backbone. Upon reperforming the homology based cloning and biobrick assembly of our biosensor construct, only the homology based plasmid showed any positive results from sequencing. Despite this, our luciferase assay results again showed no meaningful signal at any concentration of CBD tested. We believe this may be because the construct we were able to create did not contain the FKPA chaperone sequence, which may be vital in the folding stability of the nanobodies. Below is a compilation of the luciferase assay results that we collected. Although we were not able to verify the efficacy of our construct, we still believe that these nanobodies can be utilized in such systems; further experimentation and characterization must be done in order to confirm or deny this assumption.</p>\n<p></p>\n"
		},
		"0c20688e256": {
		  "bannder_content": {
			"bannerText": "Results",
			"imageBlur": 18,
			"imageLink": "http://2018.igem.org/wiki/images/b/bb/T--Washington--DNA_Gel_figure.png",
			"imageTopX": 0,
			"imageTopY": 64,
			"imageZoom": 100,
			"textColor": "WHITE",
			"textSize": 10
		  },
		  "banner_content": {
			"bannerText": "Results",
			"imageBlur": 5,
			"imageLink": "https://2019.igem.org/wiki/images/5/54/T--Washington--ResultsHeader.jpeg",
			"imageTopX": 0,
			"imageTopY": 60,
			"imageZoom": 97,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		},
		"10943efc75c": {
		  "accordion_content": [
			{
			  "panel": "https://2019.igem.org/wiki/images/3/3a/T--Washington--Luciferase_Data.xlsx",
			  "title": "Luciferase Assay Data"
			}
		  ],
		  "type": "ACCORDION"
		},
		"14028dd8b6b6": {
		  "header_content": "Moving Forward",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"1bcb7f369e1e": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<ol>\n<li>Stubenrauch K, Wessels U, Essig U, Kowalewsky F, Vogel R, Heinrich J. Characterization of murine anti-human fab antibodies for use in an immunoassay for generic quantification of human fab fragments in non-human serum samples including cynomolgus monkey samples. Journal of Pharmaceutical and Biomedical Analysis. 2013;72:208–215. doi: 10.1016/j.jpba.2012.08.023.</li>\n</ol>\n"
		},
		"2b6b10b793": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Beyond the jamboree, our team plans to complete construction and testing of the biosensor device. We will do so by performing further protein expression and luciferase assays. We will set up reactions with incremental increases of CBD in order to form a titration curve, as predicted by our simulations subteam. In doing so, we hope to show that this immunosensor functions as expected and we hope to better characterize the binding range of the system.</p>\n<p></p>\n<p>We may also perform a different mutations on the CBD anchor binder in order to test our protein model. Our simulations subteam has also attempted to create other models based off of different scaffolds; these new models may provide us with different binding pocket regions that we could manipulate and test. No matter how it is done, having a verified model of the anchor binder may prove invaluable in helping future protein design work to optimize this binder for different conditions.</p>\n<p></p>\n"
		},
		"4cc0feaa9f0e": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/thumb/e/e8/T--Washington--Mut_BLI_Raw_Fixed.jpg/1600px-T--Washington--Mut_BLI_Raw_Fixed.jpg",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 3: Sensorgram for the raw data collected from the BLI assay for the mutant anchor binder",
		  "type": "IMAGE"
		},
		"6ef80f23e72": {
		  "header_content": "Luciferase Assay Results",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"95ca161f96d8": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>Throughout the season we performed numerous assays using biolayer interferometry, to measure real time kinetics data for our wild type and mutant anchor body nanobodies for cannabidiol (CBD). These assays were used to determine if the mutation, informed by our model, caused a decrease in binding affinity, or an increase in the equilibrium dissociation constant (K<sub>D</sub>) that we expected. Although many of our assays resulted in inconclusive data (sensor readings that showed erratic activity) mainly due to errors in plate setup or contamination, we did get back usable data from one assay that suggests there was no real change in the binding affinity of the mutant compared to the wild type.&nbsp;</p>\n<p></p>\n<p>To find K<sub>D</sub>, we divide the dissociation constant (K<sub>off</sub> [1/s]) by the association constant (K<sub>on</sub> [1/(M*s)]). For the wild type binder, K<sub>on</sub> = 2.76E03/(M*s) and K<sub>off</sub> = 8.71E-02/s. Thus, the K<sub>D</sub> for the wild type nanobody is 31.6uM. For the mutant binder, K<sub>on</sub> = 3.29E03/(M*s) and K<sub>off</sub> = 1.17E-01/s; K<sub>D</sub> = 35.6uM. Although these are not a relatively high binding affinities, compared to some binders like certain antibodies<sup>1</sup>, future work should include creating new models of the structure of these nanobodies in order to design binders with a higher binding affinity.&nbsp;</p>\n<p></p>\n<p>In the figures below (figure 1, 3) the \"Nanobody Bound (CBD)\" data line indicates the data from the nanobody-bound sensor that is exposed to CBD. This is the raw data that measures the K<sub>on</sub> and K<sub>off</sub>. The \"No Nanobody Bound (CBD)\" data line indicates the data taken from a sensor that is not bound to any nanobodies, but still exposed to CBD. This data is used as a reference to the \"Nanobody Bound (CBD)\" data to remove background activity. The \"Nanobody Bound (No CBD)\" data line serves as a control, as this sensor runs the same assay as the \"Nanobody Bound\" sensor. The sensor is coated with nanobodies but is not exposed to CBD. The \"No Nanobody Bound (No CBD)\" is analogous to “No Nanobody Bound (CBD)” and serves the same function for the \"Nanobody Bound (No CBD)\" data line. In making final measurements, all three of these last data lines serve as a control for different conditions and is subtracted from the \"Nanobody Bound (CBD)\" data.</p>\n<p></p>\n"
		},
		"992957ab5982": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/thumb/3/38/T--Washington--WT_BLI_Global_Fit.png/1600px-T--Washington--WT_BLI_Global_Fit.png.jpeg",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 2: This sensorgram aligns the different concentrations on the x-axis. The graph starts at the baseline measurement before association as Time = 0s. The graph also implements a globally fitted trend line. This global fit informs us of what the overall Kon and Koff values are and allows us to find the KD. The R2 value for this global fit is 0.9517 and the x2 value is 0.0422.",
		  "type": "IMAGE"
		},
		"9eabb28afc27": {
		  "imagesInRow_items": [
			{
			  "externalLink": "https://2019.igem.org/wiki/images/d/d6/T--Washington--Messed_Up_Octet.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 5: Unusable Raw Data",
			  "imgLink": "https://2019.igem.org/wiki/images/d/d6/T--Washington--Messed_Up_Octet.png"
			},
			{
			  "externalLink": "https://2019.igem.org/wiki/images/8/87/T--Washington--Messed_up_Octet_fitted.png",
			  "imgAltTag": "",
			  "imgCaption": "Figure 6: Unusable Fitted Data",
			  "imgLink": "https://2019.igem.org/wiki/images/8/87/T--Washington--Messed_up_Octet_fitted.png"
			}
		  ],
		  "type": "IMAGES_IN_ROW"
		},
		"a8a46062db20": {
		  "header_content": "References",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"cab44eeef39": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/thumb/9/9f/T--Washington--Mut_BLI_Global.jpg/1600px-T--Washington--Mut_BLI_Global.jpg",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 4: Global fit graph for the mutant anchor binder BLI assay data. The R2 for this global fit is 0.9254 and the x2 value for this fit is 0.031.",
		  "type": "IMAGE"
		},
		"eb0d45e04794": {
		  "header_content": "Octet Biolayer Interferometry (BLI) Results",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"efa8382367a9": {
		  "exampleImage_imageLink": "https://2019.igem.org/wiki/images/thumb/3/3e/T--Washington--WT_BLI_Raw_Annotated.jpg/1599px-T--Washington--WT_BLI_Raw_Annotated.jpg",
		  "exampleImage_percentageSize": 70,
		  "exampleImage_subtitle": "Figure 1: This sensorgram shows the raw data collected during the BLI assay for the wild type anchor binder. As the sensor was exposed to CBD, the wavelength measurement increases as the bound nanobody associates with the CBD. The wavelength measurement then decreases as the nanobody dissociates from the CBD; from these changes we can measure the Kon and Koff. ",
		  "type": "IMAGE"
		},
		"f4ed9a8a0b": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>A comparison of the K<sub>D</sub>’s of the wild type and mutant binders suggests that the overall binding affinities of these two nanobodies did not change. Because our mutation was solely informed by the model we had created, this lack of change gives evidence that the model did not correctly identify the binding pocket and key binding residues. In many ways, this is to be expected. Since our proteins are so small and it is unknown what causes it to crystallize, it was not possible to get even low-resolution images of the protein structure when bound. This forced us to try to identify the binding pocket solely from our protein models. There are many different candidates for the correct binding pocket, and determining which one is the correct site purely from computer models remains an unsolved problem.&nbsp;</p>\n<p></p>\n<p>However, our work is not wasted. Each assay gives us information that can be used to narrow down the list of candidates. Now that we know that the correct binding pocket does not involve the residues we mutated, any candidate binding site that includes this residue must be incorrect.&nbsp;</p>\n<p></p>\n<p>Future studies or replications of our work should be done to construct and test different models through similar mutation experiments. New studies must take care into carefully setting up the BLI assays; bubbles or splash contamination may ruin the accuracy of the assay. It is also important to acquire fresh protein samples to analyze if possible; variations in the quality of the proteins used may have led to some of the failed assays we ran. Additionally, concentrations of the wild type anchor binder and mutant anchor tested are not the same as shown above in Figures 1 and 3, by the scale on the y-axis in all of the above graphs. This discrepancy may affect our results as the lower concentration had a lower signal overall and may not be as reliable in reporting the binding activity.</p>\n<p></p>\n"
		},
		"f8657ea5d12b": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<h2>Failed Experiments Graph Examples:</h2>\n<p>Many of our failed BLI assays had inconsistent data such as below, measured for the wild type anchor binder:</p>\n<p></p>\n"
		}
	  },
	  "contentOrder": [
		"0c20688e256",
		"eb0d45e04794",
		"95ca161f96d8",
		"efa8382367a9",
		"992957ab5982",
		"4cc0feaa9f0e",
		"cab44eeef39",
		"f4ed9a8a0b",
		"f8657ea5d12b",
		"9eabb28afc27",
		"6ef80f23e72",
		"09ddf5cf1bc",
		"10943efc75c",
		"14028dd8b6b6",
		"2b6b10b793",
		"a8a46062db20",
		"1bcb7f369e1e"
	  ],
	  "hasSidebar": true
	},
	"Safety": {
	  "content": {
		"0bfbd56deac8": {
		  "header_content": "Lab Safety",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"2e6336783": {
		  "header_content": "Ethical and Environmental Risk",
		  "header_priority": 1,
		  "type": "HEADER"
		},
		"4bc4f528c9": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>We worked on an application project this season that primarily involved work with E. coli (DH5-alpha and WK6 cell lines). These cell lines constitute BSL1 hazard level, and as a result, we took precautions in lab under this rating. This includes always wearing gloves; sterilizing surfaces with ethanol; bleaching, autoclaving, collecting and disposing of waste as needed; and enforcing the lab as a food and drink-free space. We received training at the beginning of the year through the Biochemistry Department at the University of Washington, which consisted of several online safety courses including biosafety, fume hood usage and managing laboratory chemicals. To ensure lab safety, we also reviewed these trainings with our lab periodically throughout the summer and asked our PI whenever we had any questions. Throughout the summer, we also ensure that each lab member undergoes safety orientations for the lab space to routinely review and enforce these safety points. Our lab space undergoes safety inspections done by the University of Washington’s Environmental Health &amp; Safety department to ensure that our lab space is safe to work in and complies with environmental health standards.</p>\n<p></p>\n"
		},
		"7c0a8151629a": {
		  "type": "WYSIWYG_EDITOR",
		  "wysiwyg_content": "<p>There are numerous applications for CID systems, including biosensors and genetic switches. A potential risk is that when this technology is applied to a sensor, false positives could result due to inefficiencies in the system. This potential uncertainty of our biosensor raises a number of ethical concerns when applied to end-user diagnoses, such as causing undue stress or motivating unnecessary treatments. Thus, any such applications should be rigorously tested. As is, the CID system demonstrated in our project is foundational and has little to no ethical bearing on the general public. We do not work with animals or plan to release this system into the environment.</p>\n"
		},
		"ae41be43570": {
		  "banner_content": {
			"bannerText": "Safety",
			"imageBlur": 7,
			"imageLink": "https://2019.igem.org/wiki/images/7/73/T--Washington--Safety2Header.jpeg",
			"imageTopX": 0,
			"imageTopY": 52,
			"imageZoom": 98,
			"textColor": "WHITE",
			"textSize": 7
		  },
		  "type": "BANNER"
		}
	  },
	  "contentOrder": [
		"ae41be43570",
		"0bfbd56deac8",
		"4bc4f528c9",
		"2e6336783",
		"7c0a8151629a"
	  ],
	  "hasSidebar": false
	}
  }