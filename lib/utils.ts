import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const api_key = process.env.ALPHA_VANTAGE_API_KEY

export const fetchIntraday = async (ticker: string) => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${api_key}`)
    if (!response.ok){
      throw new Error("Network response not ok for intraday")
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching intraday of a stock",error)
    return []
  }
}

export const getSearch = async (query:string) => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${api_key}`)
    if(!response.ok){
      throw new Error("Network response not ok when searching")
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching suggestions",error)
    return []
  }
}

export const getQuote = async (ticker: string) => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${api_key}`)
    if(!response.ok){
      throw new Error("Network response not ok when getQuote")
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching quote",error)
    return []
  }
}

export const getSentiments = async (ticker: string) => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`)
    if (!response.ok){
      throw new Error("Network response was not ok when getsentiments")
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error getting sentiments",error)
    return []
  }
}

export const getFundamentals = async (ticker: string) => {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${api_key}`)
    if (!response.ok){
      throw new Error("Network response was not ok when fundamentals")
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("error getting fundamentals",error)
    return []
  }
}