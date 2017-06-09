import React, { Component } from 'react'

import css from './style.css'
import splashVideoUrl from './videos/splash_loop_720_hq.mp4'

const ESCAPE_KEY_CODE = 27

class Splash extends Component {
  constructor (props) {
    super(props)
    this.state = { dismissed: !this.isSplashLocation() }
    this.handleEscapeKeyPress = this.handleEscapeKeyPress.bind(this)
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount () {
    if (this.isSplashLocation()) {
      document.addEventListener('keyup', this.handleEscapeKeyPress, false)
    }
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleEscapeKeyPress)
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
              src='https://open.spotify.com/embed?uri=spotify:album:4C3ICoHRTXVd3MLhdssjsl'
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
          <video
            className={css.splashVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={splashVideoUrl} type='video/mp4' />
          </video>
        </div>
      </div>
    )
  }
}

export default Splash
