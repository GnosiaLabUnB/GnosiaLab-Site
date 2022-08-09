import React from 'react';
import SearchExtract from "../components/SearchExtract";
import NavBar from "../components/NavBar";


class Home extends React.Component {
    render() {
      return (
        <div>
            <NavBar></NavBar>
            <SearchExtract></SearchExtract>
        </div>
      )
    }
}


export default Home;
