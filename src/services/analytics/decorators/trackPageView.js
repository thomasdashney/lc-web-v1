import React, { Component } from 'react'

import ReactGA from '../ReactGA'
import FacebookPixel from '../FacebookPixel'

const trackPageView = () => WrappedComponent => class WithPageViewTracking extends Component {
  componentDidMount () {
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
    FacebookPixel.pageView()
  }

  render () {
    return <WrappedComponent {...this.props} />
  }
}

export default trackPageView
