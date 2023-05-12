import React from 'react';
import Row from 'react-bootstrap/Row';


class SubHeaderTitle extends React.Component {
    render() {
      return (
        <Row className='mt-4'>
          <h3>{this.props.title}</h3>
        </Row>
      )
    }
}

export default SubHeaderTitle;

