import React from 'react';

const CurrencyHistoryTable = (props) => {
    const { currencyCode, downloadDate, currencyHistory } = props;

    // table rows with currency history data
    const currenciesTable = currencyHistory.map(currency => (
        <tr key={currency.effectiveDate}>
            <td>{currency.effectiveDate}</td>
            <td>{currency.mid.toFixed(4)}</td>
        </tr>
    ));

    return (
        <>
            <h2>Historia zmian kursu waluty {currencyCode}</h2>
            <h3>Data i godzina pobrania danych: {downloadDate}</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Data</td>
                        <td>Wartość kursu</td>
                    </tr>
                    {currenciesTable}
                </tbody>
            </table>
        </>
    );
}

export default CurrencyHistoryTable;