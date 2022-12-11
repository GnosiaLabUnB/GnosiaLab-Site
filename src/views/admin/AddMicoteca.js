import React from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import FormLabel from '../../components/shared/FormLabel';
import CreatableSelect from 'react-select/creatable';
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
            <h1 style={{color: 'var(--bs-gray-800)'}}>Adicionar Novo Fungo</h1>
        </Row>
        <Row className='mt-3'>
          <Form>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="ID"/>
                      <Form.Control type="text" placeholder="Enter ID" />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Code"/>
                      <Form.Control type="text" placeholder="Enter Code" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Number SP Fungi"/>
                      <Form.Control type="number" placeholder="Enter number" />
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Organism"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Organism Type"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Tratamento"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Coleta"/>
                      <Form.Control type="number" placeholder="Enter number" />
                  </Form.Group>
              </Row>
              <Row className='mt-3'>
                  <h5>Nomeclatura</h5>
              </Row>
              <Row className='mt-2'>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Nome Lab"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Scientific name"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Synonym"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
              </Row>
              <Row className='mt-3'>
                  <h5>Informações Taxonomicas</h5>
              </Row>
              <Row className='mt-2'>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Taxonomic Level"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Class"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Order"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Family"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Genus"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Species"/>
                      <CreatableSelect isClearable/>
                  </Form.Group>
              </Row>

              <Row className='mt-3'>
                  <h5>Informações da Planta</h5>
              </Row>
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
              <Row>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Collection Date"/>
                  <Form.Control type="date" placeholder="Enter date"/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Latitude"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Longitude"/>
                  <CreatableSelect isClearable/>
                </Form.Group>
              </Row>
              <Row className='mt-3'>
                  <h5>Informações Adicionais</h5>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <FormLabel label="Comment Patricia"/>
                  <Form.Control as="textarea" rows={2}/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <FormLabel label="Comment 1"/>
                  <Form.Control as="textarea" rows={2}/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <FormLabel label="Comment 2"/>
                  <Form.Control as="textarea" rows={1}/>
                </Form.Group>
              </Row>
          </Form>
        </Row>
        </>
      )
    }
}


export default AddMicoteca;
