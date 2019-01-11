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
import {GoogleMap} from '../components/googleMap'

const Copyright = () => (
  <div className="content has-text-centered">
    <p className="is-size-10">© 2018 Brincão Creche. All rights reserved.</p>
  </div>
)

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
                  <GoogleMap />
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
      <Container>
        <Copyright />
      </Container>
    </footer>
  )
}
