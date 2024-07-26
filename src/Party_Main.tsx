/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Details_4 from "./components/Details_4";
import Details_5 from "./components/Details_5";
import Landing from "./components/Landing";
import RSVPReception from "./components/RSVP Reception";

function PartyMain() {
  return (
    <div className="App">
      {/* <img src={Paper} className="overlay-texture" alt="Overlay texture" /> */}
      <Landing />
      <Details_4 />

      <RSVPReception />
    </div>
  );
}

export default PartyMain;
