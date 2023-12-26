import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/images/hero-chi-siamo.jpg";
import "./index.css";
import SectionTitle from "../../components/TrSectionsTitle";
import { Link } from "react-router-dom";
import TnsromaFooter from "../../components/Footer";

const ChiSiamo = () => {
  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={BannerImage} />
        <Tab.Container id="left-tabs-example" defaultActiveKey="STORIA">
          <Row className="custom-row">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="STORIA">
                    STORIA
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="SEGRETERIA">
                    SEGRETERIA
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="ISTRUTTORI">
                    ISTRUTTORI
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="STATUTO">
                    STATUTO
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="REGOLAMENTO">
                    REGOLAMENTO
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane className="TabsPane" eventKey="STORIA">
                  <SectionTitle title="STORIA" />
                  <div className="chiTabsData">
                    <p>
                      Il Tiro a Segno Nazionale di Roma nasce nel 1883. Palestra
                      degli sportivi del tiro a segno e dei giovani che si
                      apprestavano al servizio militare, la Sezione di Roma ha
                      organizzato, prima della grande guerra e dell’ultimo
                      conflitto mondiale, le più importanti manifestazioni di
                      tiro nazionali, con l’affluenza di migliaia di tiratori
                      raggiungendo, nelle gare generali, oltre 10 mila
                      partecipanti.
                    </p>
                    <p>
                      Il Tiro a Segno Nazionale di Roma nasce nel 1883. Palestra
                      degli sportivi del tiro a segno e dei giovani che si
                      apprestavano al servizio militare, la Sezione di Roma ha
                      organizzato, prima della grande guerra e dell’ultimo
                      conflitto mondiale, le più importanti manifestazioni di
                      tiro nazionali, con l’affluenza di migliaia di tiratori
                      raggiungendo, nelle gare generali, oltre 10 mila
                      partecipanti.
                    </p>
                    <p>
                      Nel 1995 ha ospitato i Primi Giochi Mondiali Militari.
                    </p>
                    <p>
                      Nel settore agonistico vanta risultati di prestigio con la
                      partecipazione a 11 Olimpiadi, dal 1924 al 1984, a 13
                      campionati mondiali, dal 1898 al 1966 e a tre edizioni dei
                      campionati europei dal 1959 al 1965.
                    </p>
                    <p>
                      Per 19 anni consecutivi, dal 1950, si è classificata
                      aiprimi due posti in divisione "A"
                    </p>
                    <p>
                      Ha vinto 29 titoli italiani assoluti in varie armi e 7
                      primati italiani assoluti.
                    </p>
                    <p>
                      Ancora oggi l’attività della Sezione è particolarmente
                      fiorente, comparendo tra le Sezioni d’Italia che più hanno
                      vinto il "Campionato Nazionale delle Sezioni" e
                      continuando ad offrire numerosi tiratori all’attività
                      internazionale.
                    </p>
                    <p>
                      La Sezione, inoltre, svolge una continua e intensa
                      attività di promozione dello sport del tiro a segno
                      nell’ambito metropolitano, raggiungendo ogni fascia di
                      tessuto sociale.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="SEGRETERIA">
                  <SectionTitle title="SEGRETERIA" />
                  <div className="chiTabsData">
                    <p>
                      La Segreteria è il primo luogo dove vi troverete entrando
                      a far parte della nostra organizzazione. Da essa si
                      snodano tutte le varie funzioni ed è costituita da uno
                      sportello al pubblico, dall’ufficio sportivo, e dalla
                      segreteria di presidenza. <br />
                      Presso lo sportello al pubblico è possibile svolgere tutte
                      le operazioni di carattere amministrativo
                      (iscrizione-rinnovi-rilascio certificati ed attestati),
                      oltre alla ricezione di tutto il materiale necessario per
                      l’attività di tiro. L’ufficio sportivo è di supporto ai
                      tiratori agonisti per tutti gli aspetti organizzativi. La
                      segreteria di presidenza, invece, tiene i contatti tra gli
                      uffici interni, gli enti, e la presidenza.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="ISTRUTTORI">
                  <SectionTitle title="ISTRUTTORI" />
                  <div className="chiTabsData">
                    <p>
                      Gli istruttori di tiro coordinati dai direttori degli
                      impianti e del poligono, sono gli uomini sul campo, cioè
                      coloro che troverete sulle linee di tiro ed insieme ai
                      quali condividerete la vostra passione. Considerateli
                      “angeli custodi”, uomini e donne eccezionalmente e
                      continuamente addestrati per essere il vostro supporto sia
                      sotto il profilo tecnico che per la vostra sicurezza. La
                      qualità dell’addestramento dei nostri istruttori è il
                      frutto di un continuo lavoro di formazione. Ogni
                      istruttore è munito di idonea licenza prefettizia, ed è
                      sottoposto annualmente all’accertamento della propria
                      capacità tecnica da parte di una Commissione preposta.
                      Riconoscerai i nostri istruttori dalle loro uniformi
                      rosse.
                    </p>
                    <h3>Allenatori</h3>
                    <p>
                      Gli allenatori effettuano l’attività di formazione dei
                      nostri atleti. La loro competenza formativa sia sotto il
                      profilo mentale che dell’attività propria di tiro è
                      espressa ai massimi livelli. Molti di loro svolgono anche
                      incarichi tecnici nell’ambito della nazionale di tiro.
                      Sono muniti d’idonea abilitazione anche per l’insegnamento
                      ai minorenni.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="STATUTO">
                  <SectionTitle title="STATUTO" />
                  <div className="chiTabsData">
                    <p>
                      <Link href="https://www.tsnroma.it/downloads/Statuto-TSN-Roma-2023.pdf">
                        Clicca qui
                      </Link>{" "}
                      per scaricare lo Statuto del T.S.N. Roma.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="REGOLAMENTO">
                  <SectionTitle title="REGOLAMENTO" />
                  <div className="chiTabsData">
                  <p>
				Il Commissario Straordinario, <br />
				RAVVISATA la necessità di ripristinare con la massima urgenza il regolare svolgimento delle attività gestionali, amministrative e sportive della Sezione TSN di Roma a seguito del commissariamento disposto dall'Unione Italiana Tiro a Segno (giusta delibera nr. 12 del 6 giugno 2023), a seguito dell'evento delittuoso avvenuto nel dicembre 2022; <br />
				RILEVATA la necessità di disporre un nuovo Regolamento per l'uso del Poligono di tiro Sezione TSN di Roma, che tenesse conto delle disposizioni normative, regolamenti e direttive in materia di armi e munizioni, anche alla luce del sequestro che grava sulla locale armeria disposto dall'Autorità Giudiziaria nell'ambito del procedimento penale nr. 46613/22 R.G.N.R. e nr. 35988/22 R.G. GIP; <br />
				RILEVATA la necessità di emanare norme per l'attuazione del Regolamento medesimo, al fine di consentire al personale preposto di operare una più pregnante vigilanza sulle operazioni del Poligono di Tiro (verifica dei titoli posseduti dai soci, noleggio armi, cessione delle munizioni, attività di controllo sulle linee di tiro, ecc.ra); <br />
			</p>
            <p style={{textAlign:'center'}}>
				DELIBERA
			</p>
            <p>
				di emanare il Regolamento per l'uso del Poligono di Tiro della Sezione; <br />
				di emanare le norme di esecuzione del medesimo Regolamento. <br />
				<br />
				che il Regolamento e le relative norme siano rese immediatamente esecutive, con pubblicazione del Regolamento sul sito ufficiale della Sezione TSN di Roma e le norme di esecuzione con presa d'atto a cura del personale preposto. <br />
				Il presente Regolamento sarà comunicato all'assemblea dei Soci come da Statuto. <br />
			</p>
            <p>
        		<Link href="https://www.tsnroma.it/downloads/Regolamento-TSN-Roma-10-2023.pdf">Clicca qui</Link> per scaricare il Regolamento del T.S.N. Roma.
      		</p>
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

export default ChiSiamo;
