
import React from 'react';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';

import DeleteModal from '../../components/dashboard/shared/DeleteModal';

import { API_PATHS, get_all } from '../../services/base.js';

import EditModal from '../../components/dashboard/shared/EditModal';


class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      del_entity_id: '',
      del_entity_desc: '',
      del_text: '',
      modal_show: false,
      api_path: null,
      api_label: '',
      edit_modal_show: false,
      entity: null
    }

    
  }

  sort_func = (a,b) => { return a.id - b.id}


  closeEditModal = () => { this.setState({ edit_modal_show: false }); }
  closeDeleteModal = () => { this.setState({ modal_show: false }); }
  modalCallback = (id = null, caller = null) => {
    if (id !== null) {
      this.setState({
        result: this.state.result.filter(function (item) {
          return item["id"] !== id
        }).sort(this.sort_func)
      });
    }
  }

  editModalCallback = (res=null, caller=null) => {
    if (res){
      let new_list = this.state.result.filter(function (item) {
        return item["id"] !== res.id
      })
      
      this.setState({
        result: new_list.concat(res).sort(this.sort_func)
      })
    }
  }

  proper_desc(item) {

    let key_type = this.state.api_path

    if (key_type === API_PATHS.address) {
      return item["location"]
    } else if (key_type === API_PATHS.vegetation) {
      return item["local"] + ' - ' + item['general']
    } else if (key_type === API_PATHS.nomeclature) {
      return item["scientific_name"]
    } else if (key_type === API_PATHS.geolocation) {
      return "Lat: " + item["latitude"] + "; Long: " + item["longitude"]
    } else if (key_type === API_PATHS.plant_organ) {
      return item["organ"]
    } else {
      return item["description"]
    }
  }

  render() {

    const editOptions = [
      { value: API_PATHS.address, label: 'Address' },
      { value: API_PATHS.city, label: 'City' },
      { value: API_PATHS.state, label: 'State' },
      { value: API_PATHS.extract_method, label: 'Extract Method' },
      { value: API_PATHS.soil, label: 'Soil' },
      { value: API_PATHS.taxo_sys, label: 'Taxonomic System' },
      { value: API_PATHS.vegetation, label: 'Vegetation' },
      { value: API_PATHS.origin, label: 'Origin' },
      { value: API_PATHS.extract_type, label: 'Extract Type' },
      { value: API_PATHS.plant_organ, label: 'Plant Organ' },
      { value: API_PATHS.solvent, label: 'Solvent' },
      { value: API_PATHS.plant_family, label: 'Plant Family' },
      { value: API_PATHS.plant_species, label: 'Plant Species' },
      { value: API_PATHS.taxonomy_lvl, label: 'Taxonomic Level' },
      { value: API_PATHS.fungi_species, label: 'Fungus Species' },
      { value: API_PATHS.fungi_order, label: 'Fungus Order' },
      { value: API_PATHS.fungi_genus, label: 'Fungus Genus' },
      { value: API_PATHS.fungi_family, label: 'Fungus Family' },
      { value: API_PATHS.fungi_class, label: 'Fungus Class' },
      { value: API_PATHS.origin_matrix, label: 'Origin Matrix' },
      { value: API_PATHS.growth_medium, label: 'Growth Medium' },
      { value: API_PATHS.growth_condition, label: 'Growth Condition' },
      { value: API_PATHS.organisms, label: 'Organism' },
      { value: API_PATHS.organism_type, label: 'Origanism Type' },
      { value: API_PATHS.nomeclature, label: 'Nomeclature' },
      { value: API_PATHS.name_lab, label: 'Name Lab' },
      { value: API_PATHS.treatments, label: 'Treatment' },
      { value: API_PATHS.geolocation, label: 'Geolocation' },
      { value: API_PATHS.box, label: 'Box' },
      { value: API_PATHS.freezer, label: 'Freezer' },
      { value: API_PATHS.collectors_names, label: 'Collectors Names' },
      { value: API_PATHS.herbarium, label: 'Herbarium' },
      { value: API_PATHS.deposit, label: 'Deposit Data' },
      { value: API_PATHS.collectors, label: 'Collector' },
      { value: API_PATHS.deposit_collectors, label: 'Deposit/Collector' },
    ]

    return (
      <>
        <HeaderTitle title="Editar" />
        <Row>
          <p>
            Visualize e edite as propriedades dos sub-atributos na tabela abaixo.
          </p>
        </Row>
        <Row className='mt-3'>
          <Select
            options={editOptions}
            onChange={async (e) => {
              let query_result = await get_all(e.value)
              this.setState({
                api_path: e.value,
                api_label: e.label,
                result: query_result.sort(this.sort_func)
              }, () => {
                console.log(this.state.result);
              });
            }
            }
          />
        </Row>
        <Row className='mt-3'>
          <Container className='mt-3'>
            <Table striped hover className='mt-3 table_striped_style'>
              <thead>
                <tr>
                  {this.state.result.length > 0 && (
                    <>
                      <th>ID</th>
                      <TableHeaders results={this.state.result} />
                      <th className='text-center'>Edit</th>
                      <th className='text-center'>Delete</th>
                    </>
                  )
                  }
                </tr>
              </thead>
              <tbody>
                {
                  this.state.result.length > 0 && (
                    this.state.result?.map((_, i) =>
                      <tr key={i}>
                        <td>{this.state.result[i]["id"]}</td>
                        <TableRows item={this.state.result[i]} />
                        <td className='text-center'>
                          <Button size="sm" variant="warning"
                            onClick={() => {
                              this.setState({
                                edit_modal_show: true,
                                entity: this.state.result[i]
                              })
                            }}>
                            Edit
                          </Button>
                        </td>
                        <td className='text-center'>
                          <Button size="sm" variant="danger"
                            onClick={() => {
                              this.setState({
                                del_entity_id: this.state.result[i]["id"],
                                del_entity_desc: this.proper_desc(this.state.result[i]),
                                del_text: "Deleting this entity will affect every record containing this value and update it to NULL. Are you sure you want to delete this entity?",
                                modal_show: true
                              })
                            }}>
                            Delete
                          </Button>
                        </td>
                      </tr>

                    ))
                }
              </tbody>
            </Table>
          </Container>
        </Row>

        <DeleteModal
          close={this.closeDeleteModal}
          callback={this.modalCallback}
          show={this.state.modal_show}
          delete_text={this.state.del_text}
          delete_entity_desc={this.state.del_entity_desc}
          delete_entity_id={this.state.del_entity_id}
          api_path={this.state.api_path} />

        <EditModal
          api_path={this.state.api_path}
          entity_type={this.state.api_label}
          show={this.state.edit_modal_show}
          close={this.closeEditModal}
          entity={this.state.entity}
          callback={this.editModalCallback}
        />


      </>
    )
  }
}




function TableHeaders({ results }) {
  if (results.length > 0) {
    return Object.keys(results[0]).map((key, index) => {
      if (key !== "id" && !(results[0][key] instanceof Array)) {

        return (<th key={index}>{key.capitalize()}</th>)
      }
      return null
    })
  }
}


function TableRows({ item }) {
  return Object.keys(item).map((key, index) => {
    if ((key !== "id") && !(item[key] instanceof Array)) {
      if (typeof item[key] !== 'object' && item[key] !== null) {
        return (<td key={index}>{item[key]}</td>)
      } else {
        if (item[key] === null) {
          return (<td key={index}>N/A</td>)
        } else {
          return (<td key={index}>{item[key]["description"]}</td>)
        }
      }
    }
    return null
  })
};

export default EditView;

