import React from "react"

import "./style.scss"
import contactbg from "../../img/gredient-overlay-bg.png"
import contactbgmobile from "../../img/gradient-overlay-mobile.png"

const ContactUs = ({ title, className, buttontitle }) => {
  return (
    <>
      <section className={`relative  xl:px-0 px-6 md:py-32 py-16 ${className}`}>
        <img
          className="hidden md:block absolute bg-center top-0 left-0  right-0 w-full h-full z-[-10]"
          src={contactbg}
          alt=""
        />
        <img
          className="block md:hidden absolute bg-center top-0 left-0  right-0 w-full h-full z-[-10]"
          src={contactbgmobile}
          alt=""
        />
        <div className="max-w-[832px] w-full mx-auto md:py-0 py-8 flex justify-center items-center flex-col text-center md:bg-transparent bg-tones-white rounded-3xl md:backdrop-blur-0 backdrop-blur-12 ">
          <img
            className="!mb-0"
            src="/images/icons/message.svg"
            aria-label="message icon"
          />
          <p className="text-white text-4xl md:text-5xl leading-[122.222%] md:leading-[116.667%] font-normal mt-8">
            {title}
          </p>
          <span className=" text-lightgrey tab-button-text">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </span>
          <button className="bg-transparent mt-10 gradient-btn border-2 border-pink-500/0 text-white text-base leading-[125%] font-normal w-[146px] h-[48px] rounded-[80px]  ">
            {buttontitle}
          </button>
        </div>
      </section>
    </>
  )
}

export default ContactUs
