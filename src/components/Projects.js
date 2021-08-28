import React from "react";
import * as styles from "../styles/sharedStyles.module.css";
import { Grid } from "@material-ui/core";
import { HeaderDivider } from "./HeaderDivider";
import Card from "./Card";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import GTA from "../images/GTA.jpg";

const Projects = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems={"center"}
      className={styles.gridContainerSpaced}
      spacing={7}
    >
      <Grid item xs={12}>
        <HeaderDivider title={"Projects I've Worked On"} />
      </Grid>
      <Grid item xs={12}>
        <Card
          site={"https://photospot.site"}
          image={project1}
          title={"PhotoSpot"}
          tags={["React.js", "Express.js", "Firebase"]}
          body={
            "Designed and developed a web application allowed the login, search," +
            " booking, and payment of photographers in a given area. Invented a" +
            " system for photographers to store customer photo shoot pictures into" +
            " an online storage location called the PhotoVault."
          }
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Card
          site={"https://github.com/Nabeel-Asghar/AutoDrive"}
          image={GTA}
          title={"GTA V Auto Drive"}
          tags={["Python", "OpenCV", "Computer Vision"]}
          body={
            "This project was to create an auto drive feature for a car in GTA V." +
            " The program detected lanes on either side of the car through the camera system." +
            " However, the actual auto drive was very limited due to the game's roads and odd camera placement."
          }
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Card
          site={"https://www.serume.org"}
          image={project2}
          title={"Serume"}
          tags={["React.js", "Express.js"]}
          body={
            "Created a website for new graduates to submit resumes for no charge." +
            " The Serume team would then edit resumes and offer feedback, career advice, and interview tips." +
            " Helped over 20 clients in their pursuit of a better resume, career advice, or interview tips."
          }
        />
      </Grid>
    </Grid>
  );
};

export default Projects;
