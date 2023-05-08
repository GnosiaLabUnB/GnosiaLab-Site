
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'


import { Formik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormLabel from '../../shared/FormLabel';

import { useAuth } from "../../../context/UserContext";
import { signup } from '../../../services/auth';

YupPassword(yup);

const schema = yup.object().shape({
    firstname: yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40, "Name is too big")
        .required("Name is a required field"),
    lastname: yup.string().required("Last name is a required field")
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40, "Last name is too big")
        .required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().required("Please enter a password")
        .min(8, "Password must contain at least 8 characters with at least one: uppercase, lowercase and number")
        .minLowercase(1, 'Password must contain lower case letters')
        .minUppercase(1, 'Password must contain upper case letter')
        .minNumbers(1, 'Password must contain numbers'),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});



function SignupForm() {

    const [errorMsg, setErrorMsg] = useState('')

    const {login} = useAuth()

    async function handleSubmit(schema) {
        console.log("Login");
        console.log(schema);
        signup(schema.firstname, schema.lastname, schema.email, schema.password).then(res => {
            if (!res) {
                login(schema.email, schema.password)
            } else {
                console.log(res.detail)
                setErrorMsg(res.detail)
            }
        })
    }

    return (
        <>
        { errorMsg &&
            <Alert variant="danger" onClose={() => setErrorMsg('')} dismissible>
                <Alert.Heading>Error Signing up</Alert.Heading>
                {errorMsg}
            </Alert>
        }
        
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirm_password: ''
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
                    <Row className='mb-2'>
                        <Col lg={6}>
                            <Form.Group className="position-relative mb-3">
                                <FormLabel label="Name" />
                                <Form.Control
                                    name="firstname"
                                    value={values.firstname}
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.firstname && !errors.fistname}
                                    isInvalid={touched.firstname && !!errors.firstname}
                                    placeholder="Name" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.firstname}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="position-relative mb-3">
                                <FormLabel label="Last Name" />
                                <Form.Control
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    type="text"
                                    onBlur={handleBlur}
                                    isValid={touched.lastname && !errors.lastname}
                                    isInvalid={touched.lastname && !!errors.lastname}
                                    placeholder="Last Name" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.lastname}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Form.Group className="position-relative mb-3">
                            <FormLabel label="Email" />
                            <Form.Control
                                name="email"
                                value={values.email}
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email}
                                placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-2'>
                        <Col lg={6}>
                            <Form.Group className="position-relative mb-3">
                                <FormLabel label="Password" />
                                <Form.Control
                                    name="password"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && !!errors.password}
                                    type="password"
                                    placeholder="Enter password" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="position-relative mb-3">
                                <FormLabel label="Confirm Password" />
                                <Form.Control
                                    name="confirm_password"
                                    value={values.confirm_password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    isValid={touched.confirm_password && !errors.confirm_password && values.confirm_password!==''}
                                    isInvalid={touched.confirm_password && !!errors.confirm_password}
                                    type="password"
                                    placeholder="Confirm password" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.confirm_password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button 
                        className="w-100 mt-2 mb-3 float-end" 
                        type="submit"
                        // disabled={!isValid}
                    >Sign Up</Button>
                </Form>
            )}
        </Formik>
        </>
    )
}

export default SignupForm;