import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50,
  },
  container1: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  border: {
    borderBottom: "3px solid lightgray",
    width: "100%",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    color: "#86c232",
    whiteSpace: "nowrap",
  },
}));

export const HeaderDivider = (props) => {
  const classes = useStyles();
  return (
    <div className={props.alternate ? classes.container1 : classes.container}>
      <div
        className={classes.border}
        data-sal="slide-left"
        data-sal-delay="1000"
        data-sal-easing="easeInQuart"
      />
      <span
        className={classes.content}
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-easing="easeInQuart"
      >
        <Typography variant={"h4"}>{props.title}</Typography>{" "}
      </span>
      <div
        className={classes.border}
        data-sal="slide-right"
        data-sal-delay="1000"
        data-sal-easing="easeInQuart"
      />
    </div>
  );
};
