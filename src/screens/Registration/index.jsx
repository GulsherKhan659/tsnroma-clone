import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-tsnroma.jpg";
import "./index.css";
import TnsromaFooter from "../../components/Footer";
import SectionTitle from "../../components/TrSectionsTitle";
import { Link } from "react-router-dom";

const Iscrizione = () => {
  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={bannerImage} />
        <Tab.Container id="left-tabs-example" defaultActiveKey={"obbligatoria"}>
          <Row className="custom-row">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="obbligatoria">
                  Obbligatoria
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="volontaria">
                    volontaria
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="TabsOption"
                    eventKey="documenti-necessari"
                  >
                    Documenti-Necessari
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="medico-militare">
                  Medico-Militare
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="pacchetti-2024">
                  Pacchetti-2024
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="manifesto-uits">
                  Manifesto-UITS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="FAQ">
                    FAQ
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane className="TabsPane" eventKey="obbligatoria">
                  <SectionTitle title="OBBLIGATORIA" />
                  <div className="chiTabsData">
                    <p>
                      Tutti coloro che svolgono servizio armato presso enti
                      pubblici o privati devono iscriversi ad una Sezione del
                      Tiro a Segno Nazionale e svolgere annualmente un corso di
                      lezioni regolamentari di tiro a segno. Questa norma
                      chiaramente comprende le Guardie particolari giurate, gli
                      appartenenti alle Polizie locali, etc. <br />
                      L’obbligo dell’iscrizione e del relativo corso di tiro per
                      il rilascio del certificato di idoneità al maneggio delle
                      armi è esteso a tutti coloro che non avendo svolto il
                      servizio militare o avendolo svolto da più di dieci anni
                      richiedono una licenza di porto d’armi, o comunque un
                      titolo di polizia valido per l’acquisto di armi.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="volontaria">
                  <SectionTitle title="VOLONTARIA" />
                  <div className="chiTabsData">
                    <p>
                    Per svolgere attività di tiro a segno ludica e/o sportiva
                    occorre iscriversi al Tiro a Segno Nazionale. L’iscrizione è
                    volontaria e l’importo è annualmente stabilito dall’Unione
                    Italiana Tiro a Segno. Al momento dell’iscrizione oltre al
                    pagamento della quota annuale (Nota bene: 1 gennaio - 31
                    dicembre) ed alla presentazione della documentazione
                    richiesta, occorre svolgere in sede un corso di tiro sia
                    teorico che pratico dove si apprenderanno le corrette norme
                    di sicurezza e tecniche di base per effettuare l’attività di
                    tiro presso i nostri poligoni. Superato il corso si potrà
                    autonomamente svolgere attività di tiro con le modalità
                    previste dal Regolamento e sotto la vigilanza degli
                    istruttori di tiro.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="documenti-necessari">
                  <SectionTitle title="DOCUMENTI NECESSARI" />
                  <div className="chiTabsData">
                  <p>Qui potete scaricare tutti i documenti necessari per l'iscrizione al T.S.N.</p>
                  <p>
				<Link title="Atto di assenso" href="https://www.tsnroma.it/downloads/atto-di-assenso.pdf">Atto di assenso</Link><br />
				<Link title="Facsimile certificato medico" href="https://www.tsnroma.it/downloads/facsimile-certificato-medico.pdf">Facsimile certificato medico</Link>
			</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="medico-militare">
                  <SectionTitle title="MEDICO MILITARE" />
                  <div className="chiTabsData">
                  <p>Si informano i Soci che presso la nostra struttura sono a disposizione Medici Militari per il rilascio dei certificati di competenza.</p>
                  <p>I Soci potranno richiedere una riduzione del 30% sulla tariffa base, esibendo la tessera in corso di validità.</p>
                  <p>Per il rilascio del certificato medico militare occorre presentare, oltre il certificato anamnestico, anche una marca da bollo di 16 euro.</p>
                  <p>
				<strong>PRIMO MEDICO</strong>
				<br />
				Il primo medico sarà presente nella Nostra Sezione i seguenti martedì dalle 16.00 alle 17.00: <br />
				<br />
				<strong>Novembre:</strong> 14, 28 <br />
				<strong>Dicembre:</strong> 12, 19 <br />
				<br />
				Per ulteriori informazioni e prenotazioni chiamare il numero 347 3336968
			</p>
                  <p>
				<strong>SECONDO MEDICO</strong>
				<br />
				Il secondo medico sarà presente nella Nostra Sezione in ulteriori giorni e orari: <br />
				<br />
				<strong>Dicembre:</strong> 02, 17 <br />
				<br />
				Per ulteriori informazioni e prenotazioni chiamare il numero 328 1651066
			</p>
            <p>I medici saranno presenti nella Nostra Sezione in ulteriori giorni e orari a partire dal 2024.</p>
                  </div>
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

export default Iscrizione;
