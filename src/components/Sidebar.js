import React, { useEffect, useState } from "react";
import * as styles from "../styles/sidebar.css";
import { styled } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "gatsby-link";
import { Divider } from "@material-ui/core";

const StyledFab = styled(Fab)({
  background: "#6e32c2",
  color: "#ffffff",
  margin: 10,
});

export const SideBar = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ top: "35%", position: "fixed" }}>
      <div>
        <Link target="_blank" to="https://www.linkedin.com/in/nabeel-asghar">
          <StyledFab color="secondary" className={styles.button}>
            <LinkedInIcon />
          </StyledFab>
        </Link>
      </div>
      <div>
        <Link target="_blank" to="https://github.com/Nabeel-Asghar">
          <StyledFab color="secondary" className={styles.button}>
            <GitHubIcon />
          </StyledFab>
        </Link>
      </div>
      <div>
        <Link target="_blank" to="https://www.instagram.com/nabeel.asghar1/">
          <StyledFab color="secondary" className={styles.button}>
            <InstagramIcon />
          </StyledFab>
        </Link>
      </div>
      <Divider orientation="vertical" flexItem />
    </div>
  );
};
