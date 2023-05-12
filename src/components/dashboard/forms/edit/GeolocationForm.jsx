import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';


function GeolocationForm(props) {

    const schema = yup.object().shape({
        latitude: yup.number().required("Required"),
        longitude: yup.number().required("Required"),
    })


    return (
        <Formik
            validationSchema={schema}
            onSubmit={props.submit}
            initialValues={{
                latitude: props.entity?.latitude,
                longitude: props.entity?.longitude
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
                        <FormLabel label="Latitude" />
                        <Form.Control
                            type="number"
                            name="latitude"
                            value={values.latitude}
                            onBlur={handleBlur}
                            isValid={touched.latitude && !errors.latitude}
                            isInvalid={touched.latitude && !!errors.latitude}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.latitude}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="position-relative mb-3">
                        <FormLabel label="Longitude" />
                        <Form.Control
                            type="number"
                            name="longitude"
                            value={values.longitude}
                            onBlur={handleBlur}
                            isValid={touched.longitude && !errors.longitude}
                            isInvalid={touched.longitude && !!errors.longitude}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.longitude}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default GeolocationForm