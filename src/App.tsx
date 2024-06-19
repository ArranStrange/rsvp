/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CeremonyMain from "./Ceremony_Main";
import ReceptionMain from "./Reception_Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<ReceptionMain />} />
          <Route path="/reception" element={<ReceptionMain />} />
          <Route path="/ceremony" element={<CeremonyMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
