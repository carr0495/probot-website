import React from "react";
import hero from "../static/images/producthero.png";

function Product(props) {
  return (
    <div style={{ marginTop: 5 }}>
      <img
        alt="Product hero"
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
        Our Product
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
        We work hard so you dont have to! We create robots to alleviate any
        repetitive task your workplace currently faces. This solution promises
        happier employees, and more money in your pocket!
      </p>
    </div>
  );
}
export default Product;
