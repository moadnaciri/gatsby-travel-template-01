import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/SignUp"

const SecondPage = () => (
  <Layout>
    <SEO title="Sign Up" />
    <SignUp />
  </Layout>
)

export default SecondPage
