import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Admin } from './admin'
import { Navigation } from './sections/navigation'
import { Home } from './sections/home'
import { Tour } from './sections/tour'

import css from './style.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navIsOpen: false
    }

    this.toggleNavigation = this.toggleNavigation.bind(this)
    this.closeNavigation = this.closeNavigation.bind(this)
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
                <Route exact path='/tour' component={Tour} />
              </div>
            </div>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
