import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import CreatableSelect from 'react-select/creatable'
import FormLabel from '../../shared/FormLabel';

class HeaderTitle extends React.Component {
    render() {
        return (
            <>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="ID" />
                            <Form.Control type="text" placeholder="Enter ID" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Scientific name" />
                            <CreatableSelect isClearable />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Organism" />
                            <CreatableSelect isClearable />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Organism Type" />
                            <CreatableSelect isClearable />
                        </Form.Group>
                    </Row>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Informações Taxonomicas</Accordion.Header>
                            <Accordion.Body>
                                <Row className='mt-2'>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Taxonomic Level" />
                                        <CreatableSelect isClearable />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Class" />
                                        <CreatableSelect isClearable />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Order" />
                                        <CreatableSelect isClearable />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Family" />
                                        <CreatableSelect isClearable />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Genus" />
                                        <CreatableSelect isClearable />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Species" />
                                        <CreatableSelect isClearable />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
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
                    </Accordion>
                </Form>
                <Button className='float-end mt-4' variant="primary" type="submit">
                    Submit
                </Button>
            </>
        )
    }
}

export default HeaderTitle;

