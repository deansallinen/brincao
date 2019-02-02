import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { H1, H2, Container, Columns, Column, Button } from '../components/helpers'

const SecondPage = ({ data }) => (
  <Layout hero={data.hero}>
    < Container className="content" >
      <H1>Quem Somos</H1>
      <Columns>
        <Column>
          <blockquote>
            <p>
              "O lugar ideal para seu cão ficar  à vontade, livre, e seguro  com outros amiguinhos!"
        </p>
            <footer>❤️ Lilian &amp; Preta</footer>
          </blockquote>
          <p>A Brincão é um espaço que ama e respeita seu cãozinho. Ele passa o
              dia como se estivesse na rotina da sua casa, mas com uma área especial
          para entretenimento. </p>
          <p>Um amplo gramado conta com piscina de bolinhas,
    escorregador, casinha, túnel, brinquedos e amplo espaço para o banho
    de sol. Seu cão também tem várias opções de descanso internos em
          sofás, caminhas, como ele preferir e estiver acostumado na sua casa.</p>
          <p>
            Além da socialização, ele brinca, aprende e interage, reduzindo o
            nível de estresse. No retorno para casa, seu cão vai muito mais feliz,
          com a garantia de ter sido alimentado e bem cuidado.</p>
        </Column>
        <Column>
          <Img fluid={data.personal.childImageSharp.fluid} />
        </Column>
      </Columns>
      <H2>Nossos Espaço</H2>
      <div className="level">
        <div className="is-mobile">
          <Button to="/servicos" >Conheça a Brincão!</Button>
        </div>
      </div>
    </Container >
  </Layout >
)

export default SecondPage

export const query = graphql`
query {

  hero: file(relativePath: { eq: "heroes/DSC_0886-min.JPG" }) {
    childImageSharp {
      fluid(maxHeight: 2000, maxWidth: 4608, quality: 100, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  personal: file(relativePath: { eq: "14.jpg" }) {
    childImageSharp {
      fluid(maxHeight: 1300, maxWidth: 1000, quality: 100, cropFocus: SOUTH) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }
}
`

