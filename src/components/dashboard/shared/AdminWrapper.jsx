import React from 'react';
import Container from 'react-bootstrap/Container';
import LeftNavbar from 'src/components/dashboard/shared/Sidebar';


import 'src/assets/css/sidebar.css'


class AdminWrapper extends React.Component {


  render() {
    return (
      <div className="main-wrapper">
        <LeftNavbar />
        <Container fluid className="main-container p-5">
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default AdminWrapper;

