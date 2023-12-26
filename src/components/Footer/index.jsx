import React from "react";
import "./index.css";
import { Image } from "react-bootstrap";
import FooterLogo from "../../assets/images/logo-uits.png";
import { Link } from "react-router-dom";

const TnsromaFooter = ({isFooter}) => {
  return isFooter ? (
  <footer>
     <br />
      <br />
    <img className="FooterLogo" src={FooterLogo} width="100%"/>
    <div className="credits">
    <address>
        <strong>TIRO A SEGNO NAZIONALE - SEZIONE DI ROMA</strong>
        <br />
        Viale di Tor di Quinto, 63 - 00191 Roma
        <br />
      </address>
      <p>Email: <span><a href="mailto:tsnroma@tsnroma.it">tsnroma@tsnroma.it</a></span></p>
      <p>PEC: <span><a href="mailto:tsnroma@tsnroma.it">tsnroma@legalmail.it</a></span></p>
      <div>
        <strong>Sportello al pubblico</strong>
        <p>Cell: <span>348 7865178 - 342 8402958</span></p>
        <strong>Ufficio sportivo</strong>
        <p>Cell: <span>345 3914459</span></p>
        <p>Email: <span><a href="mailto:segreteriasportiva@tsnroma.it">segreteriasportiva@tsnroma.it</a></span></p>
        <strong>Osservazioni e proposte</strong>
        <p>Email: <span><a href="mailto:osservazioni&amp;proposte@tsnroma.it">osservazioni&amp;proposte@tsnroma.it</a></span></p>
      <br />
      <br />
      <br />
      <p><Link to="http://www.lorenzolabellarte.com">Credits: Lorenzo Labellarte</Link></p>
    </div>
    </div>
  </footer>) : (
    <div className="tnsFooter">
      <address>
        <strong>TIRO A SEGNO NAZIONALE - SEZIONE DI ROMA</strong>
        <br />
        Viale di Tor di Quinto, 63 - 00191 Roma
        <br />
      </address>
      <p>Email: <span><a href="mailto:tsnroma@tsnroma.it">tsnroma@tsnroma.it</a></span></p>
      <p>PEC: <span><a href="mailto:tsnroma@tsnroma.it">tsnroma@legalmail.it</a></span></p>
      <div>
        <strong>Sportello al pubblico</strong>
        <p>Cell: <span>348 7865178 - 342 8402958</span></p>
        <strong>Ufficio sportivo</strong>
        <p>Cell: <span>345 3914459</span></p>
        <p>Email: <span><a href="mailto:segreteriasportiva@tsnroma.it">segreteriasportiva@tsnroma.it</a></span></p>
        <strong>Osservazioni e proposte</strong>
        <p>Email: <span><a href="mailto:osservazioni&amp;proposte@tsnroma.it">osservazioni&amp;proposte@tsnroma.it</a></span></p>
      </div>
    </div>
  );
};

export default TnsromaFooter;
