import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { delete_item } from 'src/services/base';
import { useAuth } from "src/context/UserContext";

import Notificaton from 'src/components/dashboard/shared/Notification';
import NotificationCenter from 'src/components/dashboard/shared/NotificationCenter';

import { useState } from 'react'

function DeleteModal(props) {
    const { cookies } = useAuth();
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    return (
        <>
            <NotificationCenter>
                <Notificaton
                    variant={'danger'}
                    title={"Delete Member"}
                    msg={errorMsg}
                    show={errorMsg !== ''}
                    close={() => setErrorMsg('')}
                />
                <Notificaton
                    variant={'success'}
                    title={"Delete Member"}
                    msg={successMsg}
                    show={successMsg !== ''}
                    close={() => setSuccessMsg('')}
                />
            </NotificationCenter>

            <Modal
                size="md"
                show={props.show}
                variant={'danger'}
                centered
                onHide={() => props.close()}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p><b>Deleting:</b> {props.delete_entity_desc}</p>
                    <p>{props.delete_text}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger"
                        onClick={async () => {
                            await props.close()
                            let delete_res = await delete_item(props.api_path, props.delete_entity_id, cookies.token)
                            if (delete_res.status === 204) {
                                props.callback(props.delete_entity_id, props.api_path)
                                setSuccessMsg(props.delete_entity_desc + " successfully deleted from base")
                            } else {
                                props.callback()
                                delete_res.json().then((res) =>
                                    setErrorMsg("Error deleting " + props.delete_entity_desc + ": " + res.detail)
                                )
                            }
                        }}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    );
}

// rekanobre@gmail.comm

export default DeleteModal;