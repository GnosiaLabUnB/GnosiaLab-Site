import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import {GiMushroom} from 'react-icons/gi';
import {RiPlantFill} from 'react-icons/ri';
import {ImLab} from 'react-icons/im';


import { Link } from 'react-router-dom'

function getProperIcon(variant) {
    let icon_size = 150;
    let icon_class = "mx-auto mb-2";

    if (variant === "Micoteca") {
        return (<GiMushroom size={icon_size} className={icon_class}/>);
    } else if (variant === "Extrato de Plantas") {
        return (<RiPlantFill size={icon_size} className={icon_class}/>)
    } else {
        return (<ImLab size={icon_size} className={icon_class}/>)
    }
}

class AddCard extends React.Component {
    render() {
      return (
        <Link to={this.props.to}>
            <Card style={{ width: '18rem', height: '18rem', borderRadius:'9rem'}} className="text-center mx-auto">
                <Container fluid className="my-auto">
                    {getProperIcon(this.props.variant)}
                    <Card.Body>
                        <Card.Title>{this.props.variant}</Card.Title>
                    </Card.Body>
                </Container>
            </Card>
        </Link>
      )
    }
}

export default AddCard;

