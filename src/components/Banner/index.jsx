import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import "./index.css";
import { toCapitalize } from "../../utils/utils";
import { Link } from "react-router-dom";


const Banner = ({ bannerImage }) => {
  const[pathName, setPathName] = useState();
  const[url, setUrl] = useState();
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const formattedValue = currentUrl.replace(/^\//, '').replace(/-/g, ' ');
    setUrl(currentUrl);
    setPathName(toCapitalize(formattedValue));
  }, [pathName])
  return (
    <Container>
      <div className="banner">
        <Image width={"100%"} src={bannerImage} alt="Banner Image" />
        <p>
          <Link to={"/"}><span style={{color:'#0d6efd'}}>Home</span></Link>
          <Link to={url}><span>{pathName}</span></Link>
        </p>
      </div>
    </Container>
  );
};

export default Banner;
