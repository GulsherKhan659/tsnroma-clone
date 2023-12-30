import React from "react";
import SectionTitle from "../../../../components/TrSectionsTitle";

const Segreteria = ({ title }) => {
  return (
    <div>
      <SectionTitle title={title} />
      <div className="chiTabsData">
        <p>
          La Segreteria è il primo luogo dove vi troverete entrando a far parte
          della nostra organizzazione. Da essa si snodano tutte le varie
          funzioni ed è costituita da uno sportello al pubblico, dall’ufficio
          sportivo, e dalla segreteria di presidenza. <br />
          Presso lo sportello al pubblico è possibile svolgere tutte le
          operazioni di carattere amministrativo (iscrizione-rinnovi-rilascio
          certificati ed attestati), oltre alla ricezione di tutto il materiale
          necessario per l’attività di tiro. L’ufficio sportivo è di supporto ai
          tiratori agonisti per tutti gli aspetti organizzativi. La segreteria
          di presidenza, invece, tiene i contatti tra gli uffici interni, gli
          enti, e la presidenza.
        </p>
      </div>
    </div>
  );
};

export default Segreteria;
