import React, { Component } from 'react'

import css from './style.scss'
import splashVideoUrl from './videos/splash_loop_720_hq.mp4'

const ESCAPE_KEY_CODE = 27

class Splash extends Component {
  constructor (props) {
    super(props)
    this.state = { dismissed: false }
    this.handleEscapeKeyPress = this.handleEscapeKeyPress.bind(this)
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount () {
    if (!this.isSplashLocation()) {
      this.dismiss()
    } else {
      document.addEventListener('keyup', this.handleEscapeKeyPress, false)
    }
  }

  componentWillUnmount () {
    this.dismiss()
  }

  componentWillReceiveProps () {
    if (!this.isSplashLocation()) {
      this.dismiss()
    }
  }

  isSplashLocation () {
    return this.props.match.isExact
  }

  handleEscapeKeyPress (e) {
    if (e.keyCode === ESCAPE_KEY_CODE) {
      this.dismiss()
    }
  }

  dismiss () {
    document.removeEventListener('keyup', this.handleEscapeKeyPress)
    this.setState({ dismissed: true })
  }

  render () {
    if (!this.isSplashLocation()) {
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
