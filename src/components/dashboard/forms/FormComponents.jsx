import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import {
    form_group_classname, selectClassName,
    selectStyle
} from 'src/components/dashboard/forms/helpers';

export function FormGroupControl(props) {
    return (
        <Form.Group as={Col} className={form_group_classname}>
            <FormLabel label={props.title} />
            <Form.Control rows={props.rows}
                name={props.name}
                value={props.formik.values[props.name]}
                type={props.type}
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
                isValid={props.formik.touched[props.name] && !props.formik.errors[props.name]}
                isInvalid={props.formik.touched[props.name] && !!props.formik.errors[props.name]}
                placeholder={props.placeholder} />
            <Form.Control.Feedback type="invalid" tooltip>
                {props.formik.errors[props.name]}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export function FormGroupSelect(props) {
    return (
        <Form.Group as={Col} className={form_group_classname}>
            <FormLabel label={props.title} />
            {props.create ? (
                <CreatableSelect isClearable
                    name={props.name}
                    value={props.formik.values[props.name]}
                    isDisabled={props.loading}
                    isLoading={props.loading}
                    ref={props.ref}
                    className={selectClassName(props.name, props.formik.touched, props.formik.errors)}
                    styles={selectStyle(props.name, props.formik.touched, props.formik.errors)}
                    onBlur={() => props.formik.setFieldTouched(props.name)}
                    onChange={async (e) => {
                        await props.formik.setFieldValue(props.name, e)
                        if (props.customChange) {
                            props.customChange(e)
                        }
                    }
                    }
                    onCreateOption={async (e) => {
                        let new_opt = await props.onCreate(e, props.path)
                        props.formik.setFieldValue(props.name, new_opt)
                    }}
                    options={props.opt} />
            ) : (
                <Select isClearable
                    name={props.name}
                    value={props.formik.values[props.name]}
                    isDisabled={props.loading}
                    isLoading={props.loading}
                    ref={props.ref}
                    className={selectClassName(props.name, props.formik.touched, props.formik.errors)}
                    styles={selectStyle(props.name, props.formik.touched, props.formik.errors)}
                    onBlur={() => props.formik.setFieldTouched(props.name)}
                    onChange={async (e) => {
                        await props.formik.setFieldValue(props.name, e)
                        if (props.customChange) {
                            props.customChange(e)
                        }
                    }
                    }
                    options={props.opt} />
            )}
            <Form.Control.Feedback type="invalid" tooltip>
                {props.formik.errors[props.name]}
            </Form.Control.Feedback>
        </Form.Group>
    )
}
