import React from 'react'
import Img from 'gatsby-image'

// const NonStretchedImage = props => {
//   let normalizedProps = props
//   if (props.fluid && props.fluid.presentationWidth) {
//     normalizedProps = {
//       ...props,
//       style: {
//         ...(props.style || {}),
//         maxWidth: props.fluid.presentationWidth,
//         margin: "0 auto", // Used to center the image
//       },
//     }
//   }

//   return <Img {...normalizedProps} />
// }

export default ({ source }) => (
  <div className="container is-widescreen">
    <div class="hero" >
      <Img fluid={source.childImageSharp.fluid} />
      {/* <div class="hero-body">
      <div class="container">
      <h1 class="title">Brincão</h1>
      <h2 class="subtitle">Hero subtitle</h2>
      </div>
    </div> */}
    </div>
  </div>
)
