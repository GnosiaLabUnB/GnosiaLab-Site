import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Select from 'react-select';

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
                <Select isClearable options={this.props.plant_organ}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Growth Medium" />
                <Select isClearable options={this.props.growth_medium}/>
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Solvent" />
                <Select isClearable options={this.props.solvent}/>
              </Form.Group>

              <Form.Group as={Col} controlId="" className="mb-3">
                <FormLabel label="Origin Matrix" />
                <Select isClearable options={this.props.origin_matrix}/>
              </Form.Group>
            </Row>
          </Form>
          <Button className='float-end mt-4' variant="primary" type="submit">
            Search
          </Button>  
        </>
      )
    }
}

export default HeaderTitle;

