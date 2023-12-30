import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Link } from 'react-router-dom'

const DocumentiNecessari = () => {
  return (
    <div>
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
    </div>
  )
}

export default DocumentiNecessari