import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Link } from 'react-router-dom'

const Regolamento = ({title}) => {
  return (
    <div>
        <SectionTitle title={title} />
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
    </div>
  )
}

export default Regolamento