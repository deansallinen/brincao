import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Primary = styled.button`
  background: ${props => (props.secondary ? '#fff' : '#457bbd')};
  color: ${props => (props.secondary ? '#457bbd' : '#fff')};
  border: 2px solid #457bbd;
  border-radius: 6px;
  padding: 1rem;
  margin: 2rem;

  text-align: center;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
  }
`

class Button extends React.Component {
  render() {
    return (
      <Link to={this.props.to}>
        <Primary>{this.props.children}</Primary>
        <Primary secondary>{this.props.children}</Primary>
      </Link>
    )
  }
}

export default Button
