import React from "react"

import Container from "./container"
import { rouge, gold, light_grey } from "../helpers/colors"

export default function slider({ title, subtitle, caption, link, linkTarget }) {
  return (
    <section
      style={{
        padding: `8rem 0`,
        background: `${rouge}`,
        color: `white`,
        textAlign: `center`,
        fontFamily: `sans-serif`,
      }}
    >
      <Container>
        {title && (
          <h1
            style={{
              textTransform: `uppercase`,
              fontSize: `3rem`,
              margin: `0 auto`,
              fontWeight: `700`,
            }}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <h2
            style={{
              textTransform: `uppercase`,
              color: `${light_grey}`,
            }}
          >
            {subtitle}
          </h2>
        )}
        {caption && (
          <p
            style={{
              fontFamily: `sans-serif`,
              fontSize: `1.25rem`,
            }}
          >
            {caption}{" "}
            {link && (
              <a
                style={{
                  color: `${gold}`,
                  fontWeight: `700`,
                }}
                href={linkTarget}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link}
              </a>
            )}
          </p>
        )}
      </Container>
    </section>
  )
}
