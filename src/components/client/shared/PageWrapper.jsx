import React from 'react';
import NavBar from "./NavBar";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';


class PageWrapper extends React.Component {
    render() {
      return (
        <div>
            <NavBar/>
                <Container fluid>
                    {this.props.children}
                </Container>
            <Footer/>
        </div>
      )
    }
}


export default PageWrapper;
