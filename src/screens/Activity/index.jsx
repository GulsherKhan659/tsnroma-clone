import React, { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/hero-sportiva.jpg";
import SectionTitle from "../../components/TrSectionsTitle";
import TnsromaFooter from "../../components/Footer";
import "./index.css";
import { Link } from "react-router-dom";

const Attività = () => {
  const [activeTab, setActiveTab] = useState(null);

  console.log(activeTab);

  return (
    <Container>
      <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
        <Banner bannerImage={bannerImage} />
        <Tab.Container
          id="left-tabs-example"
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
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
                  <p>Per la consultazione, fare riferimento a <Link href="https://www.tsnroma.it/downloads/prove-balistiche/Elenco%20Ricariche%202013.pdf" title="Elenco Ricariche 2013">questo documento</Link> riepilogativo.</p>
                  <ul style={{listStyle: "disc"}}>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto1.pdf">cal. 32 S&amp;W LONG WC Lotto 1</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto2.pdf">cal. 32 S&amp;W LONG WC Lotto 2</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto3.pdf">cal. 32 S&amp;W LONG WC Lotto 3</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto4.pdf">cal. 32 S&amp;W LONG WC Lotto 4</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto5.pdf">cal. 32 S&amp;W LONG WC Lotto 5</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto6.pdf">cal. 32 S&amp;W LONG WC Lotto 6</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto7.pdf">cal. 32 S&amp;W LONG WC Lotto 7</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2032%20S%26W%20LONG%20WC%20lotto8.pdf">cal. 32 S&amp;W LONG WC Lotto 8</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto9.pdf">cal. 9x21 Lotto 9</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto10.pdf">cal. 9x21 Lotto 10</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto11.pdf">cal. 9x21 Lotto 11</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto12.pdf">cal. 9x21 Lotto 12</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto13.pdf">cal. 9x21 Lotto 13</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto14.pdf">cal. 9x21 Lotto 14</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto15.pdf">cal. 9x21 Lotto 15</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto16.pdf">cal. 9x21 Lotto 16</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto17.pdf">cal. 9x21 Lotto 17</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto18.pdf">cal. 9x21 Lotto 18</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto19.pdf">cal. 9x21 Lotto 19</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto20.pdf">cal. 9x21 Lotto 20</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto21.pdf">cal. 9x21 Lotto 21</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto22.pdf">cal. 9x21 Lotto 22</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto23.pdf">cal. 9x21 Lotto 23</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto24.pdf">cal. 9x21 Lotto 24</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto25.pdf">cal. 9x21 Lotto 25</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto26.pdf">cal. 9x21 Lotto 26</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto27.pdf">cal. 9x21 Lotto 27</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto28.pdf">cal. 9x21 Lotto 28</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto29.pdf">cal. 9x21 Lotto 29</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto30.pdf">cal. 9x21 Lotto 30</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto31.pdf">cal. 9x21 Lotto 31</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto32.pdf">cal. 9x21 Lotto 32</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto33.pdf">cal. 9x21 Lotto 33</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto34.pdf">cal. 9x21 Lotto 34</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto35.pdf">cal. 9x21 Lotto 35</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%209x21%20lotto36.pdf">cal. 9x21 Lotto 36</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2040%20S%26W%20lotto37.pdf">cal. 40 S&amp;W Lotto 37</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2038%20SPECIAL%20lotto38.pdf">cal. 38 SPECIAL Lotto 38</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2045%20AUTO%20lotto39.pdf">cal. 45 AUTO Lotto 39</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2045%20AUTO%20lotto40.pdf">cal. 45 AUTO Lotto 40</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2045%20AUTO%20lotto41.pdf">cal. 45 AUTO Lotto 41</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2045%20AUTO%20lotto42.pdf">cal. 45 AUTO Lotto 42</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%20357%20MAGNUM%20lotto43.pdf">cal. 357 MAGNUM Lotto 43</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%20357%20MAGNUM%20lotto44.pdf">cal. 357 MAGNUM Lotto 44</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%20357%20MAGNUM%20lotto45.pdf">cal. 357 MAGNUM Lotto 45</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%20357%20MAGNUM%20lotto46.pdf">cal. 357 MAGNUM Lotto 46</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2038%20SPECIAL%20WC%20lotto47.pdf">cal. 38 SPECIAL WC Lotto 47</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/2013/cal.%2044%20S%26W%20SPECIAL%20lotto48.pdf">cal. 44 S&amp;W SPECIAL Lotto 48</a></li>
                <h4>Prove balistiche 1999/2000</h4>
                <ul style={{listStyle: "disc"}}>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017720.pdf">cal. 9x21 cert. n. 17720</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017723.pdf">cal. 9x21 cert. n. 17723</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017722.pdf">cal. 9x21 cert. n. 17722</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017724.pdf">cal. 9x21 cert. n. 17724</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017725.pdf">cal. 9x21 cert. n. 17725</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017726.pdf">cal. 9x21 cert. n. 17726</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017727.pdf">cal. 9x21 cert. n. 17727</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017728.pdf">cal. 9x21 cert. n. 17728</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017729.pdf">cal. 9x21 cert. n. 17729</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017730.pdf">cal. 9x21 cert. n. 17730</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017731.pdf">cal. 9x21 cert. n. 17731</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017732.pdf">cal. 9x21 cert. n. 17732</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017733.pdf">cal. 9x21 cert. n. 17733</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017734.pdf">cal. 9x21 cert. n. 17734</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017772.pdf">cal. 9x21 cert. n. 17772</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017935.pdf">cal. 38 SPECIAL cert. n. 17935</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%209x21%20cert.%20n.%2017748.pdf">cal. 9x21 cert. n. 17748</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017936.pdf">cal. 38 SPECIAL cert. n. 17936</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017937.pdf">cal. 38 SPECIAL cert. n. 17937</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017938.pdf">cal. 38 SPECIAL cert. n. 17938</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017939.pdf">cal. 38 SPECIAL cert. n. 17939</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017940.pdf">cal. 38 SPECIAL cert. n. 17940</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017941.pdf">cal. 38 SPECIAL cert. n. 17941</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017942.pdf">cal. 38 SPECIAL cert. n. 17942</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017944.pdf">cal. 38 SPECIAL cert. n. 17944</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017943.pdf">cal. 38 SPECIAL cert. n. 17943</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017945.pdf">cal. 38 SPECIAL cert. n. 17945</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017759.pdf">cal. 40 S&amp;W cert. n. 17759</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2038%20SPECIAL%20cert.%20n.%2017946.pdf">cal. 38 SPECIAL cert. n. 17946</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017760.pdf">cal. 40 S&amp;W cert. n. 17760</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017761.pdf">cal. 40 S&amp;W cert. n. 17761</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017762.pdf">cal. 40 S&amp;W cert. n. 17762</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017764.pdf">cal. 40 S&amp;W cert. n. 17764</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017765.pdf">cal. 40 S&amp;W cert. n. 17765</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017763.pdf">cal. 40 S&amp;W cert. n. 17763</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017766.pdf">cal. 40 S&amp;W cert. n. 17766</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017767.pdf">cal. 40 S&amp;W cert. n. 17767</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017768.pdf">cal. 40 S&amp;W cert. n. 17768</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017769.pdf">cal. 40 S&amp;W cert. n. 17769</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017770.pdf">cal. 40 S&amp;W cert. n. 17770</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2040%20S%26W%20cert.%20n.%2017771.pdf">cal. 40 S&amp;W cert. n. 17771</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017749.pdf">cal. 45 ACP cert. n. 17749</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017750.pdf">cal. 45 ACP cert. n. 17750</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017751.pdf">cal. 45 ACP cert. n. 17751</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017752.pdf">cal. 45 ACP cert. n. 17752</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017753.pdf">cal. 45 ACP cert. n. 17753</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017754.pdf">cal. 45 ACP cert. n. 17754</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017755.pdf">cal. 45 ACP cert. n. 17755</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017757.pdf">cal. 45 ACP cert. n. 17757</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%2045%20ACP%20cert.%20n.%2017758.pdf">cal. 45 ACP cert. n. 17758</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017934.pdf">cal. 357 MAGNUM cert. n. 17934</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017947.pdf">cal. 357 MAGNUM cert. n. 17947</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017948.pdf">cal. 357 MAGNUM cert. n. 17948</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017949.pdf">cal. 357 MAGNUM cert. n. 17949</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017950.pdf">cal. 357 MAGNUM cert. n. 17950</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017951.pdf">cal. 357 MAGNUM cert. n. 17951</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017952.pdf">cal. 357 MAGNUM cert. n. 17952</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017953.pdf">cal. 357 MAGNUM cert. n. 17953</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017954.pdf">cal. 357 MAGNUM cert. n. 17954</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017955.pdf">cal. 357 MAGNUM cert. n. 17955</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2017956.pdf">cal. 357 MAGNUM cert. n. 17956</a></li>
				<li><a href="https://www.tsnroma.it/downloads/prove-balistiche/1999-2000/cal.%20357%20MAGNUM%20cert.%20n.%2018742%20del%202000.pdf">cal. 357 MAGNUM cert. n. 18742 del 2000</a></li>
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
