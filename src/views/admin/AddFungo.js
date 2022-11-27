import React from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class AddFungo extends React.Component {
    render() {
      return (
        <>
        <Row>
            <Breadcrumb>
                <Breadcrumb.Item href="/admin/add">Adicionar</Breadcrumb.Item>
                <Breadcrumb.Item active>Fungo</Breadcrumb.Item>
            </Breadcrumb>
        </Row>
        <Row>
            <h1 style={{color: 'var(--bs-gray-800)'}}>Adicionar Fungo</h1>
        </Row>
        </>
      )
    }
}


export default AddFungo;

