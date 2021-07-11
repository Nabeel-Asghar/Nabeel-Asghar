import * as React from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
import {
  createMuiTheme,
  Grid,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { SideBar } from "../components/Sidebar";
import * as styles from "../styles/sidebar.css";
import { styled } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Projects from "../components/Projects";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Navbar from "../components/Navbar";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: "0px 150px",
};

const mediumPageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: "0px 100px",
};

const body = {
  maxWidth: 1000,
  margin: "0 auto",
  minHeight: "100vh",
};

const bodySpacing = {
  maxWidth: 1000,
  margin: "40px auto",
  minHeight: "100vh",
};

const StyledFab = styled(Fab)({
  background: "transparent",
  color: " #86c232",
  margin: 10,
  border: "3px solid #86c232",
  " &:hover": {
    background: "transparent",
  },
});

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme, {
  breakpoints: ["md", "lg"],
  factor: 3,
});

// markup
const IndexPage = () => {
  const breakpoints = useBreakpoint();

  console.log(breakpoints.md);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginLeft: 20 }}>
        <div
          style={{
            position: "fixed",
            color: "white",
            marginTop: 30,
          }}
          data-sal="slide-down"
          data-sal-delay="400"
          data-sal-easing="ease"
        >
          <StyledFab color="secondary" className={styles.button}>
            N.A.
          </StyledFab>
        </div>
        {!breakpoints.md && <SideBar />}
      </div>
      <main style={!breakpoints.md ? pageStyles : mediumPageStyles}>
        <Grid container direction={"row"}>
          <Grid item md={12} sm={12}>
            <title>Home Page</title>
            <div style={body}>
              <Intro fullScreen={!breakpoints.md} />
            </div>
            <div style={body}>
              <AboutMe />
            </div>
            <div style={bodySpacing}>
              <Timeline />
            </div>
            <div style={bodySpacing}>
              <Projects />
            </div>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
};

export default IndexPage;
