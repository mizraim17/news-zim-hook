import React from "react";
import "./New.scss";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const New = props => {
	const useStyles = makeStyles({
		card: {
			margin: 10,
			maxWidth: 450,
			boxSizing: "border-box"
		},
		media: {
			height: 240
		}
	});

	const classes = useStyles();
	return (
		<a href={props.el.url} target="_blank">
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={
							props.el.urlToImage
								? props.el.urlToImage
								: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rZ7xp0nhbL7MHiyugEL9mNX-s3K2_o36oHdv6BcbxvJE6peR_Q"
						}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{props.el.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{props.el.content}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</a>
	);
};

export default New;
