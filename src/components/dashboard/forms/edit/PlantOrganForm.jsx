import { Formik } from 'formik';

import * as yup from 'yup';

import Form from 'react-bootstrap/Form'
import FormLabel from 'src/components/shared/FormLabel';
import Col from 'react-bootstrap/Col';


function PlantOrganForm(props) {

    const schema = yup.object().shape({
        organ: yup.string().required("Required"),
    })


    return (
        <Formik
            validationSchema={schema}
            onSubmit={props.submit}
            initialValues={{
                organ: props.entity?.organ
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
                            name="organ"
                            onBlur={handleBlur}
                            isValid={touched.organ && !errors.organ}
                            isInvalid={touched.organ && !!errors.organ}
                            value={values.organ}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.organ}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default PlantOrganForm