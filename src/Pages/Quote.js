import React from "react";
import QuoteGrid from "../Components/QuoteGrid";
import hero from "../static/images/contacthero.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "black",
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
}));

function Quote(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={hero}
        style={{
          display: "block",
          width: "100%",
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <h1
        style={{
          textAlign: "center",
          color: "#00beff",
          marginBottom: 10,
        }}
      >
        Let's Talk!
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#00beff",
          paddingLeft: "20vw",
          paddingRight: "20vw",
          paddingBottom: "5vh",
        }}
      >
        Book an appointment with us so we can discuss a solution to best fit
        your organization.
      </p>
      <QuoteGrid />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Button color="inherit" className={classes.actionButton}>
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}
export default Quote;
