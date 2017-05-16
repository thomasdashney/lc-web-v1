import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Admin } from './admin'
import { Navigation } from './sections/navigation'
import { Tour } from './sections/tour'

import css from './style.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navIsOpen: false
    }

    this.toggleNavigation = this.toggleNavigation.bind(this)
  }

  toggleNavigation () {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
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
              <Navigation onNavigationToggle={this.toggleNavigation} />
              <div className={css.main}>
                <Tour />
              </div>
            </div>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
