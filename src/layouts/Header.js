import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <div id="pageTitle"><h1>Sprawdź aktualne kursy walut i przelicz kwotę</h1></div>
                )} />
                <Route path="/archive" render={() => (
                    <div id="pageTitle"><h1>Sprawdź archiwalne kursy walut i przelicz kwotę</h1></div>
                )} />
                <Route path="/history" render={() => (
                    <div id="pageTitle"><h1>Wyświetl historię zmian kursu wybranej waluty</h1></div>
                )} />
                <Route render={() => (
                    <div id="pageTitle"><h1>Strona nie istnieje</h1></div>
                )} />
            </Switch>
        </>
    );
}

export default withRouter(Header);