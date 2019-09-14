import React from "react";
import New from "./Component/News/New";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Header from "./Component/Header/Header";

function App() {
  const [news, setNews] = React.useState();

  const query = word => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("4891f314d6264426978f471d75136fd1");

    newsapi.v2
      .everything({
        q: word,
        page: 1
      })
      .then(response => {
        console.log(response.articles);

        setNews(response.articles);
      });
  };

  React.useEffect(() => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("4891f314d6264426978f471d75136fd1");

    newsapi.v2
      .everything({
        q: "italika",
        page: 1
      })
      .then(response => {
        console.log(response.articles);

        setNews(response.articles);
      });
  }, []);

  return (
    <div className=" ">
      <Header find={query} wor="nada" />

      <Grid container spacing={3} justify="space-around">
        {news
          ? news.map((el, i) => {
              return <New el={el} key={i} />;
            })
          : "no"}
      </Grid>
    </div>
  );
}

export default App;
