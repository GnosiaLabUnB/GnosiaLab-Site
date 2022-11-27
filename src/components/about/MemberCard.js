import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class MemberCard extends React.Component {
    render() {
        return (
            <Card style={{width: '12rem', margin: '0 auto', float: 'none', marginBottom: '10px', alignSelf: 'center', marginTop: '20px'}}>
            <Card.Img style={{height: '150px', width: '150px', borderRadius: '75px', alignSelf: 'center'}} variant="top" src={require("../../assets/images/avatar.jpg")}/>
            <Card.Body>
                <Card.Title style={{textAlign: "center"}}>Nome Sobrenome</Card.Title>
                <Card.Text style={{textAlign: "center"}}>
                Chefe do Laboratorio
                </Card.Text>
                <Button variant="primary">Info</Button>
            </Card.Body>
            </Card>
        )
    }
}

export default MemberCard
