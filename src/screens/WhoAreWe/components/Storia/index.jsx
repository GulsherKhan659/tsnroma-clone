import React from "react";
import SectionTitle from "../../../../components/TrSectionsTitle";
import { Tab } from "react-bootstrap";

const Storia = ({ title }) => {
  return (
    <>
      {/* <Tab.Pane className="TabsPane" eventKey={"STORIA"}> */}
      <SectionTitle title={title} />
      <div className="chiTabsData">
        <p>
          Il Tiro a Segno Nazionale di Roma nasce nel 1883. Palestra degli
          sportivi del tiro a segno e dei giovani che si apprestavano al
          servizio militare, la Sezione di Roma ha organizzato, prima della
          grande guerra e dell’ultimo conflitto mondiale, le più importanti
          manifestazioni di tiro nazionali, con l’affluenza di migliaia di
          tiratori raggiungendo, nelle gare generali, oltre 10 mila
          partecipanti.
        </p>
        <p>
          Il Tiro a Segno Nazionale di Roma nasce nel 1883. Palestra degli
          sportivi del tiro a segno e dei giovani che si apprestavano al
          servizio militare, la Sezione di Roma ha organizzato, prima della
          grande guerra e dell’ultimo conflitto mondiale, le più importanti
          manifestazioni di tiro nazionali, con l’affluenza di migliaia di
          tiratori raggiungendo, nelle gare generali, oltre 10 mila
          partecipanti.
        </p>
        <p>Nel 1995 ha ospitato i Primi Giochi Mondiali Militari.</p>
        <p>
          Nel settore agonistico vanta risultati di prestigio con la
          partecipazione a 11 Olimpiadi, dal 1924 al 1984, a 13 campionati
          mondiali, dal 1898 al 1966 e a tre edizioni dei campionati europei dal
          1959 al 1965.
        </p>
        <p>
          Per 19 anni consecutivi, dal 1950, si è classificata aiprimi due posti
          in divisione "A"
        </p>
        <p>
          Ha vinto 29 titoli italiani assoluti in varie armi e 7 primati
          italiani assoluti.
        </p>
        <p>
          Ancora oggi l’attività della Sezione è particolarmente fiorente,
          comparendo tra le Sezioni d’Italia che più hanno vinto il "Campionato
          Nazionale delle Sezioni" e continuando ad offrire numerosi tiratori
          all’attività internazionale.
        </p>
        <p>
          La Sezione, inoltre, svolge una continua e intensa attività di
          promozione dello sport del tiro a segno nell’ambito metropolitano,
          raggiungendo ogni fascia di tessuto sociale.
        </p>
      </div>
      {/* </Tab.Pane> */}
    </>
  );
};

export default Storia;
