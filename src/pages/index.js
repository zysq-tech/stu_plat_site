import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/terms/">Go to Terms Page</Link>
    <br></br>
    <Link to="/policy/">Go to Policy Page</Link>
    <br></br>
    <Link to="/about/">Go to About Page</Link>
  </Layout>
)

export default IndexPage
