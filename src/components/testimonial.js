import React from 'react'
import styled from 'styled-components'

const Quote = styled.p`
  font-style: italic;
  font-size: 1.1rem;
`

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Names = styled.h5`
  margin-left: 1rem;
`

const Card = styled.div`
  background-color: #eee;
  margin-bottom: 2rem;
  padding: 1rem 2rem 0 2rem;
`

const Testimonial = props => {
  return (
    <Card>
      <Quote>{props.text}</Quote>
      <User>
        <img src={props.photo} alt="" />
        <Names>
          {props.name} and {props.dog}
        </Names>
      </User>
    </Card>
  )
}

export default Testimonial
