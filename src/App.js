import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Banner from "./components/Banner";

import TnsromaNavbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ChiSiamo from "./screens/WhoAreWe";
import Iscrizione from "./screens/Registration";
import Attività from "./screens/Activity";

function App() {
  return (
    <div className="App">
        <Header />
        <TnsromaNavbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/iscrizione" element={<Iscrizione />} />
          <Route path="/attivita" element={<Attività />} />
        </Routes>
    </div>
  );
}

export default App;
