import React from 'react'
import Link from 'gatsby-link'
import Address from '../components/address'
import Contact from '../components/contact'
import styled from 'styled-components'

const Map = styled.div`
  grid-area: map;
`

const SiteFooter = styled.footer`
  background-color: #97c03c;
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'map'
    'address'
    'contact'
    'copyright';
  grid-gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 0 0;
  text-align: center;

  @media screen and (min-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'map map'
      'address contact'
      'copyright copyright';
  }

  @media screen and (min-width: 820px) {
    text-align: left;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      'map address contact'
      'copyright copyright copyright';
    grid-gap: 1rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0 0 0;
  }
`

const Copyright = styled.p`
  grid-area: copyright;
  font-size: 0.8rem;
`

const Footer = () => {
  return (
    <SiteFooter>
      <h2>Venham brincar com a gente!</h2>
      <Wrapper>
        <Map>
          <iframe
            width="100%"
            height="auto"
            frameborder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=Brinc%C3%A3o%20RS%20129%2C%20n.%20920%20%20Ch%C3%A1cara%20da%20Bandeira%2C%20Linha%20S%C3%A3o%20Jos%C3%A9%20%20Estrela%2C%20RS%20%2095880-000%20Brasil&key=AIzaSyChhUqUbak8-D52lLYY0C3JKH6w5hxVA7Q"
            allowfullscreen
          />
        </Map>
        <Address />
        <Contact />
        <Copyright>© 2018 Brincão Creche. All rights reserved.</Copyright>
      </Wrapper>
    </SiteFooter>
  )
}

export default Footer
