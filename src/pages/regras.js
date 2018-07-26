import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/button'

const Regras = () => {
  return (
    <div>
      <h1>Regras</h1>
      <ul>
        <li>
          Todos os cãezinhos devem ser sociáveis com cães e pessoas - Muitos
          cães reagem agressivamente apenas na presença de seus donos e se
          adaptam perfeitamente ao convívio com outros cães em uma creche
          canina. No período de adaptação é feita a avaliação.
        </li>
        <li>
          As vacinas devem sempre estar em dia e a carteirinha deverá ser
          apresentada com o nome do médico veterinário responsável.
        </li>
        <li>
          O medicamento contra pulgas, carrapatos e mosquitos também deverá
          estar em dia.
        </li>
        <li>
          Com esses cuidados, nossos cãezinhos ficam protegidos das ameaças do
          meio ambiente.
        </li>
        <li>
          Os filhotes podem frequentar a Brincão logo depois da primeira
          vacinação completa.
        </li>
        <li>Fêmeas no cio não podem frequentar a Brincão!</li>
        <li>
          Seu cãozinho pode ter cuidados especiais, como administração de
          medicamentos, durante o período que estiver em nosso espaço.
        </li>
      </ul>
      <h2>Dúvidas e Perguntas?</h2>
      <Button to="/contato">Contato</Button>
    </div>
  )
}

export default Regras
