import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

import CreatableSelect from 'react-select/creatable';


import { API_PATHS } from 'src/services/base';

import { selectStyle, form_group_classname, selectClassName, create_entity, get_options } from '../helpers';

function AddressForm(props) {

    const [citiesOpt, setCitiesOpt] = useState([])
    const [cityDefault, setCityDefault] = useState(null)
    const [stateDefault, setStateDefault] = useState(null)
    const [statesOpt, setStatesOpt] = useState([])

    const [isLoading, setIsLoading] = useState(false);

    const react_select_schema = yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    })

    const schema = yup.object().shape({
        location: yup.string().required("Required"),
        lat: yup.number().nullable(),
        long: yup.number().nullable(),
        city: react_select_schema.nullable(),
        state: react_select_schema.nullable(),
    })


    useEffect(() => {
        const set_selects = async() => {
            const [cities, def_city] = await get_options(API_PATHS.city, props.entity?.city)
            setCitiesOpt(cities)
            setCityDefault(def_city)

            const [states, def_state] = await get_options(API_PATHS.state, props.entity?.state)
            setStatesOpt(states)
            setStateDefault(def_state)
        }
        set_selects()
    }, [props.entity])


    function customSubmit(schema) {

        const submit_schema = {
            location: schema.location,
            lat: schema.lat ? schema.lat : null,
            long: schema.long ? schema.long : null,
            city_id: schema.city ? schema.city.value : null,
            state_id: schema.state ? schema.state.value : null
        }

        props.submit(submit_schema)
    }

    
    const handleCreate = async (inputValue, path) => {
        setIsLoading(true);
        let option = await create_entity(inputValue, path, props.token)
       
        if (path === API_PATHS.state) {
            setStatesOpt((prev) => [...prev, option]);
            // setStateDefault(option);
        } else if (path === API_PATHS.city) {
            setCitiesOpt((prev) => [...prev, option]);
            // setCityDefault(option);
        }
        
        setIsLoading(false);
        return option
    };

    return (
        <Formik
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={customSubmit}
            initialValues={{
                location: props.entity?.location,
                lat: props.entity?.lat,
                long: props.entity?.long,
                city: cityDefault,
                state: stateDefault
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
                        <FormLabel label="Location" />
                        <Form.Control
                            type="text"
                            name="location"
                            value={values.location}
                            onBlur={handleBlur}
                            isValid={touched.location && !errors.location}
                            isInvalid={touched.location && !!errors.location}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.location}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} className={form_group_classname}>
                            <FormLabel label="Latitude" />
                            <Form.Control
                                type="text"
                                name="lat"
                                value={values.lat}
                                onBlur={handleBlur}
                                isValid={touched.lat && !errors.lat}
                                isInvalid={touched.lat && !!errors.lat}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.lat}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} className={form_group_classname}>
                            <FormLabel label="Longitude" />
                            <Form.Control
                                type="text"
                                name="long"
                                value={values.long}
                                onBlur={handleBlur}
                                isValid={touched.long && !errors.long}
                                isInvalid={touched.long && !!errors.long}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.long}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} className={form_group_classname}>
                        <FormLabel label="City" />
                        <CreatableSelect isClearable
                            name="city"
                            value={values.city}
                            options={citiesOpt}
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            className={selectClassName("city", touched, errors)}
                            styles={selectStyle("city", touched, errors)}
                            onBlur={() => setFieldTouched("city")}
                            onChange={async (e) => await setFieldValue('city', e)}
                            onCreateOption={async (e) => {
                                let new_opt = await handleCreate(e, API_PATHS.city)
                                setFieldValue('city', new_opt)
                            }} />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.city}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className={form_group_classname}>
                        <FormLabel label="State" />
                        <CreatableSelect isClearable
                            name="state"
                            value={values.state}
                            options={statesOpt}
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            className={selectClassName("state", touched, errors)}
                            styles={selectStyle("state", touched, errors)}
                            onBlur={() => setFieldTouched("state")}
                            onChange={async (e) => await setFieldValue('state', e)}
                            onCreateOption={async (e) => {
                                let new_opt = await handleCreate(e, API_PATHS.state)
                                setFieldValue('state', new_opt)
                            }}  />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.state}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}


export default AddressForm