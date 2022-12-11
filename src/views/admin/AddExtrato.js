import React from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col'


import Form from 'react-bootstrap/Form'
import FormLabel from '../../components/shared/FormLabel';
import CreatableSelect from 'react-select/creatable';


const temp_origin_opt = [
    { value: 'Laboratorio_Farmacognosia_UnB', label: 'Laboratorio Farmacognosia UnB' },
  ]

const temp_sampletype_opt = [
    { value: 'extract', label: 'Extract' },
    { value: 'Essential Oil', label: 'Essential Oil' }
  ]


class AddExtrato extends React.Component {
    render() {
      return (
        <>
            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item href="/admin/add">Adicionar</Breadcrumb.Item>
                    <Breadcrumb.Item active>Extrato</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row>
                <h1 style={{color: 'var(--bs-gray-800)'}}>Adicionar Extrato de Plantas</h1>
            </Row>
            <Row className='mt-3'>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="ID"/>
                            <Form.Control type="text" placeholder="Enter ID" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="CÓDIGO DO BANCO"/>
                            <Form.Control type="text" placeholder="Enter ID" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Origin"/>
                            <CreatableSelect isClearable options={temp_origin_opt} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Type of Sample"/>
                            <CreatableSelect isClearable options={temp_sampletype_opt} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Family"/>
                            <CreatableSelect isClearable options={temp_sampletype_opt} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Species"/>
                            <CreatableSelect isClearable isDisabled options={temp_sampletype_opt} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Taxonomic classification sytem"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                    </Row>             
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Plant organ"/>
                            <CreatableSelect isClearable options={temp_sampletype_opt} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Solvent"/>
                            <CreatableSelect isClearable isDisabled options={temp_sampletype_opt} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Extraction method"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                    </Row>   
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Colection Date"/>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Extraction Yield"/>
                            <Form.Control type="number" placeholder="Yield of the extraction" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Availability"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                    </Row>   
                    <Row className='mt-3'>
                        <h5>Endereço de Coleta</h5>
                    </Row>
                    <Row className='mt-2'>
                        <Form.Group controlId="" className="mb-3">
                            <FormLabel label="Location Name"/>
                            <CreatableSelect isClearable options={temp_sampletype_opt} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Latitude"/>
                            <Form.Control type="text" readOnly placeholder="Latitude"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Longitude"/>
                            <Form.Control type="text" readOnly placeholder="Longitude"/>
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
                    <Row className='mt-3'>
                        <h5>Vegetação e Solo</h5>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Vegetation type"/>
                            <Form.Control type="text" readOnly placeholder="Latitude"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Vegetation (English)"/>
                            <Form.Control type="text" readOnly placeholder="Longitude"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Vegetation (Local)"/>
                            <Form.Control type="text" readOnly placeholder="City"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Vegetation Notes"/>
                            <Form.Control type="textarea" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Soil Type"/>
                            <Form.Control type="textarea" />
                        </Form.Group>
                    </Row>
                    <Row className='mt-3'>
                        <h5>Informações de Controle do Laboratório</h5>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Herbarium Code"/>
                            <Form.Control type="textarea" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Deposit Number"/>
                            <Form.Control type="textarea" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Related Codes"/>
                            <Form.Control type="textarea" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Colector Number"/>
                            <Form.Control type="textarea" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Colector Name"/>
                            <Form.Control type="textarea" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <FormLabel label="Comments"/>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                    </Row>
                        
                        

                    <Form.Group controlId="" className="mb-3">
                    
                    
                        

                    </Form.Group>
                </Form>  
            </Row>
        </>
      )
    }
}


export default AddExtrato;