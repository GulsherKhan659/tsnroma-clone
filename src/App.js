import Header from "./components/Header";
import TnsromaNavbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ChiSiamo from "./screens/WhoAreWe";
import Iscrizione from "./screens/Registration";
import Attività from "./screens/Activity";
import Orari from "./screens/Timetables";
import Struttura from "./screens/Structure";
import News from "./screens/News";
import Storia from "./screens/WhoAreWe/components/Storia";
import Segreteria from "./screens/WhoAreWe/components/Segreteria";
import Istruttori from "./screens/WhoAreWe/components/Istruttori";
import Statuto from "./screens/WhoAreWe/components/Statuto";
import Regolamento from "./screens/WhoAreWe/components/Regolamento";
import Obbligatoria from "./screens/Registration/components/Obbligatoria";
import Volontaria from "./screens/Registration/components/Volontaria";
import DocumentiNecessari from "./screens/Registration/components/Documenti-necessari";
import MedicoMilitare from "./screens/Registration/components/Medico-militare";
import Pacchetti from "./screens/Registration/components/Pacchetti-2024";
import ManifestUits from "./screens/Registration/components/Manifesto-uits";
import Faq from "./screens/Registration/components/Faq";

function App() {
  return (
    <div className="App">
        <Header />
        <TnsromaNavbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chi-siamo/*" element={<ChiSiamo />}>
            <Route path="Storia" element={<Storia title={"Storia"} />} />
            <Route path="Segreteria" element={<Segreteria title="Segreteria" />} />
            <Route path="Istruttori" element={<Istruttori title={"Istruttori"} />} />
            <Route path="Statuto" element={<Statuto title={"Statuto"} />} />
            <Route path="Regolamento" element={<Regolamento title={"Regolamento"} />} />
          </Route>
          <Route path="/iscrizione/*" element={<Iscrizione />}>
            <Route path="obbligatoria" element={<Obbligatoria />} />
            <Route path="volontaria" element={<Volontaria />} />
            <Route path="documenti-necessari" element={<DocumentiNecessari/>} />
            <Route path="medico-militare" element={<MedicoMilitare  />} />
            <Route path="pacchetti-2024" element={<Pacchetti  />} />
            <Route path="manifesto-uits" element={<ManifestUits />} />
            <Route path="Faq" element={<Faq  />} />
          </Route>
          <Route path="/attivita/*" element={<Attività />} />
          <Route path="/orari" element={<Orari />} />
          <Route path="/struttura/*" element={<Struttura />} />
          <Route path="/news" element={<News />} />
        </Routes>
    </div>
  );
}

export default App;
