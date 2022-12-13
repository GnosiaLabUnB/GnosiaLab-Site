import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import CreatableSelect from 'react-select/creatable'

import FormLabel from '../../shared/FormLabel';


class ExtratoForm extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="ID" />
                        <Form.Control type="text" placeholder="Enter ID" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Solvent" />
                        <CreatableSelect isClearable />
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Extraction method" />
                        <CreatableSelect isClearable />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Vegetation type" />
                        <Form.Control type="text" readOnly placeholder="Latitude" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="City" />
                        <Form.Control type="text" readOnly placeholder="City" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="State" />
                        <Form.Control type="text" readOnly placeholder="State" />
                    </Form.Group>
                </Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Informações da Planta</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mt-2'>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Organ" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Species" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Family" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Informações de Deposito e Coleta</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mt-2'>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Herbarium Code" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Deposit Number" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Colector Number" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Colector Name" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Informações de Composto</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mt-2'>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Compound name" />
                                    <Form.Control type="text" placeholder="Enter compound name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="SMILE" />
                                    <CreatableSelect isClearable />
                                </Form.Group>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button className='float-end mt-4' variant="primary" type="submit">
                    Submit
                </Button>
            </>
        )
    }
}

export default ExtratoForm;

