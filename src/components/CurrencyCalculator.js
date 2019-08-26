import React, { Component } from 'react';

class CurrencyCalculator extends Component {
    state = {
        currency1: "EUR", // first currency to calculation
        currency2: "PLN", // second currency to calculation
        moneyAmount: "", // money amount to calculation
        result: "" // result of the calculation
    }

    // method, which changes the state with data from the form and resets result of the calculation (because after changing data, App shouldn't show the result)
    handleChange = (e) => {
        this.setState({
            result: "",
            [e.target.name]: e.target.value
        });
    }

    // method, which checks if user has completed data in the form and if yes - it calls method to calculate the result
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.moneyAmount) {
            return alert("Wprowadź kwotę.");
        }
        this.countCurrencies(this.state.currency1, this.state.currency2);
    }

    // method, which calculates the result
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
                result: ((currencyRate1 / currencyRate2) * this.state.moneyAmount)
            });
        }
    }

    // rendering the component in two parts - form with data to calculate and the result of the calculation
    render() {
        const currencyOptions = this.props.sortedCurrencies.map(currency => (
            <option key={currency.code}>{currency.code}</option>
        ));

        const { currency1, currency2, moneyAmount, result } = this.state;

        return (
            <section>
                <h2>Kalkulator walut</h2>
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
                    <input
                        name="moneyAmount"
                        type="number"
                        min="0"
                        step="0.01"
                        value={moneyAmount}
                        onChange={this.handleChange}
                    /><br />
                    <button>Oblicz</button>
                </form>
                <h3>{result ? (`${parseFloat(moneyAmount).toFixed(2)} ${currency1} = ${parseFloat(result).toFixed(2)} ${currency2}`) : <br />}</h3>
            </section>
        );
    }
}

export default CurrencyCalculator;