import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner'; 

const ItemDetailsDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const ItemTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span`
    font-weight: bold;
`;

const Field = ({item, field, label}) => {
    return(
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {
    gotService = new GotService();

    state = {
        item: null,
        loading: true,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        const {getData} = this.props;

        getData(itemId)
        .then( this.onItemDetailsLoaded )
        .catch( () => this.onError())

        // this.foo.bar = 0;
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            loading: false,
            item
        })
    }

    onError(err) {
        this.setState({
            item: null,
            error: true,
            loading: false
        })
    }

    render() {
        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.item) {
            return <span className="select-error">Please choose one</span>
        }

        if (this.state.loading) {
            return (
                <div className="char-details rounded">
                    <Spinner/>
                </div>
            )
        }
        
        const {item} = this.state;
        const {name} = item;

        return (
            <ItemDetailsDiv className="rounded">
                <ItemTitle>{name}</ItemTitle>
                <ListGroup className="list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </ItemDetailsDiv>
        );
    }
}