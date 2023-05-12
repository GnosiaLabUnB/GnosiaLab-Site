
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FormLabel from 'src/components/shared/FormLabel';
import {GiMushroom} from 'react-icons/gi';
import {ImLab} from 'react-icons/im';

class FungusInfo extends React.Component {

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
              Fungi Extract
              <GiMushroom size={20} className='mx-auto ms-2' style={{color: 'var(--bs-primary)'}}/>
              <ImLab size={20} className='mx-auto ms-1' style={{color: 'var(--bs-primary)'}}/>
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
                  <b>Mycotheque Item: </b>{this.props.info?.id_mycotheque}
              </p>
              <p className="mb-1">
                  <b>Origin Matrix: </b>{this.props.info?.origin_matrix?.description.capitalize()}
              </p>
              <p className="mb-1">
                  <b>Plant Organ: </b>{this.props.info?.plant_organ?.organ.capitalize()}
              </p>
              <p className="mb-1">
                  <b>Growth Condition: </b>
                  {this.props.info?.growth_condition_type?.description.capitalize()} /&nbsp; 
                  {this.props.info?.growth_condition_days} days
              </p>
              <p className="mb-1">
                  <b>Growth Medium: </b>{this.props.info?.growth_medium?.description.capitalize()}
              </p>
              <p className="mb-1">
                  <b>Solvent: </b>{this.props.info?.solvent?.description.capitalize()}
              </p>
              <p className="mb-1">
                  <b>Mass (mg): </b>{this.props.info?.mass_mg}
              </p>
              </Container>
            </Col>
            <Col md={6}>
              <FormLabel label="Additional Info" />
              <Container>
                <p className="mb-1">
                  <b>Extract Code: </b>{this.props.info?.extract_code}
                </p>
                <p className="mb-1">
                  <b>Endophytic Fungi Code: </b>{this.props.info?.endophytic_fungi_code}
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
                <b>Extraction Year:</b> {this.props.info?.extraction_year}
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

export default FungusInfo
