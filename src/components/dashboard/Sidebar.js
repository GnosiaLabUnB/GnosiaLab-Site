import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import {AiFillDashboard, AiFillFileAdd, AiFillEdit, AiFillSetting, AiFillDatabase, AiFillDelete, AiFillContacts} from 'react-icons/ai'
import { Link } from 'react-router-dom'


import '../../assets/css/sidebar.css'

class LeftNavbar extends React.Component {
    render() {
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
                    <SidebarMenu.Body className='pt-5 text-end'>
                        <SidebarMenu.Nav>
                            <SidebarMenu.Sub>
                                <SidebarMenu.Nav.Link as={Link} to="/admin" className="mb-3">
                                    <SidebarMenu.Nav.Title className="me-3">Dashboard</SidebarMenu.Nav.Title>
                                    <SidebarMenu.Nav.Icon>
                                        <AiFillDashboard className='mb-1' size={35}/>
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
                </SidebarMenu.Collapse>
            </SidebarMenu>
        )
    }
}



export default LeftNavbar


