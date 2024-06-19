import Knot from "../assets/Knot.png";

export default function Details_Ceremony() {
  return (
    <div className="component white-background">
      <em>Insole Court</em>
      <h1 style={{ marginTop: "15px" }}>CARDIFF</h1>
      <img
        src={Knot}
        alt="Knot"
        style={{ width: "200px", marginTop: "-40px", marginBottom: "70px" }}
      />
      <em style={{ fontSize: "1.5rem", marginBottom: "-15px" }}>2pm</em>
    </div>
  );
}
