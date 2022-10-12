import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ContentContainer extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor: this.props.color}}>
                <Row style={{paddingTop: '35px', paddingBottom: '35px', height: 'auto'}}>
                    {this.props.children}
                </Row>
            </Container>

        )
    }
}

export default ContentContainer
