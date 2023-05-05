
import React from 'react';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Select from 'react-select';

import {API_PATHS, get_all} from '../../services/base.js';

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
      { value: API_PATHS.organism, label: 'Organism' },
      { value: API_PATHS.organism_type, label: 'Origanism Type' },
      { value: API_PATHS.nomeclature, label: 'Nomeclature' },
      { value: API_PATHS.name_lab, label: 'Name Lab' },
      { value: API_PATHS.treatments, label: 'Treatment' },
      { value: API_PATHS.geolocation, label: 'Geolocation' },
      { value: API_PATHS.box, label: 'Box' },
      { value: API_PATHS.freezer, label: 'Freezer' },
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
              let query_result = await get_all(e.value)
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

