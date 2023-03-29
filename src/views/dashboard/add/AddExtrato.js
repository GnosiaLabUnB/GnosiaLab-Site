import React from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col'


import Form from 'react-bootstrap/Form'
import FormLabel from '../../../components/shared/FormLabel';
import CreatableSelect from 'react-select/creatable';


import * as ext_services from '../../../services/extract_info.js'
import * as shared_services from '../../../services/shared_info'
import * as shared from '../../../services/shared.js'



class AddExtrato extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          origin_opt: [],
          taxonomic_sys_opt: [],
          soil_opt: [],
          ext_method_opt: [],
          solvent_opt: [],
          plant_organ_opt: [],
          address_opt: [],
          full_address_json: {},
          address_json: {
            "lat": '', "long": '', "city": '', "state": ''
          },
          availability_opt: [
            {id: 0, label: "Unavailable"},
            {id: 1, label: "Available"}
          ]
        }
      }
    
      async componentDidMount() {
        let origin_json = await ext_services.get_all_origin()
        let taxonomic_sys_json = await ext_services.get_all_taxonomic_sys()
        let soil_json = await ext_services.get_all_soil()
        let ext_method_json = await ext_services.get_all_extract_method()
        let solvent_json = await shared_services.get_all_solvents()
        let plant_organ_json = await shared_services.get_all_plant_organ()
        let full_address_json = await ext_services.get_all_addresses()
        
        let address_opt = full_address_json.map(shared.opt_creator_address)
        let solvent_opt = solvent_json.map(shared.opt_creator)
        let plant_organ_opt = plant_organ_json.map(shared.opt_creator_organ)
        let origin_opt = origin_json.map(shared.opt_creator)
        let taxonomic_sys_opt = taxonomic_sys_json.map(shared.opt_creator)
        let ext_method_opt = ext_method_json.map(shared.opt_creator)
        let soil_opt = soil_json.map(shared.opt_creator)
       
    
        this.setState({
            origin_opt: origin_opt,
            taxonomic_sys_opt: taxonomic_sys_opt,
            ext_method_opt: ext_method_opt,
            soil_opt: soil_opt,
            solvent_opt: solvent_opt,
            plant_organ_opt: plant_organ_opt,
            address_opt: address_opt,
            full_address_json: full_address_json
        })
      }


    setAddressJson(e) {
        if (e != null) {
            this.setState({address_json: shared.search_dict(e, this.state.full_address_json)});
        } 
    };

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
                            <CreatableSelect isClearable options={this.state.origin_opt} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Type of Sample"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Family"/>
                            <CreatableSelect isClearable/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Species"/>
                            <CreatableSelect isClearable isDisabled/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Taxonomic classification sytem"/>
                            <CreatableSelect isClearable options={this.state.taxonomic_sys_opt}/>
                        </Form.Group>
                    </Row>             
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Plant organ"/>
                            <CreatableSelect isClearable options={this.state.plant_organ_opt}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Solvent"/>
                            <CreatableSelect isClearable options={this.state.solvent_opt}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Extraction method"/>
                            <CreatableSelect isClearable options={this.state.ext_method_opt}/>
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
                            <CreatableSelect isClearable options={this.state.availability_opt} />
                        </Form.Group>
                    </Row>   
                    <Row className='mt-3'>
                        <h5>Endereço de Coleta</h5>
                    </Row>
                    <Row className='mt-2'>
                        <Form.Group controlId="" className="mb-3">
                            <FormLabel label="Location Name"/>
                            <CreatableSelect isClearable 
                                   options={this.state.address_opt}
                                   onChange={(e) => this.setAddressJson(e)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Latitude"/>
                            <Form.Control type="text" placeholder="Select address" disabled value={this.state.address_json["lat"]}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Longitude"/>
                            <Form.Control type="text" placeholder="Select address" disabled value={this.state.address_json["long"]}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="City"/>
                            <Form.Control type="text" placeholder="Select address" disabled value={this.state.address_json["city"]}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="State"/>
                            <Form.Control type="text" placeholder="Select address" disabled value={this.state.address_json["state"]}/>
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
                            <CreatableSelect isClearable options={this.state.soil_opt} />
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