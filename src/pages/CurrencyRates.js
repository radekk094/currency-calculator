import React, { Component } from 'react';
import CurrencyTable from '../components/CurrencyTable';
import CurrencyCalculator from '../components/CurrencyCalculator';

class CurrencyRates extends Component {
    state = {
        currencies: [],
        sortedCurrencies: [],
        beforeSort: true,
        publicationDate: "",
        downloadDate: ""
    }

    selectedCurrencies = [
        "EUR", "USD", "GBP", "CHF", "CZK", "AUD", "CAD", "DKK", "NOK", "SEK", "BGN", "JPY", "TRY"
    ]

    handleDataFetch = () => {
        const apiWebsite = "https://api.nbp.pl/api/exchangerates/tables/a?format=json";

        fetch(apiWebsite)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then(data => {
                const currencies = data[0].rates;
                const publicationDate = new Date(data[0].effectiveDate)
                const downloadDate = new Date();
                this.setState({
                    currencies,
                    publicationDate: publicationDate.toLocaleDateString(),
                    downloadDate: downloadDate.toLocaleString()
                });
            })
            .catch(error => console.log(error));
    }

    sortCurrencies = () => {
        const sortedCurrencies = [];
        const plCurrency = {
            currency: "polski złoty",
            code: "PLN",
            mid: 1
        };
        sortedCurrencies.push(plCurrency);
        this.selectedCurrencies.forEach(selectedCurrency => {
            this.state.currencies.forEach(currency => {
                if (currency.code === selectedCurrency) {
                    sortedCurrencies.push(currency);
                };
            });
        });
        this.setState({
            sortedCurrencies
        });
    }

    handleRefreshClick = () => {
        this.handleDataFetch();
        this.sortCurrencies();
    }

    componentDidMount() {
        this.handleDataFetch();
    }

    componentDidUpdate() {
        if (this.state.beforeSort) {
            this.sortCurrencies();
            this.setState({
                beforeSort: false
            });
        }
    }

    render() {
        const { sortedCurrencies, beforeSort, publicationDate, downloadDate } = this.state;

        return (
            <>
                <CurrencyTable
                    sortedCurrencies={sortedCurrencies}
                    beforeSort={beforeSort}
                    publicationDate={publicationDate}
                    downloadDate={downloadDate}
                    refreshButtonClick={this.handleRefreshClick}
                    tableCategory="Aktualne"
                />
                {beforeSort ? null : (
                    <CurrencyCalculator
                        sortedCurrencies={sortedCurrencies}
                        tableCategory="Aktualne"
                    />
                )}
            </>
        );
    }
}

export default CurrencyRates;