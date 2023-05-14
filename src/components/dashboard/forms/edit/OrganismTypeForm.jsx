import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

import { API_PATHS } from 'src/services/base';
import { selectStyle, form_group_classname, selectClassName, get_options, create_entity } from '../helpers';


function OrganismTypeForm(props) {

    const [organismOpt, setOrganismOpt] = useState([])
    const [organismDefault, setOrganismDefault] = useState(null)

    const [isLoading, setIsLoading] = useState(false);
    

    const react_select_schema = yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    })

    const schema = yup.object().shape({
        description: yup.string().required("Required"),
        organism: react_select_schema.required("Required"),
    })


    useEffect(() => {
        const set_selects = async() => {
            const [organisms, def_organism] = await get_options(API_PATHS.organisms, props.entity?.organism)
            setOrganismOpt(organisms)
            setOrganismDefault(def_organism)
        }
        set_selects()
    }, [props.entity])


    function customSubmit(schema) {
        const submit_schema = {
            description: schema.description,
            organism_id: schema.organism ? schema.organism.value : null,
            
        }

        props.submit(submit_schema)
    }

    const handleCreate = async (inputValue, path) => {
        setIsLoading(true);
        let option = await create_entity(inputValue, path, props.token)
        setOrganismOpt((prev) => [...prev, option]);
        setIsLoading(false);
        return option
    };


    return (
        <Formik
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={customSubmit}
            initialValues={{
                description: props.entity?.description,
                organism: organismDefault
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
                        <FormLabel label="Organsim" />
                        <CreatableSelect isClearable
                            name="organism"
                            value={values.organism}
                            options={organismOpt} 
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            className={selectClassName("organism", touched, errors)}
                            styles={selectStyle("organism", touched, errors)}
                            onBlur={() => setFieldTouched("organism")}
                            onChange={ async (e) => await setFieldValue('organism', e) } 
                            onCreateOption={async (e) => {
                                let new_opt = await handleCreate(e, API_PATHS.organism)
                                setFieldValue('organism', new_opt)
                            }} />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.organism}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default OrganismTypeForm