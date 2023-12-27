import React from 'react'
import "./index.css";
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner';
import bannerImage from "../../assets/images/hero-tsnroma.jpg"

const News = () => {
  return (
    <Container>
        <section style={{ backgroundColor: "#fff", padding: "0 20px" }}>
            <Banner  bannerImage={bannerImage}/>
            <Row className="custom-row">
            <Col lg={8} className="custom-col">

            </Col>
            </Row>
        </section>
    </Container>
  )
}

export default News