import React from 'react';
import Row from 'react-bootstrap/Row';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import SubHeaderTitle from '../../components/dashboard/shared/SubHeaderTitle';
import TeamTable from '../../components/dashboard/team/TeamTable';
import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';
import FormLabel from '../../components/shared/FormLabel';

import '../../assets/css/form.css'
import '../../assets/css/table.css'

class TeamView extends React.Component {
    render() {
      return (
        <>
        <HeaderTitle title="Gerenciar Time"/>
        <Row>
          <p>
            Gerencie ou visualize seus colaboradores na tabela abaixo.
          </p>
        </Row>
        <Row>
          <TeamTable/>
        </Row>
        <SubHeaderTitle title="Convidar Membro"/>
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

