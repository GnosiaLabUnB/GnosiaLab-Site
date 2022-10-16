import React from 'react';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Container from "react-bootstrap/Container";
import HomeCarrousel from '../components/HomeCarrousel';



class Home extends React.Component {
    render() {
      return (
        <div>
            <NavBar></NavBar>
            <HomeCarrousel></HomeCarrousel>
            <Footer></Footer>
        </div>
      )
    }
}


export default Home;
