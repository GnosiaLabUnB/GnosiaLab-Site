import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';

import Select from 'react-select';
import FormLabel from '../../shared/FormLabel';

import * as shared from '../../../services/shared.js';


class AllForm extends React.Component {

    constructor(props) {
        super(props);
        this.species_select_ref = React.createRef();
        this.state = {
            plant_species_opt: []
        }
    }

    handleChange(e, key) {
        if (e != null) {
            if (key === "plant_species") {
                console.log(this.species_select_ref.current)
                this.species_select_ref.current.clearValue();
                let search_json = this.props.plant_family_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({plant_species_opt: new_opt});
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
                            <FormLabel label="Solvent" />
                            <Select isClearable options={this.props.solvent}/>
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
                                            isDisabled={!this.state.plant_species_opt.length}
                                            options={this.state.plant_species_opt}/>
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

export default AllForm;



