import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-tsnroma.jpg";
import "./index.css";
import TnsromaFooter from "../../components/Footer";
import SectionTitle from "../../components/TrSectionsTitle";
import { Link } from "react-router-dom";
import TnsTable from "../../components/TnsTable";
import { useLocation, useNavigate } from "react-router-dom";

const faqData = [
  {
    question:
      "Is the range open only to military personnel or is it open to the public?",
    answer: "Il poligono non è una caserma e tutti possono accedervi.",
  },
  {
    question: "I don't have any weapons, how do I practice?",
    answer:
      "Il poligono mette a disposizione dei soci le armi necessarie agli allenamenti.",
  },
  {
    question: "Can I buy cartridges at the range?",
    answer:
      "Il poligono può cedere le cartucce necessarie all'allenamento. Le cartucce devono essere utilizzate esclusivamente nel poligono.",
  },
  {
    question: "I haven't done military service, can I sign up?",
    answer:
      "Chiunque, in regola con i requisiti di legge, può iscriversi, anche gli obiettori di coscienza purché siano trascorsi cinque anni dalla data di congedo e dopo aver presentato l'apposita dichiarazione irrevocabile presso l'ufficio Nazionale per il Servizio Civile. Clicca qua per scaricare il modulo.",
  },
  {
    question: "What weapons can I use on the range?",
    answer:
      "Quelle che unitamente al munizionamento utilizzato sviluppano energia cinetica entro 63 Kgm.",
  },
  {
    question: "I would like to start shooting, do you have any instructors?",
    answer:
      "La Sezione mette a disposizione degli allenatori qualificati per le varie specialità di tiro accademico ed effettua corsi di tiro con frequenza bisettimanale.",
  },
  {
    question: "Can minors practice target shooting?",
    answer:
      "Il tiro a segno con armi ad aria compressa può essere praticato dal 10° anno di età. Le armi a fuoco possono essere utilizzate solamente dal 18° anno di età ad eccezione dei tiratori agonisti categoria 'juniores', esclusivamente per le armi previste per le gare avendo il tiratore compiuto il 14° anno di età",
  },
  {
    question: "I am not an Italian citizen, can I register for the range?",
    answer:
      "Il richiedente deve essere in possesso della cittadinanza in un Paese dell'Unione Europea con domicilio in Italia oppure, per i cittadini non appartenenti all'Unione Europea, la residenza in Italia. In tal caso sarà necessario allegare copia della carta o permesso di soggiorno in corso di validità.",
  },
  {
    question:
      "I read that a medical certificate is required for registration. Who can issue it and what must they certify?",
    answer:
      "Il certificato medico deve essere rilasciato dal medico di base convenzionato con le ASL. Il certificato dovrà riportare la frase indicata nel modulo iscrizione che si trova nella pagina dedicata del nostro sito. Non si accettano certificati anamnestici.",
  },
  {
    question: "Can I shoot at the range with my own guns and cartridges?",
    answer:
      "Certamente, sempre che le cartucce rientrino nei limiti di energia cinetica consentiti e le armi siano in condizioni di efficienza.",
  },
  {
    question:
      "Does the membership card issued by the Section entitle me to carry a firearm?",
    answer:
      "Assolutamente no! Per il porto o trasporto delle armi occorrono apposite licenze di polizia da richiedere alle Autorità competenti.",
  },
  {
    question: "Can I buy weapons and cartridges at TSN?",
    answer:
      "La Sezione effettua solamente cessione cartucce o noleggio armi ai soci iscritti. Le cartucce cedute dalla Sezione devono essere obbligatoriamente consumate all'interno delle Sezioni di tiro. Le cartucce ricevute dalla Sezione devono essere riconsegnate se per qualsiasi motivo non potessero essere consumate in giornata.",
  },
  {
    question:
      "I am a member of another organization and/or hold a firearms licence, can I shoot without taking tests or exams?",
    answer:
      "La nostra Sezione si attiene a regolamenti interni che devono essere appresi da chiunque intenda frequentare il poligono di tiro. L'abilitazione è quindi richiesta a tutti.",
  },
  {
    question: "Is it possible to use a 12 gauge shotgun?",
    answer:
      "L'utilizzo del fucile calibro 12 è consentito in configurazione 'pompa' ed esclusivamente con il munizionamento a carica ridotta ceduto dalla Sezione.",
  },
  {
    question:
      "I am registered in another TSN Section, can I practice at the Rome Section without having to re-register?",
    answer:
      "L'iscrizione in corso presso una Sezione, come agonista, consente previo consenso della Sezione ospitante, lo svolgimento dell'attività di tiro, senza dover effettuare un'ulteriore iscrizione. Per gli iscritti a Sezioni nella provincia di Roma l'ospitalità è limitata agli impianti non presenti nella Sezione di provenienza, sempre previo preventivo consenso.",
  },
  {
    question: "Can I shoot without having any type of gun licence?",
    answer:
      "Non occorre nessun tipo di porto d'armi in quanto i soci possono utilizzare armi e cartucce della Sezione.",
  },
];

