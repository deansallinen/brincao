import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { H1, Container, Button } from '../components/helpers'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "heroes/capa.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1823) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div class="hero">
        <Img fluid={data.hero.childImageSharp.fluid} />
        {/* <div class="hero-body">
          <div class="container">
            <h1 class="title">Brincão</h1>
            <h2 class="subtitle">Hero subtitle</h2>
          </div>
        </div> */}
      </div>
    )}
  />
)
