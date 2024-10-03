"use client";
import { fetchIntraday, getQuote, getSearch, getFundamentals } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'

const page = async ({params}:any) => {
    const [profit, setprofit] = useState<boolean>()
    const intrady_data = await fetchIntraday(params.ticker)
    // console.log(intrady_data)
    let timeseries = intrady_data['Time Series (5min)']
    let keys = Object.keys(timeseries);
    let latestClose = parseFloat(timeseries[keys[0]]['4. close']);
    let previousClose = parseFloat(timeseries[keys[1]]['4. close']);
    // const data = await getQuote(params.ticker)
    // console.log(data)
    // const sugg = await getSearch("Relian")
    // console.log(sugg)
    const fundamentals = await getFundamentals(params.ticker)
    // console.log(fundamentals)


    let priceChange = latestClose - previousClose;
    let percentageChange = (priceChange / previousClose) * 100;
    if ( priceChange < 0 ){
       setprofit(true)
    }
    else setprofit(false)
    return (
    <div className='p-5'>
      <div className='mt-2'>
        <span className='font-bold text-3xl'>About: {fundamentals["Name"]} <br/></span>
        <div className='mt-8'>
        <span className='font-medium'>Sector: {fundamentals["Sector"]}<br/></span>
        <span className='font-medium'>Industry: {fundamentals["Industry"]}<br/></span>
        {/* Website: <Link href={fundamentals["OfficialSite"] }> {fundamentals["OfficialSite"]}</Link> */}
        {/* <p>{fundamentals["Description"]}</p> */}
        <span className='font-medium'>Market Capitalization: {fundamentals["MarketCapitalization"]} {fundamentals["Currency"]}</span>
        </div>

        <div className='mt-5'>
      <h3 className="font-semibold text-xl">Stock Quote for: {params.ticker.toUpperCase()}</h3>
      <div className="mt-4">
        <p>Time Frame: 5min </p>
        <p>Current Price: ${latestClose}</p>
        <p>Price Change: <span className={`${profit? ' text-green-600' : 'text-red-600'}`}> {priceChange.toFixed(3)} </span> USD</p>
        <p>Percentage Change: <span className={`${profit? ' text-green-600' : 'text-red-600'}`}> {percentageChange.toFixed(2)} </span> %</p>

        <p>Volume: {timeseries[keys[0]]['5. volume']} shares</p>
      </div>
    </div>
      </div>


    </div>

  )
}

export default page