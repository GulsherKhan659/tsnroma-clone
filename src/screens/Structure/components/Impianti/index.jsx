import React from 'react'
import SectionTitle from '../../../../components/TrSectionsTitle'
import { Col, Image, Row } from 'react-bootstrap'

const Impianti = () => {
  return (
    <div>
        <SectionTitle title="IMPIANTI" />
                  <div className="chiTabsData">
                    <p>
                      Gli impianti sono i luoghi presso i quali viene svolta
                      l'attività di tiro a segno.
                    </p>
                    <Row
                      className="custom-row"
                      style={{ marginBottom: "15px" }}
                    >
                      <Col sm={4}>
                        <h3>Impianti di tiro a 10 metri</h3>
                        <p>
                          Negli impinati di tiro a 10 metri viene praticata
                          l'attività con attrezzi ed armi ad aria compressa.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-10m.jpg"
                            alt="Impianti di tiro a 10m"
                            title="Impianti di tiro a 10m"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row
                      className="custom-row"
                      style={{ marginBottom: "15px" }}
                    >
                      <Col sm={4}>
                        <h3>Impianti di tiro a 10 metri</h3>
                        <p>
                          Negli impinati di tiro a 10 metri viene praticata
                          l'attività con attrezzi ed armi ad aria compressa.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-25m.jpg"
                            alt="Impianti di tiro a 10m"
                            title="Impianti di tiro a 10m"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row
                      className="custom-row"
                      style={{ marginBottom: "15px" }}
                    >
                      <Col sm={4}>
                        <h3>Impianti di tiro a 10 metri</h3>
                        <p>
                          Negli impinati di tiro a 10 metri viene praticata
                          l'attività con attrezzi ed armi ad aria compressa.
                        </p>
                      </Col>
                      <Col sm={8}>
                        <p>
                          <Image
                            src="https://www.tsnroma.it/img/struttura-50m.jpg"
                            alt="Impianti di tiro a 10m"
                            title="Impianti di tiro a 10m"
                            className="img-responsive"
                          />
                        </p>
                      </Col>
                    </Row>
                  </div>
    </div>
  )
}

export default Impianti