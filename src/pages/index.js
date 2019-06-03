import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from '../components/Contact'
import Container from '../components/container'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout
    title="Collin O'Connell"
    subtitle="Web Developer"
    caption="Django, React and more..."
    link="#DCFC"
    linkTarget="www.detcityfc.com"
  >
    <SEO title="Home" />
    <Container>
      <article
        style={{
          width: "75%",
          margin: `1.875rem auto 0`,
        }}
      >
        Thanks for stopping by if you would like to see some of my work check out
        my projects or look at what I'm learning right now in my blog. If you
        would like to talk to me feel free to contact me.

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi officiis laborum quaerat itaque, qui nemo recusandae quas voluptatibus similique distinctio rerum sint! Sed quae alias nobis incidunt aliquam minima officiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo aut quia ratione alias modi! Nobis nulla aliquam, qui quia repudiandae vero, odio possimus obcaecati temporibus neque deleniti totam doloribus!
      </article>
    </Container>
    <Contact />
  </Layout>
)

export default IndexPage
