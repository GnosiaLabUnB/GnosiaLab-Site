// TODO: Create Address, Vegetatation and Deposit Collector
import React, { useEffect, useState, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import CreatableSelect from 'react-select/creatable';

import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { API_PATHS, create_item, get_all } from 'src/services/base'
import * as shared from 'src/services/shared'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from "src/context/UserContext";
import {
    form_group_classname, selectClassName,
    selectStyle, create_entity
} from 'src/components/dashboard/forms/helpers';

import { FormGroupControl, FormGroupSelect } from 'src/components/dashboard/forms/FormComponents';

import NotificationCenter from 'src/components/dashboard/shared/NotificationCenter';
import Notificaton from 'src/components/dashboard/shared/Notification';


function AddExtrato() {

    const [loading, setLoading] = useState();

    const [originOpt, setOriginOpt] = useState();
    const [taxoSysOpt, setTaxoSysOpt] = useState();
    const [soilOpt, setSoilOpt] = useState();
    const [extMethodOpt, setExtMethodOpt] = useState();
    const [plantOrganOpt, setPlantOrganOpt] = useState();
    const [solventOpt, setSolventOpt] = useState();
    const [boxOpt, setBoxOpt] = useState();
    const [freezerOpt, setFreezerOpt] = useState();
    const [plantFamilyOpt, setPlantFamilyOpt] = useState();
    const [plantSpeciesOpt, setPlantSpeciesOpt] = useState();
    const [extractTypeOpt, setExtractTypeOpt] = useState();
    const [herbariumOpt, setHerbariumOpt] = useState();
    const [collectorNameOpt, setCollectorNameOpt] = useState();
    const [addressOpt, setAddressOpt] = useState();
    const [depositCollectorOpt, setDepositCollectorOpt] = useState();
    const [vegetationOpt, setVegetationOpt] = useState();

    const [addressJSON, setAddressJSON] = useState();
    const [vegJSON, setVegetationJSON] = useState();
    const [fullVegetationJSON, setFullVegetationJSON] = useState();
    const [fullAddressJSON, setFullAddressJSON] = useState();
    const [plantFamilyJSON, setPlantFamilyJSON] = useState();

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const { cookies } = useAuth();
    const species_select_ref = useRef();

    const availability_opt = [
        { value: 0, label: "Unavailable" },
        { value: 1, label: "Available" }
    ]

    const react_select_schema = yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    })

    const schema = yup.object().shape({
        internal_id: yup.string().required("Required"),
        code: yup.string().nullable(),
        extraction_yield: yup.number().required("Required"),
        vegetation_notes: yup.string().nullable(),
        obs: yup.string().nullable(),
        inbox_position: yup.string().nullable(),
        publications: yup.string().nullable(),
        thesis: yup.string().nullable(),
        ata: yup.string().nullable(),
        collection_date: yup.date().nullable(),
        related_codes: yup.string().nullable(),
        availability: react_select_schema.required("Required"),
        plant_family: react_select_schema.required("Required"),
        plant_species: react_select_schema.required("Required"),
        soil: react_select_schema.required("Required"),
        plant_organ: react_select_schema.required("Required"),
        solvent: react_select_schema.required("Required"),
        extract_type: react_select_schema.required("Required"),
        vegetation: react_select_schema.required("Required"),
        origin: react_select_schema.required("Required"),
        extraction_method: react_select_schema.required("Required"),
        box: react_select_schema.nullable(),
        freezer: react_select_schema.nullable(),
        address: react_select_schema.nullable(),
        taxonomic_system: react_select_schema.nullable(),
        deposit_collector: react_select_schema.nullable(),
        herbarium: react_select_schema.nullable(),
        collector_name: react_select_schema.nullable()
    })

    async function handleCustomSubmit(schema) {
        console.log(schema)
        const submit_schema = {
            internal_id: schema.internal_id,
            code: schema.code,
            extraction_yield: schema.extraction_yield,
            vegetation_notes: schema.vegetation_notes,
            obs: schema.obs,
            inbox_position: schema.inbox_position,
            publications: schema.publications,
            thesis: schema.thesis,
            ata: schema.ata,
            collection_date: new Date(schema.collection_date),
            related_codes: schema.related_codes,
            availability: schema.availability.value,
            plant_organ_id: schema.plant_organ.value,
            solvent_id: schema.solvent.value,
            box_id: schema.box.value,
            freezer_id: schema.freezer.value,
            address_id: schema.address.value,
            vegetation_id: schema.vegetation.value,
            plant_family_id: schema.plant_family.value,
            plant_species_id: schema.plant_species.value,
            origin_id: schema.origin.value,
            taxonomic_system_id: schema.taxonomic_system.value,
            soil_id: schema.soil.value,
            extraction_method_id: schema.extraction_method.value,
            deposit_collector_id: schema.deposit_collector.value,
            herbarium_id: schema.herbarium.value,
            collector_name_id: schema.collector_name.value,
            extract_type_id: schema.extract_type.value
        }

        console.log(submit_schema)
        let update_res = await create_item(API_PATHS.plant_extract, submit_schema, cookies.token)
        if (update_res.ok) {
            update_res.json().then((res) => {
                console.log(res)
                setSuccessMsg("Plant Extract " + res.internal_id + " successfully created!")
            })
        } else {
            update_res.json().then((res) =>
                setErrorMsg("Error creating plant extract: " + res.detail)
            )
        }
    }


    const handleCustomChange = (e, key) => {
        if (e != null) {
            if (key === "plant_species") {
                species_select_ref.current.clearValue();
                console.log(plantFamilyJSON)
                let new_json = shared.search_dict(e, plantFamilyJSON)["species"]
                setPlantSpeciesOpt(new_json.map(shared.opt_creator))
            }
        }
    };

    const handleCreate = async (inputValue, path) => {

        setLoading(true);
        let option = await create_entity(inputValue, path, cookies.token)

        if (path === API_PATHS.origin) {
            setOriginOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.taxo_sys) {
            setTaxoSysOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.soil) {
            setSoilOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.plant_organ) {
            setPlantOrganOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.extract_method) {
            setExtMethodOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.solvent) {
            setSolventOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.freezer) {
            setFreezerOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.box) {
            setBoxOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.plant_family) {
            setPlantFamilyOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.extract_type) {
            setExtractTypeOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.herbarium) {
            setHerbariumOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.collectors_names) {
            setCollectorNameOpt((prev) => [...prev, option]);
        } else if (path === API_PATHS.plant_species) {
            setPlantSpeciesOpt((prev) => [...prev, option]);
        }

        setLoading(false);
        return option

        // vegetation_id: react_select_schema.required("Required"),
        // address_id: react_select_schema.nullable(),
        // deposit_collector_id: react_select_schema.nullable(),
    };


    useEffect(() => {
        async function set_options() {
            let origin_json = await get_all(API_PATHS.origin)
            let taxonomic_sys_json = await get_all(API_PATHS.taxo_sys)
            let soil_json = await get_all(API_PATHS.soil)
            let ext_method_json = await get_all(API_PATHS.extract_method)
            let solvent_json = await get_all(API_PATHS.solvent)
            let plant_organ_json = await get_all(API_PATHS.plant_organ)
            let full_address_json = await get_all(API_PATHS.address)

            let plant_family_json = await get_all(API_PATHS.plant_family)
            let extract_type_json = await get_all(API_PATHS.extract_type)
            let herbarium_json = await get_all(API_PATHS.herbarium)
            let collector_name_json = await get_all(API_PATHS.collectors_names)

            let freezer_json = await get_all(API_PATHS.freezer)
            let box_json = await get_all(API_PATHS.box)

            let vegetation_json = await get_all(API_PATHS.vegetation)
            let deposit_collector_json = await get_all(API_PATHS.deposit_collectors)

            setVegetationOpt(vegetation_json.map(shared.opt_creator_vegetation))
            setAddressOpt(full_address_json.map(shared.opt_creator_address))
            setSolventOpt(solvent_json.map(shared.opt_creator))
            setPlantOrganOpt(plant_organ_json.map(shared.opt_creator_organ))
            setOriginOpt(origin_json.map(shared.opt_creator))
            setTaxoSysOpt(taxonomic_sys_json.map(shared.opt_creator))
            setExtMethodOpt(ext_method_json.map(shared.opt_creator))
            setSoilOpt(soil_json.map(shared.opt_creator))
            setPlantFamilyOpt(plant_family_json.map(shared.opt_creator))
            setExtractTypeOpt(extract_type_json.map(shared.opt_creator))
            setHerbariumOpt(herbarium_json.map(shared.opt_creator))
            setCollectorNameOpt(collector_name_json.map(shared.opt_creator))
            setFreezerOpt(freezer_json.map(shared.opt_creator))
            setBoxOpt(box_json.map(shared.opt_creator))
            setDepositCollectorOpt(deposit_collector_json.map(shared.opt_creator_deposit_collector))

            setPlantFamilyJSON(plant_family_json)

            setFullAddressJSON(full_address_json)
            setAddressJSON({
                lat: ' ', long: ' ',
                state: { description: '' },
                city: { description: '' }
            })

            setFullVegetationJSON(vegetation_json)
            setVegetationJSON({ english: ' ', general: ' ' })

        }
        set_options();
    }, []);

    const handleAddressJSON = (e) => {
        if (e != null) {
            setAddressJSON(shared.search_dict(e, fullAddressJSON));
        } else {
            setAddressJSON({
                lat: ' ', long: ' ',
                state: { description: '' },
                city: { description: '' }
            })
        }
    };

    const handleVegetationJSON = (e) => {
        if (e != null) {
            setVegetationJSON(shared.search_dict(e, fullVegetationJSON));
        } else {
            setVegetationJSON({ english: ' ', general: ' ' })
        }
    };

    return (
        <>
            <NotificationCenter>
                <Notificaton
                    variant={'danger'}
                    title={"Create Plant Extract"}
                    msg={errorMsg}
                    show={errorMsg !== ''}
                    close={() => setErrorMsg('')}
                />
                <Notificaton
                    variant={'success'}
                    title={"Create Plant Extract"}
                    msg={successMsg}
                    show={successMsg !== ''}
                    close={() => setSuccessMsg('')}
                />
            </NotificationCenter>

            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item href="/admin/add">Adicionar</Breadcrumb.Item>
                    <Breadcrumb.Item active>Extrato</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row className='mb-4 mt-3'>
                <h1 style={{ color: 'var(--bs-gray-800)' }}>Adicionar Extrato de Plantas</h1>
            </Row>
            <Formik
                validationSchema={schema}
                onSubmit={handleCustomSubmit}
                initialValues={{
                    internal_id: '',
                    code: '',
                    extraction_yield: 0,
                    vegetation_notes: '',
                    obs: '',
                    inbox_position: '',
                    publications: '',
                    thesis: '',
                    ata: '',
                    collection_date: null,
                    related_codes: '',
                    availability: null,
                    plant_family: null,
                    plant_species: null,
                    soil: null,
                    plant_organ: null,
                    solvent: null,
                    extract_type: null,
                    vegetation: null,
                    origin: null,
                    extraction_method: null,
                    box: null,
                    freezer: null,
                    address: null,
                    taxonomic_system: null,
                    deposit_collector: null,
                    herbarium: null,
                    collector_name: null
                }}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleSubmit} className="mt-3">
                        <Row>
                            <FormGroupControl title="ID" name="internal_id"
                                type="text" placeholder="Enter ID" formik={formik} />
                            <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                title="Extraction Type" name="extract_type" opt={extractTypeOpt} path={API_PATHS.extract_type} />
                            <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                title="Extraction method" name="extraction_method" opt={extMethodOpt} path={API_PATHS.extract_method} />
                        </Row>
                        <Row>
                            <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                title="Plant Organ" name="plant_organ" opt={plantOrganOpt} path={API_PATHS.plant_organ} />
                            <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                title="Plant Family" name="plant_family" opt={plantFamilyOpt} path={API_PATHS.plant_family} customChange={(e) => handleCustomChange(e, "plant_species")} />
                            <Form.Group as={Col} className={form_group_classname}>
                                <FormLabel label="Plant Species" />
                                <CreatableSelect isClearable
                                    name="plant_species"
                                    value={formik.values.plant_species}
                                    isDisabled={loading}
                                    isLoading={loading}
                                    ref={species_select_ref}
                                    className={selectClassName("plant_species", formik.touched, formik.errors)}
                                    styles={selectStyle("plant_species", formik.touched, formik.errors)}
                                    onBlur={() => formik.setFieldTouched("plant_species")}
                                    onChange={async (e) => await formik.setFieldValue('plant_species', e)}
                                    onCreateOption={async (e) => {
                                        let new_opt = await handleCreate([e, formik.values.plant_family.value], API_PATHS.plant_species)
                                        formik.setFieldValue('plant_species', new_opt)
                                    }}
                                    options={plantSpeciesOpt} />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {formik.errors.plant_species}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                title="Solvent" name="solvent" opt={solventOpt} path={API_PATHS.solvent} />
                            <FormGroupControl title="Extraction Yield" name="extraction_yield"
                                type="number" placeholder="Yield" formik={formik} />
                        </Row>
                        <Row>
                            <FormGroupControl title="Colection Date"
                                name="collection_date" type="date" formik={formik} />
                            <FormGroupSelect formik={formik} loading={loading}
                                title="Availability" name="availability" opt={availability_opt} />
                        </Row>
                        <Accordion alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Endereço</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='mt-2'>
                                        <FormGroupSelect formik={formik} loading={loading}
                                            title="Location Name" name="address"
                                            opt={addressOpt} customChange={handleAddressJSON} />
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} className={form_group_classname}>
                                            <FormLabel label="Latitude" />
                                            <Form.Control disabled
                                                type="text"
                                                placeholder=""
                                                value={addressJSON?.lat ? addressJSON.lat : 'Not Informed'} />
                                        </Form.Group>
                                        <Form.Group as={Col} className={form_group_classname}>
                                            <FormLabel label="Longitude" />
                                            <Form.Control disabled
                                                type="text"
                                                placeholder=""
                                                value={addressJSON?.long ? addressJSON.long : 'Not Informed'} />
                                        </Form.Group>
                                        <Form.Group as={Col} className={form_group_classname}>
                                            <FormLabel label="City" />
                                            <Form.Control disabled
                                                type="text"
                                                placeholder=""
                                                value={addressJSON?.city ? addressJSON?.city?.description : 'Not Informed'} />
                                        </Form.Group>
                                        <Form.Group as={Col} className={form_group_classname}>
                                            <FormLabel label="State" />
                                            <Form.Control disabled
                                                type="text"
                                                placeholder=""
                                                value={addressJSON?.state ? addressJSON?.state?.description : 'Not Informed'} />
                                        </Form.Group>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Informações Adicionais</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <FormGroupControl title="Codes" placeholder="Enter Code"
                                            name="code" type="text" formik={formik} />
                                        <FormGroupControl title="Related Codes" placeholder="Enter Code"
                                            name="related_code" type="text" formik={formik} />
                                        <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                            title="Origin" name="origin" opt={originOpt} path={API_PATHS.origin} />
                                        <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                            title="Taxonomic Classification System"
                                            name="taxonomic_system" opt={taxoSysOpt} path={API_PATHS.taxo_sys} />
                                    </Row>
                                    <Row>
                                        <FormGroupSelect formik={formik} loading={loading}
                                            title="Vegetation (Local)" name="vegetation"
                                            opt={vegetationOpt} customChange={handleVegetationJSON} />
                                        <Form.Group as={Col} className={form_group_classname}>
                                            <FormLabel label="Vegetation (English)" />
                                            <Form.Control disabled
                                                type="text"
                                                placeholder=""
                                                value={vegJSON ? vegJSON.english : 'Not Informed'} />
                                        </Form.Group>
                                        <Form.Group as={Col} className={form_group_classname}>
                                            <FormLabel label="Vegetation type" />
                                            <Form.Control disabled
                                                type="text"
                                                placeholder=""
                                                value={vegJSON ? vegJSON.general : 'Not Informed'} />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <FormGroupControl title="Vegetation Notes" placeholder="Vegetation Notes"
                                            name="vegetation_notes" type="textarea" formik={formik} />
                                        <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                            title="Soil Type" name="soil" opt={soilOpt} path={API_PATHS.soil} />
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Informações de Publicação (Opcional)</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <FormGroupControl title="Publications" placeholder="Enter DOI"
                                            name="publications" type="text" formik={formik} />
                                        <FormGroupControl title="Thesis" placeholder="Enter URL"
                                            name="thesis" type="text" formik={formik} />
                                        <FormGroupControl title="ATA" placeholder="Enter Code"
                                            name="ata" type="text" formik={formik} />
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Informações do Laboratório (Opcional)</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                            title="Freezer" name="freezer" opt={freezerOpt} path={API_PATHS.freezer} />
                                        <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                                            title="Box" name="box" opt={boxOpt} path={API_PATHS.box} />
                                        <FormGroupControl title="Position in Box" placeholder="Enter Code"
                                            name="inbox_position" type="text" formik={formik} />
                                    </Row>
                                    <Row>
                                        <FormGroupSelect create formik={formik} loading={loading}
                                            onCreate={handleCreate}
                                            title="Herbarium Code" name="herbarium"
                                            opt={herbariumOpt} path={API_PATHS.herbarium} />
                                        <FormGroupSelect create formik={formik} loading={loading}
                                            onCreate={handleCreate}
                                            title="Collector Name" name="collector_name"
                                            opt={collectorNameOpt} path={API_PATHS.collectors_names} />
                                        <FormGroupSelect formik={formik} loading={loading}
                                            title="Deposit Collector Pair" name="deposit_collector"
                                            opt={depositCollectorOpt} />
                                    </Row>
                                    <Row>
                                        <FormGroupControl title="Comments" placeholder="Additional Comments"
                                            rows={2} name="obs" type="textarea" formik={formik} />
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Row className="mt-4">
                            <Col>
                                <Button size="md" type="submit" className='float-end'>
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </>
    )

}

export default AddExtrato;