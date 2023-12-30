import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Col, Image, Row } from 'react-bootstrap'

const BarRiistorante = () => {
  return (
    <div>
        <SectionTitle title="BAR RISTORANTE" />
                  <div className="chiTabsData">
                    <Row className="custom-row">
                      <Col sm={4}>
                        <p>
                          A disposizione dei Soci è presente un locale con
                          giardino destinato a Bar Ristorante.
                          <br />
                          Durante l'orario di apertura della struttura è
                          possibile, quindi, consumare il pranzo, oltre al
                          normale servizio di bar.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ristorante-3.jpg"
                            alt="Bar Ristorante"
                            title="Bar Ristorante"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row className="custom-row">
                      <Col sm={6}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ristorante-1.jpg"
                            alt="Ufficio Centrale"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                      <Col sm={6}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-ristorante-2.jpg"
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

export default BarRiistorante