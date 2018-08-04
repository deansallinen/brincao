import React from 'react'
import twitter from '../components/images/icons/twitter.svg'
import facebook from '../components/images/icons/facebook.svg'
import instagram from '../components/images/icons/instagram.svg'
import whatsapp from '../components/images/icons/whatsapp.svg'
import styled from 'styled-components'

const Social = styled.div`
  display: flex;
  align-content: center;
  padding: 0;
  margin: 0;
`
const UserName = styled.h6`
  padding-left: 0.5rem;
`

const Icon = styled.div`
  width: 20px;
  margin: 0;
`

const socialMedia = [
  {
    service: 'twitter',
    icon: twitter,
    userName: '@brincao',
  },
  {
    service: 'facebook',
    icon: facebook,
    userName: '/brincao',
  },
  {
    service: 'whatsapp',
    icon: whatsapp,
    userName: '+55 51 98112-2115',
  },
  {
    service: 'instagram',
    icon: instagram,
    userName: '@brincao',
  },
]

const Contact = () => {
  return (
    <div style={{ gridArea: 'contact' }}>
      {socialMedia.map(social => {
        return (
          <Social key={social.service}>
            <Icon>
              <img src={social.icon} alt={social.service} />
            </Icon>
            <UserName>{social.userName}</UserName>
          </Social>
        )
      })}
    </div>
  )
}

export default Contact
