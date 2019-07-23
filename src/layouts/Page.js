import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrencyRates from '../pages/CurrencyRates';
import ArchiveCurrencyRates from '../pages/ArchiveCurrencyRates';
import HistoryCurrencyRate from '../pages/HistoryCurrencyRate';
import ErrorPage from '../pages/ErrorPage';
import '../styles/Page.css';

const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={CurrencyRates} />
            <Route path="/archive" component={ArchiveCurrencyRates} />
            <Route path="/history" component={HistoryCurrencyRate} />
            <Route component={ErrorPage} />
        </Switch>
    );
}

export default Page;