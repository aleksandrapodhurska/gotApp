import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import GotService from '../../services/gotService';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import Button from 'reactstrap/lib/Button';

export default class App extends Component {
    gotService = new GotService();
    state = {
        showRandomChar: true,
        error: false
    }

    onToggleShow = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
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
                    <CharacterPage/>
                    <BooksPage/>
                    <HousesPage/>
                </Container>
            </>
        );
    }
}