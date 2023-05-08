import React from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormLabel from '../../shared/FormLabel';

import Notificaton from '../shared/Notification';
import NotificationCenter from '../shared/NotificationCenter';

import { invite_user } from '../../../services/auth';


const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required")
})

class InviteForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            msg: '',
            errorMsg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(schema) {
        console.log(schema)
        let res = await invite_user(schema.email, this.props.cookies.token)
        console.log(res)
        if (res.email) {
            this.setState({msg: res.email})
            this.props.callback(res)
        } else {
            this.setState({errorMsg: res.detail})
        }        
    }


    render() {
        return (
            <>
                <NotificationCenter>
                    {console.log(this.state.errorMsg !== false)}
                    <Notificaton 
                        variant={'warning'} 
                        title={"Invite Member"}
                        msg={this.state.errorMsg}
                        show={this.state.errorMsg !== ''}
                        close={() => this.setState({errorMsg: ''})}
                        />
                    <Notificaton 
                        variant={'success'} 
                        title={"Invite Member"}
                        msg={this.state.msg}
                        show={this.state.msg !== ''}
                        close={() => this.setState({msg: ''})}
                        />
                </NotificationCenter>

                <Formik
                    validationSchema={schema}
                    onSubmit={this.handleSubmit}
                    initialValues={{
                        email: '',
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
                        <Form noValidate onSubmit={handleSubmit} className='mt-2'>
                            <Form.Group className="mb-3">
                                <FormLabel label="Email Address" />
                                <Form.Control
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && !!errors.email}
                                    type="email"
                                    placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button className='float-end' variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
}


export default InviteForm;

