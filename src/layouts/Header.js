import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <h1>Sprawdź aktualne kursy walut i przelicz kwotę</h1>
                )} />
                <Route path="/archive" render={() => (
                    <h1>Sprawdź archiwalne kursy walut i przelicz kwotę</h1>
                )} />
                <Route path="/history" render={() => (
                    <h1>Wyświetl historię zmian kursu wybranej waluty</h1>
                )} />
                <Route render={() => (
                    <h1>Strona nie istnieje</h1>
                )} />
            </Switch>
        </>
    );
}

export default withRouter(Header);