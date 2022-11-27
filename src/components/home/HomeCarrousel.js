import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel"

class HomeCarrousel extends React.Component {
    render() {
        return (
            <Carousel style={{height: '66vh', width: '100%', color: 'var(--bs-primary)'}}>
                <Carousel.Item style={{color: 'var(--bs-green)'}}>
                    <div className="d-block w-100" style={{ height: '66vh' }}>
                        <Row className="h-100">
                            <Col md={12} style={{marginTop: '125px'}}>
                                <h1 style={style.mainText}>+1000</h1>
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption style={{color: 'var(--bs-green)'}}>
                    <h3 style={style.subtext}>Extratos</h3>
                    <p style={style.bottomText}>O banco de extratos do Cerrado possui mais de 1000 extratos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{color: 'var(--bs-red)'}}>
                    <div className="d-block w-100" style={{ height: '66vh' }}>
                        <Row className="h-100">
                            <Col md={12} style={{marginTop: '125px'}}>
                                <h1 style={style.mainText}>46</h1>
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption style={{color: 'var(--bs-red)'}}>
                    <h3 style={style.subtext}>Famílias</h3>
                    <p style={style.bottomText}>Os extratos foram obtidos de plantas de 46 famílias diferentes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{color: 'var(--bs-cyan)'}}>
                    <div className="d-block w-100" style={{ height: '66vh' }}>
                        <Row className="h-100">
                            <Col md={12} style={{marginTop: '125px'}}>
                                <h1 style={style.mainText}>107</h1>
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption style={{color: 'var(--bs-cyan)'}}>
                    <h3 style={style.subtext}>Espécies</h3>
                    <p style={style.bottomText}>O banco de extratos contempla 107 espécies nativas do Cerrado.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{color: 'var(--bs-yellow)'}}>
                    <div className="d-block w-100" style={{ height: '66vh' }}>
                        <Row className="h-100">
                            <Col md={12} style={{marginTop: '125px'}}>
                                <h1 style={style.mainText}>851</h1>
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption style={{color: 'var(--bs-yellow)'}}>
                    <h3 style={style.subtext}>Extratos Testados</h3>
                    <p style={style.bottomText}>O banco de extratos contempla 851 extratos testados.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{color: 'var(--bs-primary)'}}>
                    <div className="d-block w-100" style={{ height: '66vh' }}>
                        <Row className="h-100">
                            <Col md={12} style={{marginTop: '125px'}}>
                                <h1 style={style.mainText}>195</h1>
                            </Col>
                        </Row>
                    </div>
                    <Carousel.Caption style={{color: 'var(--bs-primary)'}}>
                    <h3 style={style.subtext}>Extratos Larvicidas</h3>
                    <p style={style.bottomText}>O banco de extratos contempla 195 extratos larvicidas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

const style = {
    mainText: {
        fontSize: '96px',
        position: 'relative',
        margin: '0 auto',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtext: {
        marginBottom: '60px',
        fontSize: '50px'
    },
    bottomText: {
        marginBottom: '50px',
        fontSize: '26px'
    }
}

export default HomeCarrousel
