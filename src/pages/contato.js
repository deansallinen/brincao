import React from 'react'
import { Link } from 'gatsby'
import Contact from '../components/contact'
import Layout from '../components/layout'
import { H1, H2, Container } from '../components/helpers'

const Contato = ({ data }) => (
  <Layout hero={data.hero}>
    <Container>
      <H1>Contato</H1>
      <form name="contact" netlify>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Firstname Lastname" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="name@example.com" />
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Your message here" />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </Container>
  </Layout>
)

export default Contato

export const query = graphql`
query {
  hero: file(relativePath: { eq: "heroes/DSC_0886-min.JPG" }) {
    childImageSharp {
      fluid(maxHeight: 666, maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`