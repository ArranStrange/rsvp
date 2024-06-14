import React from "react";
import Pizza from "../assets/Pizza.png";
import Disco from "../assets/Disco Ball.png";
import Champagne from "../assets/Champagne.png";
import Stamand from "../assets/St Amand.png";

export default function Details_3() {
  return (
    <div className="component white-background">
      <div className="details" style={{ marginBottom: "75px" }}>
        <em
          style={{ fontSize: "2rem", lineHeight: ".2rem", marginTop: "50px" }}
        >
          Food
        </em>
        <h3 style={{ lineHeight: ".2rem" }}>PREPARED BY</h3>

        <img
          src={Stamand}
          style={{ height: "200px", marginTop: "1px" }}
          alt="St Amand's Logo"
        />
      </div>

      {/* <div className="details" style={{ marginBottom: "75px" }}>
        <img
          src={Champagne}
          style={{ height: "75px", marginTop: "50px" }}
          alt="Champagne Flute"
        />
        <em
          style={{ fontSize: "2rem", lineHeight: ".2rem", marginTop: "20px" }}
        >
          Drinks
        </em>
        <h3 style={{ lineHeight: ".2rem" }}>SERVED LATE</h3>
      </div> */}
    </div>
  );
}
