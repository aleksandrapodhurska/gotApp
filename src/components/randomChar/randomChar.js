import React, {Component} from 'react';
import gotService from '../../services/gotService';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import Spinner from '../spinner/spinner'; 


const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomCharTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
    color: red;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {
 
    render() {
        return (
            <RandomBlock className="rounded">
                        <RandomCharTitle>Random Character: Name</RandomCharTitle>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>gender</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>born</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>died</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>culture</span>
                </ListGroupItem>
            </ListGroup>
            </RandomBlock>
        );
    }
}