
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FormLabel from './FormLabel';

import { RiPlantFill } from 'react-icons/ri';
import { ImLab } from 'react-icons/im';

import moment from 'moment';



class PlantInfo extends React.Component {


  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
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
                  Plant Extract
                  <RiPlantFill size={24} className='mx-auto mb-1 ms-4' style={{ color: 'var(--bs-primary)' }} />
                  <ImLab size={24} className='mx-auto ms-1 mb-1 me-1' style={{ color: 'var(--bs-primary)' }} />
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
                  <b>Extract Type: </b> {this.props.info?.extract_type?.description}
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
                  <b>Extraction Method: </b>{this.props.info?.extraction_method?.description}
                </p>
                <p className="mb-1">
                  <b>Solvent: </b>{this.props.info?.solvent?.description}
                </p>
                <p className="mb-1">
                  <b>Yield: </b>{this.props.info?.extraction_yield ? this.props.info?.extraction_yield : "None"}
                </p>
                <p className="mb-1">
                  <b>Coordinates: </b>{this.props.info?.address ? "Lat: " : ""}{this.props.info?.address?.lat}
                  {this.props.info?.address ? " Long: " : ""}
                  {this.props.info?.address?.long}
                </p>
                <p className="mb-1">
                  <b>Address: </b>{this.props.info?.address?.location},{this.props.info?.address?.city?.description}, {this.props.info?.address?.state?.description}
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
                  <b>Related Code: </b>{this.props.info?.related_codes}
                </p>
                <p className="mb-1">
                  <b>Origin: </b> {this.props.info?.origin?.description}
                </p>
                <p className="mb-1">
                  <b>Taxonomic System: </b> {this.props.info?.taxonomic_system?.description}
                </p>
                <p className="mb-1">
                  <b>Soil: </b> {this.props.info?.soil?.description}
                </p>
                <p className="mb-1">
                  <b>Vegetation: </b> {this.props.info?.vegetation?.general}, {this.props.info?.vegetation?.local}, {this.props.info?.vegetation?.english}
                </p>
                <p className="mb-1">
                  <b>Vegetation Notes: </b> {this.props.info?.vegetation_notes}
                </p>
              </Container>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col md={6}>
              <FormLabel label="Laboratory Info" />
              <Container>
                <p className="mb-1">
                  <b>Storage: </b> Freezer {this.props.info?.freezer?.description}, Box {this.props.info?.box?.description}, Position {this.props.info?.inbox_position}
                </p>
                <p className="mb-1">
                  <b>Deposit: </b> Herbarium {this.props.info?.herbarium?.description}; Number {this.props.info?.deposit_collector?.deposit?.description}
                </p>
                <p className="mb-1">
                  <b>Collector: </b> {this.props.info?.collector_name?.description}; Number {this.props.info?.deposit_collector?.collector?.description}
                </p>
                <p className="mb-1">
                  <b>Obs: </b> {this.props.info?.obs}
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
                <b style={{ color: 'var(--bs-green)' }}>{this.props.info?.availability ? "Available\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" : ""}</b>
                <b>Collected:</b> {moment(this.props.info?.collection_date).format('DD/MM/YY')}
              </p>
            </Col>
            <Col lg={6} className='float-end'>
              <Button variant="danger" className='float-end' onClick={this.props.onHide}>Delete</Button>
              <Button variant="secondary" className='float-end me-3' onClick={this.props.onHide}>Edit</Button>
            </Col>
          </Row>

        </Modal.Footer>
      </Modal>
    )
  }

}

export default PlantInfo
