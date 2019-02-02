import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { H1, Container, Button, Columns, Column } from '../components/helpers'
import Instagram from '../components/instagram'
import Logo from '../components/logo'

const IndexPage = ({ data }) => (
  <Layout hero={data.hero}>
    <Container className="content">
      <Columns>

        <Column>
          <H1>A Brincão é um novo tipo de creche para cães!</H1>
          <p>
            Uma creche idealizada a partir do conceito de “tua casa para
            minha casa.”
              </p>
          <ul>
            <li>
              O sistema de funcionamento da creche Brincão é inédito na
              região.
                </li>
            <li>
              Oferecemos também hospedagem, com atendimento e serviços de um
              hotel.
                </li>
            <li>Somente atendemos cães de pequeno porte, até 15 kg.</li>
          </ul>
          <p>
            O lugar ideal para seu cão ficar à vontade, livre, e seguro com
            outros amiguinhos.
              </p>
          <p>
            Para Cãezinhos de pequeno porte, saudáveis, vacinados,
            desvermifugados e com antipulgas em dia.
              </p>
          <div className="level">
            <div className="is-mobile">
              <Button to="/about" >Mais sobre nós!</Button>
            </div>
          </div>
        </Column>

        {/* <Column>
          <Logo />
        <Instagram />
        </Column> */}

      </Columns>
    </Container>
  </Layout >
)

export default IndexPage

export const query = graphql`
query {
  hero: file(relativePath: { eq: "heroes/capa.jpg" }) {
    childImageSharp {
      fluid(maxHeight: 1823, maxWidth: 4594, quality: 100) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }
}
`