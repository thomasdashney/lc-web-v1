import React, { Component } from 'react'

import ReactGA from '../ReactGA'

const trackPageView = () => WrappedComponent => class WithPageViewTracking extends Component {
  componentDidMount () {
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render () {
    return <WrappedComponent {...this.props} />
  }
}

export default trackPageView
