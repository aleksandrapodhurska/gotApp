import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails';
import Button from 'reactstrap/lib/Button';


export default class App extends Component {
    state = {
        showRandomChar: true,
        selectedChar: null
    }

    onToggleShow = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {
        const randomCharShow = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button
                            onClick={this.onToggleShow}
                            color="info"
                            >
                                Show Random Character
                            </Button>
                            {randomCharShow}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}