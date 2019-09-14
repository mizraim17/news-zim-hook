import React from "react";

import "./Header.scss";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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

const themes = [
  { keyword: "mexico", logo: "public" },
  { keyword: "tech", logo: "computer" },
  { keyword: "DF", logo: "map" },
  { keyword: "Byker", logo: "motorcycle" },
  { keyword: "JS", logo: "code" },
  { keyword: "UAEH", logo: "school" },
  { keyword: "pachuca", logo: "flag" }
];

const Header = props => {
  console.log("====>", props.onclick);
  const classes = useStyles();

  return (
    <div className="Header">
      <Typography
        className={classes.title}
        variant="h3"
        component="h2"
        gutterBottom
      >
        Daily News
      </Typography>

      <div className="Header--items">
        {themes.map((el, i) => (
          <Button
            key={i}
            variant="contained"
            color="#333"
            onClick={() => props.find(el.keyword)}
            className={classes.button}
          >
            <Icon className={classes.leftIcon}>{el.logo}</Icon>
            {el.keyword}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
