import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Col, Image, Row } from 'react-bootstrap'

const Uffici = () => {
  return (
    <div>
        <SectionTitle title="UFFICI" />
                  <div className="chiTabsData">
                    <p>
                      Gli uffici sono costituiti dallo Sportello al Pubblico,
                      dall'Ufficio Sportivo e dall'Ufficio Amministrativo.
                    </p>
                    <Row className="custom-row">
                      <Col sm={6}>
                        <h3>Ufficio Centrale</h3>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ufficio-centrale.jpg"
                            alt="Ufficio Centrale"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                  </div>
    </div>
  )
}

export default Uffici