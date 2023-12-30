import React from 'react'
import { Tab } from 'react-bootstrap'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Link } from 'react-router-dom'

const Statuto = ({title}) => {
  return (
    <div>
        <SectionTitle title={title} />
                  <div className="chiTabsData">
                    <p>
                      <Link href="https://www.tsnroma.it/downloads/Statuto-TSN-Roma-2023.pdf">
                        Clicca qui
                      </Link>{" "}
                      per scaricare lo Statuto del T.S.N. Roma.
                    </p>
                  </div>
    </div>
  )
}

export default Statuto