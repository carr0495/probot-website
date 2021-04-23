import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import hero from "../static/images/contacthero.png";
import TextField from "@material-ui/core/TextField";
import { shadows } from "@material-ui/system";

function Contact(props) {
  return (
    <div className="contact">
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
          marginBottom: 5,
        }}
      >
        Contact Us
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#00beff",
          paddingLeft: "20vw",
          paddingRight: "20vw",
        }}
      >
        for any inquiries into Robotic Process Automation, start a chat with our
        skilled team of developers and designers.
      </p>
      <form
        style={{
          display: "block",
          width: "80%",
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 80,
        }}
      >
        <TextField label="Full Name" fullWidth autocomplete="none" />
        <TextField label="Email" fullWidth autocomplete="none" />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={5}
          autocomplete="none"
        />
        <Button
          variant="outlined"
          boxShadow={2}
          type="submit"
          style={{
            background: "#FF9D00",
          }}
        >
          Submit
        </Button>
      </form>
      <p
        style={{
          textAlign: "center",
          color: "#00beff",
          paddingLeft: "20vw",
          paddingRight: "20vw",
          marginBottom: 50,
        }}
      >
        We look forward to hearing from you!
      </p>
    </div>
  );
}
export default Contact;
