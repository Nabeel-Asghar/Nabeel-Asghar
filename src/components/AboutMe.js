import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import * as styles from "../styles/sharedStyles.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { HeaderDivider } from "./HeaderDivider";

const AboutMe = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={5}
      className={styles.gridContainer}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12}>
            <HeaderDivider alternate={true} title={"About Me"} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography
              variant={"h6"}
              className={`${styles.darkerFont} ${styles.textContainer}`}
              data-sal="slide-left"
              data-sal-delay="800"
              data-sal-easing="ease"
            >
              Hello everyone! My name is{" "}
              <span className={styles.coloredFont}>Nabeel Asghar</span> and this
              is my website.
            </Typography>
            <br />
            <Typography
              variant={"h6"}
              className={`${styles.darkerFont} ${styles.textContainer}`}
              data-sal="slide-left"
              data-sal-delay="900"
              data-sal-easing="ease"
            >
              We're all used to stories about people who grew up loving
              programming when they were 11 years old and yada yada yada. I
              won't bore you with that, you're here now.
            </Typography>
            <br />
            <Typography
              variant={"h6"}
              className={`${styles.darkerFont} ${styles.textContainer}`}
              data-sal="slide-left"
              data-sal-delay="1000"
              data-sal-easing="ease"
            >
              I graduated from{" "}
              <span className={styles.coloredFont}>Wayne State University</span>{" "}
              in 2020 and have been working at{" "}
              <span className={styles.coloredFont}>Ford Motor Company</span>{" "}
              since. I have a project in works called{" "}
              <a
                target={"_blank"}
                href={"https://photospot.site/"}
                className={styles.hyperlink}
              >
                PhotoSpot
              </a>{" "}
              and a free service I run with a few friends for new graduates to
              tailor resumes and offer career advice at{" "}
              <a
                target={"_blank"}
                href={"https://serume.org/"}
                className={styles.hyperlink}
              >
                Serume
              </a>
              . We've helped almost 50 people and hope to continue to help!
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <StaticImage
              src="../images/nabeelmobile.jpg"
              width={450}
              data-sal="slide-right"
              data-sal-delay="800"
              data-sal-easing="ease"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
