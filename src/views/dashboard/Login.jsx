
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import LoginForm from 'src/components/dashboard/forms/auth/LoginForm'

import { ReactComponent as LoginImage } from "src/assets/images/undraw_scientist.svg";
import Container from 'react-bootstrap/Container';


class LoginView extends React.Component {
    render() {
      return (
        <div className='w-100' style={{backgroundColor: 'var(--bs-secondary)', height: '100vh'}}>
            <Row className="h-100">
                <Card border="secondary" style={{ width: '50vw', borderRadius: '25px' }} className="my-auto mx-auto">
                    <LoginImage style={{width:'60%'}} className="my-auto mx-auto pt-5 pb-5"/>
                    <Card.Body>
                        <Row>
                            <h2 className="text-center mb-3" style={{ color: 'var(--bs-gray-800)' }}>Sign-in</h2>
                        </Row>
                        <Container style={{width: '50%'}} className="mx-auto">
                            <Row>
                                <LoginForm/>
                            </Row>
                            <Row>
                                <a className="text-end" href='/temp'>Recuperar Senha</a>
                            </Row>
                            <Row>
                                <img alt="" src="/logo_black.svg" width="30" height="30" className="d-inline-block align-top m-2" />
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

