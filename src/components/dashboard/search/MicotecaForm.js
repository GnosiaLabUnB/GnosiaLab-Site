import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import Select from 'react-select';
import FormLabel from '../../shared/FormLabel';

import * as shared from '../../../services/shared.js';
import * as search from '../../../services/search.js';

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    search_id: yup.string().nullable(),
    scientific_name: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }).nullable(),
    organism: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }).nullable(),
    organism_type: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }).nullable(),
    taxo_lvl: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }).nullable(),
    fungus_class: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
      }).nullable(),
    fungus_genus: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable(),
    fungus_family: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable(),
    fungus_order: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable(),
    fungus_species: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable(),
    plant_organ: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable(),
    plant_family: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable(),
    plant_species: yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    }).nullable()
});

class MycoForm extends React.Component {

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e, key) {
        
        if (e != null) {
            if (key === "plant_species") {
                this.species_select_ref.current.clearValue();
                let search_json = this.props.plant_family_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ plant_species_opt: new_opt });
            } else if (key === "organism_type") {
                this.organism_type_ref.current.clearValue();
                let search_json = this.props.organisms_json
                let new_opt = shared.search_dict(e, search_json)["types"].map(shared.opt_creator)
                this.setState({ organism_type_opt: new_opt });
            } else if (key === "fungus_family") {
                this.fungus_family_ref.current.clearValue();
                this.fungus_genus_ref.current.clearValue();
                this.fungus_species_ref.current.clearValue();
                let search_json = this.state.fungus_order_json
                let new_json = shared.search_dict(e, search_json)["family"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ fungus_family: new_opt, fungus_family_json: new_json });
            } else if (key === "fungus_order") {
                this.fungus_order_ref.current.clearValue();
                this.fungus_family_ref.current.clearValue();
                this.fungus_genus_ref.current.clearValue();
                this.fungus_species_ref.current.clearValue();
                let search_json = this.props.fungus_class_json
                let new_json = shared.search_dict(e, search_json)["order"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ fungus_order: new_opt, fungus_order_json: new_json });
            } else if (key === "fungus_genus") {
                this.fungus_genus_ref.current.clearValue();
                this.fungus_species_ref.current.clearValue();
                let search_json = this.state.fungus_family_json
                let new_json = shared.search_dict(e, search_json)["genus"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ fungus_genus: new_opt, fungus_genus_json: new_json });
            } else if (key === "fungus_species") {
                this.fungus_species_ref.current.clearValue();
                let search_json = this.state.fungus_genus_json
                let new_json = shared.search_dict(e, search_json)["species"]
                let new_opt = new_json.map(shared.opt_creator)
                this.setState({ fungus_species: new_opt });
            }
        }
    };

    async handleSubmit(schema) {
        console.log("Searching for extratos de microorganismos com o schema:");
        console.log(schema);
        let result_json = await search.search_myco(schema);
        this.props.searchViewCallback(result_json);
    }

    render() {
        let formclass = "mb-3"
        return (
            <Formik
                validationSchema={schema}
                onSubmit={this.handleSubmit}
                initialValues={{
                    search_id: '',
                    scientific_name: null,
                    organism: null,
                    organism_type: null,
                    taxo_lvl: null,
                    fungus_class: null,
                    fungus_genus: null,
                    fungus_family: null,
                    fungus_order: null,
                    fungus_species: null,
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
                                name="search_id"
                                value={values.search_id}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter ID"/>
                        </Form.Group>
                        <Form.Group as={Col} className={formclass}>
                            <FormLabel label="Scientific name" />
                            <Select
                                isClearable 
                                name="scientific_name"
                                value={values.scientific_name}
                                onChange={
                                    async (e) =>
                                    await setFieldValue('scientific_name', e)
                                }
                                options={this.props.scientific_name}/>
                        </Form.Group>
                        <Form.Group as={Col} className={formclass}>
                            <FormLabel label="Organism"/>
                            <Select isClearable
                                name="organism"
                                value={values.organism}
                                options={this.props.organisms}
                                onChange={
                                    async (e) => {
                                        await setFieldValue('organism', e)
                                        this.handleChange(e, "organism_type")
                                    }
                                }
                            />
                        </Form.Group>
                        <Form.Group as={Col} className={formclass}>
                            <FormLabel label="Organism Type"/>
                            <Select isClearable 
                                name="organism_type"
                                value={values.organism_type}
                                onChange={
                                    async (e) =>
                                    await setFieldValue('organism_type', e)
                                }
                                ref={this.organism_type_ref}
                                isDisabled={!this.state.organism_type_opt.length}
                                options={this.state.organism_type_opt}
                            />
                        </Form.Group>
                    </Row>
                    <Accordion alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Informações Taxonomicas</Accordion.Header>
                            <Accordion.Body>
                                <Row className='mt-2'>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Taxonomic Level" />
                                        <Select isClearable 
                                            name="taxo_lvl"
                                            value={values.taxo_lvl}
                                            onChange={
                                                async (e) =>
                                                await setFieldValue('taxo_lvl', e)
                                            }
                                            options={this.props.taxonomic_lvl} />
                                    </Form.Group>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Class" />
                                        <Select isClearable 
                                            name="fungus_class"
                                            value={values.fungus_class}
                                            onChange={
                                                async (e) => {
                                                    await setFieldValue('fungus_class', e)
                                                    this.handleChange(e, "fungus_order")
                                                }
                                            }
                                            options={this.props.fungus_class}/>
                                    </Form.Group>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Order" />
                                        <Select isClearable
                                            name="fungus_order"
                                            value={values.fungus_order}
                                            onChange={
                                                async (e) => {
                                                    await setFieldValue('fungus_order', e)
                                                    this.handleChange(e, "fungus_family")
                                                }
                                            }
                                            ref={this.fungus_order_ref}
                                            isDisabled={!this.state.fungus_order.length}
                                            options={this.state.fungus_order}/>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Family" />
                                        <Select isClearable 
                                            name="fungus_family"
                                            value={values.fungus_family}
                                            onChange={
                                                async (e) => {
                                                    await setFieldValue('fungus_family', e)
                                                    this.handleChange(e, "fungus_genus")
                                                }
                                            }
                                            ref={this.fungus_family_ref}
                                            isDisabled={!this.state.fungus_family.length}
                                            options={this.state.fungus_family}/>
                                    </Form.Group>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Genus" />
                                        <Select isClearable 
                                            name="fungus_genus"
                                            value={values.fungus_genus}
                                            onChange={
                                                async (e) => {
                                                    await setFieldValue('fungus_genus', e)
                                                    this.handleChange(e, "fungus_species")
                                                }
                                            }
                                            ref={this.fungus_genus_ref}
                                            isDisabled={!this.state.fungus_genus.length}
                                            options={this.state.fungus_genus}/>
                                    </Form.Group>
                                    <Form.Group as={Col} className={formclass}>
                                        <FormLabel label="Species" />
                                        <Select isClearable 
                                            name="fungus_species"
                                            value={values.fungus_species}
                                            onChange={
                                                async (e) => 
                                                    await setFieldValue('fungus_species', e)
                                            }
                                            ref={this.fungus_species_ref}
                                            isDisabled={!this.state.fungus_species.length}
                                            options={this.state.fungus_species}/>
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
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
                                        <FormLabel label="Species"/>
                                        <Select isClearable
                                            name="plant_species"
                                            value={values.plant_species}
                                            onChange={
                                                async (e) => 
                                                    await setFieldValue('plant_species', e)
                                            }
                                            ref={this.species_select_ref}
                                            isDisabled={!this.state.plant_species_opt.length}
                                            options={this.state.plant_species_opt}
                                        />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button className='float-end mt-4' variant="primary" type="submit">
                    Search
                    </Button>
                </Form>
                )}
            </Formik>
        )
    }
}

export default MycoForm;

