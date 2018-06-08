import React, { Component } from 'react'

import { trackPageView } from 'services/analytics'
import css from './style.css'
import vanPhotoUrl from './lc_van.jpg'

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
        <img src={vanPhotoUrl} alt='Lost Cousins' />
        <p>
          For the indie psych outfit Lost Cousins, grappling with life
          transitions—and the domino effects of those choices—is at the core
          of their sprawling, celestial-sounding debut LP to be released in
          2018 via Pheromone Recordings. The record is a sweeping, anthemic
          tribute to the things one loses or gives up; the places one longs
          for, especially as one grows up and moves on. Pushing forward and
          leaning into change isn’t as easy as it looks. It’s a record that
          spans the entire country and collapses back into itself; feeling
          like a swelling tide in the ocean with a significant, sweet comedown
          when the tide settles on the beach. The band has toured throughout
          Canada and the United States, including opening spots for The
          Strumbellas, Hollerado, and The Wooden Sky. Recent Canadian festival
          performances include sets at Wayhome (2015), CityFolk (2016),
          NXNE (2017), and Hillside Festival (2017). Lost Cousins is
          Dylan Cantlon Hay (bass guitar), Cam Duffin (drums),
          Lloyd McArton (guitar, saxophone), and Thomas Dashney (keyboards).
        </p>
      </div>
    )
  }
}

export default Home
