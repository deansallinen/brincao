import React from 'react'
import Link from 'gatsby-link'
import Address from '../components/address'
import Contact from '../components/contact'
import styled from 'styled-components'
import dogPaw from '../components/images/icons/dog-paw.svg'

const Paw = styled.div`
  width: 20px;
  height: auto;
  margin: auto auto;
  fill: red;
`

const SiteFooter = styled.footer`
  background-color: #97c03c;
  margin-top: 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 0 0;
`

const Copyright = styled.p`
  font-size: 0.8rem;
`

const Footer = () => {
  return (
    <SiteFooter>
      <Wrapper>
        <Address />
        <Paw>
          <img src={dogPaw} alt="" />
        </Paw>
        <div>
          <Contact />
        </div>
        <Copyright>© 2018 Brincão Creche. All rights reserved.</Copyright>
      </Wrapper>
    </SiteFooter>
  )
}

export default Footer
