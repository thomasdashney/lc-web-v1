import React, { Component } from 'react'

import ToggleButton from '../ToggleButton'
import css from './style.css'

const email = 'lostcousinsband@gmail.com'

class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      emailIsShowing: false
    }

    this.handleContactClicked = this.handleContactClicked.bind(this)
  }

  handleContactClicked () {
    this.setState({ emailIsShowing: true })
  }

  render () {
    return (
      <div className={css.contact}>
        {this.state.emailIsShowing
        ? (
          <p className={css.email}>
            {email}
          </p>
        ) : (
          <ToggleButton onClick={this.handleContactClicked}>
            Contact
          </ToggleButton>
        )}
      </div>
    )
  }
}

export default Contact
