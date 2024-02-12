import React, { useState } from "react"
import ReleasingSelector from "../Early-Access-Build/ReleasingSelector"
import MarketPlaceTabButton from "./MarketPlaceTabButton"
import AllReleaseCard from "../Early-Access-Build/AllReleaseCard"

const MarketPlaceAll = () => {
  const [market, setMarket] = useState(1)
  return (
    <div className="max-w-[1264px] mx-auto px-4 pb-20">
      <ReleasingSelector />

      <MarketPlaceTabButton market={market} setMarket={setMarket} />
      <div className=" hidden md:flex items-center gap-20 border-t border-[#3E3355] pt-5 mb-5 mt-12">
        <p className=" text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Build Version
        </p>
        <p className=" text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Release Date
        </p>
        <p className=" text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Build Date
        </p>
        <p className=" text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Vendor
        </p>
        <p className=" text-[#C4BFCE] text-[16px] leading-[24px] mb-0">OS</p>
        <p className=" text-[#C4BFCE] text-[16px] leading-[24px] mb-0">
          Architecture
        </p>
      </div>
      {market === 1 && <AllReleaseCard />}
      {market === 2 && <AllReleaseCard />}
      {market === 3 && <AllReleaseCard />}
      {market === 4 && <AllReleaseCard />}
      {market === 5 && <AllReleaseCard />}
    </div>
  )
}

export default MarketPlaceAll
