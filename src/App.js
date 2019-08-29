import React from "react";
import New from "./Component/New";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Header from "./Component/Header/Header";

function App() {
  const [news, setNews] = React.useState();

  React.useEffect(() => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("4891f314d6264426978f471d75136fd1");

    newsapi.v2
      .everything({
        q: "xiaomi",
        page: 2
      })
      .then(response => {
        console.log(response.articles);

        setNews(response.articles);
      });
  }, []);

  return (
    <div className=" ">
      <Header />

      <Grid container spacing={3} justify="space-around">
        {news
          ? news.map((el, i) => {
              return <New el={el} key={i} />;
            })
          : "no"}
      </Grid>

      <Button color="primary" variant="contained">
        button
      </Button>
    </div>
  );
}

export default App;
