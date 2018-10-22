import React, { Component } from 'react'
import { trackPageView } from 'services/analytics'
import css from './style.css'
import { SpotifyPlayer } from 'shared/components/SpotifyPlayer'

@trackPageView()
class FollowOnSpotify extends Component {
  render () {
    return (
      <div className={css.followSuccess}>
        <div className={css.content}>
          <div className={css.followedButton}>
            <iframe
              src='https://open.spotify.com/follow/1/?uri=spotify:artist:2yZQbeFIRhUpRehbauidnq&size=detail&theme=light'
              width='300'
              height='56'
              scrolling='no'
              frameBorder='0'
              style={{
                border: 'none',
                overflow: 'hidden'
              }}
              allowTransparency='true' />
          </div>
          <SpotifyPlayer songUri={'spotify:track:3jaMcsBvVYnGFUa530ZjQk'} />
          <SpotifyPlayer songUri={'spotify:album:1AKJTjFS3QBhgbaW7AgSKN'} />
        </div>
      </div>
    )
  }
}

export default FollowOnSpotify
