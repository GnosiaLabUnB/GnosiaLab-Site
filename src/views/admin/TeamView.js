import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../../assets/css/form.css'
import '../../assets/css/table.css'
import FormLabel from '../../components/shared/FormLabel';

class TeamView extends React.Component {
    render() {
      return (
        <>
        <Row>
            <h1 style={{color: 'var(--bs-gray-800)'}}>Gerenciar Time</h1>
        </Row>
        <Row>
          <p>
            Gerencie ou visualize seus colaboradores na tabela abaixo.
          </p>
        </Row>
        <Row>
          <Container className='mt-2'>
          <Table striped hover className='table_striped_style'>
            <thead>
              <tr style={{borderStyle: 'hidden'}}>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Cargo</th>
                <th style={{textAlign: 'center'}}>Status</th>
                <th style={{textAlign: 'center'}}>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderStyle: 'hidden'}}>
                <td>1</td>
                <td>Heidi Peter</td>
                <td>heidipeter@gmail.com</td>
                <td>Admin</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>2</td>
                <td>Patrícia</td>
                <td>patricia@gmail.com</td>
                <td>Admin</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>3</td>
                <td>Laila S Espindola</td>
                <td>lailaespindola@gmail.com</td>
                <td>Admin</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>4</td>
                <td>Lorena</td>
                <td>lorena@gmail.com</td>
                <td>Colaboradora</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>5</td>
                <td>Lais</td>
                <td>lais@gmail.com</td>
                <td>Colaboradora</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>6</td>
                <td>Sophia Motta</td>
                <td>sophiamotta@gmail.com</td>
                <td>Colaboradora</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>7</td>
                <td>Tiago</td>
                <td>tiago@gmail.com</td>
                <td>Colaborador</td>
                <td style={{color: 'var(--bs-success)', textAlign: 'center'}}>Ativo</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
              <tr style={{borderStyle: 'hidden'}}>
                <td>8</td>
                <td>Renato A Nobre</td>
                <td>rekanobre@gmail.com</td>
                <td>Colaborador</td>
                <td style={{color: 'var(--bs-danger)', textAlign: 'center'}}>Pendente</td>
                <td style={{textAlign: 'center'}}><Button size="sm" variant="secondary">Remover</Button></td>
              </tr>
            </tbody>
          </Table>
          </Container>
        </Row>
        <Row className='mt-4'>
          <h3>Convidar Membro</h3>
        </Row>
        <Row>
          <p>Convide um novo membro enviando um email para o usuário se cadastrar</p>
        </Row>
        <Row>
        <Form className='mt-2'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FormLabel label="Email Address"/>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button className='float-end' variant="primary" type="submit">
              Enviar
          </Button>
        </Form>
        </Row>
        </>
      )
    }
}


export default TeamView;

