import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Section,
  Container,
  Ancestor,
  Parent,
  Child,
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
                  fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
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
        <Container>
          <Ancestor>
            {data.allInstaNode.edges.map(each => (
              <Parent>
                <Child>
                  <Img fixed={each.node.localFile.childImageSharp.fixed} />
                </Child>
              </Parent>
            ))}
          </Ancestor>
        </Container>
      )
    }}
  />
)
