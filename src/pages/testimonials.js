import React from 'react'
import Link from 'gatsby-link'
import Testimonial from '../components/testimonial'
import loremIpsum from 'lorem-ipsum'

const url = 'https://randomuser.me/api/?nat=us&results=10'

class Testimonials extends React.Component {
  state = {
    data: { results: [] },
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(res => this.setState({ data: res }))
      .catch(e => {
        throw e
      })
  }

  render() {
    const all = this.state.data.results.map(user => {
      return (
        <Testimonial
          key={user.id.value}
          name={user.login.username}
          dog={user.name.last}
          photo={user.picture.thumbnail}
          text={loremIpsum({ count: 2, units: 'sentences' })}
        />
      )
    })

    return (
      <div>
        <h1>Testimonials</h1>
        <div>{all}</div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default Testimonials
