import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';


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

class SearchForm extends React.Component {

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
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    async handleSubmit(event) {
        event.preventDefault();
        console.log("Searching for: " + this.state.search);
        let result_json = await get_extract(this.state.search);
        this.setState({result: result_json});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{width: "100%", height: '100%'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row style={style.rowStyle}>
                    <Form.Label className="my-auto" style={style.labelStyle}>Search ID</Form.Label>
                </Row>
                <Form.Control value={this.state.search} placeholder="Enter extract search ID" onChange={this.handleSearchChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        )
    }
}

const style = {
    labelStyle: {
        color: 'white',
        fontWeight: 'bold',
        border: '10px'
    },
    rowStyle: {
        backgroundColor: 'var(--bs-primary)',
        width: '100%',
        margin: '0',
        height: '35px',
        marginBottom: '5px',
        borderRadius: '5px'
    }
}

export default SearchForm
