import * as React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as styles from "../styles/sharedStyles.module.css";
import { Slide, SwipeableDrawer, useScrollTrigger } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Link from "gatsby-link";
import { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import MenuIcon from "@material-ui/icons/Menu";
import MyResume from "../images/resume.pdf";

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
  paper: {
    background: "#222629",
    color: "white",
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

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const { fullScreen } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <>
      {fullScreen ? (
        <HideOnScroll {...props}>
          <AppBar
            style={{
              background: "rgba(34, 38, 41, 0.5)",
              height: 80,
              backdropFilter: "blur(20px)",
            }}
            position="fixed"
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
              <Link
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
              </Link>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      ) : (
        <HideOnScroll {...props}>
          <AppBar
            style={{
              background: "rgba(34, 38, 41, 0.5)",
              height: 60,
            }}
            elevation={0}
          >
            <Toolbar style={{ height: 60 }}>
              <div
                style={{
                  color: "white",
                  flexGrow: 1,
                }}
              >
                <StyledFab size={"medium"} color="secondary">
                  N.A.
                </StyledFab>
              </div>
              <div>
                <MenuIcon
                  fontSize="large"
                  onClick={() => setOpen(true)}
                  style={{ color: "#86c232", paddingRight: 10 }}
                />
              </div>
              <SwipeableDrawer
                anchor={"left"}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                classes={{ paper: classes.paper }}
              >
                <div
                  style={{
                    alignItems: "flex-start",
                    width: 160,
                    paddingLeft: 15,
                  }}
                >
                  <Link
                    href={MyResume}
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ margin: "10px 0px" }}>
                      <Button startIcon={<FileCopyIcon />} color={"secondary"}>
                        <Typography variant="h5">
                          <span className={styles.coloredFontCapitalize}>
                            Resume
                          </span>
                        </Typography>
                      </Button>
                    </div>
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    to="https://www.linkedin.com/in/nabeel-asghar"
                  >
                    <div style={{ margin: "10px 0px" }}>
                      <Button startIcon={<LinkedInIcon />} color={"secondary"}>
                        <Typography variant="h5">
                          <span className={styles.coloredFontCapitalize}>
                            LinkedIn
                          </span>
                        </Typography>
                      </Button>
                    </div>
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    to="https://github.com/Nabeel-Asghar"
                  >
                    <div style={{ margin: "10px 0px" }}>
                      <Button startIcon={<GitHubIcon />} color={"secondary"}>
                        <Typography variant="h5">
                          <span className={styles.coloredFontCapitalize}>
                            GitHub
                          </span>
                        </Typography>
                      </Button>
                    </div>
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    to="https://www.instagram.com/nabeel.asghar1/"
                  >
                    <div style={{ margin: "10px 0px" }}>
                      <Button startIcon={<InstagramIcon />} color={"secondary"}>
                        <Typography variant="h5">
                          <span className={styles.coloredFontCapitalize}>
                            Instagram
                          </span>
                        </Typography>
                      </Button>
                    </div>
                  </Link>
                </div>
              </SwipeableDrawer>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      )}
    </>
  );
};

export default Navbar;
