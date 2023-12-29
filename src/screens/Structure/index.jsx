import React, { useEffect, useState } from "react";
import { Col, Container, Image, Nav, Row, Tab } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-tsnroma.jpg";
import TnsromaFooter from "../../components/Footer";
import SectionTitle from "../../components/TrSectionsTitle";
import "./index.css";

const Struttura = () => {
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const isChiSiamoPage = location.pathname === '/struttura';
    setActiveTab(isChiSiamoPage ? null : activeTab)
  }, [location.pathname]);
  const iframeSrc =
    "https://maps.google.com/maps?q=Viale+di+Tor+di+Quinto%2C+63+-+00191+Roma&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={bannerImage} activeTab={activeTab}/>
        <Tab.Container 
          id="left-tabs-example"
          activeKey={activeTab}
          onSelect={(key) => {
            setActiveTab(key);
            history(`${key.toLowerCase()}`);
          }}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="dove-siamo">
                    Dove-Siamo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  {/* <Nav.Link className="TabsOption" eventKey="orari"> */}
                    <Link className="TabsOption" to={"/orari"}>Orari</Link>
                  {/* </Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="impianti">
                    Impianti
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="uffici">
                    Uffici
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="bar-ristorante">
                    Pacchetti-2024
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <div
                className={activeTab === null ? "activity" : "activityHidden"}
              >
                <SectionTitle title="STRUTTURA" />
                <div className="chiTabsData">
                  <p>
                    Inserito nel contesto urbano, il Tiro a Segno Nazionale di
                    Roma è ubicato nella zona di Tor di Quinto (Roma Nord),
                    raggiungibile anche con trasporti pubblici, dispone di
                    un’ampia area presso la quale sono collocati i locali
                    logistici e gli impianti di tiro. Dotato di un ampio
                    parcheggio e di locali dove trascorrere i momenti di
                    aggregazione come il bar ristorante, dispone di numerosi
                    impianti di tiro per lo svolgimento delle molteplici
                    attività di tiro a segno. I numerosi uffici dedicati alle
                    varie esigenze di Soci ed Iscritti consentono il loro
                    espletamento in maniera efficiente e rapida.
                  </p>
                </div>
              </div>
              <Tab.Content>
                <Tab.Pane className="TabsPane" eventKey="dove-siamo">
                  <TnsromaFooter />
                  <div className="mapouter">
                    <div
                      className="gmap_canvas"
                      dangerouslySetInnerHTML={{
                        __html: `<iframe width="100%" height="450" src="${iframeSrc}" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>`,
                      }}
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="impianti">
                  <SectionTitle title="IMPIANTI" />
                  <div className="chiTabsData">
                    <p>
                      Gli impianti sono i luoghi presso i quali viene svolta
                      l'attività di tiro a segno.
                    </p>
                    <Row
                      className="custom-row"
                      style={{ marginBottom: "15px" }}
                    >
                      <Col sm={4}>
                        <h3>Impianti di tiro a 10 metri</h3>
                        <p>
                          Negli impinati di tiro a 10 metri viene praticata
                          l'attività con attrezzi ed armi ad aria compressa.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-10m.jpg"
                            alt="Impianti di tiro a 10m"
                            title="Impianti di tiro a 10m"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row
                      className="custom-row"
                      style={{ marginBottom: "15px" }}
                    >
                      <Col sm={4}>
                        <h3>Impianti di tiro a 10 metri</h3>
                        <p>
                          Negli impinati di tiro a 10 metri viene praticata
                          l'attività con attrezzi ed armi ad aria compressa.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-25m.jpg"
                            alt="Impianti di tiro a 10m"
                            title="Impianti di tiro a 10m"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row
                      className="custom-row"
                      style={{ marginBottom: "15px" }}
                    >
                      <Col sm={4}>
                        <h3>Impianti di tiro a 10 metri</h3>
                        <p>
                          Negli impinati di tiro a 10 metri viene praticata
                          l'attività con attrezzi ed armi ad aria compressa.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-50m.jpg"
                            alt="Impianti di tiro a 10m"
                            title="Impianti di tiro a 10m"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="uffici">
                  <SectionTitle title="UFFICI" />
                  <div className="chiTabsData">
                    <p>
                      Gli uffici sono costituiti dallo Sportello al Pubblico,
                      dall'Ufficio Sportivo e dall'Ufficio Amministrativo.
                    </p>
                    <Row className="custom-row">
                      <Col sm={6}>
                        <h3>Ufficio Centrale</h3>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ufficio-centrale.jpg"
                            alt="Ufficio Centrale"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="bar-ristorante">
                  <SectionTitle title="BAR RISTORANTE" />
                  <div className="chiTabsData">
                    <Row className="custom-row">
                      <Col sm={4}>
                        <p>
                          A disposizione dei Soci è presente un locale con
                          giardino destinato a Bar Ristorante.
                          <br />
                          Durante l'orario di apertura della struttura è
                          possibile, quindi, consumare il pranzo, oltre al
                          normale servizio di bar.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ristorante-3.jpg"
                            alt="Bar Ristorante"
                            title="Bar Ristorante"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row className="custom-row">
                      <Col sm={6}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ristorante-1.jpg"
                            alt="Ufficio Centrale"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                      <Col sm={6}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ristorante-2.jpg"
                            alt="Ufficio Centrale"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
          <Row>
            <TnsromaFooter isFooter />
          </Row>
        </Tab.Container>
      </section>
    </Container>
  );
};

export default Struttura;
