import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import Select from 'react-select';

import FormLabel from '../../shared/FormLabel';

import * as search from '../../../services/search.js';

import { Formik } from 'formik';
import * as yup from 'yup';

const react_select_schema = yup.object().shape({
  label: yup.string().required(),
  value: yup.string().required(),
})

const schema = yup.object().shape({
  search_id: yup.string().nullable(),
  id_myco: yup.string().nullable(),
  plant_organ: react_select_schema.nullable(),
  growth_medium: react_select_schema.nullable(),
  solvent: react_select_schema.nullable(),
  origin_matrix: react_select_schema.nullable(),
});

class FungoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      radioValue: '1'
    }  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(schema) {
    console.log("Searching for extratos de microorganismos com o schema:");
    console.log(schema);
    let result_json = await search.search_microorgs(schema);
    this.props.searchViewCallback(result_json);
  }

  render() {
    let formclass = "mb-3"

    const radios = [
      { name: 'AND Search', value: '1' },
      { name: 'OR Search', value: '2' },
    ];

    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.handleSubmit}
        initialValues={{
          search_id: '',
          id_myco: '',
          plant_organ: null,
          growth_medium: null,
          solvent: null,
          origin_matrix: null,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className={formclass}>
                <FormLabel label="ID" />
                <Form.Control
                  type="text"
                  name="search_id"
                  value={values.search_id}
                  onChange={handleChange}
                  placeholder="Enter ID"
                />
              </Form.Group>
              <Form.Group as={Col} className={formclass}>
                <FormLabel label="ID Micoteca" />
                <Form.Control
                  type="text"
                  name="id_myco"
                  value={values.id_myco}
                  onChange={handleChange}
                  placeholder="Enter Code"
                />
              </Form.Group>
              <Form.Group as={Col} className={formclass}>
                <FormLabel label="Plant Organ" />
                <Select
                  name="plant_organ"
                  isClearable
                  value={values.plant_organ}
                  onChange={
                    async (e) =>
                      await setFieldValue('plant_organ', e)
                  }
                  options={this.props.plant_organ} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className={formclass}>
                <FormLabel label="Growth Medium" />
                <Select
                  name="growth_medium"
                  isClearable
                  value={values.growth_medium}
                  onChange={
                    async (e) =>
                      await setFieldValue('growth_medium', e)
                  }
                  options={this.props.growth_medium} />
              </Form.Group>
              <Form.Group as={Col} className={formclass}>
                <FormLabel label="Solvent" />
                <Select
                  name="solvent"
                  isClearable
                  value={values.solvent}
                  onChange={
                    async (e) =>
                      await setFieldValue('solvent', e)
                  }
                  options={this.props.solvent} />
              </Form.Group>
              <Form.Group as={Col} className={formclass}>
                <FormLabel label="Origin Matrix" />
                <Select
                  name="origin_matrix"
                  isClearable
                  value={values.origin_matrix}
                  onChange={
                    async (e) =>
                      await setFieldValue('origin_matrix', e)
                  }
                  options={this.props.origin_matrix} />
              </Form.Group>
            </Row>
            <Row>
              <Col lg={6}>
                <ButtonGroup key={"fungo_form_search"} className='float-start mt-3' style={{zIndex: '0'}}>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={"f"+idx}
                      id={`radio-f${idx}`}
                      type="radio"
                      variant={'outline-secondary'}
                      name="radio"
                      value={radio.value}
                      checked={this.state.radioValue === radio.value}
                      onChange={(e) => this.setState({radioValue: e.currentTarget.value})}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
              <Col lg={6}>
                <Button className='float-end mt-3' variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    )
  }
}

export default FungoForm;

