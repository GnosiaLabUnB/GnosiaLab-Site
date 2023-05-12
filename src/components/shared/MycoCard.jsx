import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MycoInfo from './MycoInfo';
import moment from 'moment';

import { GiMushroom } from 'react-icons/gi';
import DeleteModal from 'src/components/dashboard/shared/DeleteModal';
import { API_PATHS } from 'src/services/base';

class MycoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infoModalShow: false,
            deleteModalShow: false
        }
    }

    closeDeleteModal = () => { this.setState({ deleteModalShow: false }); }
    
    modalCallback = (id = null, caller = null) => {
        if (id !== null) {
            this.props.deleteCallback(id, "myco", this.props.all)
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
                                <Col lg={6} style={{ fontSize: '14px' }} className='mt-1 float-end'>
                                    <p className='float-end'>
                                        Mycotheque
                                        <GiMushroom size={20} className='mx-auto ms-2' style={{ color: 'var(--bs-primary)' }} />
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
                                    <b>Coordinates: </b>{this.props.result?.geolocation ? "Lat: " : ""}{this.props.result?.geolocation?.latitude}
                                    {this.props.result?.geolocation ? " Long: " : ""}
                                    {this.props.result?.geolocation?.longitude}
                                </p>
                            </Row>
                        </Col>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Row style={{ fontSize: '14px' }}>
                            <Col lg={6} className="mt-1">
                                <p className='mb-0'>
                                    <b>Plant Date:</b> {moment(this.props.result?.plant_collection_date).format('DD/MM/YY')}
                                </p>
                            </Col>
                            <Col lg={6}>
                                <Button className="float-end" variant="info" size="sm" onClick={() => this.setState({ infoModalShow: true })}>Info</Button>
                                <Button className="float-end me-2" variant="warning" size="sm" onClick={() => this.setState({ modalShow: true })}>Edit</Button>
                                <Button className="float-end me-2" variant="danger" size="sm" onClick={() => this.setState({ deleteModalShow: true })}>Delete</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <MycoInfo
                    show={this.state.infoModalShow}
                    onHide={() => this.setState({ infoModalShow: false })}
                    info={this.props.result}
                />

                <DeleteModal
                    close={this.closeDeleteModal}
                    callback={this.modalCallback}
                    show={this.state.deleteModalShow}
                    delete_text={'Deleting this mycotheque entry will remove it entirely from the database. Are you sure you want to delete this record?'}
                    delete_entity_desc={this.props.result?.internal_id}
                    delete_entity_id={this.props.result?.id}
                    api_path={API_PATHS.myco} />
            </>
        )
    }
}

export default MycoCard
