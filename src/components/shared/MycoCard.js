import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MycoInfo from './MycoInfo';

import {GiMushroom} from 'react-icons/gi';

class MycoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        }
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-0">
                            <Row className="mb-0">
                                <Col lg={6} className='mt-1'>
                                    <b>{this.props.result?.internal_id}</b>
                                </Col>
                                <Col lg={6} style={{fontSize: '14px'}} className='mt-1 float-end'>
                                    <p className='float-end'>
                                    Mycotheque
                                    <GiMushroom size={20} className='mx-auto ms-2' style={{color: 'var(--bs-primary)'}}/>
                                    </p>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Col className="mt-0" style={{ fontSize: '14px', paddingBottom: '0' }}>
                                <Row>
                                    <p className="mb-1">
                                        <b>Organism: </b>{this.props.result?.organism_type?.description}
                                    </p>
                                    <p className="mb-1">
                                        <b>Taxonomy: </b> {this.props.result?.fungus_class?.description}; {this.props.result?.fungus_order?.description}; {this.props.result?.fungus_family?.description}; {this.props.result?.fungus_genus?.description}; {this.props.result?.fungus_species?.description}
                                    </p>
                                    <p className="mb-1">
                                        <b>Plant: </b>
                                        {this.props.result?.plant_family?.description},&nbsp; 
                                        {this.props.result?.plant_species?.description} 
                                    </p>
                                    <p className="mb-1">
                                        <b>Plant Organ: </b>{this.props.result?.plant_organ?.organ}
                                    </p>
                                    <p className="mb-1">
                                        <b>Treatment: </b>{this.props.result?.treatment?.description}
                                    </p>
                                    <p className="mb-1">
                                        <b>Collection: </b>{this.props.result?.colection}
                                    </p>
                                    <p className="mb-1">
                                        <b>Coordinates: </b>{this.props.result?.geolocation ? "Lat: " : "" }{this.props.result?.geolocation?.latitude}
                                        {this.props.result?.geolocation ? " Long: " : "" }
                                        {this.props.result?.geolocation?.longitude}
                                    </p>
                                </Row>
                        </Col>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Row style={{ fontSize: '14px' }}>
                            <Col lg={8} className="mt-1">
                                <p className='mb-0'>
                                    <b>Plant Date:</b> {this.props.result?.plant_collection_date}
                                </p>
                            </Col>
                            <Col lg={4}>
                                <Button className="float-end" variant="outline-info" size="sm" onClick={() => this.setState({ modalShow: true })}>Details</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <MycoInfo
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    info={this.props.result}
                />
            </>
        )
    }
}

export default MycoCard
