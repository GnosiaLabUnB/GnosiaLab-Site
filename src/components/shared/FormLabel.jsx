import React from 'react';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import 'src/assets/css/form.css'

class FormLabel extends React.Component {
    render() {
        return (
            <Row className='form_row_heading'>
                <Form.Label className="my-auto form_label_style">{this.props.label}</Form.Label>
            </Row>
        )
    }
}

export default FormLabel
