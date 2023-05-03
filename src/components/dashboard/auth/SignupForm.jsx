
import React from 'react';


import { Formik } from 'formik';
import * as yup from 'yup';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormLabel from '../../shared/FormLabel';


import { useAuth } from "../../../context/UserContext";


const schema = yup.object().shape({
    name: yup.string(),
    lastname: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
});



function SignupForm () {

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
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <FormLabel label="Name" />
                                <Form.Control 
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    type="firstname" 
                                    placeholder="Name"/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <FormLabel label="Last Name" />
                                <Form.Control 
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    type="lastname" 
                                    placeholder="Last Name"/>
                            </Form.Group>
                        </Col>                        
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <FormLabel label="Email" />
                            <Form.Control 
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                type="email" 
                                placeholder="Enter email"/>
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
                    <Button className="w-100 mt-2 mb-3 float-end" type="submit">Login</Button>
                </Form>
            )}
        </Formik>
    )
}

export default SignupForm;