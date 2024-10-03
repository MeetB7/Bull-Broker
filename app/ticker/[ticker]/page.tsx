import { fetchIntraday, getQuote, getSearch, getFundamentals } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const page = async ({params}:any) => {
    const intrady_data = await fetchIntraday(params.ticker)
    console.log(intrady_data)
    // const data = await getQuote(params.ticker)
    // console.log(data)
    const sugg = await getSearch("Relian")
    // console.log(sugg)
    const fundamentals = await getFundamentals(params.ticker)
    console.log(fundamentals)
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
        <p>Current Price: ${parseFloat(intrady_data['05. price']).toFixed(2)}</p>
        <p>Price Change: {intrady_data['09. change']} USD</p>
        <p>Volume: {parseInt(intrady_data['06. volume'], 10).toLocaleString()} shares</p>
      </div>
    </div>
      </div>


    </div>

  )
}

export default page