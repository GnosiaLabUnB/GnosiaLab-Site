import React from 'react';
import Row from 'react-bootstrap/Row';

import '../../../assets/css/sidebar.css'

class HeaderTitle extends React.Component {
    render() {
      return (
        <Row>
            <h1 style={{color: 'var(--bs-gray-800)'}}>{this.props.title}</h1>
        </Row>
      )
    }
}

export default HeaderTitle;

