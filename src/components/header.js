import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { rouge, gold, black } from "../helpers/colors"
import Container from "./container"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `${black}`,
      padding: `.9375rem 0`,
      position: `relative`,
    }}
  >
    <div
      style={{
        height: `.25rem`,
        background: `${rouge}`,
        position: `absolute`,
        top: `0`,
        left: `0`,
        right: `0`
      }}
    />
    <Container>
      <h1 style={{ margin: `.3125rem 0 0` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
