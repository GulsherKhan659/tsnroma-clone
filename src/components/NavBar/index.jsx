import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css";
const menuData = [
  { path: "/", name: "Home" },
  { path: "/whoWeAre", name: "Chi Siamo" },
  { path: "/registration", name: "Iscrizione" },
  { path: "/activity", name: "Attività" },
  { path: "/timetable", name: "Orari" },
  { path: "/structure", name: "Struttura" },
  { path: "/news", name: "News" },
];
function TnsromaNavbar() {
  return (
      <Container>
      <Navbar expand="lg" variant={"dark"}>
        <Container fluid>
          <Navbar.Toggle
            style={{ border: "none" }}
            className="ms-auto"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              {menuData.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="list-item">{item.name}</div>
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
  );
}

export default TnsromaNavbar;
