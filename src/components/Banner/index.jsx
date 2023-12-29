import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import "./index.css";
import { toCapitalize } from "../../utils/utils";
import { Link } from "react-router-dom";


const Banner = ({ bannerImage, activeTab }) => {
  const[pathName, setPathName] = useState();
  const[url, setUrl] = useState();
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const formattedValue = currentUrl.replace(/^\//, '').replace(/-/g, ' ');
    setUrl(currentUrl);
    setPathName(toCapitalize(formattedValue));
  }, [pathName])
  const toCamelCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <Container>
      <div className="banner">
        <Image width={"100%"} src={bannerImage} alt="Banner Image" />
        <p>
          <Link to={"/"}><span style={{color:'#0d6efd'}}>Home</span></Link>
          <span>/</span>
          <Link to={url}><span style={{color: activeTab ? "#0d6efd" : ' '}}>{pathName}</span></Link>
          {activeTab &&
            <span>/ {toCamelCase(activeTab)}</span>
          }
        </p>
      </div>
    </Container>
  );
};

export default Banner;
