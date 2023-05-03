import React from 'react';
import { Button } from 'react-bootstrap';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import  Form  from 'react-bootstrap/Form';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import {AiFillDashboard, AiFillFileAdd, AiFillEdit, AiFillDatabase, AiFillContacts, AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { useAuth } from "../../../context/UserContext";



import '../../../assets/css/sidebar.css'


const LeftNavbar = () => {


    const {logout} = useAuth();
    function handleSubmit(schema) {
        logout();
    }
    

    return (
        <SidebarMenu
            expand="lg"
            hide="md"
            variant="light"
            bg="primary"
            className="sidebar-menu"
        >
            <SidebarMenu.Collapse>
                <SidebarMenu.Header className="mt-4">
                    <SidebarMenu.Brand style={{color: 'var(--bs-white)'}}>
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Cerrado Database
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle style={{color: 'var(--bs-white)'}}/>
                </SidebarMenu.Header>
                <SidebarMenu.Sub className="sidebar-user-card mt-4">
                    <Card className='w-100' border="secondary" bg="secondary" style={{borderRadius: '15px'}}>
                        <Row>
                            <Col xl={3} className="my-auto">
                                <Card.Img className="ms-2" style={{height: '60px', width: '60px', borderRadius: '30px', alignSelf: 'center'}} variant="top" src={require("../../../assets/images/avatar.jpg")}/>
                            </Col>
                            <Col xl={9} className="p-2">
                            <Card.Body style={{padding: '0.5rem'}}>
                                <Card.Title className='subtitle_bold pt-2 mb-1' style={{fontSize: '18px'}}>Renato Avellar Nobre</Card.Title>
                                <Card.Text className='paragraph mb-1' style={{fontSize: '12px'}}>rekanobre@gmail.com</Card.Text>
                                <Card.Text className='paragraph mb-1' style={{fontSize: '12px'}}>Colaborador</Card.Text>
                            </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </SidebarMenu.Sub>
                <SidebarMenu.Body className='pt-5 text-end'>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Sub>
                            <SidebarMenu.Nav.Link as={Link} to="/admin" className="mb-3">
                                <SidebarMenu.Nav.Title className="me-3">Dashboard</SidebarMenu.Nav.Title>
                                <SidebarMenu.Nav.Icon>
                                    <AiFillDashboard className='mb-1' size={35}/>
                                </SidebarMenu.Nav.Icon>
                            </SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Link as={Link} to="/admin/search" className="mb-3">
                                <SidebarMenu.Nav.Title className="me-3">Pesquisar</SidebarMenu.Nav.Title>
                                <SidebarMenu.Nav.Icon>
                                    <AiOutlineSearch className='mb-1' size={35}/>
                                </SidebarMenu.Nav.Icon>
                            </SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Link as={Link}  to="/admin/add" className="mb-3">
                                <SidebarMenu.Nav.Title className="me-3">Adicionar</SidebarMenu.Nav.Title>
                                <SidebarMenu.Nav.Icon>
                                    <AiFillFileAdd className='mb-1' size={35}/>
                                </SidebarMenu.Nav.Icon>
                            </SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Link as={Link}  to="/admin/edit" className="mb-3">
                                <SidebarMenu.Nav.Title className="me-3">Editar</SidebarMenu.Nav.Title>
                                <SidebarMenu.Nav.Icon>
                                    <AiFillEdit className='mb-1' size={35}/>
                                </SidebarMenu.Nav.Icon>
                            </SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Link as={Link} to="/admin/team" className="mb-3">
                                <SidebarMenu.Nav.Title className="me-3">Time</SidebarMenu.Nav.Title>
                                <SidebarMenu.Nav.Icon>
                                    <AiFillContacts className='mb-1' size={35}/>
                                </SidebarMenu.Nav.Icon>
                            </SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Link as={Link} to="/admin/backups" className="mb-3">
                                <SidebarMenu.Nav.Title className="me-3">Backups</SidebarMenu.Nav.Title>
                                <SidebarMenu.Nav.Icon>
                                    <AiFillDatabase className='mb-1' size={35}/>
                                </SidebarMenu.Nav.Icon>
                            </SidebarMenu.Nav.Link>
                        </SidebarMenu.Sub>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
                <Form onSubmit={handleSubmit}>
                    <Button className='float-end' type="submit" style={{marginTop: '70%'}} variant="secondary" size="sm">
                        Sign-out
                    </Button>                    
                </Form>
            </SidebarMenu.Collapse>
            
        </SidebarMenu>
    )
}



export default LeftNavbar


