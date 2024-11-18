import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const CurrencyTable = () => {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`
        );

        const ratesData = response.data.rates;

        const selectedCurrencies = ["USD", "EUR", "IDR", "JPY", "GBP"];
        
        const filteredRates = Object.keys(ratesData)
          .filter(currency => selectedCurrencies.includes(currency))
          .map(currency => ({
            currency: currency,
            exchangeRate: parseFloat(ratesData[currency]),
            weBuy: parseFloat(ratesData[currency]) * 1.05,
            weSell: parseFloat(ratesData[currency]) * 0.95,
          }));

        setRates(filteredRates);
      } catch (err) {
        setError("Gagal mengambil data mata uang.");
      }
    };

    fetchRates();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Currency Rates</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.currency}>
              <td>{rate.currency}</td>
              <td>{rate.weBuy.toFixed(6)}</td>
              <td>{rate.exchangeRate.toFixed(6)}</td>
              <td>{rate.weSell.toFixed(6)}</td>
            </tr>
          ))}
        </tbody>
      </table>

<p>Nilai mata uang berdasarkan 1 USD</p>

      <footer>
       Aplikasi ini menggunakan API dari <a href="https://currencyfreaks.com" style={{ color: "white" }}>CurrencyFreaks</a>.
      </footer>
    </div>
  );
};

export default CurrencyTable;
