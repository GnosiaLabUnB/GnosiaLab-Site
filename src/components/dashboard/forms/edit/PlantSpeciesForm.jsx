import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import Select from 'react-select';

import { API_PATHS } from 'src/services/base';
import { selectStyle, form_group_classname, selectClassName, get_options, create_entity } from '../helpers';

function PlantSpeciesForm(props) {

    const [familyOpt, setFamilyOpt] = useState([])
    const [familyDefault, setFamilyDefault] = useState('')

    const [isLoading, setIsLoading] = useState(false);

    const react_select_schema = yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    })

    const schema = yup.object().shape({
        description: yup.string().required("Required"),
        curr_taxo_name: yup.string().nullable(),
        family: react_select_schema.required("Required"),
    })


    const handleCreate = async (inputValue, path) => {
        setIsLoading(true);
        let option = await create_entity(inputValue, path, props.token)
        setFamilyOpt((prev) => [...prev, option]);
        setFamilyDefault(option);
        setIsLoading(false);
    };


    useEffect(() => {
        const set_selects = async() => {
            const [plant_family, def_family] = await get_options(API_PATHS.plant_family, props.entity?.family)
            setFamilyOpt(plant_family)
            setFamilyDefault(def_family)
        }
        set_selects()
    }, [props.entity])


    function customSubmit(schema) {
        console.log(schema)
        const submit_schema = {
            description: schema.description,
            curr_taxo_name: schema.curr_taxo,
            family_id: schema.family ? schema.family.value : null,
        }
        props.submit(submit_schema)
    }

    return (
        <Formik
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={customSubmit}
            initialValues={{
                description: props.entity?.description,
                curr_taxo: props.entity?.curr_taxo_name ? props.entity?.curr_taxo_name : '', 
                family: familyDefault
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                setFieldValue,
                setFieldTouched,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate id="editForm" onSubmit={handleSubmit}>
                     <Form.Group as={Col} className={form_group_classname}>
                        <FormLabel label="Description" />
                        <Form.Control
                            type="text"
                            name="description"
                            value={values.description}
                            onBlur={handleBlur}
                            isValid={touched.description && !errors.description}
                            isInvalid={touched.description && !!errors.description}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.description}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className={form_group_classname}>
                        <FormLabel label="Current Taxonomy" />
                        <Form.Control
                            type="text"
                            name="curr_taxo"
                            value={values.curr_taxo}
                            onBlur={handleBlur}
                            isValid={touched.curr_taxo && !errors.curr_taxo}
                            isInvalid={touched.curr_taxo && !!errors.curr_taxo}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.curr_taxo}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className={form_group_classname}>
                        <FormLabel label="Plant Family" />
                        <Select isClearable
                            name="family"
                            value={values.family}
                            options={familyOpt}
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            className={selectClassName("family", touched, errors)}
                            styles={selectStyle("family", touched, errors)}
                            onBlur={() => setFieldTouched("family")}
                            onChange={async (e) => await setFieldValue('family', e)}
                            onCreateOption={(e) => handleCreate(e, API_PATHS.state)}/>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.family}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default PlantSpeciesForm