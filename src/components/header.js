import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const SiteHeader = styled.header`
  background: white;
  padding: 1.45rem auto 1.45rem auto;
  max-width: 1500px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'logo' 'menu';

  @media screen and (min-width: 800px;) {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
  query {
    imageOne: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 134) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `}
    render={
      data => (
        <SiteHeader>
          <Link to="/">
            <Img fixed={data.imageOne.childImageSharp.fixed} />
          </Link>
        </SiteHeader>
      )
    }
  />
)