const Iscrizione = () => {
  const [activeTab, setActiveTab] = useState(null);
  const[visibleAnswers, setVisibleAnsers] = useState(Array(faqData.length).fill(false));
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const isChiSiamoPage = location.pathname === '/iscrizione';
    setActiveTab(isChiSiamoPage ? null : activeTab)
  }, [location.pathname]);

  const toggleAnswer = (index) => {
    const newVisibleAnswers = [...visibleAnswers];
    newVisibleAnswers[index] = !newVisibleAnswers[index];
    setVisibleAnsers(newVisibleAnswers); 
  }

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
                      occorre iscriversi al Tiro a Segno Nazionale. L’iscrizione
                      è volontaria e l’importo è annualmente stabilito
                      dall’Unione Italiana Tiro a Segno. Al momento
                      dell’iscrizione oltre al pagamento della quota annuale
                      (Nota bene: 1 gennaio - 31 dicembre) ed alla presentazione
                      della documentazione richiesta, occorre svolgere in sede
                      un corso di tiro sia teorico che pratico dove si
                      apprenderanno le corrette norme di sicurezza e tecniche di
                      base per effettuare l’attività di tiro presso i nostri
                      poligoni. Superato il corso si potrà autonomamente
                      svolgere attività di tiro con le modalità previste dal
                      Regolamento e sotto la vigilanza degli istruttori di tiro.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="documenti-necessari">
                  <SectionTitle title="DOCUMENTI NECESSARI" />
                  <div className="chiTabsData">
                    <p>
                      Qui potete scaricare tutti i documenti necessari per
                      l'iscrizione al T.S.N.
                    </p>
                    <p>
                      <Link
                        title="Atto di assenso"
                        href="https://www.tsnroma.it/downloads/atto-di-assenso.pdf"
                      >
                        Atto di assenso
                      </Link>
                      <br />
                      <Link
                        title="Facsimile certificato medico"
                        href="https://www.tsnroma.it/downloads/facsimile-certificato-medico.pdf"
                      >
                        Facsimile certificato medico
                      </Link>
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="medico-militare">
                  <SectionTitle title="MEDICO MILITARE" />
                  <div className="chiTabsData">
                    <p>
                      Si informano i Soci che presso la nostra struttura sono a
                      disposizione Medici Militari per il rilascio dei
                      certificati di competenza.
                    </p>
                    <p>
                      I Soci potranno richiedere una riduzione del 30% sulla
                      tariffa base, esibendo la tessera in corso di validità.
                    </p>
                    <p>
                      Per il rilascio del certificato medico militare occorre
                      presentare, oltre il certificato anamnestico, anche una
                      marca da bollo di 16 euro.
                    </p>
                    <p>
                      <strong>PRIMO MEDICO</strong>
                      <br />
                      Il primo medico sarà presente nella Nostra Sezione i
                      seguenti martedì dalle 16.00 alle 17.00: <br />
                      <br />
                      <strong>Novembre:</strong> 14, 28 <br />
                      <strong>Dicembre:</strong> 12, 19 <br />
                      <br />
                      Per ulteriori informazioni e prenotazioni chiamare il
                      numero 347 3336968
                    </p>
                    <p>
                      <strong>SECONDO MEDICO</strong>
                      <br />
                      Il secondo medico sarà presente nella Nostra Sezione in
                      ulteriori giorni e orari: <br />
                      <br />
                      <strong>Dicembre:</strong> 02, 17 <br />
                      <br />
                      Per ulteriori informazioni e prenotazioni chiamare il
                      numero 328 1651066
                    </p>
                    <p>
                      I medici saranno presenti nella Nostra Sezione in
                      ulteriori giorni e orari a partire dal 2024.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="pacchetti-2024">
                  <SectionTitle title="MEDICO MILITARE" />
                  <div className="chiTabsData">
                    <h3>ATTIVITÀ LUDICA</h3>
                    <TnsTable />
                    <p>* Fruibile da Marzo 2024</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="manifesto-uits">
                  <SectionTitle title="MEDICO MILITARE" />
                  <div className="chiTabsData">
                    <p>
                      <Link
                        title="Manifesto UITS 2024"
                        href="https://www.tsnroma.it/downloads/Manifesto UITS 2024.pdf"
                      >
                        Manifesto UITS 2024
                      </Link>{" "}
                      <br />
                      <Link
                        title="Circolare Tesseramento 2024"
                        href="https://www.tsnroma.it/downloads/Circolare Tesseramento 2024.pdf"
                      >
                        Circolare Tesseramento 2024
                      </Link>
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="TabsPane" eventKey="FAQ">
                  <SectionTitle title="MEDICO MILITARE" />
                  <div className="chiTabsData">
                    <p>
                      Di seguito troverete alcune domande, con relative
                      risposte, che spesso ci vengono fatte da chi vuole
                      iscriversi al T.S.N. <br />
                      Se hai una domanda che non è presente, puoi inviarcela
                      scrivendo a{" "}
                      <a href="mailto:tsnroma@tsnroma.it">
                        tsnroma@tsnroma.it
                      </a>{" "}
                      e provvederemo a risponderti al più presto.
                    </p>
                    <div id="faq-container">
                      <div class="faq">
                        {faqData.map((item, index) => (
                          <div key={index}>
                          <h4 onClick={() => toggleAnswer(index)} style={{cursor:'pointer'}}>{item.question}</h4>
                          {visibleAnswers[index] && <p>{item.answer}</p>}
                        </div>
                        ))}
                      </div>
                    </div>
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