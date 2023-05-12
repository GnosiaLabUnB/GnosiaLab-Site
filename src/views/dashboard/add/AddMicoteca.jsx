import React from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import CreatableSelect from 'react-select/creatable';

import {API_PATHS, get_all} from 'src/services/base'
import * as shared from 'src/services/shared'

class AddMicoteca extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      treatments_opt: [],
      name_lab_opt: [],
      organisms_opt: [],
      nomeclature_opt: [],
      organisms_types_opt: [],
      plant_family_opt: [],
      plant_organ_opt: [],
      plant_species_opt: [],
      fungus_class_opt: [],
      fungus_family_opt: [],
      fungus_species_opt: [],
      fungus_genus_opt: [],
      fungus_order_opt: [],
      taxonomy_lvl_opt: [],
      geolocation_opt: [],
      organisms_json: {},
      plant_family_json: {},
      nomeclature_json: {},
      fungus_class_json: {},
      fungus_family_json: {},
      fungus_genus_json: {},
      fungus_order_json: {},
      synonym_value: ''
    }
  }

  async componentDidMount() {
    let treatments_json = await get_all(API_PATHS.treatments)
    let treatments_opt = treatments_json.map(shared.opt_creator)

    let name_lab_json = await get_all(API_PATHS.name_lab)
    let name_lab_opt = name_lab_json.map(shared.opt_creator)

    let organisms_json = await get_all(API_PATHS.organism)
    let organisms_opt = organisms_json.map(shared.opt_creator)

    let nomeclature_json = await get_all(API_PATHS.nomeclature)
    let nomeclature_opt = nomeclature_json.map(shared.opt_creator_nomeclature)

    let geolocation_json = await get_all(API_PATHS.geolocation)
    let geolocation_opt = geolocation_json.map(shared.opt_creator_geo)

    let plant_family_json = await get_all(API_PATHS.plant_family)
    let plant_family_opt = plant_family_json.map(shared.opt_creator)

    let plant_organ_json = await get_all(API_PATHS.plant_organ)
    let plant_organ_opt = plant_organ_json.map(shared.opt_creator_organ)
    
    let fungus_class_json = await get_all(API_PATHS.fungi_class)
    let fungus_class_opt = fungus_class_json.map(shared.opt_creator)

    let taxonomy_lvl_json = await get_all(API_PATHS.taxonomy_lvl)
    let taxonomy_lvl_opt = taxonomy_lvl_json.map(shared.opt_creator)

    
    this.setState({
      organisms_json: organisms_json,
      nomeclature_json: nomeclature_json,
      plant_family_json: plant_family_json,
      fungus_class_json: fungus_class_json,
      treatments_opt: treatments_opt,
      name_lab_opt: name_lab_opt,
      organisms_opt: organisms_opt,
      nomeclature_opt: nomeclature_opt,
      plant_family_opt: plant_family_opt,
      plant_organ_opt: plant_organ_opt,
      taxonomy_lvl_opt: taxonomy_lvl_opt,
      fungus_class_opt: fungus_class_opt,
      geolocation_opt: geolocation_opt
    })
  }

  handleChange(e, key) {
    if (e != null) {
      if (key === "types") {
        let search_json = this.state.organisms_json
        let new_opt = shared.search_dict(e, search_json)[key].map(shared.opt_creator)
        this.setState({organisms_types_opt: new_opt});

      } else if (key === "species") {
        let search_json = this.state.plant_family_json
        let new_opt = shared.search_dict(e, search_json)[key].map(shared.opt_creator)
        this.setState({plant_species_opt: new_opt});

      } else if (key === "family") {
        let search_json = this.state.fungus_order_json
        let new_json = shared.search_dict(e, search_json)[key]
        let new_opt = new_json.map(shared.opt_creator)
        this.setState({fungus_family_opt: new_opt, fungus_family_json: new_json});

      } else if (key === "order") {
        let search_json = this.state.fungus_class_json
        let new_json = shared.search_dict(e, search_json)[key]
        let new_opt = new_json.map(shared.opt_creator)
        this.setState({fungus_order_opt: new_opt, fungus_order_json: new_json});
        
      } else if (key === "genus") {
        let search_json = this.state.fungus_family_json
        let new_json = shared.search_dict(e, search_json)[key]
        let new_opt = new_json.map(shared.opt_creator)
        this.setState({fungus_genus_opt: new_opt, fungus_genus_json: new_json});
        
      } else if (key === "fungus_species") {
        let search_json = this.state.fungus_genus_json
        let new_json = shared.search_dict(e, search_json)["species"]
        let new_opt = new_json.map(shared.opt_creator)
        this.setState({fungus_species_opt: new_opt});
      }

      
    } 
  };

  setSynonymValue(e) {
    if (e != null) {
      this.setState({synonym_value: shared.search_dict(e, this.state.nomeclature_json)["synonym"]});
    } 
  };


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
                      <CreatableSelect isClearable 
                                       options={this.state.organisms_opt}
                                       onChange={(e) => this.handleChange(e, "types")}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Organism Type"/>
                      <CreatableSelect isClearable options={this.state.organisms_types_opt}/>
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Tratamento"/>
                      <CreatableSelect isClearable options={this.state.treatments_opt}/>
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
                  <CreatableSelect isClearable options={this.state.name_lab_opt}/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Scientific name"/>
                  <CreatableSelect isClearable 
                                   options={this.state.nomeclature_opt}
                                   onChange={(e) => this.setSynonymValue(e)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Synonym"/>
                  <Form.Control type="text" placeholder="Select scientific name" disabled value={this.state.synonym_value}/>
                </Form.Group>
              </Row>
              <Row className='mt-3'>
                  <h5>Informações Taxonomicas</h5>
              </Row>
              <Row className='mt-2'>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Taxonomic Level"/>
                      <CreatableSelect isClearable options={this.state.taxonomy_lvl_opt}/>
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Class"/>
                      <CreatableSelect isClearable
                                       options={this.state.fungus_class_opt}
                                       onChange={(e) => this.handleChange(e, "order")}/>
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Order"/>
                      <CreatableSelect isClearable 
                                       options={this.state.fungus_order_opt}
                                       onChange={(e) => this.handleChange(e, "family")}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Family"/>
                      <CreatableSelect isClearable
                                       options={this.state.fungus_family_opt}
                                       onChange={(e) => this.handleChange(e, "genus")}/>
                  </Form.Group>
              </Row>
              <Row>
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Genus"/>
                      <CreatableSelect isClearable
                                       options={this.state.fungus_genus_opt}
                                       onChange={(e) => this.handleChange(e, "fungus_species")}/>
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="" className="mb-3">
                      <FormLabel label="Species"/>
                      <CreatableSelect isClearable options={this.state.fungus_species_opt}/>
                  </Form.Group>
              </Row>
              <Row className='mt-3'>
                  <h5>Informações da Planta</h5>
              </Row>
              <Row className='mt-2'>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Organ"/>
                  <CreatableSelect isClearable options={this.state.plant_organ_opt}/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Family"/>
                  <CreatableSelect isClearable
                                   options={this.state.plant_family_opt}
                                   onChange={(e) => this.handleChange(e, "species")}/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Species"/>
                  <CreatableSelect isClearable options={this.state.plant_species_opt}/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Collection Date"/>
                  <Form.Control type="date" placeholder="Enter date"/>
                </Form.Group>
                <Form.Group as={Col} controlId="" className="mb-3">
                  <FormLabel label="Latitude/Longitude"/>
                  <CreatableSelect isClearable options={this.state.geolocation_opt}/>
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
