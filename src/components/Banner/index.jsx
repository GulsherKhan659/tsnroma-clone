import React from "react";
import { Container, Image } from "react-bootstrap";
import "./index.css";

const Banner = ({ bannerImage, subPage }) => {
  return (
    <Container>
      <div className="banner">
        <Image width={"100%"} src={bannerImage} alt="Banner Image" />
        <p>
          <span>Home</span>
          <span>{subPage}</span>
        </p>
      </div>
    </Container>
  );
};

export default Banner;
