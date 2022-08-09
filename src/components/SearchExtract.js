import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

async function get_extract(extract_id) {

  return fetch('http://localhost:8000/api/extract/' + extract_id, {
    method: 'GET',
    headers: {
      'accept': 'application/json'
    }
  })
  .then((response) => {
    // console.log(response.clone().json())
    return response.json()
  })
  .catch((error) => {
    console.log(error)
  })
}

class SearchExtract extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      search: "",
      result: {
        code: "",
        origin: "",
        family: "",
        species: "",
        organ: "",
        taxonomic_system: "",
        soil: "",
        vegetation_notes: "",
        collection_date: "",
        solvent: "",
        extraction_yield: "",
        extraction_method: "",
        availability: "",
        address_id: "",
        vegetation_id: "",
        address: {
          city: "",
          state: "",
          location: "",
          lat: "",
          long: ""
        },
        vegetation: {
          general: "",
          local: "",
          english: ""
        }
      }
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(event) {
    this.setState({search: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("Searching for: " + this.state.search);
    let result_json = await get_extract(this.state.search);
    this.setState({result: result_json});
  }

  render() {
    return (
      <Row>
        <Col md={1}></Col>
        <Col md={10} className="mt-5">
          <Row>
            <Form onSubmit={this.handleSubmit} style={{width: "100%"}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search ID</Form.Label>
                <Form.Control value={this.state.search}  placeholder="Enter extract search ID" onChange={this.handleSearchChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
          <Row className="mt-5">
            <Col md={3}>
              <Row className="mt-3"> <p>Code: {this.state.result.code}</p> </Row>
              <Row className="mt-3"> <p>Origin: {this.state.result.origin}</p> </Row>
              <Row className="mt-3"> <p>Family: {this.state.result.family}</p> </Row>
              <Row className="mt-3"> <p>Specie: {this.state.result.species}</p> </Row>
              <Row className="mt-3"> <p>Organ: {this.state.result.organ}</p> </Row>
              <Row className="mt-3"> <p>Taxonomic System: {this.state.result.taxonomic_system}</p> </Row>
              <Row className="mt-3"> <p>Soil: {this.state.result.soil}</p> </Row>
            </Col>
            <Col md={3}>
              <Row className="mt-3"> <p>Vegetation Notes: {this.state.result.vegetation_notes}</p> </Row>
              <Row className="mt-3"> <p>Collection Date: {this.state.result.collection_date}</p> </Row>
              <Row className="mt-3"> <p>Solvent: {this.state.result.solvent}</p> </Row>
              <Row className="mt-3"> <p>Extract Yield: {this.state.result.extraction_yield}</p> </Row>
              <Row className="mt-3"> <p>Extract Method: {this.state.result.extraction_method}</p> </Row>
              <Row className="mt-3"> <p>Availability: {this.state.result.availability}</p> </Row>
            </Col>
            <Col md={3}>
              <Row className="mt-3"> <p>Address ID: {this.state.result.address_id}</p> </Row>
              <Row className="mt-3"> <p>City: {this.state.result.address !== null ? this.state.result.address.city : ""}</p> </Row>
              <Row className="mt-3"> <p>State: {this.state.result.address !== null ? this.state.result.address.state : ""}</p> </Row>
              <Row className="mt-3"> <p>Location: {this.state.result.address !== null ? this.state.result.address.location : ""}</p> </Row>
              <Row className="mt-3"> <p>Latitude: {this.state.result.address !== null ? this.state.result.address.lat : ""}</p> </Row>
              <Row className="mt-3"> <p>Longitude: {this.state.result.address !== null ? this.state.result.address.long : ""}</p> </Row>
            </Col>
            <Col md={3}>
              <Row className="mt-3"> <p>Vegetation ID: {this.state.result.vegetation_id}</p> </Row>
              <Row className="mt-3"> <p>Vegetation General: {this.state.result.vegetation ? this.state.result.vegetation.general : ""}</p> </Row>
              <Row className="mt-3"> <p>Vegetation Local: {this.state.result.vegetation ? this.state.result.vegetation.local : ""}</p> </Row>
              <Row className="mt-3"> <p>Vegetation English: {this.state.result.vegetation ? this.state.result.vegetation.english : ""}</p> </Row>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
  );
  }
}

export default SearchExtract;
