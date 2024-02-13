import React from "react"
import { RedIcon } from "../Common/Icon"

const ReleaseCardWarrper = ({
  date,
  icon,
  icon2,
  icontitle,
  title,
  description,
  subtitle,
  description2,
  className,
  icontitle2,
  title2,
  subtitle2,
  description1,
  description3,
}) => {
  return (
    <>
      <div className={`w-full md:w-[60%] ${className}`}>
        <div className="p-8 flex flex-col w-full newscard-2 bg-[#200E46]">
          <div className="">
            <h3 className="text-white text-[22px] font-semibold  leading-[28px]">
              {date}
            </h3>
            <p className=" text-base text-white font-normal">
              jdk-21+35 - Eclipse Temurin™
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[73px] ">
            <div className="  flex items-start   gap-2 justify-start">
              <div className="pt-1">{icon}</div>
              <div className="text-rose-600 text-base font-bold leading-normal">
                {icontitle}
              </div>
            </div>
            <div>
              <h3 className=" text-base pb-2 text-white font-normal">
                <span className="font-semibold"> {title}</span> {subtitle}
              </h3>
              <p className=" text-base text-white font-normal mb-0 pb-2">
                {description}
              </p>
              <p className=" text-base text-white font-normal">
                {description2}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-4 ">
            <div className="  flex items-start   gap-2 justify-start">
              <div className="pt-1">{icon2}</div>
              <div className="text-rose-600 text-base font-bold leading-normal">
                {icontitle2}
              </div>
            </div>
            <div>
              <h3 className=" text-base pb-2 text-white font-normal">
                <span className="font-semibold"> {title2}</span> {subtitle2}
              </h3>
              <p className=" text-base text-white font-normal mb-0 pb-2">
                {description1}
              </p>
              <p className=" text-base text-white font-normal">
                {description3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReleaseCardWarrper
