import React, { Component } from 'react'

import css from './style.scss'
import splashVideoUrl from './videos/splash_loop_720_hq.mp4'

const ESCAPE_KEY_CODE = 27

class Splash extends Component {
  constructor (props) {
    super(props)
    this.state = { dismissed: false }
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keyup', e => {
      if (e.keyCode === ESCAPE_KEY_CODE) {
        this.setState({ dismissed: true })
      }
    }, false)

    // auto-dismiss if the first route is not splash page
    if (!this.props.match.isExact) {
      this.dismiss()
    }
  }

  componentWillReceiveProps () {
    // auto-dismiss if the first route is not splash page
    if (!this.props.match.isExact) {
      this.dismiss()
    }
  }

  dismiss () {
    this.setState({ dismissed: true })
  }

  render () {
    if (!this.props.match.isExact) {
      return null
    }

    return (
      <div className={`${css.splashWrapper} ${this.state.dismissed && css.dismissed}`}>
        <div className={css.screen}>
          <div className={css.content}>
            <div className={css.headings}>
              <h1>Lost Cousins</h1>
              <h2>Quarters</h2>
            </div>
            <iframe
              className={css.spotifyPlayer}
              src='https://open.spotify.com/embed?uri=spotify:track:2qSxvTaR7lw2BYGcmnYAGz'
              frameBorder={0}
              allowTransparency
            />
            <button
              type='button'
              className={css.enterSiteButton}
              onClick={this.dismiss}
            >
              Enter Site
            </button>
          </div>
          <video className={css.splashVideo} autoPlay loop>
            <source src={splashVideoUrl} type='video/mp4' />
          </video>
        </div>
      </div>
    )
  }
}

export default Splash
