import React from "react";

function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // marginTop: "100vw",
        flexWrap: "wrap",
        boxShadow: "0 0 15px black",
        // position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        // padding: 20,
      }}
    >
      <p style={{ padding: 10, color: "gray" }}>Probot</p>
      <p style={{ padding: 10, color: "gray" }}>2021</p>
      <p style={{ padding: 10, color: "gray" }}>Algonquin College</p>
    </div>
  );
}
export default Footer;
