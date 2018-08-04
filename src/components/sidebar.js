import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Active = {
  color: '#457bbd',
}
const MenuLink = styled(Link)`
  color: #97c03c;
  text-decoration: none;
`

const MenuItem = styled.h3``

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '2.5rem',
    height: '2rem',
    left: '2rem',
    top: '2rem',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmCrossButton: {
    height: '3rem',
    width: '3rem',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Menu
        styles={styles}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <MenuLink
          exact
          to="/"
          activeStyle={Active}
          onClick={() => this.closeMenu()}
        >
          <MenuItem>Home</MenuItem>
        </MenuLink>
        <MenuLink
          to="/about/"
          activeStyle={Active}
          onClick={() => this.closeMenu()}
        >
          <MenuItem>Quem Somos</MenuItem>
        </MenuLink>
        <MenuLink
          to="/servicos/"
          activeStyle={Active}
          onClick={() => this.closeMenu()}
        >
          <MenuItem>Serviços & Preços</MenuItem>
        </MenuLink>
        <MenuLink
          to="/regras/"
          activeStyle={Active}
          onClick={() => this.closeMenu()}
        >
          <MenuItem>Regras</MenuItem>
        </MenuLink>
        <MenuLink
          to="/testimonials/"
          activeStyle={Active}
          onClick={() => this.closeMenu()}
        >
          <MenuItem>Testimonials</MenuItem>
        </MenuLink>
        <MenuLink
          to="/contato/"
          activeStyle={Active}
          onClick={() => this.closeMenu()}
        >
          <MenuItem>Contato</MenuItem>
        </MenuLink>
      </Menu>
    )
  }
}

export default Example
