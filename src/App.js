import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { database } from 'firebase'

import { Admin } from './admin'
import { Navigation } from './sections/navigation'
import { Home } from './sections/home'
import { Music } from './sections/music'
import { Video } from './sections/video'
import { Tour } from './sections/tour'

import css from './style.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navIsOpen: false,
      tourListings: null
    }

    this.listingsRef = database.ref('tour_listings')

    this.toggleNavigation = this.toggleNavigation.bind(this)
    this.closeNavigation = this.closeNavigation.bind(this)
  }

  receivedTourListings (snapshot) {
    this.setState({ tourListings: snapshot.val() })
  }

  componentDidMount () {
    this.listingsRef.on('value', this.receivedTourListings.bind(this))
  }

  componentWillUnmount () {
    this.listingsRef.off()
  }

  toggleNavigation () {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
  }

  closeNavigation () {
    this.setState({ navIsOpen: false })
  }

  render () {
    const { navIsOpen } = this.state
    const classNames = [
      css.siteContainer,
      navIsOpen ? 'navIsOpen' : ''
    ].join(' ')

    return (
      <Router>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route render={() => (
            <div className={classNames}>
              <Navigation
                onNavigationToggle={this.toggleNavigation}
                onNavLinkClick={this.closeNavigation}
              />
              <div className={css.background} />
              <div className={css.main}>
                <Route exact path='/' component={Home} />
                <Route exact path='/music' component={Music} />
                <Route exact path='/video' component={Video} />
                <Route exact path='/tour' render={() => <Tour tourListings={this.state.tourListings} />} />
              </div>
            </div>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
