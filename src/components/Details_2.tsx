import React from "react";
import Pizza from "../assets/Pizza.png";
import Disco from "../assets/Disco Ball.png";
import Champagne from "../assets/Champagne.png";
import Dustys from "../assets/Dustys.png";

export default function Details_2() {
  return (
    <div className="component purple-background-2">
      <div className="details" style={{ marginBottom: "75px" }}>
        <img src={Disco} style={{ width: "75px" }} alt="Disco Ball" />
        <em
          style={{ fontSize: "2rem", lineHeight: ".2rem", marginTop: "25px" }}
        >
          Music
        </em>
        <h3 style={{ lineHeight: ".2rem" }}>PERFORMED BY FRIENDS</h3>
      </div>

      <div className="details" style={{ marginBottom: "75px" }}>
        <em
          style={{ fontSize: "2rem", lineHeight: ".2rem", marginTop: "50px" }}
        >
          Food
        </em>
        <h3 style={{ lineHeight: ".2rem" }}>PREPARED BY</h3>
        <img src={Pizza} style={{ height: "50px" }} alt="Pizza Slice" />
        <img
          src={Dustys}
          style={{ height: "100px", marginTop: "1px" }}
          alt="Dusty's Logo"
        />
      </div>

      <div className="details" style={{ marginBottom: "75px" }}>
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
      </div>
    </div>
  );
}
