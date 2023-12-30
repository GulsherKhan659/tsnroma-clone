import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/images/hero-chi-siamo.jpg";
import { Outlet, useNavigate,useLocation } from "react-router-dom";
import "./index.css";
import SectionTitle from "../../components/TrSectionsTitle";
import TnsromaFooter from "../../components/Footer";


const ChiSiamo = () => {
  const [activeTab, setActiveTab] = useState(undefined);
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    let isChiSiamoPage = location.pathname;
    setActiveTab(isChiSiamoPage.split('/')[2]);
  }, [location.pathname]);
  
  const handleTabSelect = (key) => {
    setActiveTab(key);
    history(`${key.toLowerCase()}`);
  };

  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={BannerImage} activeTab={activeTab}/>
        <Tab.Container id="left-tabs-example" 
          activeKey={activeTab}
          onSelect={handleTabSelect}
        >
          <Row className="custom-row">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="storia">
                    STORIA
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="segreteria">
                    SEGRETERIA
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="istruttori">
                    ISTRUTTORI
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="statuto">
                    STATUTO
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="regolamento">
                    REGOLAMENTO
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <div className={activeTab === undefined ? "activity" : "activityHidden"}>
              <SectionTitle title="CHI SIAMO" />
                <div className="chiTabsData">
                <p>
                Il Tiro a Segno Nazionale di Roma è il luogo preposto a svolgere l’attività di tiro sia con pistole che con carabine, ad aria o a fuoco.
                </p>
                <p>
                La nostra organizzazione istituita per legge soddisfa la richiesta di addestramento all’uso delle armi da parte di tutti coloro che svolgono servizio armato presso enti pubblici o privati (guardie giurate-vigili urbani), o per coloro i quali richiedono una licenza di porto d’armi. Anche l’attività sportiva sia di carattere ludico che agonistico viene svolta con notevole interesse da parte di moltissime persone a partire dai dieci anni di età (attrezzi ad aria compressa) fino all’età matura.
                </p>
                <p>
                Nei nostri poligoni di tiro tutti possono sparare, chiaramente dopo essersi iscritti e dopo aver conseguito l’abilitazione tecnica, non serve avere il porto d’armi come erroneamente spesso molti credono.
                </p>
                <p>
                I criteri di sicurezza sono spinti al massimo, ogni tiratore è accudito e su di lui vigila il nostro personale altamente qualificato ed in possesso di idonea licenza prefettizia. Nulla è lasciato al caso, non vi sentirete mai soli, ed i vostri progressi non tarderanno a venire. Vi faremo diventare dei bravi tiratori, ognuno indirizzato verso le proprie esigenze, professionali o sportive.
                </p>
                </div>
              </div>
              <Tab.Content> 
                <Tab.Pane className="TabsPane" eventKey={activeTab}>
                  <Outlet />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Row>
          <TnsromaFooter isFooter />
        </Row>
      </section>
    </Container>
  );
};

export default ChiSiamo;
