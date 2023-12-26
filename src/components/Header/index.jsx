import React from "react";
import { Container, Image } from "react-bootstrap";
import Logo from "../../assets/images/logo-tsn.png";
import "./index.css";

const Header = () => {
  return (
    <Container>
      <div className="Logo">
        <Image className="logo" src={Logo} alt="Logo" fluid />
      </div>
      <div className="header">
        <h1>TIRO A SEGNO NAZIONALE</h1>
        <h2>SEZIONE DI ROMA</h2>
      </div>
    </Container>
  );
};

export default Header;
