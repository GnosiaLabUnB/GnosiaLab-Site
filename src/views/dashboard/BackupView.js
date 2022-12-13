import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../../assets/css/form.css'
import '../../assets/css/table.css'
import FormLabel from '../../components/shared/FormLabel';

import {GrDownload, GrTrash} from 'react-icons/gr'


class BackupView extends React.Component {
    render() {
      return (
        <>
        <Row>
            <h1 style={{color: 'var(--bs-gray-800)'}}>Gerenciar Backups</h1>
        </Row>
        <Row>
          <p>
            Gerencie e visualize os backups da base de dados.
          </p>
        </Row>
        <Row>
          <Container className='mt-2'>
          <Table striped hover className='table_striped_style'>
            <thead>
              <tr style={{borderStyle: 'hidden'}}>
                <th>#</th>
                <th>Data</th>
                <th>Tamanho</th>
                <th>Tipo</th>
                <th>Status</th>
                <th style={{textAlign: 'center'}}>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderStyle: 'hidden'}}>
                <td>1</td>
                <td>2022-12-07T12:17:08+00:00</td>
                <td>102Mb</td>
                <td>Manual</td>
                <td>Expira em 30 dias</td>
                <td style={{textAlign: 'center'}}><GrDownload className='me-2'/><GrTrash className='me-2'/></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>2</td>
                <td>2022-12-06T12:17:08+00:00</td>
                <td>100Mb</td>
                <td>Automático</td>
                <td>Expira em 5 dias</td>
                <td style={{textAlign: 'center'}}><GrDownload className='me-2'/><GrTrash className='me-2'/></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>3</td>
                <td>2022-12-05T12:17:08+00:00</td>
                <td>101Mb</td>
                <td>Automático</td>
                <td>Expira em 4 dias</td>
                <td style={{textAlign: 'center'}}><GrDownload className='me-2'/><GrTrash className='me-2'/></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>4</td>
                <td>2022-12-04T12:17:08+00:00</td>
                <td>90Mb</td>
                <td>Automático</td>
                <td>Expira em 3 dias</td>
                <td style={{textAlign: 'center'}}><GrDownload className='me-2'/><GrTrash className='me-2'/></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>5</td>
                <td>2022-12-03T12:17:08+00:00</td>
                <td>80Mb</td>
                <td>Automático</td>
                <td style={{color: 'var(--bs-danger)'}}>Indisponível</td>
                <td style={{textAlign: 'center'}}><GrDownload className='me-2'/><GrTrash className='me-2'/></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>6</td>
                <td>2022-12-03T12:17:08+00:00</td>
                <td>50Mb</td>
                <td>Automático</td>
                <td style={{color: 'var(--bs-danger)'}}>Expira em 2 dias</td>
                <td style={{textAlign: 'center'}}><GrDownload className='me-2'/><GrTrash className='me-2'/></td>
              </tr>
            </tbody>
          </Table>
          </Container>
        </Row>
        <Row>
          <div className=''>
            <Button variant="primary" className='float-end'>Realizar Backup Manual</Button>
            <Button variant="danger" className='float-end me-4'>Restaurar</Button>
          </div>
        </Row>
        <Row className='mt-5'>
          <Col xl={6} className="pe-5">
            <Row>
              <h3>Baixar Base em Planilha (xlsx)</h3>
            </Row>
            <Row>
              <div>
                <Button size="lg" className='p-3 mt-5 w-100' style={{color: "white"}}>Baixar Base</Button>
              </div>
            </Row>
          </Col>
          <Col xl={6} className="ps-5">
            <Row>
              <h3>Restaurar com Backup Externo</h3>
            </Row>
            <Row>
              <p>Use o campo abaixo para restaurar a base de dados. Realize o upload de um arquivo xlsx gerado pelo sistema.</p>
            </Row>
            <Row>
                <Form className='mt-2'>
                <Form.Group controlId="formFile" className="mb-3">
                  <FormLabel label="Arquivo de Restauração"/>
                  <Row>
                    <Col xl={8} className="pe-0">
                      <Form.Control type="file"/>
                    </Col>
                    <Col className='ps-1' xl={4}>
                      <Button className="w-100 ms-0" variant="danger">Restaurar</Button>
                    </Col>
                  </Row>
                </Form.Group>
          {/* <Button className='float-end' variant="primary" type="submit">
              Enviar
          </Button> */}
              </Form>
            </Row>
          </Col>
        </Row>
      </>
      )
    }
}


export default BackupView;
