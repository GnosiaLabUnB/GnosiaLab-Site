
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormLabel from '../../components/shared/FormLabel';
import { ReactComponent as LoginImage } from "../../assets/images/undraw_scientist.svg";
import { Button, Container } from 'react-bootstrap';

import { Link } from "react-router-dom"

class LoginView extends React.Component {
    render() {
      return (
        <div className='w-100' style={{backgroundColor: 'var(--bs-secondary)', height: '100vh'}}>
            <Row className="h-100">
                <Card border="secondary" style={{ width: '70vw', borderRadius: '25px' }} className="my-auto mx-auto">
                    <LoginImage style={{width:'60%'}} className="my-auto mx-auto pt-5 pb-5"/>
                    <Card.Body>
                        <Row>
                            <h2 className="text-center mb-3" style={{ color: 'var(--bs-gray-800)' }}>Sign-in</h2>
                        </Row>
                        <Container style={{width: '50%'}} className="mx-auto">
                            <Row>
                                <Form>
                                    <Row>
                                    <Form.Group className="mb-3">
                                        <FormLabel label="Email"/>
                                        <Form.Control type="email" placeholder="Enter email"/>
                                    </Form.Group>
                                    </Row>
                                    <Row>
                                    <Form.Group className="mb-3">
                                        <FormLabel label="Password"/>
                                        <Form.Control type="password" placeholder="Enter password"/>
                                    </Form.Group>
                                    </Row>
                                    <Row>
                                        <a className="text-end" href='/temp'>Recuperar Senha</a>
                                    </Row>
                                    <Link to="/admin">
                                        <Button className="w-100 mt-3 mb-3 float-end">Login</Button>
                                    </Link>
                                    <Row>
                                        <img alt="" src="/logo_black.svg" width="30" height="30" className="d-inline-block align-top m-2"/>
                                    </Row>
                                </Form>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </div>
      )
    }
}


export default LoginView;

