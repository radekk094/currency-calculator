import React, { Component } from 'react';
import CurrencyHistoryTable from '../components/CurrencyHistoryTable';

class HistoryCurrencyRate extends Component {
    state = {
        selectedCurrency: "EUR",
        selectedDateFrom: "",
        selectedDateTo: "",
        downloadDate: "",
        currencyHistory: [],
        afterDownload: false
    }

    selectedCurrencies = [
        "EUR", "USD", "GBP", "CHF", "CZK", "AUD", "CAD", "DKK", "NOK", "SEK", "BGN", "JPY", "TRY"
    ]

    handleDataFetch = () => {
        const apiWebsite = `http://api.nbp.pl/api/exchangerates/rates/a/${this.state.selectedCurrency}/${this.state.selectedDateFrom}/${this.state.selectedDateTo}?format=json`;

        fetch(apiWebsite)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    alert("Błąd");
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then(data => {
                const currencyHistory = data.rates;
                const downloadDate = new Date();
                this.setState({
                    currencyHistory,
                    downloadDate: downloadDate.toLocaleString(),
                    afterDownload: true
                });
            })
            .catch(error => console.log(error));
    }

    handleDataChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            afterDownload: false
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let dateFrom = new Date(this.state.selectedDateFrom);
        let dateTo = new Date(this.state.selectedDateTo);
        console.log(((dateTo.getTime() - dateFrom.getTime()) / (1000 * 60 * 60 * 24)) + 1);
        if ((((dateTo.getTime() - dateFrom.getTime()) / (1000 * 60 * 60 * 24)) + 1) > 366) {
            return alert("Jednorazowo możesz wybrać zakres max 366 dni.");
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

    render() {
        const { selectedCurrency, selectedDateFrom, selectedDateTo, downloadDate, currencyHistory, afterDownload } = this.state;
        const currencyOptions = this.selectedCurrencies.map(currency => (
            <option key={currency}>{currency}</option>
        ));

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    Waluta:&nbsp;
                    <select name="selectedCurrency" value={selectedCurrency} onChange={this.handleDataChange}>
                        {currencyOptions}
                    </select><br />
                    Data od:&nbsp;
                    <input name="selectedDateFrom" type="date" min={this.dateScope()[0]} max={this.dateScope()[1]} value={selectedDateFrom} onChange={this.handleDataChange} /><br />
                    Data od:&nbsp;
                    <input name="selectedDateTo" type="date" min={this.dateScope()[0]} max={this.dateScope()[1]} value={selectedDateTo} onChange={this.handleDataChange} />
                    <button>Wyszukaj dane</button>
                </form>
                {afterDownload ? (
                    <CurrencyHistoryTable
                        currencyCode={selectedCurrency}
                        downloadDate={downloadDate}
                        currencyHistory={currencyHistory}
                    />
                ) : (
                        <>
                            <h2>Wybierz walutę i zakres dat, a następnie kliknij przycisk.</h2>
                            <h3>Dostępne są dane z ostatnich 5 lat.</h3>
                            <h3>Uwaga! Jednorazowo możesz wybrać zakres max 366 dni.</h3>
                        </>
                    )
                }
            </>
        );
    }
}

export default HistoryCurrencyRate;