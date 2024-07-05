import React from "react";
import Hands from "../assets/hands.png";

export default function Details_4() {
  return (
    <div className="component green-background">
      <em>Jacobs Rooftop</em>
      <h1 style={{ marginTop: "15px" }}>CARDIFF</h1>
      <img
        src={Hands}
        alt="Hands"
        style={{ width: "140px", marginTop: "-40px", marginBottom: "70px" }}
      />
      <em style={{ fontSize: "1.5rem", marginBottom: "-15px" }}>7pm</em>
    </div>
  );
}
