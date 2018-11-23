import React from 'react'
import { Link } from 'gatsby'
import Address from '../components/address'
import Contact from '../components/contact'
import Layout from '../components/layout'


const Contato = () => (
  <Layout>

    <div>
      <h1>Contato</h1>
      <Contact />
      <h2>Venha nos Visitar!</h2>
      <Address />
    </div>
  </Layout>
)

export default Contato
