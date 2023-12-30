import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import TnsromaFooter from '../../../../components/Footer'

const DoveSiamo = () => {
    const iframeSrc =
    "https://maps.google.com/maps?q=Viale+di+Tor+di+Quinto%2C+63+-+00191+Roma&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return (
    <div>
        <SectionTitle title={"DOVE SIAMO"} />
                  <TnsromaFooter />
                  <div className="mapouter">
                    <div
                      className="gmap_canvas"
                      dangerouslySetInnerHTML={{
                        __html: `<iframe width="100%" height="450" src="${iframeSrc}" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>`,
                      }}
                    />
                  </div>
    </div>
  )
}

export default DoveSiamo