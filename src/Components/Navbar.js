import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TemporaryDrawer from "./TemporaryDrawer";
import logo from "../static/probot/ProbotFullLogo.png";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

//wenis
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  actionButton: {
    background: "linear-gradient(45deg, #00bfff 10%, #FF9D00 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 191, 255, .2)",
    color: "white",
    height: 48,
    padding: "0 30px",
    fontWeight: "bold",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  topBar: {
    justifyContent: "space-between",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div style={{ height: 90 }}></div> */}
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "rgba(255, 255, 255,.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Toolbar className={classes.topBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <TemporaryDrawer />
          </IconButton>
          {/*   <Typography variant="h6" className={classes.title}>
            PROBOT
          </Typography> */}

          <Button
            disableElevation
            disableRipple
            disableFocusRipple
            component={RouterLink}
            to="/"
          >
            <img src={logo} alt="Logo" height="50px" />
          </Button>

          <Button
            id="navbarButton"
            color="inherit"
            className={classes.actionButton}
            component={RouterLink}
            to="/quote"
          >
            Get a Quote
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
