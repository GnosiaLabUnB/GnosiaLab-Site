import React from 'react';

import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col';
import Card  from 'react-bootstrap/Card';
import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';


class DashView extends React.Component {
    render() {
      return (
        <>
        <HeaderTitle title="Dashboard"/>
        <Row className="mt-5" style={{height: '35vh'}}>
          <Col xl={6}>
            <Card className="me-5 w-100 h-100">
              <Card.Header as="h5">Alterações Recentes</Card.Header>
              <Card.Body>
                
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6}>
          <Card className="w-100 h-100">
            <Card.Header as="h5">Informações do Servidor</Card.Header>
            <Card.Body>
              
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row className="mt-5" style={{height: '35vh'}}>
          <Col xl={6}>
          <Card className="w-100 h-100">
            <Card.Header as="h5">Informações da Base</Card.Header>
            <Card.Body>
              
            </Card.Body>
          </Card>
          </Col>
          <Col xl={6}>
          <Card className="w-100 h-100">
            <Card.Header as="h5">Informações da Base</Card.Header>
            <Card.Body>
              
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </>

      )
    }
}


export default DashView;

