import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import RowBlock from '../rowBlock/rowBlock';

export default class HousesPage extends Component {
    gotService = new GotService();
    state = {
        selectedItem: null,
        error: false
    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }
        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={(item) => item.name}/>
        )

        const houseDetails = (
            <ItemDetails
            itemId={this.state.selectedItem}
            getData={this.gotService.getHouse}
            >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>

            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={houseDetails}/>
        )

    }
}