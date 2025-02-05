import React from "react"
import { AdobeIcon2 } from "../Common/Icon"
import { Link } from "gatsby"
import { FaApple } from "react-icons/fa"
import { AdobeIcon3 } from "../Common/AppIcon"

const AllReleaseCard = () => {
  const releasecarddata = [
    {
      id: 1,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 2,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 3,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 4,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 5,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 6,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 7,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 8,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 9,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 9,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
    {
      id: 10,
      icon: <AdobeIcon2 />,
      icon2: <AdobeIcon3 />,

      date: "12 October 2023",
      releasedate: "  Release Date: 12 October 2023",
      buildate: " Build Date: 12 October 2023 • macOS • aarch64",
      product: "   macOS",
      modal: "  aarch64",
      check: "Checksum",
    },
  ]
  return (
    <>
      <div className="mt-8">
        {releasecarddata.map((data, index) => (
          <div
            key={index}
            className="newscard-2 !blur-0 px-6 py-6 lg:flex  justify-between items-center mt-6"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
              <span className="block md:hidden">{data.icon2}</span>
              <div className="lg:w-[160px] mt-3 md:mt-0">
                <h3 className="text-[24px] hidden md:block md:text-[16px] font-bold leading-[133.333%] md:leading-[150%]">
                  jdk-21+35 - Eclipse Temurin™
                </h3>
                <h3 className="text-[24px] block md:hidden md:text-[16px] font-bold leading-[133.333%] md:leading-[150%]">
                  jdk-21+35 - Temurin™
                </h3>
              </div>
              <div className="lg:flex  items-center gap-6">
                <p className="text-base text-[#C4BFCE] leading-[150%] mb-0  hidden lg:block">
                  {data.date}
                </p>
                <p className="text-base text-[#C4BFCE] leading-[150%] mb-0 hidden lg:block">
                  {data.date}
                </p>
                <p className="text-base text-[#C4BFCE] font-normal leading-[150%] block lg:hidden my-0">
                  {data.releasedate}
                </p>
                <h5 className="text-base text-[#C4BFCE] font-normal leading-[150%] block lg:hidden mt-4">
                  {data.buildate}
                </h5>
                <span className="fill-primary hidden md:block">
                  {data.icon}
                </span>
                <p className="text-base text-[#C4BFCE] leading-[150%] hidden lg:block mb-0">
                  {data.product}
                </p>
                <p className="text-base text-[#C4BFCE] leading-[150%] mb-0 hidden lg:block">
                  {data.modal}
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4 md:mt-0 gap-5">
              <h3 className="text-base font-semibold leading-[150%] border-b-2 border-white pb-3">
                {data.check}
              </h3>
              <Link
                to={""}
                className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out border-[#FF1464] flex items-center justify-center gap-3 px-8 py-4 text-white font-bold leading-6 text-base "
              >
                <span>
                  <FaApple />
                </span>
                Download
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllReleaseCard
