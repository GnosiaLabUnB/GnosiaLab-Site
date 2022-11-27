import React from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class AddMicoteca extends React.Component {
    render() {
      return (
        <>
        <Row>
            <Breadcrumb>
                <Breadcrumb.Item href="/admin/add">Adicionar</Breadcrumb.Item>
                <Breadcrumb.Item active>Micoteca</Breadcrumb.Item>
            </Breadcrumb>
        </Row>
        <Row>
            <h1 style={{color: 'var(--bs-gray-800)'}}>Adicionar Micoteca</h1>
        </Row>
        </>
      )
    }
}


export default AddMicoteca;

