import React from 'react'
import dogPaw from '../images/icons/dog-paw.svg'
import styled from 'styled-components'

const Paw = styled.div`
  width: 20px;
  height: auto;
`

const Address = styled.div`
  grid-area: address;
`

const AddressBlock = () => {
  return (
    <Address>
      <h4 style={{ lineHeight: '1.75rem' }}>
        Brincão RS 129, n. 920<br />
        Chácara da Bandeira, Linha São José<br />
        Estrela, RS<br />
        95880-000 Brasil
      </h4>
      <Paw>
        <img src={dogPaw} alt="" />
      </Paw>
    </Address>
  )
}

export default AddressBlock
