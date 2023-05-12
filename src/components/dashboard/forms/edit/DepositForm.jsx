import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

import { API_PATHS } from 'src/services/base';
import { selectStyle, form_group_classname,
         selectClassName, get_options, create_entity } from 'src/components/dashboard/forms/helpers';

function DepositForm(props) {

    const [depositOpt, setDepositOpt] = useState([])
    const [collectorOpt, setCollectorOpt] = useState([])
    
    const [collectorDefault, setCollectorDefault] = useState(null)
    const [depositDefault, setDepositDefault] = useState(null)
    
    const [isLoading, setIsLoading] = useState(false);

    const react_select_schema = yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
    })

    const schema = yup.object().shape({
        collector: react_select_schema.required("Required"),
        deposit: react_select_schema.required("Required"),
    })

    const handleCreate = async (inputValue, path) => {
        setIsLoading(true);
        let option = await create_entity(inputValue, path, props.token)
        
        if (path === API_PATHS.deposit) {
            setDepositOpt((prev) => [...prev, option]);
            setDepositDefault(option);
        } else if (path === API_PATHS.collectors) {
            setCollectorOpt((prev) => [...prev, option]);
            setCollectorDefault(option);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        const set_selects = async() => {
            const [collectors, def_collector] = await get_options(API_PATHS.collectors, props.entity?.collector)
            setCollectorOpt(collectors)
            setCollectorDefault(def_collector)

            const [deposits, def_deposit] = await get_options(API_PATHS.deposit, props.entity?.deposit)
            setDepositOpt(deposits)
            setDepositDefault(def_deposit)
        }
        set_selects()
    }, [props.entity])


    function customSubmit(schema) {
        console.log(schema)
        const submit_schema = {
            deposit_id: schema.deposit ? schema.deposit.value : null,
            collector_id: schema.collector ? schema.collector.value : null
        }

        props.submit(submit_schema)
    }

    return (
        <Formik
            enableReinitialize={true}
            validationSchema={schema}
            onSubmit={customSubmit}
            initialValues={{
                collector: collectorDefault,
                deposit: depositDefault
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
                        <FormLabel label="Deposit" />
                        <CreatableSelect
                            isClearable
                            name="deposit"
                            value={values.deposit}
                            options={depositOpt} 
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            className={selectClassName("deposit", touched, errors)}
                            styles={selectStyle("deposit", touched, errors)}
                            onBlur={() => setFieldTouched("deposit")}
                            onChange={async (e) => await setFieldValue('deposit', e)} 
                            onCreateOption={(e) => handleCreate(e, API_PATHS.deposit)} />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.deposit}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className={form_group_classname}>
                        <FormLabel label="Collector" />
                        <CreatableSelect
                            name="collector"
                            isClearable
                            value={values.collector}
                            options={collectorOpt} 
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            className={selectClassName("collector", touched, errors)}
                            styles={selectStyle("collector", touched, errors)}
                            onBlur={() => setFieldTouched("collector")}
                            onChange={async (e) => await setFieldValue('collector', e)}
                            onCreateOption={(e) => handleCreate(e, API_PATHS.collectors)} />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.collector}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default DepositForm