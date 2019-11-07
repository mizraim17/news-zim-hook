import React, { useState } from "react";

import "./Header.scss";
import Icon from "@material-ui/core/Icon";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	palette: {
		secondary: green
	},
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: "none"
	},
	leftIcon: {
		marginRight: theme.spacing(1)
	},
	title: {
		color: "white",
		textAlign: "center"
	},

	search: {
		display: "flex",
		justifyContent: "space-between",
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	}
}));

const themes = [
	{ keyword: "mexico", logo: "public" },
	{ keyword: "tech", logo: "computer" },
	{ keyword: "CDMX", logo: "map" },
	{ keyword: "Byker", logo: "motorcycle" },
	{ keyword: "JS", logo: "code" },
	{ keyword: "UAEH", logo: "school" },
	{ keyword: "pachuca", logo: "flag" },
	{ keyword: "anime", logo: "chrome_reader_mode" }
];

const Header = props => {
	const teclea = e => {
		if (e.charCode === 13) {
			props.query(word);
		}
	};

	const search = e => {
		if (e.key === "Enter") {
			console.log("do validate");
		}

		console.log("enter", e);

		setword(e.target.value);
	};

	const [word, setword] = useState();

	const classes = useStyles();

	return (
		<div className="Header">
			{console.log("props", props)}
			<Typography
				className={classes.title}
				variant="h3"
				component="h2"
				gutterBottom
			>
				Daily News MZM
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={12} xl={4}></Grid>
				<Grid item xs={12} xl={4}>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							id="searchbar"
							onKeyPress={teclea}
							onChange={search}
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "search" }}
						/>
						<Button
							size="small"
							className="su"
							onClick={() => props.query(word)}
						>
							search
						</Button>
					</div>
				</Grid>
				<Grid item xs={12} xl={4}></Grid>
			</Grid>

			<div className="Header--items">
				<Grid container spacing={3}>
					{themes.map((el, i) => (
						<Grid xs={6} sm={12} xl={2} className="centrar">
							<Button
								key={i}
								variant="contained"
								color="primary"
								onClick={() => props.query(el.keyword)}
								className={classes.button}
							>
								<Icon className={classes.leftIcon}>{el.logo}</Icon>
								{el.keyword}
							</Button>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Header;
