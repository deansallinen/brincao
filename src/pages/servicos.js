import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/button'
import Layout from '../components/layout'


const Servicos = () => (
  <Layout>

    <div>
      <h1>Serviços & Preços</h1>
      <p>
        A Brincão oferece o serviço de creche para o dia inteiro, ou apenas um
        turno, semanal ou mensal. Oferecemos também serviços de um hotel, para
        hospedagens mais longas e alojamentos, quando necessários. Além disso, os
        serviços da Brincão podem incluir busca e entrega, com dias e horários
        agendados, de acordo com as suas possibilidades.
    </p>
      <p>
        Serviços como banho e tosa devem ser providenciados diretamente pelo dono
        em petshop de sua preferência.
    </p>
      <h2>Horário</h2>
      <p>
        Oferece um horário amplo, das 7h às 19h, ou personalizado, conforme sua
        necessidade.
    </p>
      <h2>Valores individuais para a Creche</h2>
      <ul>
        <li>Diária avulsa: R$ 18,00</li>
        <li>3 dias x semana: R$ 45,00</li>
        <li>5 dias x semana: R$ 65,00</li>
        <li>Mensal : R$ 240,00</li>
      </ul>
      <p>Obs.: O segundo cãozinho tem 30% de desconto sobre o valor!</p>
      <h2>Valores para Hospedagem</h2>
      <ul>
        <li>​​​​​​​​​​Diária: R$ 24,00</li>
      </ul>
      <p>
        Obs.: O segundo cãozinho tem 30% de desconto sobre o valor da hospedagem!
    </p>
      <p>
        Para períodos maiores, ou necessidades específicas, os valores podem ser
        ajustados. Fale com a gente!
    </p>
      <Button to="/contato">Fale com a gente!</Button>

      <h2>Por que Brincão</h2>
      <p>
        A Brincão foi pensada para o bem-estar de seu cãozinho. Ampla área coberta
        e ao ar livre, conforto térmico, sempre na companhia das pessoas que vivem
        na casa, que zelam pela sua segurança e diversão. As refeições, tipo e
        número, serão de acordo com a rotina da sua casa, adaptados à rotina da
        Brincão. As necessidades dos cãezinhos são personalizadas.
    </p>

      <Button to="/about">Mais sobre nós</Button>
    </div>
  </Layout>
)

export default Servicos
