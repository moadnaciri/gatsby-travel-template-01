import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const CareersPage = () => (
  <Layout>
    <SEO title="Careers" />
    <Hero />
    <Trips heading='Our Favorite Destinations'/>
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default CareersPage
