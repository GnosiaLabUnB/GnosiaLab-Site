import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from '../../../shared/FormLabel';
import Col from 'react-bootstrap/Col';


function DescriptionForm(props) {

    const schema = yup.object().shape({
        description: yup.string().required("Required"),
    })


    return (
        <Formik
            validationSchema={schema}
            onSubmit={props.submit}
            initialValues={{
                description: props.entity?.description
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
                </Form>
            )}
        </Formik>
    )
}

export default DescriptionForm