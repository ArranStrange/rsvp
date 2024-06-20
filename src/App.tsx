/* eslint-disable react/jsx-pascal-case */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CeremonyMain from "./Ceremony_Main";
import ReceptionMain from "./Reception_Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<ReceptionMain />} />
        <Route path="/reception" element={<ReceptionMain />} />
        <Route path="/ceremony" element={<CeremonyMain />} />
      </Routes>
    </div>
  );
}

export default App;
