
import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';
import ExtratoForm from '../../components/dashboard/search/ExtratoForm';
import FungoForm from '../../components/dashboard/search/FungoForm';
import MicotecaForm from '../../components/dashboard/search/MicotecaForm';
import AllForm from '../../components/dashboard/search/AllForm';

class AdminSearchView extends React.Component {
    render() {
      return (
        <>
        <HeaderTitle title="Pesquisar"/>
        <Tabs
          defaultActiveKey="search_all"
          className="mb-3 mt-3"
        >
          <Tab eventKey="search_all" title="Todos">
            <AllForm/>
          </Tab>
          <Tab eventKey="plantas" title="Extrato de Plantas">
            <ExtratoForm/>        
          </Tab>
          <Tab eventKey="ext_micro" title="Extrato de Microorganismos">
            <FungoForm/>
          </Tab>
          <Tab eventKey="micoteca" title="Micoteca">
            <MicotecaForm/>
          </Tab>
        </Tabs>
        </>
      )
    }
}


export default AdminSearchView;
