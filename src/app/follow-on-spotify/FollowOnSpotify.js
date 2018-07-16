/* global location Request fetch */

import React, { Component } from 'react'
import { trackPageView } from 'services/analytics'
import queryString from 'query-string'
import { siteUrl } from 'config'
import css from './style.css'
import { SpotifyPlayer } from 'shared/components/SpotifyPlayer'

const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize?' + [
  'client_id=2b15607a80e948e4b451fc31d7a5fd1d',
  'response_type=token',
  `redirect_uri=${siteUrl}/spotify-follow-callback`,
  'scope=user-follow-modify'
].join('&')

@trackPageView()
class FollowOnSpotify extends Component {
  state = {}

  componentDidMount () {
    if (this.props.location.pathname === '/spotify-follow') {
      location.replace(SPOTIFY_AUTH_URL)
    } else {
      const { access_token: accessToken } = queryString.parse(this.props.location.hash)
      if (accessToken) {
        this.followOnSpotify(accessToken)
      }
    }
  }

  followOnSpotify (accessToken) {
    const request = new Request('https://api.spotify.com/v1/me/following?type=artist&ids=2yZQbeFIRhUpRehbauidnq', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    fetch(request)
      .then(response => {
        location.replace('spotify:artist:2yZQbeFIRhUpRehbauidnq')
        if (response.status !== 204) {
          return response.text().then(body => {
            throw new Error(`Invalid status code ${204} & body ${body}`)
          })
        }
      })
      .catch(err => console.error('error following lc', err))
  }

  render () {
    if (this.props.location.pathname === '/spotify-follow') {
      return null
    } else {
      return (
        <div className={css.followSuccess}>
          <div className={css.content}>
            <SpotifyPlayer songUri={'spotify:album:1AKJTjFS3QBhgbaW7AgSKN'} />
          </div>
        </div>
      )
    }
  }
}

export default FollowOnSpotify
