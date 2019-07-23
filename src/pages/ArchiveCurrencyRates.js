import React, { Component } from 'react';
import CurrencyTable from '../components/CurrencyTable';
import CurrencyCalculator from '../components/CurrencyCalculator';

class ArchiveCurrencyRates extends Component {
    state = {
        currencies: [],
        sortedCurrencies: [],
        beforeSort: true,
        afterDownload: false,
        selectedDate: "",
        publicationDate: "",
        downloadDate: ""
    }

    selectedCurrencies = [
        "EUR", "USD", "GBP", "CHF", "CZK", "AUD", "CAD", "DKK", "NOK", "SEK", "BGN", "JPY", "TRY"
    ]

    handleDataFetch = () => {
        const apiWebsite = `https://api.nbp.pl/api/exchangerates/tables/a/${this.state.selectedDate}?format=json`;

        fetch(apiWebsite)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    alert("Brak danych dla wybranej daty. Wybierz inną datę!");
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then(data => {
                const currencies = data[0].rates;
                const publicationDate = new Date(this.state.selectedDate)
                const downloadDate = new Date();
                this.setState({
                    currencies,
                    publicationDate: publicationDate.toLocaleDateString(),
                    downloadDate: downloadDate.toLocaleString(),
                    afterDownload: true
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
        }
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

    handleDataChange = (e) => {
        this.setState({
            selectedDate: e.target.value,
            beforeSort: true,
            afterDownload: false
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.selectedDate) {
            return alert("Wybierz datę!");
        }
        this.handleDataFetch();
    }

    dateScope = () => {
        const maxDate = new Date();
        let minDate = new Date();
        minDate.setDate(maxDate.getDate() - (365 * 5));
        return ([this.setDateFormat(minDate), this.setDateFormat(maxDate)]);
    }

    setDateFormat = (dateToFormat) => {
        const days = dateToFormat.getDate();
        const month = (dateToFormat.getMonth() + 1);
        const year = dateToFormat.getFullYear();
        return `${year}-${(month <= 9) ? ("0" + month) : month}-${(days <= 9) ? ("0" + days) : days}`;
    }

    componentDidUpdate() {
        if (this.state.afterDownload && this.state.beforeSort) {
            this.sortCurrencies();
            this.setState({
                beforeSort: false
            });
        }
    }

    render() {
        const { sortedCurrencies, beforeSort, publicationDate, downloadDate, selectedDate } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="date" min={this.dateScope()[0]} max={this.dateScope()[1]} value={selectedDate} onChange={this.handleDataChange} />
                    <button>Wyszukaj dane</button>
                </form>
                <CurrencyTable
                    sortedCurrencies={sortedCurrencies}
                    beforeSort={beforeSort}
                    publicationDate={publicationDate}
                    downloadDate={downloadDate}
                    tableCategory="Archiwalne"
                />
                {beforeSort ? null : (
                    <CurrencyCalculator
                        sortedCurrencies={sortedCurrencies}
                        tableCategory="Archiwalne"
                    />
                )}
            </>
        );
    }
}

export default ArchiveCurrencyRates;