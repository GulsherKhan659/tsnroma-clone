import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-tsnroma.jpg";
import "./index.css";
import TnsromaFooter from "../../components/Footer";
import SectionTitle from "../../components/TrSectionsTitle";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


const Iscrizione = () => {
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
                  <Nav.Link className="TabsOption" eventKey="faq">
                    FAQ
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <div
                className={activeTab === null ? "activity" : "activityHidden"}
              >
                <SectionTitle title="ISCRIZIONE" />
                <div className="chiTabsData">
                  <p>
                    Tutti i cittadini appartenenti all'Unione Europea possono
                    iscriversi ad una Sezione del Tiro a Segno Nazionale, sia
                    per lo svolgimento di attività ludica e/o sportiva, sia per
                    gli adempimenti previsti dal relativo DL.
                  </p>
                  <p>
                    L'iscrizione al corso può essere effettuata esclusivamente
                    recandosi, con la documentazione necessaria, presso lo
                    sportello al pubblico del T.S.N.
                  </p>
                  <h3>DOCUMENTI NECESSARI</h3>
                  <h3>ISCRITTI "D'OBBLIGO"</h3>
                  <p>Documenti ed adempimenti richiesti:</p>
                  <ul style={{ listStyleType: "lower-latin" }}>
                    <li>
                      sottoscrizione della domanda di iscrizione predisposta
                      dalla Sezione;
                    </li>
                    <li>
                      <i>per i soli aspiranti Guardie Particolari Giurate</i>,
                      dichiarazione, con auto-certificazione, ai sensi della
                      legge 28 dicembre 2000, n. 445, in merito alla propria
                      posizione lavorativa ovvero l'esistenza di un
                      pre-contratto di assunzione da parte di un Istituto di
                      Vigilanza privata;
                    </li>
                    <li>
                      dichiarazione, con auto-certificazione, ai sensi della
                      legge 28 dicembre 2000, n. 445, di: <br />
                      - essere in possesso della cittadinanza in un Paese
                      dell'Unione europea con domicilio in Italia oppure, per i
                      cittadini non appartenenti all'Unione Europea, la
                      residenza in Italia. In tal caso sarà necessario allegare
                      copia della carta o permesso di soggiorno in corso di
                      validità; <br />- di non trovarsi nelle condizioni
                      ostative previste dagli artt. 1 e 43 del Testo Unico delle
                      Leggi di Pubblica Sicurezza, approvato con R.D. 18 giugno
                      1931, n. 773; <br />
                      - non aver riportato condanne per porto abusivo d'armi;
                      non essere sottoposto a misure preventive previste dalla
                      legge 27 dicembre 1956 n. 1423 e successive modifiche (L.
                      327/88 e D. Lgs159/2011). Si può procedere all'iscrizione
                      del soggetto che abbia ottenuto la riabilitazione ai sensi
                      dell'art. 178 c.p.; <br />
                    </li>
                    <li>
                      allegare alla domanda il certificato medico legale, se già
                      in possesso dell'interessato, di cui la Sezione TSN
                      tratterrà una copia, in alternativa un certificato medico
                      di idoneità all'attività sportiva NON AGONISTICA
                      rilasciato dal medico di fiducia/famiglia attestante che
                      il soggetto richiedente non presenta controindicazioni in
                      atto{" "}
                      <b>
                        alla pratica di attività addestrativa di tiro a segno;
                      </b>
                      <a title="Facsimile certificato medico">
                        Scarica un facsimile del certificato medico
                      </a>
                    </li>
                    <li>versamento della prescritta quota di iscrizione;</li>
                    <li>due foto recenti formato tessera;</li>
                    <li>
                      produrre un documento di riconoscimento in corso di
                      validità;
                    </li>
                    <li>
                      produrre il tesserino di codice fiscale o tessera
                      sanitaria.
                    </li>
                  </ul>
                  <h4>Iscritti "volontari"</h4>
                  <p>Documenti ed adempimenti richiesti:</p>
                  <ul style={{ listStyleType: "lower-latin" }}>
                    <li>
                      sottoscrizione della domanda di iscrizione predisposta
                      dalla Unione (ammissione-iscrizione alla Sezione TSN e
                      tesseramento alla UITS);
                    </li>
                    <li>
                      dichiarazione, con auto-certificazione, ai sensi della
                      legge 28 dicembre 2000, n. 445, di: <br />
                      - essere in possesso della cittadinanza in un Paese
                      dell'Unione europea con domicilio in Italia oppure, per i
                      cittadini non appartenenti all'Unione Europea, la
                      residenza in Italia. In tal caso sarà necessario allegare
                      copia della carta o permesso di soggiorno in corso di
                      validità; <br />
                      - non aver riportato condanne penali passate in giudicato,
                      per reati non colposi, a pene detentive superiori a un
                      anno, ovvero a pene che comportino l'interdizione dai
                      pubblici uffici per un periodo superiore a un anno; <br />
                      - non aver riportato condanne per porto abusivo di armi;
                      non essere sottoposto a misure preventive previste dalla
                      legge 27 dicembre 1956 n. 1423 e successive modifiche (L.
                      327/88 e D. Lgs 159/2011). Si può procedere all'iscrizione
                      del soggetto che abbia ottenuto la riabilitazione ai sensi
                      dell'art. 178 c.p.;
                    </li>
                    <li>
                      allegare alla domanda le seguenti certificazioni mediche
                      sanitarie:
                      <ol>
                        <li>
                          Per coloro i quali intendono svolgere attività non
                          agonistica <br />
                          <b>
                            Certificato medico di idoneità all'attività sportiva{" "}
                            <u>NON AGONISTICA</u> rilasciato dal medico di
                            fiducia/famiglia attestante che il soggetto
                            richiedente non presenta controindicazioni in atto
                            alla pratica di attività non agonistica di tiro
                            asegno (non è acquisibile il certificato
                            Anamnestico)
                          </b>
                          . Saranno esentati dall'obbligo di presentazione della
                          certificazione medica sopradetta i soggetti che
                          richiedono l'iscrizione alla Sezione e sono in
                          possesso: <br />- di una Licenza di{" "}
                          <u>porto d'armi per Difesa Personale</u> in corso di
                          validità poiché già coperti da certificazione
                          sanitaria che per legge è richiesta annualmente dalle
                          autorità (acquisizione da parte della Sezione TSN di
                          copia del porto d'armi); <br />- di{" "}
                          <u>porto d'armi uso Tiro a Volo e uso Caccia</u> in
                          corso di validità perché coperti da certificazione
                          sanitaria (ex art. 35 TULPS) con validità di cinque
                          anni (cfr. art. 3, 1° comma lett. e) D.Lgs. n.
                          204/2010). <br />
                          - di attestato di servizio rilasciato
                          dall'Amministrazione di appartenenza (rif. Decreto
                          Ministero della Sanità 5 aprile 2016) per il personale
                          Militare in servizio permanente effettivo appartenente
                          ai Corpi Armati dello Stato (Polizia di Stato, Arma
                          dei Carabinieri, Guardia di Finanza, Corpo della
                          Polizia Penitenziaria e Corpi Forestali delle
                          Provincie autonome) in servizio effettivo; di
                          tesserino/attestato di servizio rilasciato
                          dall'Amministrazione di appartenenza per gli Agenti
                          con qualifica di Polizia Giudiziaria in servizio
                          effettivo presso i Corpi e Servizi di Polizia Locale
                          e/o Provinciale. <br />- di tesserino di servizio
                          accompagnato da un certificato rilasciato dal Medico
                          competente, contenente l'attestazione di tipo
                          "anamnestico" che attesti lo stato di salute del
                          magistrato per i Magistrati Ordinari, Contabili e
                          Amministrativi in servizio.
                        </li>
                        <li>
                          <b>
                            Certificato medico di idoneità all'attività sportiva{" "}
                            <u>AGONISTICA</u>
                          </b>{" "}
                          per tutti coloro che intendono svolgere attività
                          agonistica, in base a quanto previsto dalla Circolare
                          Tesseramento 2019 al punto 9.1, rilasciato dal
                          servizio medico delle ASL, dai Centri di Medicina
                          dello Sport e dai medici accreditati dalla FMSI, in
                          base a quanto previsto dal D.M. del 18 febbraio 1982 e
                          successive modifiche ed integrazioni attestante la
                          "idoneità all'attività agonistica per la pratica del
                          tiro a segno".
                          <ol>
                            <li>
                              per lo svolgimento dell'attività sportiva del
                              "Target Sprint", considerata la peculiare attività
                              con coinvolgimento di rilevante intensità motoria,
                              la certificazione medica di idoneità all'attività
                              agonistica dovrà essere implementata da esame
                              Elettrocardiogramma sotto sforzo.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Versamento della prescritta quota d'iscrizione (quota
                      iscrizione Sezione TSN e quota tesseramento UITS) in esito
                      all'ammissione alla Sezione TSN;
                    </li>
                    <li>due foto recenti formato tessera;</li>
                    <li>
                      produrre un documento di riconoscimento in corso di
                      validità;
                    </li>
                    <li>
                      produrre il tesserino di codicefiscale o tessera sanitaria
                    </li>
                    <li>
                      ai fini dell'esenzione dal corso di cui al punto 4 delle
                      linee guida teorico-pratiche, al momento della richiesta,
                      è necessario venga resa copia conforme all'originale o
                      dichiarazione sostitutiva di certificazione, ai sensi
                      della legge 28 dicembre 2000, n. 445, del foglio di
                      congedo illimitato, rilasciato in data antecedente non
                      oltre i dieci anni, o dello stato di militare al momento
                      della richiesta, o della Licenza di porto di arma in corso
                      di validità.
                    </li>
                  </ul>
                  <p>
                    La documentazione prevista per l'iscrizione alla Sezione TSN
                    nei sopracitati punti a), b), c) dovrà essere presentata o
                    autocertificata, ogni anno, anche da coloro che rinnovano
                    annualmente l'iscrizione, al fine di confermare il
                    mantenimento dei requisiti morali e psico-fisici in
                    ottemperanza a quanto previsto all'art. 4 c.1 dello Statuto
                    delle Sezioni TSN.
                  </p>
                  <p>
                    Per i minorenni (dal 10° anno di età e fino al compimento
                    del 18° anno di età), la dichiarazione di cui al precedente
                    punto b) deve essere sottoscritta, ai sensi della legge 28
                    dicembre 2000, n. 445, da entrambi i genitori o da chi
                    esercita la rappresentanza genitoriale.
                  </p>
                  <h3>Corso obbligatorio per l'iscrizione</h3>
                  <p>
                    Il corso è svolto sotto la direzione di un Istruttore o di
                    un Direttore di tiro munito della licenza comunale prevista
                    dall'art. 31 della legge 18 aprile 1975, n. 110.
                  </p>
                  <h4>Prenotazione dei corsi</h4>
                  <p>
                    Dal giorno dell'iscrizione, è possibile prenotare il corso
                    teorico pratico, facendo trascorrere{" "}
                    <strong>non meno di una settimana</strong>. Questo
                    intervallo è necessario per consentire di apprendere le
                    nozioni contenute negli opuscoli scaricabili dai seguenti
                    link.
                  </p>
                  <p>
                    <a title="MANUALE DIMA UITS PRIMA PARTE">
                      MANUALE DIMA UITS PRIMA PARTE
                    </a>
                    <br />
                    <a title="MANUALE DIMA UITS SECONDA PARTE">
                      MANUALE DIMA UITS SECONDA PARTE
                    </a>
                  </p>
                  <p>
                    La prenotazione può essere effettuata richiedendola
                    direttamente al nostro operatore, contestualmente al momento
                    dell'iscrizione.
                  </p>
                  <h4>Orari dei corsi</h4>
                  <p>
                    Giorni dei corsi: mercoledì e sabato (salvo imprevisti e
                    giorni festivi)
                  </p>
                  <p className="m-0">
                    <span>Mattina:</span>
                    <span>ore 8.45 presentarsi allo sportello al pubblico</span>
                  </p>
                  <p className="m-0">ore 9.00 inizio corso</p>
                  <h4 className="mt-3">Contenuto del corso</h4>
                  <p>
                    Le lezioni inerenti la parte teorica svolte con ampia e
                    articolata trattazione delle materie inerenti il diritto e
                    l'uso delle armi, si concluderanno con un test basato su
                    domande a risposta multipla, verificando così il grado di
                    apprendimento delle nozioni trattate in aula. Seguirà fase
                    pratica con armi corte e lunghe.
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

export default Iscrizione;