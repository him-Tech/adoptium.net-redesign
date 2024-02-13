import React from "react"
import {
  AlibabaCloudIcon,
  CLoudIcon,
  MicrosoftAzureIcon,
  OperaIcon,
  RestApiIcon,
} from "./AppIcon"
import { LinuxIcon } from "./Icon"
import CommonHeading from "./CommonHeading"

const LibericaMethod = () => {
  const LibericaMethod = [
    {
      icon: <OperaIcon />,
      title: "Liberica runtime container + Alpaquita",
      buttons: ["Download"],
    },
    {
      icon: <MicrosoftAzureIcon />,
      title: "Liberica JDK Containers",
      buttons: ["Docker Hub", "GHCR", "MCR"],
    },
    {
      icon: <LinuxIcon />,
      title: "Linux Repositories",
      buttons: ["YUM", "APT", "Zypper", "APK"],
    },
    {
      icon: <AlibabaCloudIcon />,
      title: "Package Managers",
      buttons: ["SDKMAN", "Brew", " SCOOP", "winget"],
    },
    {
      icon: <CLoudIcon />,
      title: "Clouds",
      buttons: ["Azure"],
    },
    {
      icon: <RestApiIcon />,
      title: "REST Discovery API",
      buttons: ["Explore"],
    },
  ]
  return (
    <section className="py-32 bg-[#0E002A] px-6">
      <CommonHeading
        title={"Other ways to install Liberica"}
        description={
          "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
        }
        className={"text-center max-w-[680px] mx-auto"}
      />
      <div className="mt-16">
        <div className=" justify-between max-w-[1064px] mx-auto grid  gap-8 md:gap-12 w-full grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          {LibericaMethod.map((method, index) => (
            <div className="flex gap-4 max-w-[366px] xl:max-w-[322px]">
              <span className="p-6 rounded-full cursor-pointer flex justify-center items-center w-fit bg-[#2B1A4F] border border-[#5A4D76]">
                {method.icon}
              </span>
              <div>
                <h4 className="max-w-[270px] text-xl font-normal xl:max-w-[226px]">
                  {method.title}
                </h4>
                <div className="flex gap-2 mt-2 ">
                  {method.buttons.map((button, buttonIndex) => (
                    <button
                      key={buttonIndex}
                      className=" text-[#FF1464] text-sm font-normal border-b-[1px] border-[#FF1464] "
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LibericaMethod
