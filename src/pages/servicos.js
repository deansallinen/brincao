import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/button'
import Layout from '../components/layout'
import {
  H1,
  H2,
  Container,
  Ancestor,
  Parent,
  Child,
  Column,
  Columns,
} from '../components/helpers'

const Servicos = () => (
  <Layout>
    <Container className="content">
      <H1>Serviços &amp; Preços</H1>
      <p>
        A Brincão oferece o serviço de creche para o dia inteiro, ou apenas um
        turno, semanal ou mensal. Oferecemos também serviços de um hotel, para
        hospedagens mais longas e alojamentos, quando necessários. Além disso,
        os serviços da Brincão podem incluir busca e entrega, com dias e
        horários agendados, de acordo com as suas possibilidades. Oferece um
        horário amplo, das 7h às 19h, ou personalizado, conforme sua
        necessidade. Serviços como banho e tosa devem ser providenciados
        diretamente pelo dono em petshop de sua preferência.
      </p>
      <H2>Hospedagem</H2>
      <Ancestor>
        <Parent>
          <Child className="box">
            <p className="heading">​​​​​​​​​​Diária</p>
            <H1>R$ 27,50</H1>
          </Child>
        </Parent>
        <Parent>
          <Child className="box">
            <p className="heading">Diária de hospedagem por 10 dias ou mais</p>
            <H1>R$ 26,00</H1>
          </Child>
        </Parent>
        <Parent>
          <Child className="box">
            <p className="heading">Diária de hospedagem de final de semana</p>
            <H1>R$ 30,00</H1>
            <p>
              Obs: A diária é de 24 horas. Será acrescido $ 5,00 por turno a
              mais.​
            </p>
            <p>
              Exemplo: entrada sábado pela manhã e saindo domingo de tarde: $
              30,00 + $ 5,00 = $35,00
            </p>
          </Child>
        </Parent>
      </Ancestor>
      <H2>Valores individuais para a Creche</H2>
      <Ancestor>
        <Parent>
          <Child className="box">
            <p className="heading">3 dias x semana</p>
            <H1>R$ 45,00</H1>
          </Child>
        </Parent>
        <Parent>
          <Child className="box">
            <p className="heading">5 dias x semana</p>
            <H1>R$ 65,00</H1>
          </Child>
        </Parent>
        <Parent>
          <Child className="box">
            <p className="heading">Mensal</p>
            <H1>R$ 260,00</H1>
          </Child>
        </Parent>
      </Ancestor>
      <p>O segundo cãozinho tem 15% de desconto sobre o valor!</p>
      <p>
        Para períodos maiores, ou necessidades específicas, os valores podem ser
        ajustados. Fale com a gente!
      </p>
      <Button to="/contato">Fale com a gente!</Button>
      <H1>Horário</H1>
      <p>
        Oferece um horário amplo, das 7h às 19h, ou personalizado, conforme sua
        necessidade.
      </p>
      <H1>Por que Brincão?</H1>
      <p>
        A Brincão foi pensada para o bem-estar de seu cãozinho. Ampla área
        coberta e ao ar livre, conforto térmico, sempre na companhia das pessoas
        que vivem na casa, que zelam pela sua segurança e diversão. As
        refeições, tipo e número, serão de acordo com a rotina da sua casa,
        adaptados à rotina da Brincão. As necessidades dos cãezinhos são
        personalizadas.
      </p>

      <Button to="/about">Mais sobre nós</Button>
    </Container>
  </Layout>
)

export default Servicos
