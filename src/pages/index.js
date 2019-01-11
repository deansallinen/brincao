import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { H1, Container, Button, Columns, Column } from '../components/helpers'
import Instagram from '../components/instagram'
import Logo from '../components/logo'

const IndexPage = () => (
      <Layout>
        <Container className="content">
          <H1>A Brincão é um novo tipo de creche para cães!</H1>
          <Columns>
          
            <Column>
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
              <Button to="/about">Mais sobre nós</Button>
            </Column>
            
            <Column>
              <Logo />
            </Column>
            
          </Columns>
        </Container>
      </Layout>
)

export default IndexPage
