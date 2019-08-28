import React from "react";
import "./App.css";
import New from "./Component/New";
import Button from "@material-ui/core/Button";

function App() {
  const [news, setNews] = React.useState();

  React.useEffect(() => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("4891f314d6264426978f471d75136fd1");

    newsapi.v2
      .everything({
        q: "apple",
        page: 2
      })
      .then(response => {
        console.log(response.articles);

        setNews(response.articles);
      });
    console.log("news+++++++++", news);
  }, []);

  return (
    <div className="App">
      <h1>landingPage news </h1>
      <div>
        {news
          ? news.map((el, i) => {
              return <New note={el} />;
            })
          : "no"}
      </div>
      <New note />
      <Button color="primary" variant="contained">
        button
      </Button>
    </div>
  );
}

export default App;
