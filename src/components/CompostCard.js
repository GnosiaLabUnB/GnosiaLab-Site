import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CompostInfo from './CompostInfo';

class MemberCard extends React.Component {

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
              <Card.Title>{this.props.result?.code} - Plant Extract</Card.Title>
              <Row className="mt-2" style={{fontSize: '14px', paddingBottom: '0'}}>
                <Col lg={5}>
                  <Row>
                    <p className="mb-1">
                      <b>Species: </b>{this.props.result?.species}
                    </p>
                    <p className="mb-1">
                      <b>Organ: </b>{this.props.result?.organ}
                    </p>
                  </Row>
                </Col>
                <Col lg={4}>
                  <Row>
                    <p className="mb-1">
                      <b>Solvent: </b>{this.props.result?.solvent}
                    </p>
                    <p className="mb-1">
                      <b>Method: </b>{this.props.result?.extraction_method}
                    </p>
                  </Row>
                </Col>
                <Col lg={3}>
                  <Row>
                    <p className="mb-1">
                      <b>Lat: </b>{this.props.result?.address?.lat.toFixed(6)}
                    </p>
                    <p className="mb-1">
                      <b>Long: </b> {this.props.result?.address?.long.toFixed(6)}
                    </p>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Row style={{fontSize: '14px'}}>
                <Col lg={5} className="mt-1">
                <b>Collection Date:</b> {this.props.result?.collection_date}
                </Col>
                <Col lg={4} className="mt-1" style={{color: 'var(--bs-green)'}}>
                  <b>{this.props.result?.availability}</b>
                </Col>
                <Col lg={2}>
                  <Button variant="outline-info" size="sm" onClick={() => this.setState({modalShow: true})}>Details</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>

          <CompostInfo
            show={this.state.modalShow}
            onHide={() => this.setState({modalShow: false})}
            info={this.props.result}
          />
          </>
        )
    }
}

export default MemberCard
