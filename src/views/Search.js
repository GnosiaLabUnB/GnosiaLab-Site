import React from 'react';


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import SearchForm from '../components/SearchForm';
import Footer from "../components/Footer";


class Search extends React.Component {

    constructor(props){
      super(props);
      // this.state = {
      //   search: "",
      //   result: {
      //     code: "",
      //     origin: "",
      //     family: "",
      //     species: "",
      //     organ: "",
      //     taxonomic_system: "",
      //     soil: "",
      //     vegetation_notes: "",
      //     collection_date: "",
      //     solvent: "",
      //     extraction_yield: "",
      //     extraction_method: "",
      //     availability: "",
      //     address_id: "",
      //     vegetation_id: "",
      //     address: {
      //       city: "",
      //       state: "",
      //       location: "",
      //       lat: "",
      //       long: ""
      //     },
      //     vegetation: {
      //       general: "",
      //       local: "",
      //       english: ""
      //     }
      //   }
      // };
      this.handleSearchChange = this.handleSearchChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange(event) {
      this.setState({search: event.target.value})
    }

    render() {
      return (
        <div>
            <NavBar></NavBar>
            <Container fluid style={{height: '85vh', padding: '60px'}}>
              <Row className='h-85'>
                <Col lg={3} className="text-left">
                  <Row>
                    <Col lg={11}>
                      <SearchForm></SearchForm>
                    </Col>
                    <Col lg={1} style={{ height: '35rem', margin: '0', padding: '0', width: '2px', borderRight: '2px solid var(--bs-secondary)'}}/>
                  </Row>
                </Col>

                {/* <Col style={{ height: '5rem', borderRight: '3px solid var(--bs-secondary)'}}/> */}
                <Col lg={9} className="my-auto">
                  <Container>
                    <Row>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
            <Footer></Footer>
        </div>
      )
    }
}


export default Search;

