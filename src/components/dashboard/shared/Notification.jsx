import Toast from 'react-bootstrap/Toast'

function Notificaton(props) {

    return(
        <Toast className={'toast-' + props.variant} onClose={() => props.close()} show={props.show} delay={5000} autohide>
            <Toast.Header>
                <strong className="me-auto">{props.title}</strong>
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
        </Toast>

    )
}

export default Notificaton;