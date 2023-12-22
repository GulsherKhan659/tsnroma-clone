import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo-tsn.png";
import "./index.css";

const Header = () => {
  return (
      <>
        <div className="Logo">
        <Image className="logo" src={Logo} alt="Logo" fluid />
      </div>
      <div className="header">
        <h1>TIRO A SEGNO NAZIONALE</h1>
        <h2>SEZIONE DI ROMA</h2>
      </div>
      </>
  );
};

export default Header;
