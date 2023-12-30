import React from 'react'
import { Col, Container, Nav, Row, Tab, Table } from 'react-bootstrap'
import Banner from '../../components/Banner'
import bannerImage from "../../assets/images/hero-tsnroma.jpg"
import SectionTitle from '../../components/TrSectionsTitle'
import TnsromaFooter from '../../components/Footer'
import { Link } from 'react-router-dom'

const Orari = () => {
  return (
    <Container>
        <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
            <Banner bannerImage={bannerImage} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="orari">
                <Row>
                <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  {/* <Nav.Link className="TabsOption" eventKey="dove-siamo"> */}
                    <Link className="TabsOption" to={"/struttura/dove-siamo"}>Dove-Siamo</Link>
                  {/* </Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="TabsOption" eventKey="orari">
                    Orari
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="TabsOption" to="/struttura/impianti">Impianti</Link>
                </Nav.Item>
                <Nav.Item>
				<Link className="TabsOption" to="/struttura/uffici">Uffici</Link>
                </Nav.Item>
                <Nav.Item>
				<Link className="TabsOption" to="/struttura/bar-ristorante">Pacchetti-2024</Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane className="TabsPane" eventKey="orari">
                        <SectionTitle title="ORARI" />
                        <div className='chiTabsData'>
                            <Table class="table" responsive>
				<thead>
					<tr>
						<th colspan="3">
							<h3 style={{color:"#333"}}>Impianti</h3>
						</th>
					</tr>
					<tr>
						<th style={{width: "30%"}}>&nbsp;</th>
						<th style={{width: "30%"}}>Invernale</th>
						<th style={{width: "30%"}}>Estivo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Poligono M. 50</td>
						<td>
							Mar, Gio: 09:00-13.00 <br />
							Sab: 09:00-17:00 <br />
							Dom: 09:00-13:00 <br />
						</td>
						<td>
							Mar, Gio: 09:00-13.00 <br />
							Sab: 09:00-17:30 <br />
							Dom: 09:00-13:00 <br />
						</td>
					</tr>
					<tr>
						<td>Poligono M. 25</td>
						<td>Da Mar a Sab: 9.00-17.00<br /> Dom e Fest: 9.00-13.00</td>
						<td>
							Mar, Mer, Gio, Ven, Sab: 09:00-17:30 <br />
							Dom: 09.00-13:00
						</td>
					</tr>
					<tr>
						<td>Poligono M. 10 (Aria compressa)</td>
						
						<td colspan="2" style={{textAlign: "center"}}>
							Temporaneamente chiuso
						</td>
					</tr>
				</tbody>
			</Table>
            <Table class="table" responsive>
				<thead>
					<tr>
						<th colspan="3">
							<h3 style={{color:"#333"}}>Uffici</h3>
						</th>
					</tr>
					<tr>
						<th style={{width: "30%"}}>&nbsp;</th>
						<th style={{width: "30%"}}>Invernale</th>
						<th style={{width: "30%"}}>Estivo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Segreteria al Pubblico</td>
						<td>Da Mar a Sab: 8.45-16.30<br /> Dom e Fest: 8.45-12.00</td>
						<td>Da Mar a Sab: 8.45-17.00<br /> Dom e Fest: 8.45-12.00</td>
					</tr>
					<tr>
						<td>Segreteria Sportiva</td>
						<td>Mar: 9.00-13.00, 14.00-17.00 <br /> Gio: 13.00-17.00 <br /> Ven: 9.00-13.00 <br /> Sab: 9.00-13.00, 14.00-16.00</td>
						<td>Mar: 9.00-13.00, 14.00-17.00 <br /> Gio: 13.00-17.00 <br /> Ven: 9.00-13.00 <br /> Sab: 9.00-13.00, 14.00-16.00</td>
						
					</tr>
				</tbody>
			</Table>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
                </Row>
            </Tab.Container>
            <Row>
                <TnsromaFooter isFooter />
            </Row>
        </section>
    </Container>
  )
}

export default Orari