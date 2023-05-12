import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from '../../../shared/FormLabel';
import Col from 'react-bootstrap/Col';


function NomeclatureForm(props) {

    const schema = yup.object().shape({
        scientific_name: yup.string().required("Required"),
        synonym: yup.string().required("Required"),
    })


    return (
        <Formik
            validationSchema={schema}
            onSubmit={props.submit}
            initialValues={{
                scientific_name: props.entity?.scientific_name,
                synonym: props.entity?.synonym,
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
                        <FormLabel label="Scientific Name" />
                        <Form.Control
                            type="text"
                            name="scientific_name"
                            value={values.scientific_name}
                            onBlur={handleBlur}
                            isValid={touched.scientific_name && !errors.scientific_name}
                            isInvalid={touched.scientific_name && !!errors.scientific_name}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.scientific_name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="position-relative mb-3">
                        <FormLabel label="Synonym" />
                        <Form.Control
                            type="text"
                            name="synonym"
                            value={values.synonym}
                            onBlur={handleBlur}
                            isValid={touched.synonym && !errors.synonym}
                            isInvalid={touched.synonym && !!errors.synonym}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.synonym}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default NomeclatureForm