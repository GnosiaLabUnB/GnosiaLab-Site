
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLabel from '../../components/shared/FormLabel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import CreatableSelect from 'react-select/creatable';

class AdminSearchView extends React.Component {
    render() {
      return (
        <>
        <Row>
            <h1 style={{color: 'var(--bs-gray-800)'}}>Pesquisar</h1>
        </Row>
        <Tabs
          defaultActiveKey="search_all"
          className="mb-3 mt-3"
        >
          <Tab eventKey="search_all" title="Todos">
          <Form>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="ID"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Solvent"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
            </Row>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Informações da Planta.</Accordion.Header>
                <Accordion.Body>
                  <Row className='mt-2'>
                    <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Organ"/>
                      <CreatableSelect isClearable/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Species"/>
                      <CreatableSelect isClearable/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Family"/>
                      <CreatableSelect isClearable/>
                    </Form.Group>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Form>
            <Button className='float-end mt-4' variant="primary" type="submit">
            Submit
            </Button> 
          </Tab>
          <Tab eventKey="plantas" title="Extrato de Plantas">
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="ID"/>
                  <Form.Control type="text" placeholder="Enter ID" />
              </Form.Group>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Solvent"/>
                  <CreatableSelect isClearable/>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Extraction method"/>
                  <CreatableSelect isClearable/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Vegetation type"/>
                  <Form.Control type="text" readOnly placeholder="Latitude"/>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="City"/>
                  <Form.Control type="text" readOnly placeholder="City"/>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="State"/>
                  <Form.Control type="text" readOnly placeholder="State"/>
              </Form.Group>
            </Row>
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Informações da Planta</Accordion.Header>
                  <Accordion.Body>
                    <Row className='mt-2'>
                      <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Organ"/>
                        <CreatableSelect isClearable/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Species"/>
                        <CreatableSelect isClearable/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Family"/>
                        <CreatableSelect isClearable/>
                      </Form.Group>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Informações de Deposito e Coleta</Accordion.Header>
                  <Accordion.Body>
                    <Row className='mt-2'>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Herbarium Code"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Deposit Number"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Colector Number"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Colector Name"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Informações de Composto</Accordion.Header>
                  <Accordion.Body>
                    <Row className='mt-2'>
                      <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Compound name"/>
                        <Form.Control type="text" placeholder="Enter compound name" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="SMILE"/>
                        <CreatableSelect isClearable/>
                      </Form.Group>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button className='float-end mt-4' variant="primary" type="submit">
                Submit
            </Button>
          </Tab>
          <Tab eventKey="ext_micro" title="Extrato de Microorganismos">
          <Form>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="ID" />
                <Form.Control type="text" placeholder="Enter ID" />
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="ID Micoteca" />
                <Form.Control type="text" placeholder="Enter Code" />
              </Form.Group>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Plant Organ" />
                <CreatableSelect isClearable />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Growth Medium" />
                <Form.Control type="text" placeholder="Enter medium" />
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Solvent" />
                <Form.Control type="text" placeholder="Enter solvent" />
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Origin Matrix" />
                <CreatableSelect isClearable />
              </Form.Group>
            </Row>
          </Form>
          <Button className='float-end mt-4' variant="primary" type="submit">
            Submit
          </Button>  
          </Tab>
          <Tab eventKey="micoteca" title="Micoteca">
            <Form>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="ID"/>
                  <Form.Control type="text" placeholder="Enter ID" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Scientific name"/>
                  <CreatableSelect isClearable/>
                </Form.Group>

                <Form.Group as={Col} controlId="" className="mb-3">
                    <FormLabel label="Organism"/>
                    <CreatableSelect isClearable/>
                </Form.Group>
                                  
                <Form.Group as={Col} controlId="" className="mb-3">
                    <FormLabel label="Organism Type"/>
                    <CreatableSelect isClearable/>
                </Form.Group>
            </Row>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Informações Taxonomicas</Accordion.Header>
                <Accordion.Body>
                  <Row className='mt-2'>
                      <Form.Group as={Col} controlId="" className="mb-3">
                          <FormLabel label="Taxonomic Level"/>
                          <CreatableSelect isClearable/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="" className="mb-3">
                          <FormLabel label="Class"/>
                          <CreatableSelect isClearable/>
                      </Form.Group>
                      
                      <Form.Group as={Col} controlId="" className="mb-3">
                          <FormLabel label="Order"/>
                          <CreatableSelect isClearable/>
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="" className="mb-3">
                          <FormLabel label="Family"/>
                          <CreatableSelect isClearable/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="" className="mb-3">
                          <FormLabel label="Genus"/>
                          <CreatableSelect isClearable/>
                      </Form.Group>
                      
                      <Form.Group as={Col} controlId="" className="mb-3">
                          <FormLabel label="Species"/>
                          <CreatableSelect isClearable/>
                      </Form.Group>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Informações da Planta</Accordion.Header>
                <Accordion.Body>
                  <Row className='mt-2'>
                    <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Organ"/>
                      <CreatableSelect isClearable/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Species"/>
                      <CreatableSelect isClearable/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Family"/>
                      <CreatableSelect isClearable/>
                    </Form.Group>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
            </Form>
            <Button className='float-end mt-4' variant="primary" type="submit">
                Submit
            </Button>
          </Tab>
        </Tabs>
        </>
      )
    }
}


export default AdminSearchView;







// Vegetation type
// City
// State

