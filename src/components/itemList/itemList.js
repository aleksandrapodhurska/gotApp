import React, {Component} from 'react';
import { render } from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner'; 

export default class ItemList extends Component {
    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
        .then((charList) => {
            this.setState({
                charList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItem
                    key={i}
                    onClick={() => this.props.onCharSelected(71 + i)}
                    href="#" tag="a">
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {charList} = this.state;
        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}