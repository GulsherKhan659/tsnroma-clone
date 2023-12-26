import React from "react";
import { Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/images/hero-tsnroma.jpg";
import SectionTitle from "../../components/TrSectionsTitle";
import HomePostImage from "../../assets/images/homePostimage.jpg";
import "./index.css";
import { Link } from "react-router-dom";
import PostCard from "../../components/postCard";
import TnsromaFooter from "../../components/Footer";
import ActivityImage1 from "../../assets/images/attivita-certificatoria-alt.jpg";
import ActivityImage2 from "../../assets/images/attivita-ludica.jpg";
import ActivityImage3 from "../../assets/images/attivita-sportiva.jpg";
 
const postData = [
  {
    postImage: HomePostImage,
    date: "17",
    month: "DIC",
    postTitle: "Pacchetti 2024",
    postDiscritption: "Sono visibili a questa pagina i Pachetti 2024",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "24",
    month: "NOV",
    postTitle: "LAVORI DI ADEGUAMENTO E MESSA A NORMA ANTINCENDIO POLIGONO 10M",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "23",
    month: "NOV",
    postTitle: "SCONTO MEDICO MILITARE",
    postDiscritption:
      "Si avvisano i Soci che è stato stipulato un accordo con i medici militari, per uno sconto del 30% sulla tariffa base per il rilascio dei certificati di competenza.",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "23",
    month: "NOV",
    postTitle: "PREMIAZIONE CAMPIONI REGIONALI 2023",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "15",
    month: "NOV",
    postTitle: "AVVISO AI SOCI",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "17",
    month: "DIC",
    postTitle: "Pacchetti 2024",
    postDiscritption: "Sono visibili a questa pagina i Pachetti 2024",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "25",
    month: "OIT",
    postTitle: "LAVORI DI ADEGUAMENTO 10M",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "15",
    month: "OIT",
    postTitle: "LAVORI DI ADEGUAMENTO 25M",
    postDiscritption: "Sono visibili a questa pagina i Pachetti 2024",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "12",
    month: "SEP",
    postTitle: "ATTIVITÀ CERTIFICATORIA",
    postDiscritption:
      "Dal 5 settembre riprende l'attività certificatoria. Contattare il T.S.N. per le informazioni e le iscrizioni ai corsi.",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "5",
    month: "LUG",
    postTitle: "LETTERA DEL COMMISSARIO STRAORDINARIO",
    postDiscritption: "Sono visibili a questa pagina i Pachetti 2024",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
  {
    postImage: HomePostImage,
    date: "4",
    month: "LUG",
    postTitle: "NUOVO REGOLAMENTO DEL T.S.N. ROMA",
    postDiscritption:
      "In data 4 luglio 2023, il Commissario straordinario, stante la necessità di ripristinare il rispetto della L. 110/75 e 895/67, ha adottato in via d'urgenza il nuovo Regolamento del T.S.N. Roma.",
    postLnk: "Leggi la news",
    postPath: "https://www.tsnroma.it/news/nuovo-regolamento-del-tsn-roma",
  },
];

const Home = () => {
  const iframeSrc =
    "https://maps.google.com/maps?q=Viale+di+Tor+di+Quinto%2C+63+-+00191+Roma&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={BannerImage} />
        <Row className="custom-row">
          <Col lg={8} className="custom-col">
            <SectionTitle title={"IN PRIMO PIANO"} />
            <PostCard postItem={postData} />
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
            <Row className="custom-row"> 
              <Col className="custom-col" lg={2}>
                <div className="ads-date-box">
                  <span className="ads-day">17</span>
                  <span className="ads-month">DIC</span>
                </div>
              </Col>
              <Col lg={10}>
                <div className="preview">
                  <h3>Chiusura 8 dicembre</h3>
                  <p>
                    Si avvisano i Soci che in occasione della festività dell'8
                    dicembre, il poligono sarà aperto dalle ore 9.00 alle ore
                    13.00.
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
                  <h3>Chiusura poligono 50m</h3>
                  <p>
                    Si avvisano i Soci che mercoledì 6 dicembre p.v., il
                    Poligono a 50 metri resterà chiuso per esigenze
                    organizzative
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
                  <h3>Disponibilità cartucce</h3>
                  <p>
                    Si comunica che le cartucce calibro 22LR Lapua Rifle Match,
                    Lapua Standard Plus e Lapua Pistol Match da esercitazione
                    sono terminate e sono attualmente disponibili solo quelle
                    Lapua Center X.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="custom-row">
          <Col lg={8} className="custom-col">
            <SectionTitle title={"PRENOTAZIONI"} id={"PRENOTAZIONI"} />
            <p>
              Per <strong>Attività a 25m</strong>{" "}
              <Link to="https://www.tsnroma.it/prenotazioni/25m">
                CLICCA QUI
              </Link>
              <br />
            </p>
            <SectionTitle title={"MEDICO MILITARE"} />
            <p>
              Si informano i Soci che presso la nostra struttura sono a
              disposizione Medici Militari per il rilascio dei certificati di
              competenza. <br />
              Per informazioni{" "}
              <Link href="https://www.tsnroma.it/iscrizione/medico-militare">
                CLICCA QUI
              </Link>
              <br />
            </p>
          </Col>
          <Col lg={4} className="custom-col">
            <SectionTitle title={"CONTATTI"} />
            <Row>
              <Col lg={12} className="custom-col-map">
                <div className="mapouter">
                  <div
                    className="gmap_canvas"
                    dangerouslySetInnerHTML={{
                      __html: `<iframe width="100%" height="230" src="${iframeSrc}" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>`,
                    }}
                  />
                </div>
              </Col>
            </Row>
            <TnsromaFooter />
          </Col>
        </Row>
        <Row className="custom-row">
          <Col className="custom-col" lg={12}>
            <SectionTitle title="ATTIVITÀ" />
          </Col>
        </Row>
        <Row className="custom-row">
          <Col lg={4} className="custom-col">
              <SectionTitle title="CERTIFICATORIA" id="activityCard" />
              <Link to="https://www.tsnroma.it/attivita/certificatoria">
                <Image src={ActivityImage1} width="100%" />
              </Link>
          </Col>
          <Col lg={4} className="custom-col">
              <SectionTitle title="SPORTIVA" id="activityCard" />
              <Image src={ActivityImage3} width="100%" />
          </Col>
          <Col lg={4} className="custom-col">
              <SectionTitle title="LUDICA" id="activityCard" />
              <Image src={ActivityImage2} width="100%" />
          </Col>
        </Row>
        <Row>
          <TnsromaFooter isFooter />
        </Row>
      </section>
    </Container>
  );
};

export default Home;
