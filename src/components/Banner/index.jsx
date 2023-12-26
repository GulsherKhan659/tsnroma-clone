import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import "./index.css";
import { toCapitalize } from "../../utils/utils";


const Banner = ({ bannerImage }) => {
  const[pathName, setPathName] = useState();
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const formattedValue = currentUrl.replace(/^\//, '').replace(/-/g, ' ');
    setPathName(toCapitalize(formattedValue));
  }, [pathName])
  return (
    <Container>
      <div className="banner">
        <Image width={"100%"} src={bannerImage} alt="Banner Image" />
        <p>
          <span>Home</span>
          <span>{pathName}</span>
        </p>
      </div>
    </Container>
  );
};

export default Banner;
