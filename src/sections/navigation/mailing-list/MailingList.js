import React, { Component } from 'react'

import css from './style.scss'
import ToggleButton from '../ToggleButton'

class MailingList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      email: ''
    }

    this.openMailingListForm = this.openMailingListForm.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  openMailingListForm () {
    this.setState({ open: true })
  }

  handleEmailChange (e) {
    this.setState({ email: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    return (
      <div className={css.mailingList}>
        {this.state.open
          ? (
            <form onSubmit={this.handleSubmit}>
              <input
                className={css.emailInput}
                onChange={this.handleEmailChange}
                value={this.state.email}
                placeholder='your@email.com'
              />
              <button
                type='submit'
                className={css.submitButton}
              >
                Join Mailing List
              </button>
            </form>
          ) : (
            <ToggleButton
              onClick={this.openMailingListForm}
            >
              Join Mailing List
            </ToggleButton>
          )
        }
      </div>
    )
  }
}

export default MailingList