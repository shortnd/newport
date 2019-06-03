/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Slider from './slider'
import Footer from './footer'
import Container from './container'
import "./layout.css"

const Layout = ({ title, subtitle, caption, link, linkTarget, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Slider
          title={title}
          subtitle={subtitle}
          caption={caption}
          link={link}
          linkTarget={linkTarget} />
          <main style={{
            flex: 1,
          }}>
            {/* <Container> */}
              {children}
            {/* </Container> */}
          </main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
