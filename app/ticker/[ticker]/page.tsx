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
    <div>
      page: {params.ticker}
      <div className='flex-col gap-2'>
        About {fundamentals["Name"]} <br/>
        Sector: {fundamentals["Sector"]} 
        Industry: {fundamentals["Industry"]}
        {/* Website: <Link href={fundamentals["OfficialSite"] }> {fundamentals["OfficialSite"]}</Link> */}
        <p>{fundamentals["Description"]}</p>
        Market Capitalization: {fundamentals["MarketCapitalization"]} {fundamentals["Currency"]}
      </div>

    </div>

  )
}

export default page