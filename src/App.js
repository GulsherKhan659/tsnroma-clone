import { Container } from "react-bootstrap";
import Header from "./components/Header";
import BasicExample from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <BasicExample />
      </Container>
    </div>
  );
}

export default App;
