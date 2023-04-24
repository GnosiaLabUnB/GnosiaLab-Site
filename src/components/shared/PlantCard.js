import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CompostInfo from './CompostInfo';

import moment from 'moment';

import { RiPlantFill } from 'react-icons/ri';
import { ImLab } from 'react-icons/im';

class PlantCard extends React.Component {

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
                <Col lg={6} style={{ fontSize: '14px' }} className='mt-1 float-end'>
                  <p className='float-end'>
                    Plant Extract
                    <RiPlantFill size={20} className='mx-auto ms-2' style={{ color: 'var(--bs-primary)' }} />
                    <ImLab size={20} className='mx-auto ms-1' style={{ color: 'var(--bs-primary)' }} />
                  </p>
                </Col>
              </Row>
            </Card.Title>
            <Col className="mt-0" style={{ fontSize: '14px', paddingBottom: '0' }}>
              <Row>
                <p className="mb-1">
                    <b>Plant: </b>
                    {this.props.result?.plant_family?.description},&nbsp; 
                    {this.props.result?.plant_species?.description} 
                </p>
                <p className="mb-1">
                    <b>Plant Organ: </b>{this.props.result?.plant_organ?.organ}
                </p>
                <p className="mb-1">
                  <b>Extraction Method: </b>{this.props.result?.extraction_method?.description}
                </p>
                <p className="mb-1">
                  <b>Solvent: </b>{this.props.result?.solvent?.description}
                </p>
                <p className="mb-1">
                  <b>Yield: </b>{this.props.result?.extraction_yield ? this.props.result?.extraction_yield : "None"}
                </p>
                <p className="mb-1">
                  <b>Coordinates: </b>{this.props.result?.address ? "Lat: " : ""}{this.props.result?.address?.lat}
                  {this.props.result?.address ? " Long: " : ""}
                  {this.props.result?.address?.long}
                </p>
              </Row>
            </Col>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row style={{ fontSize: '14px' }}>
              <Col lg={9} className="mt-1">
                <p className='mb-0'>
                  <b style={{ color: 'var(--bs-green)' }}>{this.props.result?.availability ? "Available\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" : ""}</b>
                  <b>Collected:</b> {moment(this.props.result?.collection_date).format('DD/MM/YY')}
                </p>
              </Col>
              <Col lg={3}>
                <Button className="float-end" variant="outline-info" size="sm" onClick={() => this.setState({ modalShow: true })}>Details</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <CompostInfo
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          info={this.props.result}
        />
      </>
    )
  }
}

export default PlantCard
