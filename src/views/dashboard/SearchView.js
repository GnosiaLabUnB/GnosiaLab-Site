
import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';
import ExtratoForm from '../../components/dashboard/search/ExtratoForm';
import FungoForm from '../../components/dashboard/search/FungoForm';
import MicotecaForm from '../../components/dashboard/search/MicotecaForm';
import AllForm from '../../components/dashboard/search/AllForm';

import * as shared from '../../services/shared.js'
import * as fi_services from '../../services/fungus_info.js'
import * as mi_services from '../../services/myco_info'
import * as ext_services from '../../services/extract_info'
import * as shared_services from '../../services/shared_info'
import * as taxonomy_services from '../../services/taxonomy.js'

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
        fungus_class_json: {}
      }
    }


    async componentDidMount() {

      let deposit_json = await ext_services.get_all_deposits()
      let deposit_opt = deposit_json.map(shared.opt_creator)
      
      let collector_json = await ext_services.get_all_collectors()
      let collector_opt = collector_json.map(shared.opt_creator)

      let herbarium_json = await ext_services.get_all_herbarium()
      let herbarium_opt = herbarium_json.map(shared.opt_creator)

      let collectors_name_json = await ext_services.get_all_collectors_names()
      let collectors_name_opt = collectors_name_json.map(shared.opt_creator)

      let cities_json = await ext_services.get_all_cities()
      let cities_opt = cities_json.map(shared.opt_creator)

      let states_json = await ext_services.get_all_states()
      let states_opt = states_json.map(shared.opt_creator)

      let vegetation_json = await ext_services.get_all_vegetation()
      let vegetation_opt = vegetation_json.map(shared.opt_creator_vegetation)

      let nomeclature_json = await mi_services.get_all_nomeclature()
      let nomeclature_opt = nomeclature_json.map(shared.opt_creator_nomeclature)

      let origin_matrix_json = await fi_services.get_all_origin_matrix()
      let origin_matrix_opt = origin_matrix_json.map(shared.opt_creator)

      let solvent_json = await shared_services.get_all_solvents()
      let solvent_opt = solvent_json.map(shared.opt_creator)

      let plant_organ_json = await shared_services.get_all_plant_organ()
      let plant_organ_opt = plant_organ_json.map(shared.opt_creator_organ)
      
      let growth_medium_json = await fi_services.get_all_growth_medium()
      let growth_medium_opt = growth_medium_json.map(shared.opt_creator)
      
      let plant_family_json = await shared_services.get_all_plant_family()
      let plant_family_opt = plant_family_json.map(shared.opt_creator)
      
      let ext_method_json = await ext_services.get_all_extract_method()
      let ext_method_opt = ext_method_json.map(shared.opt_creator)
      
      let organisms_json = await mi_services.get_all_organisms()
      let organisms_opt = organisms_json.map(shared.opt_creator)

      let fungus_class_json = await taxonomy_services.get_all_fungus_class()
      let fungus_class_opt = fungus_class_json.map(shared.opt_creator)

      let taxonomy_lvl_json = await taxonomy_services.get_all_taxonomy_lvls()
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
              solvent={this.state.solvent_opt} 
              plant_organ={this.state.plant_organ_opt}
              plant_family={this.state.plant_family_opt}
              plant_family_json={this.state.plant_family_json}
            />
          </Tab>
          <Tab eventKey="plantas" title="Extrato de Plantas">
            <ExtratoForm
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
            />        
          </Tab>
          <Tab eventKey="ext_micro" title="Extrato de Microorganismos">
            <FungoForm 
              origin_matrix={this.state.origin_matrix_opt}
              solvent={this.state.solvent_opt} 
              plant_organ={this.state.plant_organ_opt}
              growth_medium={this.state.growth_medium_opt}
            />
          </Tab>
          <Tab eventKey="micoteca" title="Micoteca">
            <MicotecaForm
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
          </Tab>
        </Tabs>
        </>
      )
    }
}


export default AdminSearchView;
