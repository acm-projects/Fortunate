import { BrowserRouter as Link } from "react-router-dom";
import Buffer from "../components/Buffer";
import TopButton from "../components/TopButton";
// Material UI
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppIcon from "../images/Fortunate_Logo.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import PicSlides from "../components/PicSlides";
import { PicData } from "../components/PicData.js";
import { Infodata} from "../components/Homestuff/Infodata";
import Info from "../components/Homestuff/Info";

import Cards from "../components/Homestuff/Cards";

const useStyles = makeStyles({
	root: {borderLeft:0, borderTop:5, borderBottom:5, borderRight:0,  borderColor: "#70A851", square:true, variant:"outlined" }
});

const Home = () => {
	const classes = useStyles();
	return (
		<home>

		<PicSlides slides={PicData} />

			<Grid container className="home">
				<Grid item xs={12}>
					<Box width="100%">
						<Box paddingTop={4}>
							<Paper elevation={20} className={classes.root}>
								<Box paddingTop={1} borderTop={3} borderColor="#70A851">

									<>
									<Info {...Infodata} />
									</>

									<Buffer />
								</Box>
							</Paper>
						</Box>
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<Buffer />

								<Cards/>

								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid>
					<Box Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<div id="lessons">
									<h2>Lessons</h2>
								</div>
								<Buffer />
								<div className="centered">
									<p className="BodyText">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Integer nec odio.
										Praesent libero. Sed cursus ante dapibus
										diam. Sed nisi. Nulla quis sem at nibh
										elementum imperdiet. Duis sagittis
										ipsum. Praesent mauris. Fusce nec tellus
										sed augue semper porta. Mauris massa.
										Vestibulum lacinia arcu eget nulla.
										Class aptent taciti sociosqu ad litora
										torquent per conubia nostra, per
										inceptos himenaeos. Curabitur sodales
										ligula in libero. Sed dignissim lacinia
										Dictionary.{" "}
										<a href="/dictionary" target="_blank">
											dic
										</a>
									</p>
								</div>
								<Buffer />
								<div className="centered">
									<TopButton
										width="350px"
										text="View Lessons"
									></TopButton>
								</div>
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid>
					<Box Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<div id="VM">
									<h2>Virtual Market</h2>
								</div>
								<Buffer />
								<div className="centered">
									<p className="BodyText">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Integer nec odio.
										Praesent libero. Sed cursus ante dapibus
										diam. Sed nisi. Nulla quis sem at nibh
										elementum imperdiet. Duis sagittis
										ipsum. Praesent mauris. Fusce nec tellus
										sed augue semper porta. Mauris massa.
										Vestibulum lacinia arcu eget nulla.
										Class aptent taciti sociosqu ad litora
										torquent per conubia nostra, per
										inceptos himenaeos. Curabitur sodales
										ligula in libero. Sed dignissim lacinia
										nunc. Stock look up page{" "}
											<a href="/vmpage" target="_blank">
												page
											</a>
									</p>
								</div>
								<Buffer />
								<div className="centered">
									<Link to="/portfolio">
										<TopButton
											width="500px"
											text="Enter Virtual Market"
										></TopButton>
									</Link>
								</div>
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid>
					<Box Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<h2>
									No Investment Advice / Investment Risks
									Disclaimer
								</h2>
								<Buffer />
								<div className="centered">
									<p className="BodyText">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Integer nec odio.
										Praesent libero. Sed cursus ante dapibus
										diam. Sed nisi. Nulla quis sem at nibh
										elementum imperdiet. Duis sagittis
										ipsum. Praesent mauris. Fusce nec tellus
										sed augue semper porta. Mauris massa.
										Vestibulum lacinia arcu eget nulla.
										Class aptent taciti sociosqu ad litora
										torquent per conubia nostra, per
										inceptos himenaeos. Curabitur sodales
										ligula in libero. Sed dignissim lacinia
										nunc.{" "}
									</p>
								</div>
								<Buffer />
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</home>
	);
};
export default Home;

