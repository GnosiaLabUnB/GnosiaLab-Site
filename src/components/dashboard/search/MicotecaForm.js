import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import Select from 'react-select';
import FormLabel from '../../shared/FormLabel';

import * as shared from '../../../services/shared.js';

class HeaderTitle extends React.Component {

    constructor(props) {
        super(props);
        this.species_select_ref = React.createRef();
        this.organism_type_ref = React.createRef();

        this.fungus_order_ref = React.createRef();
        this.fungus_family_ref = React.createRef();
        this.fungus_genus_ref = React.createRef();
        this.fungus_species_ref = React.createRef();

        this.state = {
            organism_type_opt: [],
            plant_species_opt: [],
            taxonomy_lvl_opt: [],
            fungus_class_json: {},
            fungus_order: [],
            fungus_order_json: {},
            fungus_family: [],
            fungus_family_json: {},
            fungus_genus: [],
            fungus_genus_json: {},
            fungus_species: [],
        }
    }


    handleChange(e, key) {
        // REFACTOR
        if (e != null) {
            if (key === "plant_species") {
                this.species_select_ref.current.clearValue();
                let search_json = this.props.plant_family_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({plant_species_opt: new_opt});
            }  else if (key === "organism_type") {
                this.organism_type_ref.current.clearValue();
                let search_json = this.props.organisms_json
                let new_opt = shared.search_dict(e, search_json)["types"].map(shared.opt_creator)
                this.setState({organism_type_opt: new_opt});
            } else  if (key === "fungus_family") {
                this.fungus_family_ref.current.clearValue();
                this.fungus_genus_ref.current.clearValue();
                this.fungus_species_ref.current.clearValue();
                let search_json = this.state.fungus_order_json
                let new_json = shared.search_dict(e, search_json)["family"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({fungus_family: new_opt, fungus_family_json: new_json});
            } else if (key === "fungus_order") {
                this.fungus_order_ref.current.clearValue();
                this.fungus_family_ref.current.clearValue();
                this.fungus_genus_ref.current.clearValue();
                this.fungus_species_ref.current.clearValue();
                let search_json = this.props.fungus_class_json
                let new_json = shared.search_dict(e, search_json)["order"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({fungus_order: new_opt, fungus_order_json: new_json});
            } else if (key === "fungus_genus") {
                this.fungus_genus_ref.current.clearValue();
                this.fungus_species_ref.current.clearValue();
                let search_json = this.state.fungus_family_json
                let new_json = shared.search_dict(e, search_json)["genus"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({fungus_genus: new_opt, fungus_genus_json: new_json});
            } else if (key === "fungus_species") {
                this.fungus_species_ref.current.clearValue();
                let search_json = this.state.fungus_genus_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({fungus_species: new_opt});
            }
        } 
      };


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
                            <Select isClearable 
                                isDisabled={!this.props.scientific_name.length}
                                options={this.props.scientific_name}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Organism"/>
                            <Select isClearable
                                options={this.props.organisms}
                                onChange={(e) => this.handleChange(e, "organism_type")}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="" className="mb-3">
                            <FormLabel label="Organism Type"/>
                            <Select isClearable 
                                ref={this.organism_type_ref}
                                isDisabled={!this.state.organism_type_opt.length}
                                options={this.state.organism_type_opt}
                            />
                        </Form.Group>
                    </Row>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Informações Taxonomicas</Accordion.Header>
                            <Accordion.Body>
                                <Row className='mt-2'>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Taxonomic Level" />
                                        <Select isClearable options={this.props.taxonomic_lvl}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Class" />
                                        <Select isClearable 
                                            options={this.props.fungus_class}
                                            onChange={(e) => this.handleChange(e, "fungus_order")}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Order" />
                                        <Select isClearable 
                                            ref={this.fungus_order_ref}
                                            isDisabled={!this.state.fungus_order.length}
                                            options={this.state.fungus_order}
                                            onChange={(e) => this.handleChange(e, "fungus_family")}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Family" />
                                        <Select isClearable 
                                            ref={this.fungus_family_ref}
                                            isDisabled={!this.state.fungus_family.length}
                                            options={this.state.fungus_family}
                                            onChange={(e) => this.handleChange(e, "fungus_genus")}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Genus" />
                                        <Select isClearable 
                                            ref={this.fungus_genus_ref}
                                            isDisabled={!this.state.fungus_genus.length}
                                            options={this.state.fungus_genus}
                                            onChange={(e) => this.handleChange(e, "fungus_species")}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="" className="mb-3">
                                        <FormLabel label="Species" />
                                        <Select isClearable 
                                            ref={this.fungus_species_ref}
                                            isDisabled={!this.state.fungus_species.length}
                                            options={this.state.fungus_species}
                                        />
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
                                            isDisabled={!this.state.plant_species_opt.length}
                                            options={this.state.plant_species_opt}
                                        />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Form>
                <Button className='float-end mt-4' variant="primary" type="submit">
                    Search
                </Button>
            </>
        )
    }
}

export default HeaderTitle;

