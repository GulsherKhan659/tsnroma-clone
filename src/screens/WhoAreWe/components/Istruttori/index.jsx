import React from "react";
import SectionTitle from "../../../../components/TrSectionsTitle";

const Istruttori = ({ title }) => {
  return (
    <div>
      <SectionTitle title={title} />
      <div className="chiTabsData">
        <p>
          Gli istruttori di tiro coordinati dai direttori degli impianti e del
          poligono, sono gli uomini sul campo, cioè coloro che troverete sulle
          linee di tiro ed insieme ai quali condividerete la vostra passione.
          Considerateli “angeli custodi”, uomini e donne eccezionalmente e
          continuamente addestrati per essere il vostro supporto sia sotto il
          profilo tecnico che per la vostra sicurezza. La qualità
          dell’addestramento dei nostri istruttori è il frutto di un continuo
          lavoro di formazione. Ogni istruttore è munito di idonea licenza
          prefettizia, ed è sottoposto annualmente all’accertamento della
          propria capacità tecnica da parte di una Commissione preposta.
          Riconoscerai i nostri istruttori dalle loro uniformi rosse.
        </p>
        <h3>Allenatori</h3>
        <p>
          Gli allenatori effettuano l’attività di formazione dei nostri atleti.
          La loro competenza formativa sia sotto il profilo mentale che
          dell’attività propria di tiro è espressa ai massimi livelli. Molti di
          loro svolgono anche incarichi tecnici nell’ambito della nazionale di
          tiro. Sono muniti d’idonea abilitazione anche per l’insegnamento ai
          minorenni.
        </p>
      </div>
    </div>
  );
};

export default Istruttori;
