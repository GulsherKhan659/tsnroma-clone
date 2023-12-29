import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab, Table } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-sportiva.jpg";
import SectionTitle from "../../components/TrSectionsTitle";
import TnsromaFooter from "../../components/Footer";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Attività = () => {
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const isChiSiamoPage = location.pathname === '/attivita';
    setActiveTab(isChiSiamoPage ? null : activeTab)
  }, [location.pathname]);
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
          }}
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
                <Tab.Pane className="TabsPane" eventKey="certificatoria">
                  <SectionTitle title="ATTIVITÀ CERTIFICATORIA" />
                  <div className="chiTabsData">
                    <p>
                      L'attività certificatoria regolamentata dal D.L.66 del 15
                      marzo 2010 è caratterizzata dallo svolgimento di un corso
                      per l'accertamento della capacità tecnica di tutti coloro
                      che svolgono servizio armato presso enti pubblici o
                      privati, o per coloro i quali richiedono una licenza di
                      porto d'armi. Siamo quindi l'Ente certificatore preposto
                      per legge al rilascio del certificato o dell'attestato
                      d'idoneità al maneggio delle armi.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="sportiva">
                  <SectionTitle title="ATTIVITÀ SPORTIVA" />
                  <div className="chiTabsData">
                    <p>
                      L'attività sportiva può essere svolta già dai 10 anni di
                      età con attrezzi sportivi ad aria compressa, e dopo i 14
                      anni con armi da fuoco nei calibri consentiti dalla legge.{" "}
                      <br />
                      Gli atleti supportati dall'ufficio sportivo e dagli
                      allenatori svolgono la loro attività finalizzata al
                      conseguimento di risultati sportivi di eccellenza
                      partecipando alle gare sezionali e federali. Vengono
                      organizzati con cadenza di tre volte a settimana
                      allenamenti in sede, oltre a trasferte esterne in
                      occasione di Trofei e Gare Nazionali. <br />
                      L'attività di tiro sportiva comprende le molteplici
                      discipline di tiro e viene svolta a tutte le età, sia a
                      livello amatoriale che agonistico.
                    </p>
                    <h3>Attività a fuoco</h3>
                    <h4>Bench Rest (carabina)</h4>
                    <p>
                      Si utilizzano carabine cal .22 LR, dotate di ottica, è
                      consentito l’utilizzo di appositi supporti, regolabili in
                      modo micrometrico, detti appunto rest.
                    </p>
                    <h4>Tiro Accademico con Carabina</h4>
                    <p>
                      Si utilizzano carabine cal. 22 LR, sono previste varie
                      specialità dedicata alle categorie: donne, uomini,
                      juniores donne e juniores uomini. Le specialità di tiro
                      per armi lunghe a fuoco comprendono tutte le armi in
                      calibro .22LR nelle seguenti categorie
                    </p>
                    <h5>Carabina libera a tre posizioni</h5>
                    <p>
                      Specialità riservata alle donne e juniores donne. Si spara
                      nelle tre posizioni classiche: in piedi, in ginocchio,
                      sdraiati a terra
                    </p>
                    <h5>Carabina sportiva a terra</h5>
                    <p>
                      Specialità riservata alle donne e juniores donne. Il tiro
                      avviene completamente sdraiati.
                    </p>
                    <h4>Tiro Accademico con Pistola</h4>
                    <p>
                      Si impiegano apposite pistole da tiro semiautomatiche
                      camerate nei calibri 22LR, per la specialità PGC sono
                      consentiti i calibri 32 WC e il 38sp WC.
                      <br /> Le specialità di arma corta a fuoco comprendono le
                      seguenti discipline
                    </p>
                    <h5>PA “Pistola Automatica”</h5>
                    <p>
                      Viene utilizzata una pistola semiautomatica in calibro
                      .22LR con caricatore da 5 colpi. I bersagli girevoli, sono
                      posti alla distanza di 25 metri.
                    </p>
                    <h5>PSp “Pistola Sportiva 30+30 Categoria Donne”</h5>
                    <p>
                      Viene utilizzata una pistola semiautomatica in calibro
                      .22LR con caricatore da 5 colpi. La gara è divisa in tiro
                      di precisione e tiro celere sui rispettivi bersagli.
                    </p>
                    <h5>PS “Pistola Standard 20+20+20 Categoria Uomini”</h5>
                    <p>
                      L’arma è una pistola semiautomatica con caricatore da 5
                      colpi in calibro .22LR.
                    </p>
                    <h5>PGC “Pistola Grosso Calibro”</h5>
                    <p>
                      Si utilizzano pistole semiautomatiche e revolver con i
                      calibri compresi tra il .32WC ed il .38SP WC. La gara è
                      divisa in tiro di precisione e tiro celere sui rispettivi
                      bersagli.
                    </p>
                    <h4>Armi ad avancarica</h4>
                    <p>
                      Si utilizzano pistole e carabine, in vari calibri,
                      caricate a polvere nera.
                    </p>
                    <h3>Attività ad aria</h3>
                    <p>
                      Attività ad aria o calibro 4,5 mm, con una energia non
                      superiore ai 7,5 joule. Le specialità di tiro che
                      impiegano pistole e carabine che utilizzano come
                      propulsione l’aria compressa o il CO2 possono essere
                      praticate al compimento del 10° anno di età.
                      <br /> Per quanto riguarda tutte le pratiche sportive, si
                      fa presente che la Sezione si avvale di istruttori di tiro
                      e allenatori specifici altamente qualificati i quali
                      potranno dare tutte le informazioni necessarie, attinenti
                      tali attività, compresi i regolamenti specifici di gara.
                    </p>
                    <h4>P10</h4>
                    <p>
                      Specialità Olimpica con pistola ad aria compressa. Si
                      effettua alla distanza di 10 metri. Può essere praticata
                      già dal decimo anno di età.
                    </p>
                    <h4>C10</h4>
                    <p>
                      Specialità Olimpica con carabina ad aria compressa. Si
                      effettua alla distanza di 10 metri.&nbsp;Può essere
                      praticata già dal decimo anno di età.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="programmi-sportivi">
                  <SectionTitle title="PROGRAMMI SPORTIVI" />
                  <div className="chiTabsData">
                    <p>Di seguito il programma sportivo 2024.</p>
                    <p>
                      <Link
                        title="Programma Sportivo 2024"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2024.pdf"
                      >
                        Programma Sportivo 2024
                      </Link>
                      <br />
                    </p>
                    <br />
                    <p>Di seguito i programmi sportivi degli anni passati.</p>
                    <p>
                      <Link
                        title="Programma Sportivo 2023"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2023.pdf"
                      >
                        Programma Sportivo 2023
                      </Link>
                      <br />
                    </p>
                    <p>
                      <Link
                        title="Programma Sportivo 2022"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2022.pdf"
                      >
                        Programma Sportivo 2022
                      </Link>
                      <br />
                    </p>
                    <p>
                      <Link
                        title="Programma Sportivo 2021"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2021.pdf"
                      >
                        Programma Sportivo 2021
                      </Link>
                      <br />
                    </p>
                    <p>
                      <Link
                        title="Programma Sportivo 2020"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2020.pdf"
                      >
                        Programma Sportivo 2020
                      </Link>
                      <br />
                    </p>
                    <p>
                      <Link
                        title="Programma Sportivo 2019"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2019.pdf"
                      >
                        Programma Sportivo 2019
                      </Link>
                      <br />
                      <Link
                        title="Tabella punteggi 2019 - Production"
                        href="https://www.tsnroma.it/downloads/tabella-punteggi-2019-production.pdf"
                      >
                        Tabella punteggi 2019 - Production
                      </Link>
                      <br />
                      <Link
                        title="Tabella punteggi 2019 - ISSF Fascia A"
                        href="https://www.tsnroma.it/downloads/tabella-punteggi-2019-ISSF-A.pdf"
                      >
                        Tabella punteggi 2019 - ISSF Fascia A
                      </Link>
                      <br />
                      <Link
                        title="Tabella punteggi 2019 - ISSF Interesse Sezionale"
                        href="https://www.tsnroma.it/downloads/tabella-punteggi-2019-ISSF-IS.pdf"
                      >
                        Tabella punteggi 2019 - ISSF Interesse Sezionale
                      </Link>
                      <br />
                    </p>
                    <p>
                      <Link
                        title="Programma Sportivo 2018"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2018.pdf"
                      >
                        Programma Sportivo 2018
                      </Link>
                      <br />
                      <Link
                        title="Calendario ISSF 2018"
                        href="https://www.tsnroma.it/downloads/calendario-issf-2018.pdf"
                      >
                        Calendario ISSF 2018
                      </Link>
                      <br />
                    </p>
                    <p>
                      <Link
                        title="Programma Sportivo 2017"
                        href="https://www.tsnroma.it/downloads/programma-sportivo-sezionale-2017.pdf"
                      >
                        Programma Sportivo 2017
                      </Link>
                      <br />
                      <Link
                        title="Calendario ISSF 2017"
                        href="https://www.tsnroma.it/downloads/calendario-issf-2017.pdf"
                      >
                        Calendario ISSF 2017
                      </Link>
                      <br />
                      <Link
                        title="Tabella punteggi 2016"
                        href="https://www.tsnroma.it/downloads/tabella-punteggi-2016.pdf"
                      >
                        Tabella punteggi 2016
                      </Link>
                      <br />
                      <Link
                        title="Punteggi di merito"
                        href="https://www.tsnroma.it/downloads/punteggi-merito.pdf"
                      >
                        Punteggi di merito
                      </Link>
                      <br />
                      <Link
                        title="Punti partecipazione"
                        href="https://www.tsnroma.it/downloads/punti-partecipazione.pdf"
                      >
                        Punti partecipazione
                      </Link>
                      <br />
                      <Link
                        title="Nuovo Regolamento ISSF"
                        href="https://www.tsnroma.it/downloads/nuovo-regolamento-issf.pdf"
                      >
                        Nuovo Regolamento ISSF
                      </Link>
                      <br />
                      <Link
                        title="Tempi di gara 2015"
                        href="https://www.tsnroma.it/downloads/tempi-gara-2015.pdf"
                      >
                        Tempi di gara 2015
                      </Link>
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="calendario-gare">
                  <SectionTitle title="CALENDARIO GARE" />
                  <div className="chiTabsData">
                  <p>Di seguito potrete trovare i programmi e i risultati delle gare degli anni precedenti.</p>
                  <h3>Attività ISSF</h3>
                  <Table responsive>
               <thead>
                   <tr>
                       <th>
                           <h4>Gara</h4>
                       </th>
                       <th>
                           <h4 style={{textAlign:"center"}}>Data</h4>
                       </th>
                       <th>
                           <h4 style={{textAlign:"center"}}>Programma</h4>
                       </th>
                       <th>
                           <h4 style={{textAlign:"center"}}>Risultati</h4>
                       </th>
                   </tr>
               </thead>
               <tbody>
                    <tr>
                        <td>Campionato d'Inverno 2022 - 2a gara</td>
                        <td style={{textAlign:"center"}}>12, 13, 19, 20 Nov 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2022 - 2a gara - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2022 - 2a gara - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                    </tr><tr>
                        <td>Campionato d'Inverno 2022</td>
                        <td style={{textAlign:"center"}}>22, 23, 29, 30 Ott 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2022 - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2022 - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>4° Trofeo Nazionale Ranking 2022</td>
                        <td style={{textAlign:"center"}}>8, 9, 15, 16 Ott 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2022 - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2022 - Classifica.pdf">Classifica</a></td>
                    </tr><tr>
                    </tr><tr>
                        <td>Campionato Italiano 2022 Production - 8a Gara</td>
                        <td style={{textAlign:"center"}}>30, 31 Lug 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Italiano 2022 Production - 8a Gara - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Italiano 2022 Production - 8a Gara - Classifica.pdf">Classifica</a></td>
                        </tr>
                    <tr>
                        <td>Campionato Italiano 2022 Production - 7a Gara</td>
                        <td style={{textAlign:"center"}}>2, 3 Lug 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Italiano 2022 Production - 7a Gara - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Italiano 2022 Production - 7a Gara - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Gara Regionale Federale 2022 - 5a Prova</td>
                        <td style={{textAlign:"center"}}>12, 17, 18, 19 Giu 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 5a Prova - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 5a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Gara Regionale Federale 2022 - 4a Prova</td>
                        <td style={{textAlign:"center"}}>22, 27, 28, 29 Mag 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 4a Prova - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 4a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>2° Trofeo Nazionale Ranking 2022</td>
                        <td style={{textAlign:"center"}}>30 Apr - 1, 7, 8 Mag 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/2 Trofeo Nazionale Ranking 2022 - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/2 Trofeo Nazionale Ranking 2022 - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Gara Regionale Federale 2022 - 3a Prova</td>
                        <td style={{textAlign:"center"}}>26, 27 Mar - 2, 3 Apr 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 3a Prova - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 3a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Gara Provinciale 2022</td>
                        <td style={{textAlign:"center"}}>19, 20 Mar 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2022 - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2022 - Classifica.pdf">Classifica</a></td>
                     </tr>
                    <tr>
                        <td>Gara Regionale Federale 2022 - 2a Prova</td>
                        <td style={{textAlign:"center"}}>6, 12, 13 Mar 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 2a Prova - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 2a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Gara Regionale Federale 2022 - 1a Prova</td>
                        <td style={{textAlign:"center"}}>13, 19, 20 Feb 2022</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 1a Prova - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2022 - 1a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Campionato d'Inverno 2021 - 2a gara</td>
                        <td style={{textAlign:"center"}}>20, 21, 27, 28 Nov 2021</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2021 2a gara - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2021 2a gara - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                        <td>Campionato d'Inverno 2021</td>
                        <td style={{textAlign:"center"}}>16, 17, 23, 24 Ott 2021</td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2021 - Programma.pdf">Programma</a></td>
                        <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2021 - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                      <td>Campionato Italiano 2021 Production - 5a Gara</td>
                      <td style={{textAlign:"center"}}>11, 12 Set 2021</td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Italiano 2021 Production - 5a Gara - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Italiano 2021 Production - 5a Gara - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                      <td>Gara Regionale Federale 2021 - 5a Prova</td>
                      <td style={{textAlign:"center"}}>4, 10, 11 Lug 2021</td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 5a Prova - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 5a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                      <td>Gara Regionale Federale 2021 - 4a Prova</td>
                      <td style={{textAlign:"center"}}>6, 12, 13 Giu 2021</td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 4a Prova - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 4a Prova - Classifica.pdf">Classifica</a></td>
                    </tr>
                    <tr>
                      <td>Gara Regionale Federale 2021 - 3a Prova</td>
                      <td style={{textAlign:"center"}}>2, 8, 9 Mag 2021</td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 3a Prova - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}>
                        <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 3a Prova - Classifica.pdf">Classifica</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Gara Regionale Federale 2021 - 2a Prova</td>
                      <td style={{textAlign:"center"}}>11, 17, 18 Apr 2021</td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 2a Prova - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}>
                        <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 2a Prova - Classifica.pdf">Classifica</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Gara Regionale Federale 2021 - 1a Prova</td>
                      <td style={{textAlign:"center"}}>6, 7 Mar 2021</td>
                      <td style={{textAlign:"center"}}>-</td>
                      <td style={{textAlign:"center"}}>
                        <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 1a Prova - Classifica.pdf">Classifica</a><br />
                        <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 1a Prova - Classifica Regione Virtuale.pdf">Classifica Regione Virtuale</a><br />
                        <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2021 - 1a Prova - Classifica Regione Para Virtuale.pdf">Classifica Regione Para Virtuale</a><br />
                      </td>
                   </tr>
                   <tr>
                      <td>Torneo Sociale 2020</td>
                      <td style={{textAlign:"center"}}></td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Torneo Sociale 2020 - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                      <td>Gara Provinciale 2020</td>
                      <td style={{textAlign:"center"}}>21, 22 Mar 2020</td>
                      <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2020 - Programma.pdf">Programma</a></td>
                      <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale 2020 - 2a Prova</td>
                       <td style={{textAlign:"center"}}>8, 14, 15 Mar 2020</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2020 - 2a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr> 
                   <tr>
                       <td>Gara Regionale Federale 2019 - 5a Prova</td>
                       <td style={{textAlign:"center"}}></td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2019 - 5a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale 2019 - 4a Prova</td>
                       <td style={{textAlign:"center"}}></td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2019 - 4a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale 2019 - 3a Prova</td>
                       <td style={{textAlign:"center"}}></td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2019 - 3a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale 2019 - 2a Prova</td>
                       <td style={{textAlign:"center"}}></td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2019 - 2a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale 2019 - 1a Prova</td>
                       <td style={{textAlign:"center"}}></td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2019 - 1a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 2a Prova</td>
                       <td style={{textAlign:"center"}}>17, 18, 24, 25 Feb 2018</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2018 - 2a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 1a Prova</td>
                       <td style={{textAlign:"center"}}>27, 28 Gen - 3, 4 Feb 2018</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2018 - 1a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>
                         <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2018 - 1a Prova - Classifica.pdf">Classifica</a><br />
                         <a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2018 - 1a Prova - Classifica Para.pdf">Classifica Para</a>
                       </td>
                   </tr>
                   <tr>
                       <td>Campionato d'Inverno 2017</td>
                       <td style={{textAlign:"center"}}>28, 29 Ott - 18, 19 Nov 2017</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2017 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2017 - Risultati 1a prova.pdf">Risultati 1a prova</a></td>
                   </tr>
                   <tr>
                       <td>3° Trofeo Nazionale Ranking 2017</td>
                       <td style={{textAlign:"center"}}>24, 25 Giu - 1, 2 Lug 2017</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/3 Trofeo Nazionale Ranking 2017 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 4a Prova</td>
                       <td style={{textAlign:"center"}}>10, 11, 17, 18 Giu 2017</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2017 - 4a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2017 - 4a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 3a Prova</td>
                       <td style={{textAlign:"center"}}>6, 7, 13, 14 Mag 2017</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2017 - 3a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 2a Prova (solo 10MT)</td>
                       <td style={{textAlign:"center"}}>26 Mar - 1, 2 Apr 2017</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2017 - 2a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Provinciale 2017</td>
                       <td style={{textAlign:"center"}}>18, 19 Mar 2017</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2017 - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 1a Prova (solo 10MT)</td>
                       <td style={{textAlign:"center"}}>19, 25, 26 Feb 2017</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2017 - 1a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2017 - 1a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Campionato d'Inverno 2016</td>
                       <td style={{textAlign:"center"}}>29, 30 Ott - 19, 20 Nov 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2016 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>4° Trofeo Nazionale Ranking 2016-2017</td>
                       <td style={{textAlign:"center"}}>15, 16, 22, 23 Ott 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2016-2017 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2016-2017 - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 5a Prova (Fuoco e 10MT)</td>
                       <td style={{textAlign:"center"}}>4, 5 - 11, 12 Giu 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 5a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 5a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 4a Prova (Fuoco e 10MT)</td>
                       <td style={{textAlign:"center"}}>30 Apr - 1, 7, 8 Mag 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 4a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 4a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 3a Prova (Fuoco e 10MT)</td>
                       <td style={{textAlign:"center"}}>19, 20 Mar - 2, 3 Apr 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 3a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 3a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Provinciale 2016</td>
                       <td style={{textAlign:"center"}}>5, 6 Mar 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2016 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2016 - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 2a Prova (solo 10MT)</td>
                       <td style={{textAlign:"center"}}>21, 27, 28 Feb 2016</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 2a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 2a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 1a Prova (solo 10MT)</td>
                       <td style={{textAlign:"center"}}>24, 30, 31 Gen 2016</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2016 - 1a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Campionato d'Inverno 2015</td>
                       <td style={{textAlign:"center"}}>24, 25 Ott - 14, 15 Nov 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato d'Inverno 2015 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>4° Trofeo Nazionale Ranking 2015-2016</td>
                       <td style={{textAlign:"center"}}>10, 11, 17, 18 Ott 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2015-2016 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2015-2016 - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Campionati Italiani 2015 - Juniores Ragazzi Allievi</td>
                       <td style={{textAlign:"center"}}>10 - 13 Set 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionati Italiani 2015 - Juniores Ragazzi Allievi - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Campionati Italiani 2015 - Bologna</td>
                       <td style={{textAlign:"center"}}>9 - 12 Lug 2015</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionati Italiani 2015 - Bologna - Risultati.pdf">Risultati</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 5a Prova</td>
                       <td style={{textAlign:"center"}}>23, 24, 30, 31 Mag 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 5a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 5a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 4a Prova</td>
                       <td style={{textAlign:"center"}}>25, 26 Apr - 2, 3 Mag 2015</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 4a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 3a Prova</td>
                       <td style={{textAlign:"center"}}>21, 22, 28, 29 Mar 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 3a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 3a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Provinciale 2015</td>
                       <td style={{textAlign:"center"}}>14, 15 Mar 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2015 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 2a Prova</td>
                       <td style={{textAlign:"center"}}>22, 28 Feb, 1 Mar 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 2a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 2a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 1a Prova</td>
                       <td style={{textAlign:"center"}}>25, 31 Gen, 1 Feb 2015</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 1a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2015 - 1a Prova - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Prove Team Cup 2014-2015</td>
                       <td style={{textAlign:"center"}}>16 Nov, 7 Dic 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/PROVE '14_15 Team Cup.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Calssifica 1^ Gara Team Cup.pdf">Classifica 1a Gara</a></td>
                   </tr>
                   <tr>
                       <td>4° Trofeo Nazionale Ranking 2014-2015</td>
                       <td style={{textAlign:"center"}}>11, 12, 18, 19 Ott 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2014-2015 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/4 Trofeo Nazionale Ranking 2014-2015 - Risultati.pdf">Risultati</a></td>
                   </tr>
                   <tr>
                       <td>Campionati Italiani 2014</td>
                       <td style={{textAlign:"center"}}>24/27 Lug 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionati Italiani 2014 - Ammissioni.pdf">Ammissioni</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Campionato Regionale - 5a Prova</td>
                       <td style={{textAlign:"center"}}>31 Mag - 1, 7, 8 Giu 2014</td>
                       <td style={{textAlign:"center"}}>-</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato Regionale - 5a Prova - Risultati.pdf">Risultati</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 4a Prova</td>
                       <td style={{textAlign:"center"}}>26, 27 Apr - 3, 4 Mag 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 4a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 4a Prova - Risultati.pdf">Risultati</a></td>
                   </tr>
                   <tr>
                       <td>Campionato UITS - 1a Gara</td>
                       <td style={{textAlign:"center"}}>29, 30 Mag 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Campionato UITS 2014 - 1a Gara - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>
                           <a href="http://www.tsnroma.it/downloads/gare/Campionato UITS 2014 - 1a Gara - Risultati OP.pdf">Risultati Open Production</a> <br /><br />
                           <a href="http://www.tsnroma.it/downloads/gare/Campionato UITS 2014 - 1a Gara - Risultati P.pdf">Risultati Production</a> <br /><br />
                           <a href="http://www.tsnroma.it/downloads/gare/Campionato UITS 2014 - 1a Gara - Risultati SP.pdf">Risultati Super Production</a> <br /><br />
                           <a href="http://www.tsnroma.it/downloads/gare/Campionato UITS 2014 - 1a Gara - Risultati ST.pdf">Risultati Super Trainer</a> <br /><br />
                           <a href="http://www.tsnroma.it/downloads/gare/Campionato UITS 2014 - 1a Gara - Risultati T.pdf">Risultati Trainer</a> <br />
                       </td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 3a Prova</td>
                       <td style={{textAlign:"center"}}>15,16,22,23 Mar 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 3a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 3a Prova - Risultati.pdf">Risultati</a></td>
                   </tr>
                   <tr>
                       <td>Gara Provinciale 2014</td>
                       <td style={{textAlign:"center"}}>8, 9 Mar 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Provinciale 2014 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 2a Prova</td>
                       <td style={{textAlign:"center"}}>23 Feb, 1, 2 Mar 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 2a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}>-</td>
                   </tr>
                   <tr>
                       <td>Gara Sezionale Ufficiale 2014</td>
                       <td style={{textAlign:"center"}}>22, 23 Feb 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Sezionale Ufficiale 2014 - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Sezionale Ufficiale 2014 - Classifica.pdf">Classifica</a></td>
                   </tr>
                   <tr>
                       <td>Torneo Lazio 2014 - 1a Gara</td>
                       <td style={{textAlign:"center"}}>6-8, 9 Feb 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Torneo Lazio 2014.pdf">Programma</a><br /><a href="http://www.tsnroma.it/downloads/gare/Torneo Lazio 2014 - 1a Gara - Turni.pdf">Turni</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Torneo Lazio 2014 - 1a Gara - Risultati.pdf">Risultati</a></td>
                   </tr>
                   <tr>
                       <td>Gara Regionale Federale - 1a Prova</td>
                       <td style={{textAlign:"center"}}>26 Gen, 1, 2 Feb 2014</td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 1a Prova - Programma.pdf">Programma</a></td>
                       <td style={{textAlign:"center"}}><a href="http://www.tsnroma.it/downloads/gare/Gara Regionale Federale 2014 - 1a Prova - Risultati.pdf">Risultati</a></td>
                   </tr>
               </tbody>
           </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="ludica">
                  <SectionTitle title="ATTIVITÀ LUDICA" />
                  <div className="chiTabsData">
                    <p>
                      Sono le stesse specialità previste per l’attività sportiva
                      svolte però con finalità non agonistiche. L’attività
                      ludica viene solitamente svolta da tutti coloro i quali
                      appassionati di armi e di tiro intendono praticarlo senza
                      finalità sportive. <br />
                      Viene svolta sia con armi di proprietà del Tiro a Segno
                      che con armi proprie. <br />
                      Nell’attività ludica è inserito anche l’addestramento
                      finalizzato alla difesa personale ed all’impiego di
                      strumenti tattici (torcia etc.).{" "}
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className="TabsPane"
                  eventKey="risorse-per-i-tiratori"
                >
                  <SectionTitle title="RISORSE PER I TIRATORI" />
                  <div className="chiTabsData">
                  <p>Qui trovate una serie di risorse utili ai soci.</p>
                  <h3>Prove balistiche</h3>
                  <p>Certificati del Banco Nazionale Prova Armi. Caricamenti cartucce di vari calibri.</p>
                  <h4>Prove balistiche 2013</h4>
                  <p>Per la consultazione, fare riferimento a <Link href="" title="Elenco Ricariche 2013">questo documento</Link> riepilogativo.</p>
                  <ul style={{listStyle: "disc"}}>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 1</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 2</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 3</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 4</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 5</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 6</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 7</a></li>
				<li><a href="">cal. 32 S&amp;W LONG WC Lotto 8</a></li>
				<li><a href="">cal. 9x21 Lotto 9</a></li>
				<li><a >cal. 9x21 Lotto 9</a></li>
				<li><a >cal. 9x21 Lotto 10</a></li>
				<li><a >cal. 9x21 Lotto 11</a></li>
				<li><a >cal. 9x21 Lotto 12</a></li>
				<li><a >cal. 9x21 Lotto 13</a></li>
				<li><a >cal. 9x21 Lotto 14</a></li>
				<li><a >cal. 9x21 Lotto 15</a></li>
				<li><a >cal. 9x21 Lotto 16</a></li>
				<li><a >cal. 9x21 Lotto 17</a></li>
				<li><a >cal. 9x21 Lotto 18</a></li>
				<li><a >cal. 9x21 Lotto 19</a></li>
				<li><a >cal. 9x21 Lotto 20</a></li>
				<li><a >cal. 9x21 Lotto 21</a></li>
				<li><a >cal. 9x21 Lotto 22</a></li>
				<li><a >cal. 9x21 Lotto 23</a></li>
				<li><a >cal. 9x21 Lotto 24</a></li>
				<li><a >cal. 9x21 Lotto 25</a></li>
				<li><a >cal. 9x21 Lotto 26</a></li>
				<li><a >cal. 9x21 Lotto 27</a></li>
				<li><a >cal. 9x21 Lotto 28</a></li>
				<li><a >cal. 9x21 Lotto 29</a></li>
				<li><a >cal. 9x21 Lotto 30</a></li>
				<li><a >cal. 9x21 Lotto 31</a></li>
				<li><a >cal. 9x21 Lotto 32</a></li>
				<li><a >cal. 9x21 Lotto 33</a></li>
				<li><a >cal. 9x21 Lotto 34</a></li>
				<li><a >cal. 9x21 Lotto 35</a></li>
				<li><a >cal. 9x21 Lotto 36</a></li>
				<li><a href="">cal. 40 S&amp;W Lotto 37</a></li>
				<li><a href="">cal. 38 SPECIAL Lotto 38</a></li>
				<li><a href="">cal. 45 AUTO Lotto 39</a></li>
				<li><a href="">cal. 45 AUTO Lotto 40</a></li>
				<li><a href="">cal. 45 AUTO Lotto 41</a></li>
				<li><a href="">cal. 45 AUTO Lotto 42</a></li>
				<li><a href="">cal. 357 MAGNUM Lotto 43</a></li>
				<li><a href="">cal. 357 MAGNUM Lotto 44</a></li>
				<li><a href="">cal. 357 MAGNUM Lotto 45</a></li>
				<li><a href="">cal. 357 MAGNUM Lotto 46</a></li>
				<li><a href="">cal. 38 SPECIAL WC Lotto 47</a></li>
				<li><a href="">cal. 44 S&amp;W SPECIAL Lotto 48</a></li>
                <h4>Prove balistiche 1999/2000</h4>
                <ul style={{listStyle: "disc"}}>
				<li><a href="">cal. 9x21 cert. n. 17720</a></li>
				<li><a href="">cal. 9x21 cert. n. 17723</a></li>
				<li><a href="">cal. 9x21 cert. n. 17722</a></li>
				<li><a href="">cal. 9x21 cert. n. 17724</a></li>
				<li><a href="">cal. 9x21 cert. n. 17725</a></li>
				<li><a href="">cal. 9x21 cert. n. 17726</a></li>
				<li><a href="">cal. 9x21 cert. n. 17727</a></li>
				<li><a href="">cal. 9x21 cert. n. 17728</a></li>
				<li><a href="">cal. 9x21 cert. n. 17729</a></li>
				<li><a href="">cal. 9x21 cert. n. 17730</a></li>
				<li><a href="">cal. 9x21 cert. n. 17731</a></li>
				<li><a href="">cal. 9x21 cert. n. 17732</a></li>
				<li><a href="">cal. 9x21 cert. n. 17733</a></li>
				<li><a href="">cal. 9x21 cert. n. 17734</a></li>
				<li><a href="">cal. 9x21 cert. n. 17772</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17935</a></li>
				<li><a href="">cal. 9x21 cert. n. 17748</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17936</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17937</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17938</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17939</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17940</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17941</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17942</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17944</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17943</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17945</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17759</a></li>
				<li><a href="">cal. 38 SPECIAL cert. n. 17946</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17760</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17761</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17762</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17764</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17765</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17763</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17766</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17767</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17768</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17769</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17770</a></li>
				<li><a href="">cal. 40 S&amp;W cert. n. 17771</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17749</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17750</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17751</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17752</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17753</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17754</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17755</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17757</a></li>
				<li><a href="">cal. 45 ACP cert. n. 17758</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17934</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17947</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17948</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17949</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17950</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17951</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17952</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17953</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17954</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17955</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 17956</a></li>
				<li><a href="">cal. 357 MAGNUM cert. n. 18742 del 2000</a></li>
			</ul>
			</ul>
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

export default Attività;
