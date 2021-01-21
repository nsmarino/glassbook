import React from "react"

import Layout from "../components/Layout"
import About from '../components/About'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { LayoutChild } from "../components/styles/scratch"

const AboutPage = () => (
  <Layout title="about">
    <main css={css`
      ${LayoutChild}
    `}>
      <About />
    </main>
  </Layout>
)

export default AboutPage