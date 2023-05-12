import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';


function VegetationForm(props) {

    const schema = yup.object().shape({
        general: yup.string().required("Required"),
        local: yup.string().required("Required"),
        english: yup.string().required("Required"),
    })


    return (
        <Formik
            validationSchema={schema}
            onSubmit={props.submit}
            initialValues={{
                general: props.entity?.general,
                local: props.entity?.local,
                english: props.entity?.english
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
                <Form id="editForm" onSubmit={handleSubmit}>
                    <Form.Group as={Col} className="position-relative mb-3">
                        <FormLabel label="General" />
                        <Form.Control
                            type="text"
                            name="general"
                            value={values.general}
                            onBlur={handleBlur}
                            isValid={touched.general && !errors.general}
                            isInvalid={touched.general && !!errors.general}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.general}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="position-relative mb-3">
                        <FormLabel label="Local" />
                        <Form.Control
                            type="text"
                            name="local"
                            value={values.local}
                            onBlur={handleBlur}
                            isValid={touched.local && !errors.local}
                            isInvalid={touched.local && !!errors.local}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.local}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="position-relative mb-3">
                        <FormLabel label="English" />
                        <Form.Control
                            type="text"
                            name="english"
                            value={values.english}
                            onBlur={handleBlur}
                            isValid={touched.english && !errors.english}
                            isInvalid={touched.english && !!errors.english}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.english}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default VegetationForm