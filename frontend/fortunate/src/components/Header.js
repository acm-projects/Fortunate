import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Button from "./Button";

// Material UI
import { fade, makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MailIcon from "@material-ui/icons/Mail";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

export default function Header() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/">
					<Button text={"My Account"}></Button>
				</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/portfolio">
					<Button text={"My Portfolio"}></Button>
				</Link>
			</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					aria-label="show 11 new notifications"
					color="inherit"
				>
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div>
			<AppBar position="static" elevation={20}>
				<Toolbar>
					<Grid
						container
						direction="row"
						alignItems="center"
						justify="space-between"
					>
						<Grid item>
							<Grid container alignItems="center">
								<Typography
									className={classes.title}
									variant="h6"
									noWrap
								>
									<h1 className="logo">Fortunate</h1>
								</Typography>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder="Search…"
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ "aria-label": "search" }}
									/>
								</div>
							</Grid>
						</Grid>

						<Grid item xs={7}>
							<Grid container justify="space-around">
								<Grid item>
									<Link to="/">
										<Button text="About" />
									</Link>
								</Grid>
								<Grid item>
									<a href="/vmpage">
										<Button text="Virtual Market" />
									</a>
								</Grid>
								<Grid item>
									<a href="/learn/intro">
										<Button text="Courses" />
									</a>
								</Grid>
								<Grid item>
									<Button text="Contact" />
								</Grid>
								<Grid item>
									<Link to="/signup">
										<Button text="Sign Up" />
									</Link>
								</Grid>
								<Grid item>
									<Link to="/login">
										<Button text="Login" />
									</Link>
								</Grid>
							</Grid>
						</Grid>

						<Grid item>
							<IconButton
								aria-label="show 4 new mails"
								color="inherit"
							>
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<div className={classes.sectionMobile}>
								<IconButton
									aria-label="show more"
									aria-controls={mobileMenuId}
									aria-haspopup="true"
									onClick={handleMobileMenuOpen}
									color="inherit"
								>
									<MoreIcon />
								</IconButton>
							</div>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
