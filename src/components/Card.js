import React from "react";
import { Grid, Typography } from "@material-ui/core";
import * as styles from "../styles/sharedStyles.module.css";
import Chip from "@material-ui/core/Chip";

const Card = (props) => {
  return (
    <Grid container direction="row" alignItems={"center"}>
      <Grid item xs={12}>
        <a href={props.site} target={"_blank"}>
          <div className={styles.cardImage} hr>
            <img src={props.image} style={{ maxWidth: "100%" }} />
            <div className={styles.bottomRight}>
              {props.tags.map((tag) => {
                return (
                  <Chip
                    size="medium"
                    color={"primary"}
                    label={tag}
                    style={{ margin: "0px 5px" }}
                  />
                );
              })}
            </div>
          </div>
        </a>
      </Grid>
      <Grid item xs={12}>
        <div
          className={`${styles.projectText}`}
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
        >
          <Typography
            variant={"h4"}
            className={styles.coloredFont}
            style={{ textTransform: "uppercase" }}
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography variant={"h6"} className={styles.regularFont}>
            {props.body}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Card;
