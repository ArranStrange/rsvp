/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import CeremonyMain from "./Ceremony_Main";
import ReceptionMain from "./Reception_Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<ReceptionMain />} />
            <Route path="/reception" element={<ReceptionMain />} />
            <Route path="/ceremony" element={<CeremonyMain />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
