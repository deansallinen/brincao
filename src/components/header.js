import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'
import styled from 'styled-components'
import logo from './images/logo.png'

const SiteHeader = styled.header`
  background: white;
  margin: 1.45rem auto 1.45rem auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  max-width: 1500px;
`

const Logo = styled.img`
  margin: 0;
`

const Header = () => (
  <SiteHeader>
    <Link to="/">
      <Logo src={logo} alt="" />
    </Link>
    <Menu />
  </SiteHeader>
)

export default Header
