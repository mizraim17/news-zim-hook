import React from "react";
import New from "./Component/News/New";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";

require("dotenv").config();

function App() {
	const [news, setNews] = React.useState();
	const [progress, setprogress] = React.useState(true);

	const query = word => {
		const NewsAPI = require("newsapi");
		const newsapi = new NewsAPI(process.env.REACT_APP_KEY_NEWS);

		newsapi.v2
			.everything({
				q: word,
				page: 1
			})
			.then(response => {
				// console.log(response.articles);

				setNews(response.articles);
			});

		let clean = document.getElementById("searchbar");
		clean.value = " ";
	};

	React.useEffect(() => {
		const NewsAPI = require("newsapi");
		const newsapi = new NewsAPI(process.env.REACT_APP_KEY_NEWS);

		newsapi.v2
			.everything({
				q: "italika",
				page: 1
			})
			.then(response => {
				// console.log(response.articles);
				setprogress(false);
				setNews(response.articles);
			});
	}, []);

	const useStyles = makeStyles(theme => ({
		root: {
			display: "flex",
			justifyContent: "center",
			primary: "red",
			width: "300"
		}
	}));

	const classes = useStyles();
	console.log("--->", process.env.REACT_APP_KEY);
	console.log("process.env.KEY_NEWS--->", process.env.REACT_APP_KEY_NEWS);

	return (
		<div className=" ">
			<Header {...{ query }} />

			{progress !== false ? (
				<div className={classes.root}>
					<CircularProgress color="secondary" size={250} />
				</div>
			) : (
				<Grid container spacing={3} justify="space-around">
					{news
						? news.map((el, i) => {
								return <New el={el} key={i} />;
						  })
						: "no"}
				</Grid>
			)}

			<Footer />
		</div>
	);
}

export default App;
