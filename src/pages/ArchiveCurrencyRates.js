import React, { Component } from 'react';
import CurrencyTable from '../components/CurrencyTable';
import CurrencyCalculator from '../components/CurrencyCalculator';

class ArchiveCurrencyRates extends Component {
    state = {
        currencies: [], // array with all currencies from the API url
        sortedCurrencies: [], // array with currencies selected to App
        beforeSort: true, // is App before selecting currencies?
        afterDownload: false, // is App after downloading data from API url?
        selectedDate: "", // date selected in form
        publicationDate: "", // date selected in form (but in a different format)
        downloadDate: "" // date of downloading data from API url
    }

    // array with codes of currencies, which was selected to display in the App
    selectedCurrencies = [
        "EUR", "USD", "GBP", "CHF", "CZK", "AUD", "CAD", "DKK", "NOK", "SEK", "BGN", "JPY", "TRY"
    ]

    // method to download data from API url
    handleDataFetch = () => {
        const apiWebsite = `https://api.nbp.pl/api/exchangerates/tables/a/${this.state.selectedDate}?format=json`;

        fetch(apiWebsite)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    alert("Brak danych dla wybranej daty. Wybierz inną datę.");
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

    // method to select only some currencies from downloaded data (including only selectedCurrencies array)
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
            sortedCurrencies,
            beforeSort: false
        });
    }

    // method, which changes the state with data from the form and resets boolean variables from the state (because after changing data, App shouldn't show the table before click in form submit)
    handleDataChange = (e) => {
        this.setState({
            selectedDate: e.target.value,
            beforeSort: true,
            afterDownload: false
        });
    }

    // method, which checks if user has selected date in the form and if yes - it calls method handleDataFetch to download data from the API url
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.selectedDate) {
            return alert("Wybierz datę.");
        }
        this.handleDataFetch();
    }

    // method to set min and max date in the form
    dateScope = () => {
        const maxDate = new Date();
        let minDate = new Date();
        minDate.setDate(maxDate.getDate() - (365 * 5));
        return ([this.setDateFormat(minDate), this.setDateFormat(maxDate)]);
    }

    // method to format min and max date to the form
    setDateFormat = (dateToFormat) => {
        const days = dateToFormat.getDate();
        const month = (dateToFormat.getMonth() + 1);
        const year = dateToFormat.getFullYear();
        return `${year}-${(month <= 9) ? ("0" + month) : month}-${(days <= 9) ? ("0" + days) : days}`;
    }

    // method, which checks after rendering, if the App has already downloaded data and selected currencies, included in selectedCurrencies array - if not, it calls a method sortCurrencies, which do it
    componentDidUpdate() {
        if (this.state.afterDownload && this.state.beforeSort) {
            this.sortCurrencies();
        }
    }

    // rendering the component with three parts - form with datepicker, table with data from the API url and currency calculator
    render() {
        const { sortedCurrencies, beforeSort, publicationDate, downloadDate, selectedDate } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    Data:&nbsp;
                    <input
                        type="date"
                        min={this.dateScope()[0]}
                        max={this.dateScope()[1]}
                        value={selectedDate}
                        onChange={this.handleDataChange}
                    />
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