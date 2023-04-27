import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import Select from 'react-select';
import FormLabel from '../../shared/FormLabel';

import * as shared from '../../../services/shared.js';
import * as search from '../../../services/search.js';

import { Formik } from 'formik';
import * as yup from 'yup';

const react_select_schema = yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required(),
})

const schema = yup.object().shape({
    search_id: yup.string().nullable(),
    solvent: react_select_schema.nullable(),
    plant_organ: react_select_schema.nullable(),
    plant_family: react_select_schema.nullable(),
    plant_species: react_select_schema.nullable(),
});

class AllForm extends React.Component {

    constructor(props) {
        super(props);
        this.species_select_ref = React.createRef();
        this.state = {
            plant_species_opt: [],
            radioValue: "1"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, key) {
        if (e != null) {
            if (key === "plant_species") {
                console.log(this.species_select_ref.current)
                this.species_select_ref.current.clearValue();
                let search_json = this.props.plant_family_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ plant_species_opt: new_opt });
            }
        }
    };


    async handleSubmit(schema) {
        console.log("Searching for all com o schema:");
        console.log(schema);
        let result_json = await search.search_all(schema);
        this.props.searchViewCallback(result_json);
    }


    render() {
        let formclass = "mb-3"
        const radios = [
            { name: 'AND Search', value: '1' },
            { name: 'OR Search', value: '2' },
          ];
        return (
            <Formik
                validationSchema={schema}
                onSubmit={this.handleSubmit}
                initialValues={{
                    search_id: '',
                    solvent: null,
                    plant_organ: null,
                    plant_family: null,
                    plant_species: null,
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} className={formclass}>
                            <FormLabel label="ID" />
                            <Form.Control 
                                type="text" 
                                name="search_id"
                                value={values.search_id}
                                onChange={handleChange}
                                placeholder="Enter ID" />
                        </Form.Group>
                        <Form.Group as={Col} className={formclass}>
                            <FormLabel label="Solvent" />
                            <Select isClearable 
                                name="solvent"
                                value={values.solvent}
                                onChange={
                                    async (e) =>
                                    await setFieldValue('solvent', e)
                                }
                                options={this.props.solvent} />
                        </Form.Group>
                    </Row>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Informações da Planta</Accordion.Header>
                            <Accordion.Body>
                                <Row className='mt-2'>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Organ" />
                                        <Select isClearable 
                                            name="plant_organ"
                                            value={values.plant_organ}
                                            onChange={
                                                async (e) =>
                                                await setFieldValue('plant_organ', e)
                                            }
                                            options={this.props.plant_organ}/>
                                    </Form.Group>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Family" />
                                        <Select isClearable
                                            name="plant_family"
                                            value={values.plant_family}
                                            onChange={
                                                async (e) => {
                                                    await setFieldValue('plant_family', e)
                                                    this.handleChange(e, "plant_species")
                                                }
                                            }
                                            options={this.props.plant_family}/>
                                    </Form.Group>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Species" />
                                        <Select isClearable
                                            name="plant_species"
                                            value={values.plant_species}
                                            onChange={
                                                async (e) =>
                                                await setFieldValue('plant_species', e)
                                            }
                                            ref={this.species_select_ref}
                                            isDisabled={!this.state.plant_species_opt.length}
                                            options={this.state.plant_species_opt} />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row>
                        <Col lg={6}>
                            <ButtonGroup key={"all_form_search"} className='float-start mt-3' style={{zIndex: '0'}}>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                key={"a" + idx}
                                id={`radio-a${idx}`}
                                type="radio"
                                variant={'outline-secondary'}
                                name="radio"
                                value={radio.value}
                                checked={this.state.radioValue === radio.value}
                                onChange={(e) => this.setState({radioValue: e.currentTarget.value})}
                                >
                                {radio.name}
                                </ToggleButton>
                            ))}
                            </ButtonGroup>
                        </Col>
                        <Col lg={6}>
                            <Button className='float-end mt-3' variant="primary" type="submit">
                            Search
                            </Button>
                        </Col>
                        </Row>
                </Form>
                )}
            </Formik>
        )
    }
}

export default AllForm;



