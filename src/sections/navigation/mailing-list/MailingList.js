import React, { Component } from 'react'

import { database } from 'firebase'
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

    this.setState({ submitting: true })
    database.ref().child('mailing_list_emails').push(this.state.email)
      .then(() => {
        this.setState({ submitting: false, submitted: true })
      })
      .catch(() => this.setState({ email: '', submitting: false, open: false }))
  }

  render () {
    return (
      <div className={css.mailingList}>
        {this.state.open
          ? (
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                className={css.emailInput}
                onChange={this.handleEmailChange}
                value={this.state.email}
                placeholder='your@email.com'
                disabled={this.state.submitting || this.state.submitted}
              />
              <button
                type='submit'
                className={css.submitButton}
                disabled={this.state.submitting || this.state.submitted}
              >
                {this.state.submitted ? 'Join Succesful' : 'Join Mailing List'}
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