/*
import { BrowserRouter as Link } from "react-router-dom";
import Buffer from "../components/Buffer";
import TopButton from "../components/TopButton";
// Material UI
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppIcon from "../images/Fortunate_Logo.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import PicSlides from "../components/PicSlides";
import { PicData } from "../components/PicData.js";
import { Infodata} from "../components/Homestuff/Infodata";
import Info from "../components/Homestuff/Info";

import Cards from "../components/Homestuff/Cards";

const useStyles = makeStyles({
	root: {borderLeft:0, borderTop:5, borderBottom:5, borderRight:0,  borderColor: "#70A851", square:true, variant:"outlined" }
});

const Home = () => {
	const classes = useStyles();
	return (
		<home>

		<PicSlides slides={PicData} />

			<Grid container className="home">
				<Grid item xs={12}>
					<Box width="100%">
						<Box paddingTop={4}>
							<Paper elevation={20} className={classes.root}>
								<Box paddingTop={1} borderTop={3} borderColor="#70A851">
									<div id="top">
										<h1>Fortunate</h1>
									</div>
									<Buffer />
									<div className="centered">
										<img
											src={AppIcon}
											alt="coin"
											width="200"
											height="200"
										/>
									</div>
									<Buffer />
									<div className="centered">
										<Link to="/">
											<TopButton
												width="200px"
												text="Sign Up"
												color="gainsboro"
											></TopButton>
										</Link>
									</div>
									//  <>
								//	<Info {...Infodata} />
								//	</>
									<Buffer />
								</Box>
							</Paper>
						</Box>
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<h2>How Does Fortunate Work?</h2>
								<Buffer />
								<div className="separatecenter">
									<h2>Learn</h2>
									<h2>Practice</h2>
								</div>
								<div className="separatecenter2">
									<img
										src="../Icon_Image.svg"
										width="250"
									></img>
									<img
										src="../Icon_Image.svg"
										width="250"
									></img>
								</div>
							//	<Cards/>
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid>
					<Box Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<div id="lessons">
									<h2>Lessons</h2>
								</div>
								<Buffer />
								<div className="centered">
									<p className="BodyText">
										Learn the basics of the stock market with handcrafted lessons built by our team to teach you the basics of in a fun and simple way. {" "}
										<a href="/dictionary" target="_blank">
											dic
										</a>
									</p>
								</div>
								<Buffer />
								<div className="centered">
									<TopButton
										width="350px"
										text="View Lessons"
									></TopButton>
								</div>
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid>
					<Box Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<div id="VM">
									<h2>Virtual Market</h2>
								</div>
								<Buffer />
								<div className="centered">
									<p className="BodyText">
										Apply your new skills using real market data from Fortune 500 companies. Grow your portfolio over time as you build up your personal collection of equities.{" "}
											<a href="/vmpage" target="_blank">
												page
											</a>
									</p>
								</div>
								<Buffer />
								<div className="centered">
									<Link to="/portfolio">
										<TopButton
											width="500px"
											text="Enter Virtual Market"
										></TopButton>
									</Link>
								</div>
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid>
					<Box Box width="100%">
						<Paper elevation={20}>
							<Box paddingTop={1} borderTop={3} borderColor="#70A851">
								<h2>
									No Investment Advice / Investment Risks
									Disclaimer
								</h2>
								<Buffer />
								<div className="centered">
									<p className="BodyText">
									Investment involves risk. As a general rule, you should only trade in financial products that you are familiar with and understand the risk associated with them. The risk warning described in each financial product below is not exhaustive, you should carefully consider your investment experience, financial situation, investment objective, risk tolerance level and consult your independent financial adviser as to the suitability of your situation prior making any investment.

{" "}
									</p>
								</div>
								<Buffer />
								<Buffer />
							</Box>
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</home>
	);
};
export default Home;
*/
