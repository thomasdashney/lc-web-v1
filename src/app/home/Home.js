import React, { Component } from 'react'

import { trackPageView } from 'services/analytics'
import css from './style.css'
import gardenPhotoUrl from './lc_garden.jpg'

@trackPageView()
class Home extends Component {
  componentWillMount () {
    if (this.props.location.hash === '#tour') {
      this.props.history.replace('/tour')
    }
  }

  render () {
    return (
      <div className={css.home}>
        <img src={gardenPhotoUrl} alt='Lost Cousins' />
        <p>
          Family isn’t always bound by blood. In the case of Lost Cousins
          it is bound through the kindred connection found in their distinct
          blend of psychedelic rock. Coming together as students in Kingston, ON,
          Dylan Cantlon Hay, Cam Duffin, Lloyd McArton and Thomas Dashney had
          humble beginnings at house concerts and basement performances, where
          they became known for their high-energy live shows and memorable songwriting.
        </p>
        <p>
          Making use of gang vocals, delay-drenched guitars, and dreamy synthesizers,
          the four-piece continues to experiment with sonic boundaries and sprawling
          shifts in dynamics. Incorporating celestial textures and creative rhythms,
          the Toronto-based quartet combines influences from the past with soulful
          lyrics to create groove-oriented songs that feel both honest and alive.
        </p>
      </div>
    )
  }
}

export default Home
