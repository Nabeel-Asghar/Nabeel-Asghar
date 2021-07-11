import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as styles from "../styles/sharedStyles.module.css";
import { Slide, useScrollTrigger } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <HideOnScroll {...props}>
      <AppBar style={{ background: "#222629" }}>
        <Toolbar>
          <Typography
            variant="h6"
            className={`${classes.title} ${styles.darkerFont}`}
          >
            LOGO
          </Typography>
          <Button className={classes.menuButton}>ITEM 1</Button>
          <Button className={classes.menuButton}>ITEM 2</Button>
          <Button className={classes.menuButton}>ITEM 3</Button>
          <Button className={classes.menuButton}>ITEM 4</Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
