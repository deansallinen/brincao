import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


export default () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "Brincao.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Img fluid={data.logo.childImageSharp.fluid} />}
    />
    )
