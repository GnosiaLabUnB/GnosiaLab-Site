import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { API_PATHS, update_item } from '../../../services/base';
import { useAuth } from "../../../context/UserContext";

import Notificaton from '../shared/Notification';
import NotificationCenter from '../shared/NotificationCenter';


import { useState } from 'react'
import DescriptionForm from '../forms/edit/DescriptionForm';
import NomeclatureForm from '../forms/edit/NomeclatureForm';
import PlantOrganForm from '../forms/edit/PlantOrganForm';
import VegetationForm from '../forms/edit/VegetationForm';
import GeolocationForm from '../forms/edit/GeolocationForm';
import AddressForm from '../forms/edit/AddressForm';
import DepositForm from '../forms/edit/DepositForm';
import OrganismTypeForm from '../forms/edit/OrganismTypeForm';
import PlantSpeciesForm from '../forms/edit/PlantSpeciesForm';
import FungusForms from '../forms/edit/FungusForm';

function EditModal(props) {
    const { cookies } = useAuth();
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    async function handleFormikSubmit(schema) {
        await props.close()
        console.log(schema)
        let update_res = await update_item(props.api_path,
            props.entity.id,
            schema,
            cookies.token)
        if (update_res.ok) {
            update_res.json().then((res) =>
                props.callback(res, props.api_path)
            )
            setSuccessMsg(props.entity_type + " successfully updated!")
        } else {
            props.callback()
            update_res.json().then((res) =>
                setErrorMsg("Error updating " + props.entity_type + ": " + res.detail)
            )
        }
    }

    function renderProperForm() {
        if (props.api_path === API_PATHS.vegetation) {
            return (<VegetationForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.plant_organ) {
            return (<PlantOrganForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.nomeclature) {
            return (<NomeclatureForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.geolocation) {
            return (<GeolocationForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.address) {
            return (<AddressForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.deposit_collectors) {
            return (<DepositForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.organism_type) {
            return (<OrganismTypeForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.plant_species) {
            return (<PlantSpeciesForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.fungi_species) {
            return (<FungusForms
                token={cookies.token}
                entity={props.entity}
                parent="genus"
                parent_path={API_PATHS.fungi_genus}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.fungi_order) {
            return (<FungusForms
                token={cookies.token}
                entity={props.entity}
                parent="fungus_class"
                parent_path={API_PATHS.fungi_class}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.fungi_genus) {
            return (<FungusForms
                token={cookies.token}
                entity={props.entity}
                parent="family"
                parent_path={API_PATHS.fungi_family}
                submit={handleFormikSubmit} />)
        } else if (props.api_path === API_PATHS.fungi_family) {
            return (<FungusForms
                token={cookies.token}
                entity={props.entity}
                parent="order"
                parent_path={API_PATHS.fungi_order}
                submit={handleFormikSubmit} />)
        } else {
            return (<DescriptionForm
                token={cookies.token}
                entity={props.entity}
                submit={handleFormikSubmit} />)
        }
    }

    return (
        <>
            <NotificationCenter>
                <Notificaton
                    variant={'danger'}
                    title={"Edit Entity"}
                    msg={errorMsg}
                    show={errorMsg !== ''}
                    close={() => setErrorMsg('')}
                />
                <Notificaton
                    variant={'success'}
                    title={"Edit Entity"}
                    msg={successMsg}
                    show={successMsg !== ''}
                    close={() => setSuccessMsg('')}
                />
            </NotificationCenter>

            <Modal
                size="md"
                show={props.show}
                centered
                onHide={() => props.close()}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editing {props.entity_type}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {renderProperForm()}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" type="submit" form='editForm'>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    );
}

export default EditModal;