
import ToastContainer from 'react-bootstrap/ToastContainer'

function NotificationCenter(props) {

    return(
        <ToastContainer className="p-5" position={'bottom-end'}>
           {props.children}
        </ToastContainer>
    )
}

export default NotificationCenter;