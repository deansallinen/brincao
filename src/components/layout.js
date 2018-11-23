import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import Capa from '../images/heroes/capa.jpg'
import Hero from './hero'
import '../styles/index.css'
import Sidebar from './sidebar'
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
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
        <Sidebar />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <Hero source={Capa} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

export default Layout