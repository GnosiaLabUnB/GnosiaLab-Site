import React from 'react';


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SearchForm from '../../components/client/search/SearchForm';
import CompostCard from "../../components/shared/PlantCard";
import PageWrapper from '../../components/client/shared/PageWrapper';


class Search extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        search: "",
        result: ""
      };
    }

    handleCallback = (search_result) =>{
      this.setState({result: search_result});
      // this.setState({search: event.target.value});
      console.log(search_result);
      console.log(this.state.result);
    }

    render() {
      return (
        <PageWrapper>
            <Container fluid style={{height: '85vh', padding: '60px'}}>
              <Row className='h-85'>
                <Col lg={3} className="text-left">
                  <Row>
                    <Col lg={11}>
                      <SearchForm searchViewCallback={this.handleCallback}></SearchForm>
                    </Col>
                    <Col lg={1} style={{ height: '35rem', margin: '0', padding: '0', width: '2px', borderRight: '2px solid var(--bs-secondary)'}}/>
                  </Row>
                </Col>
                <Col lg={9}>
                  <Container>
                    <Row>
                      <Col lg={12}>
                        <CompostCard result={this.state.result}> </CompostCard>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
        </PageWrapper>
      )
    }
}


export default Search;

