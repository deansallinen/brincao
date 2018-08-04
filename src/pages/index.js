import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/button'

const IndexPage = () => (
  <div>
    <h2>A Brincão é um novo tipo de creche para cães.</h2>
    <p>
      Uma creche idealizada a partir do conceito de “tua casa para minha casa.”
    </p>
    <ul>
      <li>O sistema de funcionamento da creche Brincão é inédito na região.</li>
      <li>
        Oferecemos também hospedagem, com atendimento e serviços de um hotel.
      </li>
      <li>Somente atendemos cães de pequeno porte, até 15 kg.</li>
    </ul>
    <p>
      O lugar ideal para seu cão ficar à vontade, livre, e seguro com outros
      amiguinhos.
    </p>
    <p>
      Para Cãezinhos de pequeno porte, saudáveis, vacinados, desvermifugados e
      com antipulgas em dia.
    </p>
    <Button to="/about">Mais sobre nós</Button>
  </div>
)

export default IndexPage