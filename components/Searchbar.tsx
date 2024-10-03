 "use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearch } from "react-icons/io5";

interface StockData {
  time: string;
  price: number;
  priceChange: string;
  previousClose: number;
  marketOpen: number;
  dayHigh: number;
  dayLow: number;
  marketCap: string;
  volume: string;
}

const Searchbar: React.FC = () => {
  const router = useRouter(); // Access Next.js router
  const [query, setQuery] = useState<string>(''); // Store user input (stock symbol)
  const [stockData, setStockData] = useState<StockData | null>(null); // Store fetched stock data
  const [error, setError] = useState<string | null>(null); // Handle errors

  const handleSearch = async () => {
  //   try {
  //     const API_KEY = '2RMBGY1E4HBHUETM'; // Replace with your Alpha Vantage API key

  //     // Fetching intraday data
  //     // const response = await axios.get(
  //     //   `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${query}&interval=1min&apikey=${API_KEY}`
  //     // );
  //     const response = await fetchIntradayData(query)

  //     // Check if the response has the expected structure
  //     const stockInfo = response.data['Time Series (1min)'];
  //     if (stockInfo) {
  //       const latestTime = Object.keys(stockInfo)[0];
  //       const latestData = stockInfo[latestTime];

  //       // Fetching additional data points from the GLOBAL_QUOTE endpoint
  //       const globalResponse = await axios.get(
  //         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${API_KEY}`
  //       );

  //       const globalData = globalResponse.data['Global Quote'];
  //       if (globalData) {
  //         // Convert market cap and volume to appropriate units (handle possible missing values)
  //         const marketCap = globalData['06. market cap'] || '0';
  //         const volume = latestData['5. volume'] || '0';

  //         setStockData({
  //           time: latestTime,
  //           price: parseFloat(latestData['1. open']) || 0, // Latest open price
  //           priceChange: globalData['10. change percent'] || 'N/A', // Price change percentage
  //           previousClose: parseFloat(globalData['08. previous close']) || 0, // Previous close price
  //           marketOpen: parseFloat(globalData['02. open']) || 0, // Market open price
  //           dayHigh: parseFloat(globalData['03. high']) || 0, // Day's high
  //           dayLow: parseFloat(globalData['04. low']) || 0, // Day's low
  //           marketCap: (parseFloat(marketCap) / 1e9).toFixed(2), // Market cap in billions
  //           volume: (parseFloat(volume) / 1e6).toFixed(2), // Volume in millions
  //         });
  //         setError(null);
  //       } else {
  //         setError('Stock symbol not found in GLOBAL_QUOTE.');
  //         setStockData(null);
  //       }
  //     } else {
  //       setError('Stock symbol not found in TIME_SERIES_INTRADAY.');
  //       setStockData(null);
  //     }
  //   } catch (err) {
  //     console.error('Error fetching stock data:', err);
  //     setError('Failed to fetch stock data. Please try again.');
  //   }
  // };
  router.push(`/ticker/${query}`)
  }

  return (
    <div className='flex gap-3'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search any Stock..."
        className='border-2 rounded-md ml-[1vw] px-3 py-1'
      />
      <button onClick={handleSearch}><IoSearch /></button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {stockData && (
        <div>
          <h3>Stock Data for: {query.toUpperCase()}</h3>
          <p>Price: ${stockData.price?.toFixed(2) || 'N/A'}</p>
          <p>Price Change: {stockData.priceChange || 'N/A'}</p>
          <p>Previous Close: ${stockData.previousClose?.toFixed(2) || 'N/A'}</p>
          <p>Market Open: ${stockData.marketOpen?.toFixed(2) || 'N/A'}</p>
          <p>Day's High: ${stockData.dayHigh?.toFixed(2) || 'N/A'}</p>
          <p>Day's Low: ${stockData.dayLow?.toFixed(2) || 'N/A'}</p>
          <p>Market Cap: ${stockData.marketCap} billion</p>
          <p>Volume: {stockData.volume} million</p>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
