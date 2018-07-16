import { Component } from 'react'
import { trackPageView } from 'services/analytics'

const spotifyUrl = 'spotify:artist:2yZQbeFIRhUpRehbauidnq'

@trackPageView()
class FollowOnSpotify extends Component {
  componentDidMount () {
    window.location.replace(spotifyUrl)
  }

  render () {
    return null
  }
}

export default FollowOnSpotify
