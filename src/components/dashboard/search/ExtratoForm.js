import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import Select from 'react-select';
import FormLabel from '../../shared/FormLabel';

import * as shared from '../../../services/shared.js'
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
    extract_method: react_select_schema.nullable(),
    veg_type: react_select_schema.nullable(),
    city: react_select_schema.nullable(),
    state: react_select_schema.nullable(),
    plant_organ: react_select_schema.nullable(),
    plant_family: react_select_schema.nullable(),
    plant_species: react_select_schema.nullable(),
    deposit_number: react_select_schema.nullable(),
    collector_number: react_select_schema.nullable(),
    herbarium: react_select_schema.nullable(),
    collector_name: react_select_schema.nullable(),
    compound_name: react_select_schema.nullable(),
    smile: react_select_schema.nullable()
});


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
            collector_opt: props.collector_opt,
            radioValue: '1'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e, key) {
        if (e != null) {
            if (key === "plant_species") {
                this.species_select_ref.current.clearValue();
                let search_json = this.props.plant_family_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ plant_species: new_opt });
            } else if (key === "deposit_change") {
                let search_json = this.props.deposit_json
                let new_json = shared.search_dict(e, search_json)["collector"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ collector_opt: new_opt });
            } else if (key === "collector_change") {
                let search_json = this.props.collector_json
                let new_json = shared.search_dict(e, search_json)["deposit"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ deposit_opt: new_opt });
            }
        }
    };

    async handleSubmit(schema) {
        console.log("Searching for extratos de plantas com o schema:");
        console.log(schema);
        let result_json = await search.search_extract(schema);
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
                    extract_method: null,
                    veg_type: null,
                    city: null,
                    state: null,
                    plant_organ: null,
                    plant_family: null,
                    plant_species: null,
                    deposit_number: null,
                    collector_number: null,
                    herbarium: null,
                    collector_name: null,
                    compound_name: null,
                    smile: null,
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
                                    placeholder="Enter ID"/>
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
                                    options={this.props.solvent}/>
                            </Form.Group>
                            <Form.Group as={Col} className={formclass}>
                                <FormLabel label="Extraction method" />
                                <Select isClearable
                                    name="extract_method"
                                    value={values.extract_method}
                                    onChange={
                                        async (e) =>
                                        await setFieldValue('extract_method', e)
                                    }
                                    options={this.props.ext_method} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} className={formclass}>
                                <FormLabel label="Vegetation type" />
                                <Select isClearable
                                    name="veg_type"
                                    value={values.veg_type}
                                    onChange={
                                        async (e) =>
                                        await setFieldValue('veg_type', e)
                                    }
                                    options={this.props.vegetation} />
                            </Form.Group>
                            <Form.Group as={Col} className={formclass}>
                                <FormLabel label="City" />
                                <Select isClearable 
                                    name="city"
                                    value={values.city}
                                    onChange={
                                        async (e) =>
                                        await setFieldValue('city', e)
                                    }
                                    options={this.props.address_city} />
                            </Form.Group>
                            <Form.Group as={Col} className={formclass}>
                                <FormLabel label="State" />
                                <Select isClearable
                                    name="state"
                                    value={values.state}
                                    onChange={
                                        async (e) =>
                                        await setFieldValue('state', e)
                                    }
                                    options={this.props.address_state} />
                            </Form.Group>
                        </Row>
                        <Accordion alwaysOpen>
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
                                            <FormLabel label="Family"/>
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
                                                isDisabled={!this.state.plant_species.length}
                                                options={this.state.plant_species}/>
                                        </Form.Group>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Informações de Deposito e Coleta</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='mt-2'>
                                        <Form.Group as={Col} className={formclass}>
                                            <FormLabel label="Deposit Number" />
                                            <Select isClearable
                                                name="deposit_number"
                                                value={values.deposit_number}
                                                onChange={
                                                    async (e, triggeredAction) => {
                                                        await setFieldValue('deposit_number', e)
                                                        if (triggeredAction.action === 'clear') {
                                                            this.setState({
                                                                collector_opt: this.collector_opt
                                                            });
                                                        } else {
                                                            this.handleChange(e, "deposit_change")
                                                        }
                                                    }    
                                                }
                                                ref={this.deposit_ref}
                                                options={this.state.deposit_opt}/>
                                        </Form.Group>
                                        <Form.Group as={Col} className={formclass}>
                                            <FormLabel label="Collector Number" />
                                            <Select isClearable
                                                name="collector_number"
                                                value={values.collector_number}
                                                ref={this.collector_ref}
                                                options={this.state.collector_opt}
                                                onChange={
                                                    async (e, triggeredAction) => {
                                                        await setFieldValue('collector_number', e)
                                                        if (triggeredAction.action === 'clear') {
                                                            this.setState({
                                                                deposit_opt: this.deposit_opt,
                                                            });
                                                        } else {
                                                            this.handleChange(e, "collector_change")
                                                        }
                                                    }
                                                }/>
                                        </Form.Group>
                                        <Form.Group as={Col} className={formclass}>
                                            <FormLabel label="Herbarium Code" />
                                            <Select isClearable
                                                name="herbarium"
                                                value={values.herbarium}
                                                onChange={
                                                    async (e) =>
                                                    await setFieldValue('herbarium', e)
                                                }
                                                options={this.props.herbarium} />
                                        </Form.Group>
                                        <Form.Group as={Col} className={formclass}>
                                            <FormLabel label="Colector Name" />
                                            <Select isClearable
                                                name="collector_name"
                                                value={values.collector_name}
                                                onChange={
                                                    async (e) =>
                                                    await setFieldValue('collector_name', e)
                                                }
                                                options={this.props.collector_name}/>
                                        </Form.Group>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Informações de Composto</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='mt-2'>
                                        <Form.Group as={Col} className={formclass}>
                                            <FormLabel label="Compound name" />
                                            <Select isClearable
                                                name="compound_name"
                                                value={values.compound_name}
                                                onChange={
                                                    async (e) =>
                                                    await setFieldValue('compound_name', e)
                                                }
                                                isDisabled={!this.props.compound_name.length}
                                                options={this.props.compound_name} />
                                        </Form.Group>
                                        <Form.Group as={Col} className={formclass}>
                                            <FormLabel label="SMILE" />
                                            <Select isClearable
                                                name="smile"
                                                value={values.smile}
                                                onChange={
                                                    async (e) =>
                                                    await setFieldValue('smile', e)
                                                }
                                                isDisabled={!this.props.smile.length}
                                                options={this.props.smile} />
                                        </Form.Group>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Row>
                        <Col lg={6}>
                            <ButtonGroup key={"extract_form_search"} className='float-start mt-3' style={{zIndex: '0'}}>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                key={"e"+idx}
                                id={`radio-e${idx}`}
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

export default ExtratoForm;

