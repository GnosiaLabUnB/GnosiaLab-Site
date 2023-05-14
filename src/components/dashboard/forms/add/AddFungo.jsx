import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { FormGroupControl, FormGroupSelect } from 'src/components/dashboard/forms/FormComponents';

import { API_PATHS, create_item, get_all } from 'src/services/base'
import * as shared from 'src/services/shared'

import { Formik } from 'formik';
import * as yup from 'yup';
import { create_entity } from 'src/components/dashboard/forms/helpers';
import { Accordion, Button } from 'react-bootstrap';
import { useAuth } from "src/context/UserContext";

import NotificationCenter from 'src/components/dashboard/shared/NotificationCenter';
import Notificaton from 'src/components/dashboard/shared/Notification';

function AddFungo() {

  const [loading, setLoading] = useState();
  const [growthCondOpt, setGrowthCondOpt] = useState();
  const [growthMedOpt, setGrowthMedOpt] = useState();
  const [originMatrixOpt, setOriginMatrixOpt] = useState();
  const [solventOpt, setSolventOpt] = useState();
  const [plantOrganOpt, setPlantOrganOpt] = useState();
  const [boxOpt, setBoxOpt] = useState();
  const [freezerOpt, setFreezerOpt] = useState();

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const availability_opt = [
    { value: 0, label: "Unavailable" },
    { value: 1, label: "Available" }
  ]

  const { cookies } = useAuth();

  const react_select_schema = yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required(),
  })

  const schema = yup.object().shape({
    internal_id: yup.string().required("Required"),
    id_mycotheque: yup.string().required("Required"),
    growth_medium: react_select_schema.required("Required"),
    growth_condition_days: yup.number().required("Required"),
    growth_condition_type: react_select_schema.required("Required"),
    origin_matrix: react_select_schema.required("Required"),
    plant_organ: react_select_schema.required("Required"),
    solvent: react_select_schema.required("Required"),
    extraction_year: yup.number().required("Required"),
    mass_mg: yup.number().required("Required"),
    availability: react_select_schema.required("Required"),
    extract_code: yup.string().nullable(),
    box: react_select_schema.nullable(),
    freezer: react_select_schema.nullable(),
    inbox_position: yup.string().nullable(),
    publications: yup.string().nullable(),
    thesis: yup.string().nullable(),
    ata: yup.string().nullable(),
    endophytic_fungi_code: yup.string().nullable(),
    obs: yup.string().nullable()
  })

  useEffect(() => {
    async function set_options() {
      let growth_condition_json = await get_all(API_PATHS.growth_condition)
      let growth_medium_json = await get_all(API_PATHS.growth_medium)
      let origin_matrix_json = await get_all(API_PATHS.origin_matrix)
      let solvent_json = await get_all(API_PATHS.solvent)
      let plant_organ_json = await get_all(API_PATHS.plant_organ)
      let box_json = await get_all(API_PATHS.box)
      let freezer_json = await get_all(API_PATHS.freezer)

      setGrowthCondOpt(growth_condition_json.map(shared.opt_creator))
      setGrowthMedOpt(growth_medium_json.map(shared.opt_creator))
      setOriginMatrixOpt(origin_matrix_json.map(shared.opt_creator))
      setSolventOpt(solvent_json.map(shared.opt_creator))
      setPlantOrganOpt(plant_organ_json.map(shared.opt_creator_organ))
      setBoxOpt(box_json.map(shared.opt_creator))
      setFreezerOpt(freezer_json.map(shared.opt_creator))
    }
    set_options();
  }, [])


  const handleCreate = async (inputValue, path) => {

    setLoading(true);
    let option = await create_entity(inputValue, path, cookies.token)

    if (path === API_PATHS.growth_medium) {
      setGrowthMedOpt((prev) => [...prev, option]);
    } else if (path === API_PATHS.growth_condition) {
      setGrowthCondOpt((prev) => [...prev, option]);
    } else if (path === API_PATHS.origin_matrix) {
      setOriginMatrixOpt((prev) => [...prev, option]);
    } else if (path === API_PATHS.plant_organ) {
      setPlantOrganOpt((prev) => [...prev, option]);
    } else if (path === API_PATHS.solvent) {
      setSolventOpt((prev) => [...prev, option]);
    } else if (path === API_PATHS.freezer) {
      setFreezerOpt((prev) => [...prev, option]);
    } else if (path === API_PATHS.box) {
      setBoxOpt((prev) => [...prev, option]);
    }
    setLoading(false);
    return option
  };

  async function handleCustomSubmit(schema) {

    const submit_schema = {
      internal_id: schema.internal_id,
      id_mycotheque: schema.id_mycotheque,
      growth_condition_days: schema.growth_condition_days,
      extraction_year: schema.extraction_year,
      mass_mg: schema.mass_mg,
      extract_code: schema.extract_code,
      endophytic_fungi_code: schema.endophytic_fungi_code,
      obs: schema.obs,
      inbox_position: schema.inbox_position,
      publications: schema.publications,
      thesis: schema.thesis,
      ata: schema.ata,
      availability: schema.availability.value,
      plant_organ_id: schema.plant_organ.value,
      growth_medium_id: schema.growth_medium.value,
      origin_matrix_id: schema.origin_matrix.value,
      growth_condition_type_id: schema.growth_condition_type.value,
      solvent_id: schema.solvent.value,
      box_id: schema.box?.value,
      freezer_id: schema.freezer?.value,
    }

    let update_res = await create_item(API_PATHS.fungi, submit_schema, cookies.token)
    if (update_res.ok) {
      update_res.json().then((res) => {
        console.log(res)
        setSuccessMsg("Fungi Extract " + res.internal_id + " successfully created!")
      })
    } else {
      update_res.json().then((res) =>
        setErrorMsg("Error creating fungi extract: " + res.detail)
      )
    }
  }


  return (
    <>

      <NotificationCenter>
        <Notificaton
          variant={'danger'}
          title={"Create Fungi Extract"}
          msg={errorMsg}
          show={errorMsg !== ''}
          close={() => setErrorMsg('')}
        />
        <Notificaton
          variant={'success'}
          title={"Create Fungi Extract"}
          msg={successMsg}
          show={successMsg !== ''}
          close={() => setSuccessMsg('')}
        />
      </NotificationCenter>

      <Row>
        <Breadcrumb>
          <Breadcrumb.Item href="/admin/add">Adicionar</Breadcrumb.Item>
          <Breadcrumb.Item active>Fungo</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row className='mb-4 mt-3'>
        <h1 style={{ color: 'var(--bs-gray-800)' }}>Adicionar Extrato de Microorganismos</h1>
      </Row>
      <Formik
        validationSchema={schema}
        onSubmit={handleCustomSubmit}
        initialValues={{
          internal_id: '',
          id_mycotheque: '',
          growth_medium: null,
          growth_condition_type: null,
          growth_condition_days: 0,
          origin_matrix: null,
          plant_organ: null,
          solvent: null,
          extraction_year: 0,
          mass_mg: null,
          availability: null,
          extract_code: '',
          box: null,
          freezer: null,
          publications: '',
          thesis: '',
          ata: '',
          inbox_position: '',
          endophytic_fungi_code: '',
          obs: ''
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className="mt-3">
            <Row>
              <FormGroupControl title="ID" name="internal_id"
                type="text" placeholder="Enter ID" formik={formik} />
              <FormGroupControl title="ID Micoteca" name="id_mycotheque"
                type="text" placeholder="Enter ID" formik={formik} />
            </Row>
            <Row>
              <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                title="Growth Medium" name="growth_medium" opt={growthMedOpt} path={API_PATHS.growth_medium} />
              <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                title="Growth Condition Type" name="growth_condition_type" opt={growthCondOpt} path={API_PATHS.growth_condition} />
              <FormGroupControl title="Growth Condition Days" name="growth_condition_days"
                type="text" placeholder="Enter  Days" formik={formik} />
            </Row>
            <Row>
              <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                title="Origin Matrix" name="origin_matrix" opt={originMatrixOpt} path={API_PATHS.origin_matrix} />
              <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                title="Plant Organ" name="plant_organ" opt={plantOrganOpt} path={API_PATHS.plant_organ} />
              <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                title="Solvent" name="solvent" opt={solventOpt} path={API_PATHS.solvent} />
            </Row>
            <Row>
              <FormGroupControl title="Extraction Year" name="extraction_year"
                type="number" placeholder="Enter year" formik={formik} />
              <FormGroupControl title="Mass (mg)" name="mass_mg"
                type="number" placeholder="Enter ammount" formik={formik} />
              <FormGroupSelect formik={formik} loading={loading}
                title="Availability" name="availability" opt={availability_opt} />
            </Row>
            <Row>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Informações Adicionais (Opcional)</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <FormGroupControl title="Extract Code" placeholder="Enter Code"
                        name="extract_code" type="text" formik={formik} />
                      <FormGroupControl title="Endophytic Fungi Code" placeholder="Enter Code"
                        name="endophytic_fungi_code" type="text" formik={formik} />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Informações de Publicação (Opcional)</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <FormGroupControl title="Publications" placeholder="Enter DOI"
                        name="publications" type="text" formik={formik} />
                      <FormGroupControl title="Thesis" placeholder="Enter URL"
                        name="thesis" type="text" formik={formik} />
                      <FormGroupControl title="ATA" placeholder="Enter Code"
                        name="ata" type="text" formik={formik} />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Informações do Laboratório (Opcional)</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                        title="Freezer" name="freezer" opt={freezerOpt} path={API_PATHS.freezer} />
                      <FormGroupSelect create formik={formik} loading={loading} onCreate={handleCreate}
                        title="Box" name="box" opt={boxOpt} path={API_PATHS.box} />
                      <FormGroupControl title="Position in Box" placeholder="Enter Code"
                        name="inbox_position" type="text" formik={formik} />
                    </Row>
                    <Row>
                      <FormGroupControl title="Comments" placeholder="Additional Comments"
                        name="obs" type="textares" formik={formik} />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
            <Row className="mt-4">
              <Col>
                <Button size="md" type="submit" className='float-end'>
                  Create
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AddFungo;