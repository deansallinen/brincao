import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'
import styled from 'styled-components'
import logo from './images/logo.png'

const SiteHeader = styled.header`
  background: white;
  margin: 1.45rem auto 1.45rem auto;
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

const Logo = styled.img`
  margin: 0;
`

const Header = () => (
  <SiteHeader>
    <Link to="/">
      <Logo src={logo} alt="" style={{ gridArea: 'logo' }} />
    </Link>
    <Menu />
  </SiteHeader>
)

export default Header
