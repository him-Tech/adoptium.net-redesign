import React from "react"
import OperatingSystemSelector from "./OperatingSystemSelector"
import { MacIcon, SolarisIcon, WindowIcon } from "./AppIcon"
import CommonDownloader from "./CommonDownloader"

const CtaWrapper = () => {
  const arr = [
    {
      label: "MSI, 185.41Mb",
    },

    {
      label: "ZIP, 188.84Mb",
    },
  ]
  const arrOne = [
    {
      label: "DMG, 187.45Mb",
    },
    {
      label: "PKG, 182.95Mb",
    },
    {
      label: "TAR.GZ, 182.55Mb",
    },

    {
      label: "ZIP, 188.84Mb",
    },
  ]
  const arrTwo = [
    {
      label: "DEB, 171.82Mb",
    },

    {
      label: "RPM, 179.13Mb",
    },
    {
      label: "TAR.GZ, 199.29Mb",
    },
  ]
  const arrThree = [
    {
      label: "APK, 198.26Mb",
    },

    {
      label: "TAR.GZ, 198.61Mb",
    },
  ]
  const arrFour = [
    {
      label: "TAR.GZ, 198.61Mb",
    },
  ]

  return (
    <div className="">
      <div className="max-w-[1264px] space-y-6  w-full   mx-auto mt-8 px-6  lg:px-8 sm:px-4 xl:px-0  rounded-[24px]  border-white ">
        <div className="flex justify-center lg:justify-between flex-wrap   border border-[#554772] rounded-[24px] !bg-[#200E46] items-start  p-6 lg:p-8">
          <div className="w-full lg:w-[35%] flex flex-col">
            <OperatingSystemSelector
              operatingSystem={"Window"}
              svgComponent={<WindowIcon />}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
            <h5 className="pb-6 border-b-[1px] text-2xl font-semibold  border-[#3E3355]">
              {" "}
              jdk-11.0.14+3 - 27th October 2023
            </h5>
            {arr.map(obj => (
              <CommonDownloader obj={obj} />
            ))}
          </div>
        </div>
        <div className="flex justify-between border flex-wrap border-[#554772] rounded-[24px] !bg-[#200E46] items-start p-6 lg:p-8">
          <div className="w-full lg:w-[35%] flex flex-col">
            <OperatingSystemSelector
              operatingSystem={"macOS"}
              svgComponent={<MacIcon />}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
            <h5 className="pb-6 border-b-[1px] text-2xl font-semibold  border-[#3E3355]">
              {" "}
              jdk-11.0.13+1 - 12th June 2023
            </h5>
            {arrOne.map(obj => (
              <CommonDownloader obj={obj} />
            ))}
          </div>
        </div>
        <div className="flex justify-between border border-[#554772] !bg-[#200E46] rounded-[24px] items-start flex-wrap p-6 lg:p-8">
          <div className="w-full lg:w-[35%] flex flex-col">
            <OperatingSystemSelector
              operatingSystem={"Linux"}
              svgComponent={<MacIcon />}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
            <h5 className="pb-6 border-b-[1px] text-2xl font-semibold  border-[#3E3355]">
              {" "}
              jdk-11.0.13+1 - 12th June 2023
            </h5>
            {arrTwo.map(obj => (
              <CommonDownloader obj={obj} />
            ))}
          </div>
        </div>
        <div className="flex justify-between border flex-wrap border-[#554772] !bg-[#200E46] rounded-[24px] items-start p-6 lg:p-8">
          <div className="w-full lg:w-[35%] flex flex-col">
            <OperatingSystemSelector
              operatingSystem={"Linux"}
              svgComponent={<WindowIcon />}
            />
          </div>
          <div className=" flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
            <h5 className="pb-6 border-b-[1px] text-2xl font-semibold  border-[#3E3355]">
              {" "}
              jdk-11.0.13+1 - 12th June 2023
            </h5>
            {arrThree.map(obj => (
              <CommonDownloader obj={obj} />
            ))}
          </div>
        </div>
        <div className="flex justify-between border flex-wrap border-[#554772] !bg-[#200E46] rounded-[24px] items-start p-6 lg:p-8">
          <div className="w-full lg:w-[35%] flex flex-col">
            <OperatingSystemSelector
              operatingSystem={"Solaris"}
              svgComponent={<SolarisIcon />}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] mt-8 lg:mt-0">
            <h5 className="pb-6 text-2xl font-semibold  border-b-[1px] border-[#3E3355]">
              {" "}
              jdk-11.0.13+1 - 12th June 2023
            </h5>
            {arrFour.map(obj => (
              <CommonDownloader obj={obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaWrapper
