import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>

    <div>
      <h1>Quem Somos</h1>
      <blockquote>
        <p>
          “A Brincão é um espaço que ama e respeita seu cãozinho. Ele passa o dia
          como se estivesse na rotina da sua casa, mas com uma área especial para
          entretenimento. Um amplo gramado conta com piscina de bolinhas,
          escorregador, casinha, túnel, brinquedos e amplo espaço para o banho de
          sol. Seu cão também tem várias opções de descanso internos em sofás,
          caminhas, como ele preferir e estiver acostumado na sua casa. Além da
          socialização, ele brinca, aprende e interage, reduzindo o nível de
          estresse. No retorno para casa, seu cão vai muito mais feliz, com a
          garantia de ter sido alimentado e bem cuidado.”
      </p>
        <footer>– Lilian & Preta</footer>
      </blockquote>
      <h2>Nossos Espaço</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
