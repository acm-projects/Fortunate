import Button from "./Button"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }}))

const Footer = () => {
    const onClick = () => {
        console.log('Click')
    }
const classes = useStyles();

    return (
        <footer>
            <Box boxShadow="20px 20px 20px 20px">
            <AppBar position="static" elevation={24}>
                <Box paddingTop={2}>
                <Toolbar>
                    <Grid container justify="space-evenly">
                        <Grid item xs={2}>
                        <h1 className='logo'>Fortunate</h1>
                        </Grid>
                        <Grid item xs={1}>
                        <Link to ="/">
                        <Button text ='About'/>
                        </Link>
                        </Grid>
                        <Grid item xs={1}>
                        <a href='/portfolio'>
                        <Button text ='Virtual Market'/>
                        </a>
                        </Grid>
                        <Grid item xs={1}>
                        <a href='#lessons'>
                        <Button text ='Courses'/>
                        </a>
                        </Grid>
                        <Grid item xs={1}>
                        <Button text ='Contact'/>
                        </Grid>
                        <Grid item xs={1}>
                        <Link to="/signup">
                        <Button text ='Sign Up'/>
                        </Link>
                        </Grid>
                        <Grid item xs={1}>
                        <Link to="/login">
                        <Button text ='Login'/>
                        </Link>
                        </Grid>
                        <Grid item xs={1}>
                        <a href='#top'>
                        <Button text = 'Top'/>
                        </a>
                        </Grid>
                    </Grid>
                </Toolbar>
                </Box>
            </AppBar>
            </Box>
        </footer>
    )
}

export default Footer
