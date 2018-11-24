import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { H1 } from '../components/helpers'

const NotFoundPage = () => (
  <Layout>
    <div>
      <H1>NOT FOUND</H1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
