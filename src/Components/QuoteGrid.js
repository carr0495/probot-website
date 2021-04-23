import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  paper: {
    height: 360,
    width: 250,
    background:
      "linear-gradient(163deg, rgba(255,169,0,0.5) 0%, rgba(0,217,255,.5) 100%)",
    boxShadow: "-1px 2px 15px 5px rgba(67,249,255,0.34)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function QuoteGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key="Basic" item>
            <h1
              style={{
                textAlign: "center",
                color: "#00beff",
                marginBottom: 5,
              }}
            >
              BASIC
            </h1>
            <Paper className={classes.paper}>
              {" "}
              <h2
                style={{
                  color: "white",
                  margin: 10,
                  textShadow: "0 0 10px gray",
                }}
              >
                Starting At
              </h2>
              <Avatar
                sizes="large"
                style={{
                  background:
                    "linear-gradient(163deg, rgba(255,169,0,0.5) 0%, rgba(0,217,255,.5) 100%)",
                  width: 100,
                  height: 100,
                  boxShadow: "0 0 10px gray",
                }}
              >
                <p style={{ fontSize: 40 }}>5k</p>
              </Avatar>
              <ul
                style={{
                  marginTop: 15,
                  color: "white",
                  fontSize: 16,
                  textShadow: "0 0 10px gray",
                }}
              >
                <li>2 revisions</li>
                <li>Basic Task</li>
                <li>Dedicated Support</li>
              </ul>
            </Paper>
          </Grid>
          <Grid key="Standard" item>
            <h1
              style={{
                textAlign: "center",
                color: "#00beff",
                marginBottom: 5,
              }}
            >
              STANDARD
            </h1>
            <Paper className={classes.paper}>
              {" "}
              <h2
                style={{
                  color: "white",
                  margin: 10,
                  textShadow: "0 0 10px gray",
                }}
              >
                Starting At
              </h2>
              <Avatar
                sizes="large"
                style={{
                  background:
                    "linear-gradient(163deg, rgba(255,169,0,0.5) 0%, rgba(0,217,255,.5) 100%)",
                  width: 100,
                  height: 100,
                  boxShadow: "0 0 10px gray",
                }}
              >
                <p style={{ fontSize: 40 }}>15k</p>
              </Avatar>
              <ul
                style={{
                  marginTop: 15,
                  color: "white",
                  fontSize: 16,
                  textShadow: "0 0 10px gray",
                }}
              >
                <li>3 revisions</li>
                <li>Standard Task</li>
                <li>Dedicated Support</li>
              </ul>
            </Paper>
          </Grid>
          <Grid key="Pro" item>
            <h1
              style={{
                textAlign: "center",
                color: "#00beff",
                marginBottom: 5,
              }}
            >
              PRO
            </h1>
            <Paper className={classes.paper}>
              <h2
                style={{
                  color: "white",
                  margin: 10,
                  textShadow: "0 0 10px gray",
                }}
              >
                Starting At
              </h2>
              <Avatar
                sizes="large"
                style={{
                  background:
                    "linear-gradient(163deg, rgba(255,169,0,0.5) 0%, rgba(0,217,255,.5) 100%)",
                  width: 100,
                  height: 100,
                  boxShadow: "0 0 10px gray",
                }}
              >
                <p style={{ fontSize: 40 }}>50k</p>
              </Avatar>
              <ul
                style={{
                  marginTop: 15,
                  color: "white",
                  fontSize: 16,
                  textShadow: "0 0 10px gray",
                }}
              >
                <li>5 revisions</li>
                <li>Complex Task</li>
                <li>Dedicated Support</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
