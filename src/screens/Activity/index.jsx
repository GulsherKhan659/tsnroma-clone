import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab, Table } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-sportiva.jpg";
import SectionTitle from "../../components/TrSectionsTitle";
import TnsromaFooter from "../../components/Footer";
import "./index.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Attività = () => {
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
          onSelect={handleTabSelect}
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="certificatoria">
                    Attività Certificatoria
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="sportiva">
                    Attività Sportiva
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="TabsOption"
                    eventKey="programmi-sportivi"
                  >
                    Programmi Sportivi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="calendario-gare">
                    Calendario Gare
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="ludica">
                    Attività Ludica
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="TabsOption"
                    eventKey="risorse-per-i-tiratori"
                  >
                    Risorse per i tiratori
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <div
                className={activeTab === null ? "activity" : "activityHidden"}
              >
                <SectionTitle title="ACTIVITY" />
                <div className="chiTabsData">
                  <p>
                    We can define National Shooting as a two-faced Janus, as
                    both certification and recreational sports activities
                    converge in it. These two souls coexist within our structure
                    and are managed differently as they are aimed at different
                    objectives. On the one hand, those who need training in the
                    use of the weapon for purposes related to their own safety
                    and that of others, on the other, the athlete who engages in
                    activities aimed at maximizing the performance of their
                    sporting performance. In the middle there is a recreational
                    activity which offers enthusiasts various opportunities to
                    practice the many disciplines ranging from compressed air to
                    defensive shooting, including muzzle loading.
                  </p>
                </div>
              </div>
              <Tab.Content>
                <Outlet />
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

export default Attività;
