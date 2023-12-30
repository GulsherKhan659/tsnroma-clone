import React, { useState } from "react";
import SectionTitle from "../../../../components/TrSectionsTitle";

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

const Faq = () => {
  const[visibleAnswers, setVisibleAnsers] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    const newVisibleAnswers = [...visibleAnswers];
    newVisibleAnswers[index] = !newVisibleAnswers[index];
    setVisibleAnsers(newVisibleAnswers);
  };
  return (
    <div>
      <SectionTitle title="MEDICO MILITARE" />
      <div className="chiTabsData">
        <p>
          Di seguito troverete alcune domande, con relative risposte, che spesso
          ci vengono fatte da chi vuole iscriversi al T.S.N. <br />
          Se hai una domanda che non è presente, puoi inviarcela scrivendo a{" "}
          <a href="mailto:tsnroma@tsnroma.it">tsnroma@tsnroma.it</a> e
          provvederemo a risponderti al più presto.
        </p>
        <div id="faq-container">
          <div class="faq">
            {faqData.map((item, index) => (
              <div key={index}>
                <h4
                  onClick={() => toggleAnswer(index)}
                  style={{ cursor: "pointer" }}
                >
                  {item.question}
                </h4>
                {visibleAnswers[index] && <p>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
