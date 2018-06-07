import React, { Component } from 'react'

import css from './style.css'
import coverArt from './cover-art.jpg'
import footerLogos from './footer-logos.png'

const ESCAPE_KEY_CODE = 27

const DSPLink = ({ children, href, className }) => (
  <a href={href} className={`${css.button} ${className}`}>{children}</a>
)

const SocialLink = ({ children, href, className }) => (
  <a
    href={href}
    className={`${css.icon} ${css.iconCube} ${className}`}
    target='_blank'
  >
    {children}
  </a>
)

class Splash extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dismissed: !this.isSplashLocation()
    }

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
        <div className={css.scrollWrapper}>
          <div className={css.wrapper}>
            <header>
              <img src={coverArt} alt='Lost Cousins - Mindmaker' />
            </header>
            <div className={css.content}>
              <p><span className={css.mindmaker}>MINDMAKER</span><br />available on:</p>
              <p>
                <DSPLink
                  href='http://open.spotify.com/album/1AKJTjFS3QBhgbaW7AgSKN'
                  className={css.spotify}
                >
                  Spotify
                </DSPLink>
              </p>
              <p>
                <DSPLink
                  href='https://itunes.apple.com/ca/album/mindmaker-single/1384819662?ls=1&app=music&at=11l8MP&ct=LFV_2d9f4f1750ac015e51b50cf478f38775'
                  className={css.appleMusic}
                >
                  Apple Music
                </DSPLink>
              </p>
              <p>
                <DSPLink
                  href='https://itunes.apple.com/ca/album/mindmaker-single/1384819662?ls=1&&app=itunes&at=11l8MP&ct=LFV_2d9f4f1750ac015e51b50cf478f38775'
                  className={css.itunes}
                >
                  iTunes
                </DSPLink>
              </p>
              <p>
                <DSPLink
                  href='https://play.google.com/music/m/Bdpuapw2caahv327wshqjrevbya'
                  className={css.googlePlay}
                >
                  Google Play
                </DSPLink>
              </p>
            </div>
            <div className={css.socials}>
              <SocialLink href='https://www.facebook.com/LostCousinsBand/' className={css.facebook}>
                Facebook
              </SocialLink>
              <SocialLink href='https://twitter.com/lostcousinsband' className={css.twitter}>
                Twitter
              </SocialLink>
              <SocialLink href='https://www.instagram.com/lostcousinsband/' className={css.instagram}>
                Instagram
              </SocialLink>

              <br />

              <SocialLink href='https://www.youtube.com/user/lostcousinsband' className={css.youtube}>
                YouTube
              </SocialLink>
              <SocialLink href='https://open.spotify.com/artist/2yZQbeFIRhUpRehbauidnq' className={css.spotify}>
                Spotify
              </SocialLink>
              <SocialLink href='https://itunes.apple.com/ca/artist/lost-cousins/1022847502' className={css.itunes}>
                iTunes
              </SocialLink>
            </div>
            <div className={css.spotifyFollow}>
              <iframe
                src='https://open.spotify.com/follow/1/?uri=spotify:artist:2yZQbeFIRhUpRehbauidnq&amp;size=detail&amp;theme=dark'
                scrolling='no'
                style={{
                  border: 'none',
                  overflow: 'hidden'
                }}
                allowTransparency='true'
                width='220'
                height='56'
                frameBorder='0'
              />
            </div>
            <footer>
              <p>© 2018 Lost Cousins. <br />All Rights Reserved.</p>
              <p>
                <img src={footerLogos} alt='Pheromone, Factor, Canada, OMDC' />
              </p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash
