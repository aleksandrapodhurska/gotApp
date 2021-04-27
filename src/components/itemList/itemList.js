import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner/spinner'; 
import ErrorMessage from '../errorMessage/errorMessage';

export default class ItemList extends Component {
    state = {
        itemList: null,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true,
            itemList: null
        })
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
        .then((itemList) => {
            this.setState({
                itemList
            })
        })
        .catch( () => this.onError())
    }

    onError(err) {
        this.setState({
            error: true,
            itemList: null
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <ListGroupItem
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                    href="#" tag="a">
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList, error} = this.state;
        if(!itemList) {
            return <Spinner/>
        }

        if(error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}