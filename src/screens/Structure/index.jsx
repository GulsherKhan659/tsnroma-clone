import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
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
    let isChiSiamoPage = location.pathname;
    if (!isChiSiamoPage.split('/')[2]) {
      setActiveTab(null)
    }else{
      setActiveTab(isChiSiamoPage.split('/')[2]);
    }
  }, [location.pathname]);
  
  const handleTabSelect = (key) => {
    setActiveTab(key);
    history(`${key.toLowerCase()}`);
  };

  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={bannerImage} activeTab={activeTab}/>
        <Tab.Container 
          id="left-tabs-example"
          activeKey={activeTab}
          onSelect={handleTabSelect}>
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
                  Bar Restaurant
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
                <Outlet />
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
