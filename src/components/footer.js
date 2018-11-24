import React from 'react'
import { Link } from 'gatsby'
import Contact from '../components/contact'
import {
  H1,
  Container,
  Ancestor,
  Parent,
  Child,
  Columns,
  Column,
} from '../components/helpers'

export default () => {
  return (
    <footer className="footer">
      <Container>
        <Columns>
          <Column className=" is-two-thirds">
            <H1>Venham brincar com a gente!</H1>
            <Ancestor>
              <Parent>
                <Child>
                  <div>
                    <iframe
                      width="100%"
                      height="auto"
                      frameborder="0"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=Brinc%C3%A3o%20RS%20129%2C%20n.%20920%20%20Ch%C3%A1cara%20da%20Bandeira%2C%20Linha%20S%C3%A3o%20Jos%C3%A9%20%20Estrela%2C%20RS%20%2095880-000%20Brasil&key=AIzaSyChhUqUbak8-D52lLYY0C3JKH6w5hxVA7Q"
                      allowfullscreen
                    />
                  </div>
                </Child>
              </Parent>
              <Parent>
                <Child>
                  <div>
                    <p className="is-size-6">
                      Brincão RS 129, n. 920
                      <br />
                      Chácara da Bandeira, Linha São José
                      <br />
                      Estrela, RS
                      <br />
                      95880-000 Brasil
                    </p>
                  </div>
                </Child>
              </Parent>
            </Ancestor>
          </Column>
          <Column>
            <H1>Contato</H1>
            <Contact />
          </Column>
        </Columns>
      </Container>
      <div className="content has-text-centered">
        <p className="is-size-9">© 2018 Brincão Creche. All rights reserved.</p>
      </div>
    </footer>
  )
}
