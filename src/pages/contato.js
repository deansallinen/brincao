import React from 'react'
import { Link } from 'gatsby'
import Contact from '../components/contact'
import Layout from '../components/layout'
import { H1, H2, Container } from '../components/helpers'

const Contato = () => (
  <Layout>
    <Container>
      <H1>Contato</H1>
      <Contact />
      <H2>Venha nos Visitar!</H2>
    </Container>
  </Layout>
)

export default Contato
