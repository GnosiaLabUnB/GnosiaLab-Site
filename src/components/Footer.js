import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { BsFillPersonLinesFill }  from 'react-icons/bs';
import { MdLocationPin, MdMail } from 'react-icons/md';
import { ImLab } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitterSquare} from  'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
            <Nav className="shadow" style={style.footerStyle}>
                <Container style={{textAlign: 'left'}}>
                    <Row>
                    <Col lg={1}></Col>
                    <Col lg={4}>
                        <Row style={{marginTop: '30px'}}>
                            <div style={{width: '40px'}}>
                            <img
                                alt=""
                                src="/logo_black.svg"
                                width="40"
                                height="40"
                                // className="d-inline-block align-top"
                            />
                            </div>
                            <h4 style={{width: 'auto', margin: '7px'}}>Cerrado DB</h4>
                        </Row>
                        <Row style={{marginTop: '10px', fontSize: '11pt', paddingRight: '4pt'}}>
                            <p>
                            Cerrado DB is a Plant Extract Bank from the Cerrado biome, built by the Pharmacognosy Laboratory of the University of Brasília.
                            </p>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <h5 style={style.headingStyle}>Contact</h5>
                        </Row>
                        <Row style={{fontSize: '10pt', marginBottom: '5px'}}>
                            <Col lg={1}>
                                <ImLab></ImLab>
                            </Col>
                            <Col lg={10}>
                                Laboratório de Farmacognosia
                                <br></br>
                                Universidade de Brasília
                                <br></br>
                                Faculdade de Ciências da Saúde
                            </Col>
                        </Row>
                        <Row style={{fontSize: '10pt', marginBottom: '5px'}}>
                            <Col lg={1}>
                                <BsFillPersonLinesFill></BsFillPersonLinesFill>
                            </Col>
                            <Col lg={11}>
                                Prof. Laila S. Espindola
                                <br></br>
                                Phone: +55 (61) 3107-2016
                            </Col>
                        </Row>
                        <Row style={{fontSize: '10pt'}}>
                            <Col lg={1}>
                                <MdLocationPin></MdLocationPin>
                            </Col>
                            <Col lg={10}>
                                Campus Universitário Darcy Ribeiro
                                <br></br>
                                Asa Norte, 70910-900
                                <br></br>
                                Brasilia - DF, Brazil
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <Row>
                            <h5 style={style.headingStyle}>Cite Us</h5>
                        </Row>
                        <Row>
                            <Nav.Item>
                                <Nav.Link style={style.linkStyle} href="link-1">Bibtex</Nav.Link>
                            </Nav.Item>
                        </Row>
                        <Row>
                            <Nav.Item>
                                <Nav.Link style={style.linkStyle} href="link-2">Textual Format</Nav.Link>
                            </Nav.Item>
                        </Row>
                        <Row className="mt-4 float-right">
                            <Col>
                                <AiFillInstagram className="d-inline-block float-right ml-2" size={35}></AiFillInstagram>
                                <FaTwitterSquare className="d-inline-block float-right ml-2" size={31}></FaTwitterSquare>
                                <MdMail className="d-inline-block float-right ml-2" size={40}></MdMail>
                            </Col>
                        </Row>
                    </Col>
                    </Row>
                </Container>

            </Nav>
        )
    }
}

const style = {
    footerStyle: {
        color: 'var(--bs-gray-700)',
        position: 'flex',
        right: '0',
        bottom: '0',
        left: '0',
        padding: '1rem',
        backgroundColor: 'var(--bs-secondary)',
        textAlign: 'center'
    },
    linkStyle: {
        color: 'var(--bs-gray-700)',
        fontSize: '12pt',
        fontWeight: 'bold',
        paddingLeft: '0',
        paddingTop: '5px',
        paddingBottom: '5px',
        textDecoration: 'underline'
    },
    headingStyle: {
        fontWeight: 'bold',
        color: 'var(--bs-gray-700)'
    }
}

export default Footer


