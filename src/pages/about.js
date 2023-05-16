import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import {
  siteTitle,
} from '../components/layout.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p className={siteTitle}>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/">
              Home
            </Link>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage