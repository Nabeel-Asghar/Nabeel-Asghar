import * as React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as styles from "../styles/sharedStyles.module.css";
import { Slide, useScrollTrigger } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";
import MyResume from "../images/Nabeel Asghar Resume 2021.pdf";

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
  buttonRoot: {
    background: "rgba(134, 194, 50, 0.15)",
    borderRadius: 3,
    border: "2px solid #86c232",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

const StyledFab = styled(Fab)({
  background: "transparent",
  color: " #86c232",
  border: "3px solid #86c232",
  " &:hover": {
    background: "transparent",
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window && window ? window() : undefined,
  });

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
      <AppBar
        style={{
          background: "rgba(34, 38, 41, 0.5)",
          height: 80,
          backdropFilter: "blur(20px)",
        }}
        elevation={0}
      >
        <Toolbar style={{ height: 100 }}>
          <div
            style={{
              color: "white",
              flexGrow: 1,
            }}
            data-sal="slide-down"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <StyledFab color="secondary">N.A.</StyledFab>
          </div>
          <a
            href={MyResume}
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            <Button
              classes={{
                root: classes.buttonRoot,
              }}
            >
              <Typography
                variant={"button"}
                style={{ color: "#86c232", textDecoration: "none" }}
              >
                Resume
              </Typography>
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
