import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  H1,
  Section,
  Container,
  Ancestor,
  Parent,
  Child,
  Columns,
  Column,
} from '../components/helpers'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              id
              likes
              comments
              original
              timestamp
              localFile {
                childImageSharp {
                  fluid(maxWidth: 350, maxHeight: 350, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        // <Container>
        // <H1>Nossos Instagram</H1>
        // <Columns className="is-multiline">
        <div>
          {data.allInstaNode.edges.map(each => (
            // <Column className="is-one-third">
            // <figure className="image is-square">
            <div>

              <Img fluid={each.node.localFile.childImageSharp.fluid} />
            </div>
            // </figure>
            // </Column>
          ))}
        </div>
        // </Columns>
        // </Container>
      )
    }}
  />
)
