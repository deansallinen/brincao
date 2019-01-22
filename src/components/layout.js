import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import Capa from '../images/heroes/capa.jpg'
import Hero from './hero'
// import '../styles/index.css'
import '../sass/mystyles.scss'
import Sidebar from './sidebar'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children, hero }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Sidebar /> */}
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'A Brincão é um novo tipo de creche para cães.',
            },
            { name: 'keywords', content: 'creche, cães' },
          ]}
        />
        <Header className="section" />
        <Hero source={hero} className="section" />
        <section className="section">{children}</section>
        <Footer className="section" />
      </>
    )}
  />
)

export default Layout
