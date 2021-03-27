import Button from "../components/Button"
import Buffer from "../components/Buffer"
import TopButton from "../components/TopButton"
import AppIcon from "../images/fortunatelogo.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';

// added line 25&24 to link with header
const Home = () => {
    return (
        <home>
            <Grid container>
                <Grid item xs={12}>
                    <Box width="100%">
                        <Box paddingTop={4}>
                            <Paper elevation={20}>
                                <Box paddingTop={1}>
                                <div id='top'>
                                    <h1>Fortunate</h1>
                                    <h2>Slogan</h2>
                                </div>
                                    <Buffer/>
                                    <div className='centered'>
                                        <img src={AppIcon} alt="coin" width="200" height="200" />
                                    </div>
                                    <Buffer/>
                                    <div className='centered'>
                                        <Link to="/">
                                            <TopButton width = '200px' text = "Sign Up" color='gainsboro'></TopButton>
                                        </Link>
                                    </div>
                                    <Buffer/>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box width="100%">
                        <Paper elevation={20}>
                            <Box paddingTop={1}>
                                <h2>How Does Fortunate Work?</h2>
                                <Buffer/>
                                <div className='separatecenter'>
                                    <h2>Learn</h2>
                                    <h2>Practice</h2>
                                </div>
                                <div className='separatecenter2'>
                                    <img src="../Icon_Image.svg" width='250'></img>
                                    <img src="../Icon_Image.svg" width='250'></img>
                                </div>
                                <Buffer/>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid>
                    <Box Box width="100%">
                        <Paper elevation={20}>
                            <Box paddingTop={1}>
                            <div id='lessons'>
                                <h2>Lessons</h2>
                            </div>
                                <Buffer/>
                                <div className='centered'>
                                    <p className ='BodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia dictionary.   <a href="/dictionary" target="_blank"> dic </a> </p>

                                </div>
                                <Buffer/>
                                <div className='centered'>
                                    <TopButton width = '350px' text = "View Lessons"></TopButton>
                                </div>
                                <Buffer/>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid>
                    <Box Box width="100%">
                        <Paper elevation={20}>
                            <Box paddingTop={1}>
                            <div id='VM'>
                                <h2>Virtual Market</h2>
                              </div>
                                <Buffer/>
                                <div className='centered'>
                                    <p className="BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
                                </div>
                                <Buffer/>
                                <div className='centered'>
                                    <Link to="/portfolio">
                                    <TopButton width = '500px' text = "Enter Virtual Market"></TopButton>
                                    </Link>
                                </div>
                                <Buffer/>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid>
                    <Box Box width="100%">
                        <Paper elevation={20}>
                            <Box paddingTop={1}>
                                <h2>No Investment Advice / Investment Risks Disclaimer</h2>
                                <Buffer/>
                                <div className='centered'>
                                    <p className="BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
                                </div>
                                <Buffer/>
                                <Buffer/>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </home>
      )
  }
  export default Home
