
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class CompostInfo extends React.Component {

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {this.props.info?.code} - Plant Extract
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row className="mt-5">
                  <Col md={3}>
                    <Row className="mt-3"> <p>Code: {this.props.info?.code}</p> </Row>
                    <Row className="mt-3"> <p>Origin: {this.props.info?.origin}</p> </Row>
                    <Row className="mt-3"> <p>Family: {this.props.info?.family}</p> </Row>
                    <Row className="mt-3"> <p>Specie: {this.props.info?.species}</p> </Row>
                    <Row className="mt-3"> <p>Organ: {this.props.info?.organ}</p> </Row>
                    <Row className="mt-3"> <p>Taxonomic System: {this.props.info?.taxonomic_system}</p> </Row>
                    <Row className="mt-3"> <p>Soil: {this.props.info?.soil}</p> </Row>
                  </Col>
                  <Col md={3}>
                    <Row className="mt-3"> <p>Vegetation Notes: {this.props.info?.vegetation_notes}</p> </Row>
                    <Row className="mt-3"> <p>Collection Date: {this.props.info?.collection_date}</p> </Row>
                    <Row className="mt-3"> <p>Solvent: {this.props.info.solvent}</p> </Row>
                    <Row className="mt-3"> <p>Extract Yield: {this.props.info?.extraction_yield}</p> </Row>
                    <Row className="mt-3"> <p>Extract Method: {this.props.info?.extraction_method}</p> </Row>
                    <Row className="mt-3"> <p>Availability: {this.props.info?.availability}</p> </Row>
                  </Col>
                  <Col md={3}>
                    <Row className="mt-3"> <p>Address ID: {this.props.info?.address_id}</p> </Row>
                    <Row className="mt-3"> <p>City: {this.props.info?.address?.city}</p> </Row>
                    <Row className="mt-3"> <p>State: {this.props.info?.address?.state}</p> </Row>
                    <Row className="mt-3"> <p>Location: {this.props.info?.address?.location}</p> </Row>
                    <Row className="mt-3"> <p>Latitude: {this.props.info?.address?.lat}</p> </Row>
                    <Row className="mt-3"> <p>Longitude: {this.props.info?.address?.long}</p> </Row>
                  </Col>
                  <Col md={3}>
                    <Row className="mt-3"> <p>Vegetation ID: {this.props.info?.vegetation_id}</p> </Row>
                    <Row className="mt-3"> <p>Vegetation General: {this.props.info?.vegetation?.general}</p> </Row>
                    <Row className="mt-3"> <p>Vegetation Local: {this.props.info?.vegetation?.local}</p> </Row>
                    <Row className="mt-3"> <p>Vegetation English: {this.props.info?.vegetation?.english}</p> </Row>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        )
    }

}

export default CompostInfo
