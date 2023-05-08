import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';


import SubHeaderTitle from '../../components/dashboard/shared/SubHeaderTitle';
import TeamTable from '../../components/dashboard/team/TeamTable';
import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';
import InviteForm from '../../components/dashboard/team/InviteForm';

import { get_all_user, get_all_invited, get_user } from '../../services/auth';
import { useAuth } from "../../context/UserContext";


import '../../assets/css/form.css'
import '../../assets/css/table.css'

function TeamView() {

  const [myID, setMyID] = useState([])
  const [result, setResult] = useState([])
  const [pendingResult, setPendingResult] = useState([])


  const { cookies } = useAuth();

  useEffect(() => {
    async function get_users() {
      let query_result = await get_all_user(cookies.token)
      setResult(query_result)
      let query_pending = await get_all_invited(cookies.token)
      setPendingResult(query_pending)
      let my_id = await get_user(cookies.token)
      setMyID(my_id["id"])
    }

    get_users()
  }, [cookies])

  function handleCallback(res) {
    setPendingResult(pendingResult.concat(res))
  }

  function tableCallback(id, caller) {
    console.log(id, caller)
    if (caller === '/api/users/invited/') {
      setPendingResult(pendingResult.filter(function (user) {
        return user["id"] !== id
      }));
    } else if (caller === '/api/users/') {
      setResult(result.filter(function (user) {
        return user["id"] !== id
      }));
    }
  }

  return (
    <>
      <HeaderTitle title="Gerenciar Time" />
      <Row>
        <p>
          Gerencie ou visualize seus colaboradores na tabela abaixo.
        </p>
      </Row>
      <Row>
        <TeamTable callback={tableCallback} users={result} pending_users={pendingResult} me={myID}/>
      </Row>
      <SubHeaderTitle title="Convidar Membro" />
      <Row>
        <p>Convide um novo membro enviando um email para o usuário se cadastrar</p>
      </Row>
      <Row>
        <InviteForm callback={handleCallback} cookies={cookies} />
      </Row>
    </>
  )
}


export default TeamView;

