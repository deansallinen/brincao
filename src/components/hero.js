import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1900px;
  margin: 0 auto;
`

const Banner = styled.img`
  width: 100vw;
  height: 30vh;
  object-fit: cover;
`

const Hero = props => {
  return (
    <Wrapper>
      <Banner src={props.source} alt="" />
    </Wrapper>
  )
}

export default Hero
