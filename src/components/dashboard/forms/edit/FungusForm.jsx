import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from '../../../shared/FormLabel';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import Select from 'react-select';

import { get_all } from '../../../../services/base';
import { selectStyle, form_group_classname, selectClassName } from '../helpers';

import * as shared from '../../../../services/shared';

function FungusForms(props) {

    const [option, setOpt] = useState([])
    const [defaultVal, setDefaultVal] = useState('')
    

    const react_select_schema = yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    })

    const schema = yup.object().shape({
        description: yup.string().required("Required"),
        parent: react_select_schema.required("Required"),
    })


    useEffect(() => {
        const get_options = async () => {
            console.log(props.entity)
            let options_json = await get_all(props.parent_path)
            let options = options_json.map(shared.opt_creator)
            setOpt(options)
            console.log(options)
            options.forEach(function (item, index) {
                if (item.value === props.entity[props.parent].id) {
                    setDefaultVal(options[index])
                }
            });
        }
        get_options()
    }, [props.entity])


    function customSubmit(schema) {
        
        let submit_schema = {}

        if (props.parent == "genus") {
            submit_schema = {
                description: schema.description,
                genus_id: schema.parent ? schema.parent.value : null
            }
        } else if (props.parent == "fungus_class") {
            submit_schema = {
                description: schema.description,
                class_id: schema.parent ? schema.parent.value : null
            }
        } else if (props.parent == "family") {
            submit_schema = {
                description: schema.description,
                family_id: schema.parent ? schema.parent.value : null
            }
        } else if (props.parent == "order") {
            submit_schema = {
                description: schema.description,
                order_id: schema.parent ? schema.parent.value : null
            }
        }
        console.log(submit_schema)
        props.submit(submit_schema)
    }

    return (
        <Formik
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={customSubmit}
            initialValues={{
                description: props.entity?.description,
                parent: defaultVal
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
                        <FormLabel label={props.parent} />
                        <Select isClearable
                            name="parent"
                            value={values.parent}
                            options={option}
                            className={selectClassName("parent", touched, errors)}
                            styles={selectStyle("parent", touched, errors)}
                            onBlur={() => setFieldTouched("parent")}
                            onChange={async (e) => await setFieldValue('parent', e)}/>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.parent}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default FungusForms