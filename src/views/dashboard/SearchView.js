
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';
import ExtratoForm from '../../components/dashboard/search/ExtratoForm';
import FungoForm from '../../components/dashboard/search/FungoForm';
import MicotecaForm from '../../components/dashboard/search/MicotecaForm';
import AllForm from '../../components/dashboard/search/AllForm';

import * as shared from '../../services/shared.js'
import {API_PATHS, get_all} from '../../services/base.js'

import FungusCard from '../../components/shared/FungusCard';
import MycoCard from '../../components/shared/MycoCard';
import PlantCard from '../../components/shared/PlantCard';

class AdminSearchView extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        origin_matrix_opt: [],
        solvent_opt: [],
        plant_organ_opt: [],
        growth_medium_opt: [],
        plant_family_opt: [],
        plant_species_opt: [],
        ext_method_opt: [],
        organisms_opt: [],
        fungus_class_opt: [],
        taxonomy_lvl_opt: [],
        nomeclature_opt: [],
        vegetation_opt: [],
        cities_opt: [],
        states_opt: [],
        herbarium_opt: [],
        collectors_name_opt: [],
        deposit_opt: [],
        collector_opt: [],
        deposit_json: {},
        collector_json: {},
        plant_family_json: {},
        organisms_json: {},
        fungus_class_json: {},
        result_fungus: [],
        result_myco: [],
        result_extract: [],
        result_all_f: [],
        result_all_m: [],
        result_all_e: [],
      }
    }

    handleCallbackFungus = (search_result) =>{
      this.setState({result_fungus: search_result}, () => {
        console.log(this.state.result_fungus);
      });  
    }

    handleCallbackMyco = (search_result) =>{
      this.setState({result_myco: search_result}, () => {
        console.log(this.state.result_myco);
      });  
    }
    
    handleCallbackExtract = (search_result) =>{
      this.setState({result_extract: search_result}, () => {
        console.log(this.state.result_extract);
      });  
    }

    handleCallbackAll = (search_result) =>{
      this.setState({
        result_all_e: search_result[0],
        result_all_f: search_result[1],
        result_all_m: search_result[2],
      }, () => {
        console.log(this.state.result_all_e);
        console.log(this.state.result_all_f);
        console.log(this.state.result_all_m);
      });  
    }

    async componentDidMount() {

      let deposit_json = await get_all(API_PATHS.deposit)
      let deposit_opt = deposit_json.map(shared.opt_creator)
      
      let collector_json = await get_all(API_PATHS.collectors)
      let collector_opt = collector_json.map(shared.opt_creator)

      let herbarium_json = await get_all(API_PATHS.herbarium)
      let herbarium_opt = herbarium_json.map(shared.opt_creator)

      let collectors_name_json = await get_all(API_PATHS.collectors_names)
      let collectors_name_opt = collectors_name_json.map(shared.opt_creator)

      let cities_json = await get_all(API_PATHS.city)
      let cities_opt = cities_json.map(shared.opt_creator)

      let states_json = await get_all(API_PATHS.state)
      let states_opt = states_json.map(shared.opt_creator)

      let vegetation_json = await get_all(API_PATHS.vegetation)
      let vegetation_opt = vegetation_json.map(shared.opt_creator_vegetation)

      let nomeclature_json = await get_all(API_PATHS.nomeclature)
      let nomeclature_opt = nomeclature_json.map(shared.opt_creator_nomeclature)

      let origin_matrix_json = await get_all(API_PATHS.origin_matrix)
      let origin_matrix_opt = origin_matrix_json.map(shared.opt_creator)

      let solvent_json = await get_all(API_PATHS.solvent)
      let solvent_opt = solvent_json.map(shared.opt_creator)

      let plant_organ_json = await get_all(API_PATHS.plant_organ)
      let plant_organ_opt = plant_organ_json.map(shared.opt_creator_organ)
      
      let growth_medium_json = await get_all(API_PATHS.growth_medium)
      let growth_medium_opt = growth_medium_json.map(shared.opt_creator)
      
      let plant_family_json = await get_all(API_PATHS.plant_family)
      let plant_family_opt = plant_family_json.map(shared.opt_creator)
      
      let ext_method_json = await get_all(API_PATHS.extract_method)
      let ext_method_opt = ext_method_json.map(shared.opt_creator)
      
      let organisms_json = await get_all(API_PATHS.organisms)
      let organisms_opt = organisms_json.map(shared.opt_creator)

      let fungus_class_json = await get_all(API_PATHS.fungi_class)
      let fungus_class_opt = fungus_class_json.map(shared.opt_creator)

      let taxonomy_lvl_json = await get_all(API_PATHS.taxonomy_lvl)
      let taxonomy_lvl_opt = taxonomy_lvl_json.map(shared.opt_creator)
      
      this.setState({
        origin_matrix_opt: origin_matrix_opt,
        solvent_opt: solvent_opt,
        plant_organ_opt: plant_organ_opt,
        growth_medium_opt: growth_medium_opt,
        plant_family_opt: plant_family_opt,
        ext_method_opt: ext_method_opt,
        organisms_opt: organisms_opt,
        plant_family_json: plant_family_json,
        organisms_json: organisms_json,
        fungus_class_opt: fungus_class_opt,
        fungus_class_json: fungus_class_json,
        taxonomy_lvl_opt: taxonomy_lvl_opt,
        nomeclature_opt: nomeclature_opt,
        vegetation_opt: vegetation_opt,
        cities_opt: cities_opt,
        states_opt: states_opt,
        herbarium_opt: herbarium_opt,
        collectors_name_opt: collectors_name_opt,
        deposit_json: deposit_json,
        collector_json: collector_json,
        deposit_opt: deposit_opt,
        collector_opt: collector_opt
      })
    }

    render() {
      return (
        <>
        <HeaderTitle title="Pesquisar"/>
        <Tabs
          defaultActiveKey="search_all"
          className="mb-3 mt-3"
        >
          <Tab eventKey="search_all" title="Todos">
            <AllForm
              searchViewCallback={this.handleCallbackAll}
              solvent={this.state.solvent_opt} 
              plant_organ={this.state.plant_organ_opt}
              plant_family={this.state.plant_family_opt}
              plant_family_json={this.state.plant_family_json}
            />
            <Row className='mt-5'>
              {this.state.result_all_e.length || this.state.result_all_f.length || this.state.result_all_m.length ?  (
                <h4 className='text-center'>
                  Found:&nbsp;&nbsp;{this.state.result_all_e.length} Plant Extracts,&nbsp;
                  {this.state.result_all_f.length} Fungi Extracts,&nbsp;
                  {this.state.result_all_m.length} Mycotheque
                </h4>
              ) : ""}
            </Row>
            <Row className='pt-5'>
                {this.state.result_all_e?.map((object, i) =>
                  <Col lg={4} className="mt-3 mb-3">
                    <PlantCard result={object} key={"all_p_"+i}></PlantCard>
                  </Col>
                )}
                {this.state.result_all_f?.map((object, i) =>
                  <Col lg={4} className="mt-3 mb-3">
                    <FungusCard result={object} key={"all_f_"+i}></FungusCard>
                  </Col>
                )}
                {this.state.result_all_m?.map((object, i) =>
                  <Col lg={4} className="mt-3 mb-3">
                    <MycoCard result={object} key={"all_m_"+i}></MycoCard>
                  </Col>
                )}
            </Row>
          </Tab>
          <Tab eventKey="plantas" title="Extrato de Plantas">
            <ExtratoForm
              searchViewCallback={this.handleCallbackExtract}
              solvent={this.state.solvent_opt} 
              plant_organ={this.state.plant_organ_opt}
              plant_family={this.state.plant_family_opt}
              plant_family_json={this.state.plant_family_json}
              ext_method={this.state.ext_method_opt}
              vegetation={this.state.vegetation_opt}
              address_city={this.state.cities_opt}
              address_state={this.state.states_opt}
              herbarium={this.state.herbarium_opt}
              collector_name={this.state.collectors_name_opt}
              deposit_opt={this.state.deposit_opt}
              collector_opt={this.state.collector_opt}
              deposit_json={this.state.deposit_json}
              collector_json={this.state.collector_json}
              compound_name={[]}
              smile={[]}
            />        
            <Row className='mt-5'>
              {this.state.result_extract.length ? (
                <h4 className='text-center'>{this.state.result_extract.length} Resultados</h4>
              ) : ""}
            </Row>
            <Row className='pt-5'>
                {this.state.result_extract?.map((object, i) =>
                  <Col lg={4} className="mt-3 mb-3">
                    <PlantCard result={object} key={i}></PlantCard>
                  </Col>
                )}
            </Row>
          </Tab>
          <Tab eventKey="ext_micro" title="Extrato de Microorganismos">
            <FungoForm 
              searchViewCallback={this.handleCallbackFungus}
              origin_matrix={this.state.origin_matrix_opt}
              solvent={this.state.solvent_opt} 
              plant_organ={this.state.plant_organ_opt}
              growth_medium={this.state.growth_medium_opt}
            />        
            <Row className='mt-5'>
              {this.state.result_fungus.length ? (
                <h4 className='text-center'>{this.state.result_fungus.length} Resultados</h4>
              ) : ""}
            </Row>
            <Row className='mt-3'>
                {this.state.result_fungus?.map((object, i) =>
                  <Col lg={4} className="mt-3 mb-3">
                    <FungusCard result={object} key={i}></FungusCard>
                  </Col>
                )}
            </Row>
          </Tab>
          <Tab eventKey="micoteca" title="Micoteca">
            <MicotecaForm
              searchViewCallback={this.handleCallbackMyco}
              plant_organ={this.state.plant_organ_opt}
              plant_family={this.state.plant_family_opt}
              plant_family_json={this.state.plant_family_json}
              organisms={this.state.organisms_opt}
              organisms_json={this.state.organisms_json}
              scientific_name={this.state.nomeclature_opt}
              taxonomic_lvl={this.state.taxonomy_lvl_opt}
              fungus_class={this.state.fungus_class_opt}
              fungus_class_json={this.state.fungus_class_json}
            />
            <Row className='mt-5'>
              {this.state.result_myco.length ? (
                <h4 className='text-center'>{this.state.result_myco.length} Resultados</h4>
              ) : ""}
            </Row>
             <Row className='pt-5'>
                {this.state.result_myco?.map((object, i) =>
                  <Col lg={4} className="mt-3 mb-3">
                    <MycoCard result={object} key={i}></MycoCard>
                  </Col>
                )}
            </Row>
          </Tab>
        </Tabs>
        
        </>
      )
    }
}


export default AdminSearchView;
