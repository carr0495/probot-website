import React from "react";
import AboutGrid from "../Components/AboutGrid";

//images
import hero from "../static/images/abouthero.png";

function About(props) {
  return (
    <div style={{ marginTop: 5 }}>
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
        Get to know the Team
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#00beff",
          paddingLeft: "20vw",
          paddingRight: "20vw",
        }}
      >
        We are a small team of RPA specialist who have teamed up to deliver your
        organization quick results that could save you thousands of dollars per
        year.
      </p>
      <AboutGrid />
    </div>
  );
}
export default About;
