import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { database } from 'services/firebase'
import { enableScroll, disableScroll } from 'services/scroll-manager'

import { Splash } from './splash'
import { Admin } from './admin'
import { Banner } from './banner'
import { Navigation } from './navigation'
import { Home } from './home'
import { Music } from './music'
import { Video } from './video'
import { Tour } from './tour'

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
    const navIsOpen = !this.state.navIsOpen
    this.setState({ navIsOpen })
    this.updateDocumentState(navIsOpen)
  }

  closeNavigation () {
    const navIsOpen = false
    this.setState({ navIsOpen })
    this.updateDocumentState(navIsOpen)
  }

  updateDocumentState (navIsOpen) {
    let newClassName
    if (navIsOpen) {
      newClassName = 'navIsOpen'
      window.scrollTo(0, 0)
      disableScroll()
    } else {
      newClassName = ''
      enableScroll()
    }
    document.body.className = newClassName
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route render={() => (
            <div>
              <Route path='/' component={Splash} />
              <div className={css.siteContainer}>
                <Banner
                  onNavigationToggle={this.toggleNavigation}
                  onLogoClick={this.closeNavigation}
                />
                <Navigation
                  onNavLinkClick={this.closeNavigation}
                />
                <div className={css.background} />
                <div className={css.main}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/music' component={Music} />
                  <Route exact path='/video' component={Video} />
                  <Route exact path='/tour' render={(props) => <Tour {...props} tourListings={this.state.tourListings} />} />
                </div>
              </div>
            </div>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
