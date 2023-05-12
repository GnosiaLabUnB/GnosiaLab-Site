
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import SignupForm from '../../components/dashboard/forms/auth/SignupForm'

import { ReactComponent as LoginImage } from "../../assets/images/undraw_scientist.svg";
import Container from 'react-bootstrap/Container';


class Signup extends React.Component {
    render() {
      return (
        <div className='w-100' style={{backgroundColor: 'var(--bs-secondary)', height: '100vh'}}>
            <Row className="h-100">
                <Card border="secondary" style={{ width: '50vw', borderRadius: '25px' }} className="my-auto mx-auto">
                    <LoginImage style={{width:'40%', height: '100%'}} className="mx-auto mt-5 mb-5"/>
                    <Card.Body>
                        <Row>
                            <h2 className="text-center mt-0 mb-5" style={{ color: 'var(--bs-gray-800)' }}>Sign-up</h2>
                        </Row>
                        <Container style={{width: '80%'}} className="mx-auto mt-1">
                            <Row>
                                <SignupForm/>
                            </Row>
                            <Row className='mb-4'>
                                <img alt="" src="/logo_black.svg" width="30" height="30" className="ms-0 d-inline-block align-top m-2" />
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </div>
      )
    }
}


export default Signup;

