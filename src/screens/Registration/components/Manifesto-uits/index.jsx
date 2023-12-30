import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Link } from 'react-router-dom'

const ManifestUits = () => {
  return (
    <div>
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
    </div>
  )
}

export default ManifestUits