import React, { useState } from 'react';

const exchangeRates = {
  USD: 1,
  BDT: 121.69,
  EUR: 0.86,
  JPY: 147.38,
  GBP: 0.75,
  INR: 87.79,
  POINTS: 121.69 * 1.5,
};

const CCVter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BDT');

  const convert = (amount, from, to) => {
    const usdAmount = amount / exchangeRates[from];
    return (usdAmount * exchangeRates[to]).toFixed(2);
  };

  const convertedAmount = convert(amount, fromCurrency, toCurrency);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-12">
      <div className="w-full max-w-2xl text-center">

        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Convert Your Currency
        </h1>

        
        <div className="bg-gray-900 border border-gray-700 shadow-xl rounded-xl p-6 sm:p-8 w-full space-y-6">

          
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-left">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-left">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white"
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium text-left">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white"
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className="mt-6 text-xl font-semibold">
            {amount} {fromCurrency} ={' '}
            <span className="text-green-400">{convertedAmount}</span>{' '}
            {toCurrency}
          </div>
        </div>

        {/* Footer Line */}
        <p className="mt-8 text-gray-400 text-sm">
          Rates are manually set for demo. Future version will use live rates 🛰️
        </p>
      </div>
    </section>
  );
};

export default CCVter;
