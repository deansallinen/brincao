import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Container } from '../components/helpers'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { menuOpen } = this.state
    return (
      <StaticQuery
        query={graphql`
          query {
            logo: file(relativePath: { eq: "Brincao.png" }) {
              childImageSharp {
                fixed(height: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <Container>
              <div className="navbar-brand ">
                <Link to="/" className="navbar-item">
                  <Img fixed={data.logo.childImageSharp.fixed} />
                </Link>
                <a
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={this.toggleMenu}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>

              <div
                id="navbarBasicExample"
                className={`navbar-menu ${menuOpen ? 'is-active' : null}`}
              >
                <div className="navbar-end has-text-centered is-size-3-touch">
                  <Link exact to="/" className="navbar-item">
                    Home
                  </Link>

                  <Link to="/about/" className="navbar-item">
                    Quem Somos
                  </Link>
                  <Link to="/servicos/" className="navbar-item">
                    Serviços &amp; Preços
                  </Link>
                  <Link to="/regras/" className="navbar-item">
                    Regras
                  </Link>
                  {/* <Link to="/testimonials/" className="navbar-item">
                    Testimonials
                  </Link> */}
                  <Link to="/contato/" className="navbar-item">
                    Contato
                  </Link>
                </div>
              </div>
            </Container>
          </nav>
        )}
      />
    )
  }
}

export default Header
