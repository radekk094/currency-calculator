import React, { Component } from 'react';

class CurrencyCalculator extends Component {
    state = {
        currency1: "EUR",
        currency2: "PLN",
        moneyAmount: "",
        result: ""
    }

    handleChange = (e) => {
        this.setState({
            result: "",
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.moneyAmount) {
            return alert("Wprowadź kwotę!");
        }
        this.countCurrencies(this.state.currency1, this.state.currency2);
    }

    countCurrencies = (currency1, currency2) => {
        let currencyRate1;
        let currencyRate2;

        if (currency1 === currency2) {
            this.setState({
                result: this.state.moneyAmount
            });
        } else {
            this.props.sortedCurrencies.forEach(currency => {
                if (currency.code === currency1) {
                    currencyRate1 = currency.mid;
                    return;
                } else if (currency.code === currency2) {
                    currencyRate2 = currency.mid;
                    return;
                }
            });

            this.setState({
                result: ((currencyRate1 / currencyRate2) * this.state.moneyAmount).toFixed(2)
            });
        }
    }

    render() {
        const currencyOptions = this.props.sortedCurrencies.map(currency => (
            <option key={currency.code}>{currency.code}</option>
        ));

        const { currency1, currency2, moneyAmount, result } = this.state;

        return (
            <>
                <h2>Kalkulator walut</h2>
                <h3>Kwota zostanie obliczona na podstawie danych z powyższej tabeli.</h3>
                {(this.props.tableCategory === "Aktualne") ? (<h3>W razie potrzeby odśwież dane.</h3>) : null}
                <form onSubmit={this.handleSubmit}>
                    Waluta, którą chcesz wpłacić:&nbsp;
                    <select name="currency1" value={currency1} onChange={this.handleChange}>
                        {currencyOptions}
                    </select><br />
                    Waluta, którą chcesz otrzymać:&nbsp;
                    <select name="currency2" value={currency2} onChange={this.handleChange}>
                        {currencyOptions}
                    </select><br />
                    Kwota do przeliczenia:&nbsp;
                    <input name="moneyAmount" type="number" value={moneyAmount} onChange={this.handleChange} /><br />
                    <button>Oblicz</button>
                </form>
                <h3>{result ? (`${parseFloat(moneyAmount).toFixed(2)} ${currency1} = ${parseFloat(result).toFixed(2)} ${currency2}`) : <br />}</h3>
            </>
        );
    }
}

export default CurrencyCalculator;