import React from "react";

import "./Footer.scss";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className="Footer">
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<Typography variant="h3" component="h2" gutterBottom>
							News - ZIM
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<img
							src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
							width="40"
							alt=""
						/>
						<a
							href="https://github.com/mizraim17"
							className="grey-text text-lighten-4"
						>
							@Mizraim17
						</a>
					</Grid>

					<Grid item xs={3}>
						<a href="https://newsapi.org/">
							Mizraim Martínez @2019 Power by NewsAPI.org
						</a>
					</Grid>
					<Grid item xs={3}></Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
