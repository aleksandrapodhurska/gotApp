import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import RowBlock from '../rowBlock/rowBlock';

export default class CharacterPage extends Component {
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
            getData={this.gotService.getAllCharacters}
            renderItem={(item) => item.name}/>
        )

        const charDetails = (
            <ItemDetails
            itemId={this.state.selectedItem}
            getData={this.gotService.getCharacter}
            >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>

            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )

    }
}