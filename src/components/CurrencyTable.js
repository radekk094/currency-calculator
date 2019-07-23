import React from 'react';

const CurrencyTable = (props) => {
    const { sortedCurrencies, beforeSort, publicationDate, downloadDate, refreshButtonClick, tableCategory } = props;

    // table rows with currencies data
    const currenciesTable = sortedCurrencies.map(currency => (
        (currency.code === "PLN") ? null : (
            <tr key={currency.code}>
                <td>{currency.code}</td>
                <td>{currency.currency}</td>
                <td>{currency.mid.toFixed(4)}</td>
            </tr>
        )
    ));

    // displaying some information and table with currencies data
    const result = beforeSort ? ((tableCategory === "Archiwalne") ? (
        <>
            <h2>Wybierz datę i kliknij przycisk.</h2>
            <h3>Dostępne są dane z ostatnich 5 lat.</h3>
        </>
    ) : (<h2>Wczytywanie danych...</h2>)) : (
            <>
                <h2>{tableCategory} kursy walut</h2>
                <h3>Data opublikowania danych na stronie NBP: {publicationDate}</h3>
                <h3>Data i godzina pobrania danych: {downloadDate}</h3>
                {(tableCategory === "Aktualne") ? <button onClick={refreshButtonClick}>Odśwież dane</button> : null}
                <table>
                    <tbody>
                        <tr>
                            <td>Kod waluty</td>
                            <td>Nazwa waluty</td>
                            <td>{(tableCategory === "Aktualne") ? "Aktualny kurs" : "Wartość kursu"}</td>
                        </tr>
                        {currenciesTable}
                    </tbody>
                </table>
            </>
        );

    return (
        result
    );
}

export default CurrencyTable;