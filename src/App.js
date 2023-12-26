import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Banner from "./components/Banner";

import TnsromaNavbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
        <Header />
        <TnsromaNavbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
