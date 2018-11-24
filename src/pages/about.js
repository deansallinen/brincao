import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { H1, H2, Container } from '../components/helpers'

const SecondPage = () => (
  <Layout>
    <Container className="content">
      <H1>Quem Somos</H1>
      <blockquote>
        <p>
          “A Brincão é um espaço que ama e respeita seu cãozinho. Ele passa o
          dia como se estivesse na rotina da sua casa, mas com uma área especial
          para entretenimento. Um amplo gramado conta com piscina de bolinhas,
          escorregador, casinha, túnel, brinquedos e amplo espaço para o banho
          de sol. Seu cão também tem várias opções de descanso internos em
          sofás, caminhas, como ele preferir e estiver acostumado na sua casa.
          Além da socialização, ele brinca, aprende e interage, reduzindo o
          nível de estresse. No retorno para casa, seu cão vai muito mais feliz,
          com a garantia de ter sido alimentado e bem cuidado.”
        </p>
        <footer>– Lilian &amp; Preta</footer>
      </blockquote>
      <H2>Nossos Espaço</H2>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
