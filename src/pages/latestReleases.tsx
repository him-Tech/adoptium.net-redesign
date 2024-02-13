import CtaWrapper from "../components/Common/CtaWrapper"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"
import PageHeader from "../components/PageHeader"
import React, { useState } from "react"
import FAQ from "../components/FAQ"
import { DownloadIcon } from "../components/Common/AppIcon"
import Buttons from "../components/LatestReleases/Buttons"
import ButtonContent from "../components/LatestReleases/ButtonContent"

import LibericaMethod from "../components/Common/LibericaMethod"
import Heading from "../components/LatestReleases/Heading"
import Tabs from "../components/LatestReleases/Tabs"

const latestReleases = () => {
  return (
    <div>
      <Layout>
        <NavBar />
        <PageHeader
          title={"Download Liberica JDK"}
          subtitle={"Latest Relseases"}
          description={
            "Pick a version, package type, JDK/JRE, and download the binaries."
          }
        />
        <Tabs />
        <Heading />
        <CtaWrapper />
        <LibericaMethod />
        <FAQ />
      </Layout>
    </div>
  )
}

export default latestReleases
