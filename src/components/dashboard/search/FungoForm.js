import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import CreatableSelect from 'react-select/creatable'
import FormLabel from '../../shared/FormLabel';


class HeaderTitle extends React.Component {
    render() {
      return (
        <>
        <Form>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="ID" />
                <Form.Control type="text" placeholder="Enter ID" />
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="ID Micoteca" />
                <Form.Control type="text" placeholder="Enter Code" />
              </Form.Group>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Plant Organ" />
                <CreatableSelect isClearable />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Growth Medium" />
                <Form.Control type="text" placeholder="Enter medium" />
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Solvent" />
                <Form.Control type="text" placeholder="Enter solvent" />
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Origin Matrix" />
                <CreatableSelect isClearable />
              </Form.Group>
            </Row>
          </Form>
          <Button className='float-end mt-4' variant="primary" type="submit">
            Submit
          </Button>  
        </>
      )
    }
}

export default HeaderTitle;

