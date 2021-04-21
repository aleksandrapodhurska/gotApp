import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const CharDetailsDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const CharTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span`
    font-weight: bold;
`;

const CharDetails = () => {
    return (
        <CharDetailsDiv className="rounded">
            <CharTitle>John Snow</CharTitle>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender</Term>
                    <span>male</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born</Term>
                    <span>1783</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died</Term>
                    <span>1820</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture</Term>
                    <span>First</span>
                </ListGroupItem>
            </ListGroup>
        </CharDetailsDiv>
    );
}

export default CharDetails;