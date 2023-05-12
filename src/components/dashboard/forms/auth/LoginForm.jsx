
import React from 'react';


import { Formik } from 'formik';
import * as yup from 'yup';


// import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormLabel from '../../../shared/FormLabel';


import { useAuth } from "../../../../context/UserContext";


const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string(),
});



function LoginForm () {

    const {login} = useAuth()

    function handleSubmit(schema) {
        console.log("Login");
        console.log(schema);

        login(schema.email, schema.password);
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
                email: '',
                password: ''
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
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group className="position-relative mb-3">
                            <FormLabel label="Email" />
                            <Form.Control 
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                type="email" 
                                isInvalid={!!errors.email}
                                placeholder="Enter email"/>
                            <Form.Control.Feedback type="invalid" tooltip>
                                Email Invalid
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <FormLabel label="Password" />
                            <Form.Control 
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="Enter password"/>
                        </Form.Group>
                    </Row>
                    {/* <Link to="/admin"> */}
                    <Button className="w-100 mt-2 mb-3 float-end" type="submit">Login</Button>
                    {/* </Link> */}
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;