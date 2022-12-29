import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CreatableSelect from 'react-select/creatable';

import FormLabel from '../../../components/shared/FormLabel';

import * as fi_services from '../../../services/fungus_info.js'
import * as shared_services from '../../../services/shared_info'
import * as shared from '../../../services/shared.js'

class AddFungo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      growth_condition_opt: [],
      growth_medium_opt: [],
      locations_opt: [],
      origin_matrix_opt: [],
      solvent_opt: [],
      plant_organ_opt: [],
      availability_opt: [
        {id: 0, label: "Unavailable"},
        {id: 1, label: "Available"}
      ]
    }
  }

  async componentDidMount() {
    let growth_condition_json = await fi_services.get_all_growth_condition()
    let growth_medium_json = await fi_services.get_all_growth_medium()
    let locations_json = await fi_services.get_all_locations()
    let origin_matrix_json = await fi_services.get_all_origin_matrix()
    let solvent_json = await shared_services.get_all_solvents()
    let plant_organ_json = await shared_services.get_all_plant_organ()
    
    let solvent_opt = solvent_json.map(shared.opt_creator)
    let plant_organ_opt = plant_organ_json.map(shared.opt_creator_organ)
    let growth_condition_opt = growth_condition_json.map(shared.opt_creator)
    let growth_medium_opt = growth_medium_json.map(shared.opt_creator)
    let locations_opt = locations_json.map(shared.opt_creator)
    let origin_matrix_opt = origin_matrix_json.map(shared.opt_creator)
    
    console.log(plant_organ_opt)
    this.setState({
      growth_condition_opt: growth_condition_opt,
      growth_medium_opt: growth_medium_opt,
      locations_opt: locations_opt,
      origin_matrix_opt: origin_matrix_opt,
      solvent_opt: solvent_opt,
      plant_organ_opt: plant_organ_opt
    })
  }

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
              <CreatableSelect isClearable options={this.state.growth_medium_opt}/>
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Growth Condition" />
              <CreatableSelect isClearable options={this.state.growth_condition_opt}/>
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Origin Matrix" />
              <CreatableSelect isClearable options={this.state.origin_matrix_opt}/>
            </Form.Group>
          </Row>
          <Row>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Plant Organ" />
              <CreatableSelect isClearable options={this.state.solvent_opt}/>
            </Form.Group>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Solvent" />
              <CreatableSelect isClearable options={this.state.solvent_opt}/>
            </Form.Group>

          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Extraction Year" />
              <Form.Control type="number" placeholder="Enter year" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Mass (mg)" />
              <Form.Control type="number" placeholder="Enter ammount" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Availability" />
              <CreatableSelect isClearable options={this.state.availability_opt}/>
            </Form.Group>
          </Row>
          <Row className='mt-3'>
            <h5>Informações de Controle do Laboratório</h5>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Location" />
              <CreatableSelect isClearable options={this.state.locations_opt}/>
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Extract Code" />
              <Form.Control type="text" placeholder="Enter Code" />
            </Form.Group>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Endophytic Fungi Code" />
              <Form.Control type="text" placeholder="Enter Code" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="" className="mb-3">
              <FormLabel label="Comments" />
              <Form.Control type="textarea" rows={2}/>
            </Form.Group>
          </Row>
        </Form>
      </>
    )
  }
}


export default AddFungo;