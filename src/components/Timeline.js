import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import * as styles from "../styles/sharedStyles.module.css";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography } from "@material-ui/core";
import { HeaderDivider } from "./HeaderDivider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    paddingBottom: 10,
  },
}));

const Timeline = (props) => {
  const classes = useStyles();
  return (
    <>
      <HeaderDivider title={"My Experience"} />

      <VerticalTimeline className={styles.timelineContainer}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#4f7026", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date={
            <div style={{ paddingLeft: 10, fontSize: 18 }}>
              Sept 2020 - Present
            </div>
          }
          icon={
            <DriveEtaIcon
              style={{
                fontSize: 40,
                width: 40,
                height: 40,
                marginLeft: -20,
                marginTop: -20,
              }}
            />
          }
          iconStyle={{
            background: "#6b6e70",
            color: "#fff",
          }}
        >
          <div className={classes.root}>
            <Chip label="ReactJS" />
            <Chip label="Java Spring" />
            <Chip label="MySQL" />
            <Chip label="UI/UX" />
          </div>
          <h3 className="vertical-timeline-element-title">
            Ecommerce Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ford Motor Company
          </h4>
          <p>
            Worked under the eCommerce marketplace portal team to establish the
            first fully online transactions of the sale of vehicles in Ford
            history. Developed an application for Ford dealers in North America
            and Europe to fulfill Mustang Mach-E and Ford Bronco and F-150
            Lightning orders and reservations.
            {/*• Developed using React, Java/Spring,*/}
            {/*and Material-UI framework.*/}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={
            <div style={{ paddingRight: 10, fontSize: 18 }}>
              Sept 2019 - Feb 2020
            </div>
          }
          icon={
            <DonutLargeIcon
              style={{
                fontSize: 40,
                width: 40,
                height: 40,
                marginLeft: -20,
                marginTop: -20,
              }}
            />
          }
          iconStyle={{
            background: "#6b6e70",
            color: "#fff",
          }}
          contentStyle={{ background: "#2b7a71", color: "#fff" }}
        >
          <div className={classes.root}>
            <Chip label="Python" />
            <Chip label="C Programming" />
          </div>
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Continental Automotive Group
          </h4>
          <p>
            Assisted in development of a car seat system using CAN BUS with
            embedded systems. Created and designed Python testing tools for our
            car components.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={
            <div style={{ paddingLeft: 10, fontSize: 18 }}>
              Jan 2019 - Sept 2019
            </div>
          }
          icon={
            <LocalHospitalIcon
              style={{
                fontSize: 40,
                width: 40,
                height: 40,
                marginLeft: -20,
                marginTop: -20,
              }}
            />
          }
          iconStyle={{
            background: "#6b6e70",
            color: "#fff",
          }}
          contentStyle={{ background: "#474b4f", color: "#fff" }}
        >
          <div className={classes.root}>
            <Chip label={"Cybersecurity"} />
            <Chip label={"Automation"} />
          </div>
          <h3 className="vertical-timeline-element-title">
            IT Cybersecurity Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Blue Cross Blue Shield of Michigan
          </h4>
          <p>
            Assisted in the creation, design, and implementation of assessment
            plans around testing the security of systems, processes and their
            environment. Conducted hands-on security assessments, analyzed test
            results, document risks, and recommended countermeasures.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={
            <div style={{ paddingLeft: 10, fontSize: 18 }}>
              Feb 2018 - Dec 2018
            </div>
          }
          icon={
            <LocalHospitalIcon
              style={{
                fontSize: 40,
                width: 40,
                height: 40,
                marginLeft: -20,
                marginTop: -20,
              }}
            />
          }
          iconStyle={{
            background: "#6b6e70",
            color: "#fff",
          }}
          contentStyle={{ background: "#474b4f", color: "#fff" }}
          position={"left"}
        >
          <div className={classes.root}>
            <Chip label={"Python"} />
            <Chip label={"Scripting"} />
            <Chip label={"Putty"} />
          </div>
          <h3 className="vertical-timeline-element-title">
            IT Infrastructure Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Blue Cross Blue Shield of Michigan
          </h4>
          <p>
            Used Python and SQL to create a script to autofill over 2#6b6e70
            thousand servers’ values to eliminate time needed to enter values
            manually and to allow accurate queries into our database. Assisted
            in the deployment of IDM (Identity Manager) of over a thousand RHEL
            servers
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
