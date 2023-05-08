import React, {useState} from 'react';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import DeleteModal from '../shared/DeleteModal';

function TeamTable(props) {

    const [modalShow, setModalShow] = useState(false);
    const [delText, setDelText] = useState('');
    const [deleteEntityID, setDeleteEntityID] = useState();
    const [deleteEntityDesc, setDeleteEntityDesc] = useState();
    const [deleteAPIPath, setDeleteAPIPath] = useState();

    const del_text1 = "Deleting this user will remove all its access and permissions. Are you sure you want to delete this user?"
    const del_text2 = "Deleting this user will revoke the capability of this email registering an account. Are you sure you want to delete this user?"

    const closeDeleteModal = () => { setModalShow(false); }
    function modalCallback(id=null, caller=null) {
        if (id !== null){
            props.callback(id, caller)
        }
    }


    return (
        <Container className='mt-2'>
            <Table striped hover className='table_striped_style'>
                <thead>
                    <tr style={{ borderStyle: 'hidden' }}>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Cargo</th>
                        <th style={{ textAlign: 'center' }}>Status</th>
                        <th style={{ textAlign: 'center' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 && (
                            props.users?.map((_, i) =>
                                <tr key={i} style={{ borderStyle: 'hidden' }}>
                                    <td>{props.users[i]["id"]}</td>
                                    <td>{props.users[i]["firstname"]} {props.users[i]["lastname"]}</td>
                                    <td>{props.users[i]["username"]}</td>
                                    <td>{props.users[i]["role"]}</td>
                                    <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                                    <td style={{ textAlign: 'center' }}>
                                        {(props.users[i]["id"] != props.me && 
                                            <Button size="sm" variant="secondary"
                                                    onClick={() =>{
                                                        setDeleteAPIPath('/api/users/')
                                                        setDeleteEntityID(props.users[i]["id"])
                                                        setDeleteEntityDesc(props.users[i]["username"])
                                                        setDelText(del_text1)
                                                        setModalShow(true)
                                                    }}>
                                                Delete
                                            </Button>
                                        )}
                                    </td>
                                </tr>

                            ))
                    }
                    {
                        props.pending_users.length > 0 && (
                            props.pending_users?.map((_, i) =>
                                <tr key={i} style={{ borderStyle: 'hidden' }}>
                                    <td>x</td>
                                    <td></td>
                                    <td>{props.pending_users[i]["email"]}</td>
                                    <td></td>
                                    <td style={{ color: 'var(--bs-danger)', textAlign: 'center' }}>Pendente</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" variant="secondary" 
                                                onClick={() =>{
                                                    setDeleteAPIPath('/api/users/invited/')
                                                    setDeleteEntityID(props.pending_users[i]["id"])
                                                    setDeleteEntityDesc(props.pending_users[i]["email"])
                                                    setDelText(del_text2)
                                                    setModalShow(true)
                                                }}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>

            <DeleteModal 
                close={closeDeleteModal}
                callback={modalCallback} 
                show={modalShow} 
                delete_text={delText}
                delete_entity_desc={deleteEntityDesc}
                delete_entity_id={deleteEntityID}
                api_path={deleteAPIPath}/>
        </Container>
    )
}


export default TeamTable;

