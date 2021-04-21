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
    constructor() {
        super();
        this.updateChar();
    }

    gotservice = new gotService();
    state = {
        char: {},
        loading: true
    }
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar(){
        const id = Math.floor(Math.random() * 425 + 25);
        this.gotservice.getCharcter(id)
            .then(this.onCharLoaded);
    }
    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = loading ? <Spinner/> : <View char={char}/>;
        return (
            <RandomBlock className="rounded">
                {errorMessage}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
        <RandomCharTitle>Random Character: {name}</RandomCharTitle>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
} 