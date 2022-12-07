import React from 'react';
import AddCard from '../../components/dashboard/AddCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class AddView extends React.Component {
    render() {
      return (
        <Container fluid className="h-100 p-3">
            <Row className="h-100">
                <Col xl={4} className="my-auto">
                    <AddCard variant="Micoteca" to="/admin/add/micoteca"/>
                </Col>
                <Col xl={4} className="my-auto">
                    <AddCard variant="Extratos" to="/admin/add/extrato"/>
                </Col>
                <Col xl={4} className="my-auto">
                    <AddCard variant="Fungos" to="/admin/add/fungo"/>
                </Col>
            </Row>
        </Container>
      )
    }
}


export default AddView;

