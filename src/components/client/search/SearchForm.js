import React from 'react';
import Form from 'react-bootstrap/Form';
import FormLabel from '../../shared/FormLabel';
import Button from 'react-bootstrap/Button';


async function get_extract(extract_id) {
    return fetch('http://localhost:8000/api/extract/' + extract_id, {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then((response) => {
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
          search: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
      }

    async handleSubmit(event) {
        event.preventDefault();
        console.log("Searching for: " + this.state.search);
        let result_json = await get_extract(this.state.search);
        this.props.searchViewCallback(result_json);
    }

    handleSearchChange(event) {
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{width: "100%", height: '100%'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FormLabel label="Search ID"/>
                  <Form.Control value={this.state.search} placeholder="Enter extract search ID" onChange={this.handleSearchChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        )
    }
}


export default SearchForm
