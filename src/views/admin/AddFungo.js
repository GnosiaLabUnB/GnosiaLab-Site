import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CreatableSelect from 'react-select/creatable';

import FormLabel from '../../components/shared/FormLabel';

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
          <h1 style={{ color: 'var(--bs-gray-800)' }}>Adicionar Extrato de Microorganismos</h1>
        </Row>
        <Form className="mt-3">
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="ID" />
              <Form.Control type="text" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="ID Micoteca" />
              <Form.Control type="text" placeholder="Enter Code" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Growth Medium" />
              <Form.Control type="text" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Growth Condition" />
              <Form.Control type="text" placeholder="Enter Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Origin Matrix" />
              <CreatableSelect isClearable />
            </Form.Group>
          </Row>
          <Row>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Plant Organ" />
              <CreatableSelect isClearable />
            </Form.Group>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Solvent" />
              <CreatableSelect isClearable />
            </Form.Group>

          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Extraction Year" />
              <Form.Control type="number" placeholder="Enter Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Mass (mg)" />
              <Form.Control type="number" placeholder="Enter Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Availability" />
              <CreatableSelect isClearable />
            </Form.Group>
          </Row>
          <Row className='mt-3'>
            <h5>Informações de Controle do Laboratório</h5>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Location" />
              <Form.Control type="text" placeholder="Enter Code" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Extract Code" />
              <Form.Control type="text" placeholder="Enter Code" />
            </Form.Group>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Endophytic Fungi Code" />
              <Form.Control type="text" placeholder="Enter ID" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Comments" />
              <Form.Control type="textarea" placeholder="Enter Code" />
            </Form.Group>
          </Row>
        </Form>
      </>
    )
  }
}


export default AddFungo;