/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Paper from "./assets/white-texture.jpg";
import Details_1 from "./components/Details_1";
import Details_2 from "./components/Details_2";
import Details_3 from "./components/Details_3";
import Landing from "./components/Landing";
import RSVP from "./components/RSVP";

function App() {
  return (
    <div className="App">
      {/* <img src={Paper} className="overlay-texture" alt="Overlay texture" /> */}
      <Landing />
      <Details_1 />
      <Details_2 />
      <Details_3 />
      <RSVP />
    </div>
  );
}

export default App;
