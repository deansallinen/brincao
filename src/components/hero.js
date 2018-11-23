import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Wrapper = styled.div`
  margin: 1rem auto;
`

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
      <Wrapper>
        <Img fluid={data.hero.childImageSharp.fluid} />
      </Wrapper >
    )
    }
  />
)