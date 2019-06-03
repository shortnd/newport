import React from "react"

import Container from "./container"
import { rouge, gold } from "../helpers/colors"

const Footer = () => (
  <footer
    style={{
      background: `${rouge}`,
      color: `${gold}`,
      fontFamily: `sans-serif`,
    }}
  >
    <Container>
      <div
        style={{
          textAlign: `center`,
          padding: `1.5rem 0`,
        }}
      >
        © Copyright {new Date().getFullYear()} coconnell.me - Built with
        {` `}
        <a
          style={{
            color: `${gold}`,
          }}
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </div>
    </Container>
  </footer>
)

export default Footer
