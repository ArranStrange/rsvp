import "./components.css";
import Cheers from "../assets/Cheers.png";

export default function Landing() {
  return (
    <div className="component purple-background">
      <em
        className="Celebration"
        style={{ fontSize: "1.5rem", marginBottom: "50px" }}
      >
        a celebration
      </em>

      <img src={Cheers} style={{ height: "100px" }} alt="Cheers" />

      <h1 style={{ lineHeight: 0.2 }}> ASH </h1>
      <em style={{ marginTop: "-15px", transform: "rotate(-10deg)" }}>and</em>
      <h1 style={{ lineHeight: 0.2 }}> ARRAN </h1>

      <h3 style={{ marginTop: "-5px" }}>
        INVITE YOU TO <br />
        CELEBRATE THEIR <br />
        WEDDING.
      </h3>
      <h2 style={{ marginTop: "-5px", color: "white" }}>
        SUNDAY FIFTEENTH OF SEPTEMBER
      </h2>
    </div>
  );
}
