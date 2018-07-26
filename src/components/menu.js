import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MenuList = styled.div`
  text-decoration: none;
  float: right;
  text-transform: uppercase;
  font-family: sans-serif;
  padding-bottom: 1rem;
`
const MenuItem = styled.h5`
  display: inline-block;
  margin: 0 1rem 0 0;
`

const MenuLink = styled(Link)`
  color: #97c03c;
`

const Active = {
  color: '#457bbd',
}

class Menu extends React.Component {
  state = {
    active: 1,
  }
  render() {
    return (
      <MenuList>
        <MenuLink exact to="/" activeStyle={Active}>
          <MenuItem>Home</MenuItem>
        </MenuLink>
        <MenuLink to="/about/" activeStyle={Active}>
          <MenuItem>Quem Somos</MenuItem>
        </MenuLink>
        <MenuLink to="/servicos/" activeStyle={Active}>
          <MenuItem>Serviços & Preços</MenuItem>
        </MenuLink>
        <MenuLink to="/regras/" activeStyle={Active}>
          <MenuItem>Regras</MenuItem>
        </MenuLink>
        <MenuLink to="/testimonials/" activeStyle={Active}>
          <MenuItem>Testimonials</MenuItem>
        </MenuLink>
        <MenuLink to="/contato/" activeStyle={Active}>
          <MenuItem>Contato</MenuItem>
        </MenuLink>
      </MenuList>
    )
  }
}

export default Menu
