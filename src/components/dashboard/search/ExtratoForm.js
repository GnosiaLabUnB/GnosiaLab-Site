import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable'


import FormLabel from '../../shared/FormLabel';

import * as shared from '../../../services/shared.js'

class ExtratoForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.species_select_ref = React.createRef();
        this.collector_ref = React.createRef();
        this.deposit_ref = React.createRef();
        
        this.deposit_opt = props.deposit_opt
        this.collector_opt = props.collector_opt

        this.state = {
            plant_species: [],
            deposit_opt: props.deposit_opt,
            collector_opt: props.collector_opt
        }
    }

    handleChange(e, key) {
        if (e != null) {
            if (key === "plant_species") {
                this.species_select_ref.current.clearValue();
                let search_json = this.props.plant_family_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({plant_species: new_opt});
            } else if (key === "deposit_change") {
                let search_json = this.props.deposit_json
                let new_json = shared.search_dict(e, search_json)["collector"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({collector_opt: new_opt});
            } else if (key === "collector_change") {
                let search_json = this.props.collector_json
                let new_json = shared.search_dict(e, search_json)["deposit"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({deposit_opt: new_opt});
            }  
        } 
    };


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
                        <Select isClearable options={this.props.solvent}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Extraction method" />
                        <Select isClearable options={this.props.ext_method}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="Vegetation type" />
                        <Select isClearable options={this.props.vegetation}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="City" />
                        <Select isClearable options={this.props.address_city}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="" className="mb-3">
                        <FormLabel label="State" />
                        <Select isClearable options={this.props.address_state}/>
                    </Form.Group>
                </Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Informações da Planta</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mt-2'>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Organ" />
                                    <Select isClearable options={this.props.plant_organ}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Family" />
                                    <Select isClearable 
                                        options={this.props.plant_family}
                                        onChange={(e) => this.handleChange(e, "plant_species")}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Species" />
                                    <Select isClearable 
                                        ref={this.species_select_ref}
                                        isDisabled={!this.state.plant_species.length}
                                        options={this.state.plant_species}
                                    />
                                </Form.Group>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Informações de Deposito e Coleta</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mt-2'>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Deposit Number"/>
                                    <Select isClearable 
                                        ref={this.deposit_ref}
                                        options={this.state.deposit_opt}
                                        onChange={(selectedOption, triggeredAction) => {
                                                if (triggeredAction.action === 'clear') {
                                                  this.setState({
                                                    collector_opt: this.collector_opt
                                                  });
                                                } else {
                                                    this.handleChange(selectedOption, "deposit_change")
                                                }}}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Collector Number"/>
                                    <Select isClearable 
                                        ref={this.collector_ref}
                                        options={this.state.collector_opt}
                                        onChange={(selectedOption, triggeredAction) => {
                                            if (triggeredAction.action === 'clear') {
                                              this.setState({
                                                deposit_opt: this.deposit_opt,
                                              });
                                            } else {
                                                this.handleChange(selectedOption, "collector_change")
                                            }}}
                                        />
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Herbarium Code" />
                                    <Select isClearable 
                                        options={this.props.herbarium}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="" className="mb-3">
                                    <FormLabel label="Colector Name" />
                                    <Select isClearable 
                                        options={this.props.collector_name}/>
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
                                    <Select isClearable 
                                        isDisabled={!this.props.compound_name.length}
                                        options={this.props.compound_name}/>
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
                    Search
                </Button>
            </>
        )
    }
}

export default ExtratoForm;

