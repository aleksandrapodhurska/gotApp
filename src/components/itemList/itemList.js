import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem href="#" tag="a">
                    John Snow
                </ListGroupItem>
                <ListGroupItem href="#" tag="a">
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem href="#" tag="a">
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}