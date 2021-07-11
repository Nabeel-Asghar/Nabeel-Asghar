import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { NewsHeaderCard } from "react-ui-cards";
import * as styles from "../styles/sharedStyles.module.css";

const Card = (props) => {
  return (
    <Grid container direction="row" alignItems={"center"}>
      <Grid item xs={12}>
        <NewsHeaderCard
          href={props.site}
          title={
            <Typography variant={"h3"} className={styles.projectHeader}>
              {props.title}&nbsp;
            </Typography>
          }
          thumbnail={props.image}
          tags={props.tags}
          style={{
            width: "100%",
            paddingBottom: "32%",
            margin: 0,
            justifyContent: "flex-start",
          }}
          data-sal="slide-down"
          data-sal-delay="400"
          data-sal-easing="ease"
          className={styles.cardImage}
        />
      </Grid>
      <Grid item xs={12}>
        <div
          className={`${styles.projectText}`}
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
        >
          <Typography variant={"h6"} className={styles.regularFont}>
            {props.body}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Card;
