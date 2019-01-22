import React from 'react'
import Img from 'gatsby-image'

export default ({ source }) => (
  <div class="hero">
    <Img fluid={source.childImageSharp.fluid} />
    {/* <div class="hero-body">
      <div class="container">
        <h1 class="title">Brincão</h1>
        <h2 class="subtitle">Hero subtitle</h2>
      </div>
    </div> */}
  </div>
)
