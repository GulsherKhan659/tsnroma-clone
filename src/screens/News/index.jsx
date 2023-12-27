import React from "react";
import "./index.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-tsnroma.jpg";
import SectionTitle from "../../components/TrSectionsTitle";
import { Link } from "react-router-dom";
import TnsromaFooter from "../../components/Footer";

const News = () => {
  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={bannerImage} />
        <Row className="custom-row">
          <Col lg={8} className="custom-col">
            <SectionTitle title="NEWS" />
            <div className="postImage" style={{marginBottom:'20px'}}>
              <Link
                className="previewLink"
                to="https://www.tsnroma.it/news/pacchetti-2024"
              >
                <Image
                  src="https://www.tsnroma.it/images/original/1702826443-pacchetti-2024.jpg"
                  className="img-responsive"
                />
              </Link>
              <div className="date-box">
                <span className="day">17</span>
                <span className="month">dic</span>
              </div>
              <div className="preview">
                <h3>
                  <Link className="previewLink" to="https://www.tsnroma.it/news/pacchetti-2024">
                    Pacchetti 2024
                  </Link>
                </h3>
                <p>
                  Sono visibili{" "}
                  <Link
                    to="https://www.tsnroma.it/iscrizione/pacchetti-2024"
                  >
                    a questa pagina
                  </Link>{" "}
                  i Pachetti 2024
                </p>
                <Link href="https://www.tsnroma.it/news/pacchetti-2024">
                  Leggi la news »
                </Link>
              </div>
            </div>
            <div className="postImage" style={{marginBottom:'20px'}}>
              <Link
                className="previewLink"
                to="https://www.tsnroma.it/news/pacchetti-2024"
              >
                <Image
                  src="https://www.tsnroma.it/images/original/1702826443-pacchetti-2024.jpg"
                  className="img-responsive"
                />
              </Link>
              <div className="date-box">
                <span className="day">17</span>
                <span className="month">dic</span>
              </div>
              <div className="preview">
                <h3>
                  <Link className="previewLink" to="https://www.tsnroma.it/news/pacchetti-2024">
                    Pacchetti 2024
                  </Link>
                </h3>
                <p>
                  Sono visibili{" "}
                  <Link
                    to="https://www.tsnroma.it/iscrizione/pacchetti-2024"
                  >
                    a questa pagina
                  </Link>{" "}
                  i Pachetti 2024
                </p>
                <Link href="https://www.tsnroma.it/news/pacchetti-2024">
                  Leggi la news »
                </Link>
              </div>
            </div>
            <div className="postImage" style={{marginBottom:'20px'}}>
              <Link
                className="previewLink"
                to="https://www.tsnroma.it/news/pacchetti-2024"
              >
                <Image
                  src="https://www.tsnroma.it/images/original/1702826443-pacchetti-2024.jpg"
                  className="img-responsive"
                />
              </Link>
              <div className="date-box">
                <span className="day">17</span>
                <span className="month">dic</span>
              </div>
              <div className="preview">
                <h3>
                  <Link className="previewLink" to="https://www.tsnroma.it/news/pacchetti-2024">
                    Pacchetti 2024
                  </Link>
                </h3>
                <p>
                  Sono visibili{" "}
                  <Link
                    to="https://www.tsnroma.it/iscrizione/pacchetti-2024"
                  >
                    a questa pagina
                  </Link>{" "}
                  i Pachetti 2024
                </p>
                <Link href="https://www.tsnroma.it/news/pacchetti-2024">
                  Leggi la news »
                </Link>
              </div>
            </div>
            <div className="postImage" style={{marginBottom:'20px'}}>
              <Link
                className="previewLink"
                to="https://www.tsnroma.it/news/pacchetti-2024"
              >
                <Image
                  src="https://www.tsnroma.it/images/original/1702826443-pacchetti-2024.jpg"
                  className="img-responsive"
                />
              </Link>
              <div className="date-box">
                <span className="day">17</span>
                <span className="month">dic</span>
              </div>
              <div className="preview">
                <h3>
                  <Link className="previewLink" to="https://www.tsnroma.it/news/pacchetti-2024">
                    Pacchetti 2024
                  </Link>
                </h3>
                <p>
                  Sono visibili{" "}
                  <Link
                    to="https://www.tsnroma.it/iscrizione/pacchetti-2024"
                  >
                    a questa pagina
                  </Link>{" "}
                  i Pachetti 2024
                </p>
                <Link href="https://www.tsnroma.it/news/pacchetti-2024">
                  Leggi la news »
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} className="custom-col">
            <SectionTitle title={"ANNUNCI"} />
            <Row className="custom-row">
              <Col className="custom-col" lg={2}>
                <div className="ads-date-box">
                  <span className="ads-day">17</span>
                  <span className="ads-month">DIC</span>
                </div>
              </Col>
              <Col lg={10}>
                <div className="preview">
                  <h3>APERTURA 50 METRI</h3>
                  <p>
                    Considerata la bassa frequenza registrata ai 50 metri nelle
                    giornate di mercoledì mattina, l'apertura straordinaria
                    terminerà come previsto il 31.12.2023.
                    <br />
                    Per venire incontro alle ulteriori richieste dei soci, verrà
                    prevista l'apertura straordinaria pomeridiana nelle giornate
                    di giovedì, a partire dall'11.01.2024 fino al 31.03.2024.
                    <br />
                    Pertanto i nuovi orari di apertura del 2024 sono:
                    <br />
                    <br />
                    Martedì 09.00 - 13.00
                    <br />
                    Giovedì 09.00 - 17.00
                    <br />
                    Sabato 09.00 - 17.00
                    <br />
                    Domenica 09.00 - 13.00
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="custom-row">
              <Col className="custom-col" lg={2}>
                <div className="ads-date-box">
                  <span className="ads-day">17</span>
                  <span className="ads-month">DIC</span>
                </div>
              </Col>
              <Col lg={10}>
                <div className="preview">
                  <h3>Chiusure Festività Natalizie</h3>
                  <p>
                    Si informano i Soci che, durante le prossime festività
                    natalizie, il TSN Roma osserverà le seguenti chiusure:
                    <br />
                    dalle ore 13.00 del 23.12 alle ore 17.00 del 26.12.;
                    <br />
                    dalle ore 13.00 del 30.12 alle ore 17.00 del 1°.1.2024;
                    <br />
                    6.1.2024;
                    <br />
                    7.1.2024.
                    <br />
                    Auguriamo a tutti Buone Feste
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="custom-row">
              <Col className="custom-col" lg={2}>
                <div className="ads-date-box">
                  <span className="ads-day">17</span>
                  <span className="ads-month">DIC</span>
                </div>
              </Col>
              <Col lg={10}>
                <div className="preview">
                  <h3>Chiusura 6 e 7 dicembre</h3>
                  <p>
                    Si avvisano i Soci che il 6 e 7 dicembre p.v., dalle ore
                    13.00 alle ore 17.00, il poligono resterà chiuso per
                    esigenze organizzative.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
            <TnsromaFooter isFooter />
        </Row>
      </section>
    </Container>
  );
};

export default News;
