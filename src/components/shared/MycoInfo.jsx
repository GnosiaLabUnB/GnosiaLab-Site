
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FormLabel from 'src/components/shared/FormLabel';

import { GiMushroom } from 'react-icons/gi';




class MycoInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal_show: false,
    }
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          // style={{ display: "none" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title as={Container} id="contained-modal-title-vcenter">
              <Row>
                <Col lg={6} className='mt-3'>
                  <h3>
                    <b>{this.props.info?.internal_id}</b>
                  </h3>
                </Col>
                <Col lg={6} style={{ fontSize: '18px' }} className='mt-3 float-end'>
                  <p className='float-end'>
                    Mycotheque
                    <GiMushroom size={20} className='mx-auto ms-2' style={{ color: 'var(--bs-primary)' }} />
                  </p>
                </Col>
              </Row>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='ms-3 me-3'>
            <Row className="mt-2">
              <Col md={6}>
                <FormLabel label="General Info" />
                <Container>
                  <p className="mb-1">
                    <b>Organism: </b> {this.props.info?.organism?.description}; {this.props.info?.organism_type?.description}
                  </p>
                  <p className="mb-1">
                    <b>Taxonomy: </b> {this.props.info?.fungus_class?.description}; {this.props.info?.fungus_order?.description}; {this.props.info?.fungus_family?.description}; {this.props.info?.fungus_genus?.description}; {this.props.info?.fungus_species?.description}
                  </p>
                  <p className="mb-1">
                    <b>Plant: </b>
                    {this.props.info?.plant_family?.description},&nbsp;
                    {this.props.info?.plant_species?.description}&nbsp; -
                    {this.props.info?.plant_species?.curr_taxo_name}
                  </p>
                  <p className="mb-1">
                    <b>Plant Organ: </b>{this.props.info?.plant_organ?.organ}
                  </p>
                  <p className="mb-1">
                    <b>Treatment: </b>{this.props.info?.treatment?.description}
                  </p>
                  <p className="mb-1">
                    <b>Collection: </b>{this.props.info?.colection}
                  </p>
                  <p className="mb-1">
                    <b>Coordinates: </b>{this.props.info?.geolocation ? "Lat: " : ""}{this.props.info?.geolocation?.latitude}
                    {this.props.info?.geolocation ? " Long: " : ""}
                    {this.props.info?.geolocation?.long}
                  </p>
                </Container>
              </Col>
              <Col md={6}>
                <FormLabel label="Additional Info" />
                <Container>
                  <p className="mb-1">
                    <b>Code: </b>{this.props.info?.code}
                  </p>
                  <p className="mb-1">
                    <b>Numero SP Funghi: </b>{this.props.info?.numero_sp_funghi}
                  </p>
                  <p className="mb-1">
                    <b>Name Lab: </b>{this.props.info?.name_lab}
                  </p>
                  <p className="mb-1">
                    <b>Scientific Name: </b>{this.props.info?.nomeclature?.scientific_name} - {this.props.info?.nomeclature?.synonym}
                  </p>
                  <p className="mb-1">
                    <b>Taxonomic Level: </b>{this.props.info?.taxonomic_level?.description}
                  </p>
                </Container>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col md={6}>
                <FormLabel label="Laboratory Info" />
                <Container>
                  <p className="mb-1">
                    <b>Obs 1: </b> {this.props.info?.obs_1}
                  </p>
                  <p className="mb-1">
                    <b>Obs 2: </b> {this.props.info?.obs_2}
                  </p>
                  <p className="mb-1">
                    <b>Obs Patricia: </b> {this.props.info?.obs}
                  </p>
                </Container>
              </Col>
              <Col md={6}>
                <FormLabel label="Publication Info" />
                <Container>
                  <p className="mb-1">
                    <b>Publication: </b> {this.props.info?.publications}
                  </p>
                  <p className="mb-1">
                    <b>Thesis: </b> {this.props.info?.thesis}
                  </p>
                  <p className="mb-1">
                    <b>Ata: </b> {this.props.info?.ata}
                  </p>
                </Container>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "unset" }}>
            <Row style={{ fontSize: '16px' }} className='w-100'>
              <Col lg={6} className="mt-1 float-start">
                <p className='mb-0 float-start'>
                  <b>Plant Date:</b> {this.props.result?.plant_collection_date}
                </p>
              </Col>
              <Col lg={6} className='float-end'>
                <Button variant="danger"  className='float-end me-3'
                  onClick={() => {
                    this.setState({
                      modal_show: true
                    })
                  }}>
                  Delete
                </Button>
                <Button variant="secondary" className='float-end me-3' onClick={this.props.onHide}>Edit</Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}

export default MycoInfo
