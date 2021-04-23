import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

//Icon Imports
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";

//image imports
import aiden from "../static/aiden.jpg";
import keith from "../static/kg.jpg";
import jesse from "../static/jesse.png";
import harpreet from "../static/harpreet.jpg";
import bharti from "../static/bharti.jpg";
import taran from "../static/taran.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    // margin: 10,
  },
  paper: {
    minHeight: 400,
    height: "30vw",
    minWidth: 200,
    boxShadow: "0px 5px 5px gray",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    margin: 10,
    padding: theme.spacing(1),
  },
  avatar: {
    marginTop: 3,
    width: 150,
    height: 150,
    boxShadow: "0px 5px 3px rgba(132, 132, 132, .5)",
    marginBottom: 20,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    width: "inherit",
    justifyContent: "center",
  },
  avatarIcon: {
    background: "#ff8e54",
    margin: 5,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={2}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Paper className={classes.paper}>
          <Avatar alt="Aiden Carrie" src={aiden} className={classes.avatar} />
          <p>Aiden Carrie</p>
          <p>Developer / UX Lead</p>
          <div className={classes.iconContainer}>
            <IconButton href="https://github.com/carr0495">
              <GitHubIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/aiden-carrie/">
              <LinkedInIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="http://aiden-portfolio.com">
              <LanguageIcon style={{ color: "#ff8e54" }} />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Paper className={classes.paper}>
          <Avatar alt="Keith Gardiner" src={keith} className={classes.avatar} />
          <p>Keith Gardiner</p>
          <p>Developer / UX Lead</p>
          <div className={classes.iconContainer}>
            <IconButton href="#">
              <GitHubIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LanguageIcon style={{ color: "#ff8e54" }} />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Paper className={classes.paper}>
          <Avatar alt="Jesse Mccoy" src={jesse} className={classes.avatar} />
          <p>Jesse Mccoy</p>
          <p>Developement Lead</p>
          <div className={classes.iconContainer}>
            <IconButton href="#">
              <GitHubIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LanguageIcon style={{ color: "#ff8e54" }} />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Paper className={classes.paper}>
          <Avatar
            alt="Harpreet Dwhali"
            src={harpreet}
            className={classes.avatar}
          />
          <p>Harpreet Dwhali</p>
          <p>Developer / Designer</p>
          <div className={classes.iconContainer}>
            <IconButton href="https://github.com/dhal0091">
              <GitHubIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/harpreet-dhaliwal-0491581b7/">
              <LinkedInIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LanguageIcon style={{ color: "#ff8e54" }} />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Paper className={classes.paper}>
          <Avatar alt="Bharti Bharti" src={bharti} className={classes.avatar} />
          <p>Bharti Bharti</p>
          <p>Developer / Designer</p>
          <div className={classes.iconContainer}>
            <IconButton href="#">
              <GitHubIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LanguageIcon style={{ color: "#ff8e54" }} />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Paper className={classes.paper}>
          <Avatar
            alt="Taranbeer Singh"
            src={taran}
            className={classes.avatar}
          />
          <p>Taranbeer Singh</p>
          <p>Developer / Designer</p>
          <div className={classes.iconContainer}>
            <IconButton href="https://github.com/sing1363">
              <GitHubIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/taranbeer-singh">
              <LinkedInIcon style={{ color: "#ff8e54" }} />
            </IconButton>
            <IconButton href="#">
              <LanguageIcon style={{ color: "#ff8e54" }} />
            </IconButton>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
