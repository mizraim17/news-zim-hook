import React from "react";

import "./Header.css";
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
  center: {
    textAlign: "center"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className="Header">
      <Typography
        className={classes.center}
        variant="h3"
        component="h2"
        gutterBottom
      >
        New zim
      </Typography>

      <div className="Header--items">
        <Button variant="contained" color="primary" className={classes.button}>
          <Icon className={classes.leftIcon}>send</Icon>
          send
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <Icon className={classes.leftIcon}>send</Icon>
          send
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          <Icon className={classes.leftIcon}>send</Icon>
          send
        </Button>
      </div>
    </div>
  );
};

export default Header;
