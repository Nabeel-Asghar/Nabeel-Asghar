import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import * as styles from "../styles/sharedStyles.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
    borderRadius: 3,
    border: "2px solid #86c232",
    color: "white",
    height: 65,
    width: 225,
    marginTop: 25,
    marginBottom: -10,
  },
}));

const Intro = (props) => {
  const { fullScreen } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={styles.gridContainer}
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <Grid item xs={12}>
        <div
          className={`${
            fullScreen ? styles.container : styles.mobileContainer
          } ${styles.demo} ${styles.animated}`}
        >
          <Typography
            variant={"h5"}
            className={styles.coloredFont}
            gutterBottom
            data-sal="slide-down"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            My name is
          </Typography>
          <Typography
            variant={"h1"}
            className={styles.regularFont}
            data-sal="slide-down"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            Nabeel Asghar
          </Typography>
          <Typography
            variant={"h3"}
            className={styles.darkerFont}
            gutterBottom
            style={{ paddingBottom: 20 }}
            data-sal="slide-down"
            data-sal-delay="600"
            data-sal-easing="ease"
          >
            Developer and Co-Founder of{" "}
            <a
              target={"_blank"}
              href={"https://serume.org/"}
              className={styles.hyperlink}
            >
              Serume
            </a>
          </Typography>
          <Typography
            variant={"h6"}
            className={`${styles.darkerFont} ${styles.textContainer}`}
            data-sal="slide-down"
            data-sal-delay="800"
            data-sal-easing="ease"
          >
            Currently, I'm a software engineer on the Ecommerce Marketplace team
            at <span className={styles.coloredFont}>Ford Motor Company</span>{" "}
            where we created the flow for buying vehicles online for the first
            time ever in Ford's history!
          </Typography>
          <a
            href="mailto:nabeel.asghar156@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <Button
              classes={{
                root: classes.buttonRoot,
              }}
            >
              <Typography
                variant={"h6"}
                style={{ color: "#86c232", textDecoration: "none" }}
              >
                Contact Me
              </Typography>
            </Button>
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Intro;
