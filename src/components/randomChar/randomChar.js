import React, {Component} from 'react';
import GotService from '../../services/gotService';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import Spinner from '../spinner/spinner'; 
import ErrorMessage from '../errorMessage/errorMessage';
import { render } from 'react-dom';



const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomCharTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {
    gotService = new GotService();
    state = {
        char: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateChar();
        // this.timerId = setInterval(this.updateChar, 1500);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar = () => {
        const id = Math.floor(Math.random() * 475 + 25);
        // const id = 150000;
        this.gotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError)
    }
    render() {
        const { char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const component = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomBlock className="rounded">
                {spinner}
                {errorMessage}
                {component}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const { name, gender, born, died, culture } = char;
        return(
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