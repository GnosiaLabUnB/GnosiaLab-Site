
import React from 'react';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Select from 'react-select';

import * as extract_services from '../../services/extract_info';
import * as fungus_services from '../../services/fungus_info';
import * as myco_services from '../../services/myco_info';
import * as shared_services from '../../services/shared_info';
import * as taxo_services from '../../services/taxonomy';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'


class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }

  render() {

    const editOptions = [
      { value: extract_services.get_all_addresses, label: 'Address' },
      { value: extract_services.get_all_cities, label: 'City' },
      { value: extract_services.get_all_states, label: 'State' },
      { value: extract_services.get_all_extract_method, label: 'Extract Method' },
      { value: extract_services.get_all_soil, label: 'Soil' },
      { value: extract_services.get_all_taxonomic_sys, label: 'Taxonomic System' },
      { value: extract_services.get_all_vegetation, label: 'Vegetation' },
      { value: extract_services.get_all_origin, label: 'Origin' },
      { value: extract_services.get_all_extracts, label: 'Extract Type' },
      { value: shared_services.get_all_plant_organ, label: 'Plant Organ' },
      { value: shared_services.get_all_solvents, label: 'Solvent' },
      { value: shared_services.get_all_plant_family, label: 'Plant Family' },
      { value: shared_services.get_all_plant_species, label: 'Plant Species' },

      { value: taxo_services.get_all_taxonomy_lvls, label: 'Taxonomic Level' },
      { value: taxo_services.get_all_fungus_species, label: 'Fungus Species' },
      { value: taxo_services.get_all_fungus_order, label: 'Fungus Order' },
      { value: taxo_services.get_all_fungus_genus, label: 'Fungus Genus' },
      { value: taxo_services.get_all_fungus_family, label: 'Fungus Family' },
      { value: taxo_services.get_all_fungus_class, label: 'Fungus Class' },

      { value: fungus_services.get_all_origin_matrix, label: 'Origin Matrix' },
      { value: fungus_services.get_all_growth_medium, label: 'Growth Medium' },
      { value: fungus_services.get_all_growth_condition, label: 'Growth Condition' },
      { value: myco_services.get_all_organisms, label: 'Organism' },
      { value: myco_services.get_all_organisms_type, label: 'Origanism Type' },
      { value: myco_services.get_all_nomeclature, label: 'Nomeclature' },
      { value: myco_services.get_all_name_lab, label: 'Name Lab' },
      { value: myco_services.get_all_treatments, label: 'Treatment' },
      { value: myco_services.get_all_geolocation, label: 'Geolocation' },

      { value: shared_services.get_all_box, label: 'Box' },
      { value: shared_services.get_all_freezer, label: 'Freezer' },
      // { value: 'vanilla', label: 'Deposit Data' },
      // { value: 'vanilla', label: 'Herbarium' },
      // { value: 'vanilla', label: 'Collector Name' },
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
              let query_result = await e.value()
              this.setState({ result: query_result }, () => {
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
                  { this.state.result.length > 0 && (
                      <>
                        <th>ID</th>
                        <TableHeaders results={this.state.result}/>
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
                      <tr>
                        <td>{this.state.result[i]["id"]}</td>
                        <TableRows item={this.state.result[i]} />
                        <td className='text-center'>
                          <AiFillEdit color={"var(--bs-dark)"} className='mb-1 text-center' size={20} />
                        </td>
                        <td className='text-center'>
                          <AiFillDelete color={"var(--bs-danger)"} className='mb-1 text-center' size={20} />
                        </td>
                      </tr>

                    ))
                }
              </tbody>
            </Table>
          </Container>
        </Row>
      </>
    )
  }
}




function TableHeaders({results}) {
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

