import React, { Component } from 'react';
import CurrencyTable from '../components/CurrencyTable';
import CurrencyCalculator from '../components/CurrencyCalculator';

class CurrencyRates extends Component {
    state = {
        currencies: [], // array with all currencies from the API url
        sortedCurrencies: [], // array with currencies selected to App
        beforeSort: true, // is App before selecting currencies?
        publicationDate: "", // date of publication data on NBP website
        downloadDate: "" // date of downloading data from API url
    }

    // array with codes of currencies, which was selected to display in the App
    selectedCurrencies = [
        "EUR", "USD", "GBP", "CHF", "CZK", "AUD", "CAD", "DKK", "NOK", "SEK", "BGN", "JPY", "TRY"
    ]

    // method to download data from API url
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
                    beforeSort: true,
                    publicationDate: publicationDate.toLocaleDateString(),
                    downloadDate: downloadDate.toLocaleString()
                });
            })
            .catch(error => console.log(error));
    }

    // method to select only some currencies from downloaded data (including only selectedCurrencies array)
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
            sortedCurrencies,
            beforeSort: false
        });
    }

    // method to handle refresh button (re-downloading data)
    handleRefreshClick = () => {
        this.handleDataFetch();
    }

    // method to download first time data from the API url, after first rendering of the component
    componentDidMount() {
        this.handleDataFetch();
    }

    // method, which checks after rendering, if the App has already selected currencies, included in selectedCurrencies array - if not, it calls a method sortCurrencies, which do it
    componentDidUpdate() {
        if (this.state.beforeSort) {
            this.sortCurrencies();
        }
    }

    // rendering the component with two parts - table with data from the API url and currency calculator
    render() {
        const { sortedCurrencies, beforeSort, publicationDate, downloadDate } = this.state;

        return (
            <>
                {beforeSort ? null : (
                    <CurrencyCalculator
                        sortedCurrencies={sortedCurrencies}
                        tableCategory="Aktualne"
                    />
                )}
                <CurrencyTable
                    sortedCurrencies={sortedCurrencies}
                    beforeSort={beforeSort}
                    publicationDate={publicationDate}
                    downloadDate={downloadDate}
                    refreshButtonClick={this.handleRefreshClick}
                    tableCategory="Aktualne"
                />
            </>
        );
    }
}

export default CurrencyRates;