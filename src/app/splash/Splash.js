import React, { Component } from 'react'

import css from './style.css'

const ESCAPE_KEY_CODE = 27

const NUMBERS = [{
  city: 'New York',
  number: '347-434-2925'
}, {
  city: 'Los Angeles',
  number: '323-745-8893'
}, {
  city: 'Chicago',
  number: '773-570-9055'
}, {
  city: 'Toronto',
  number: '647-697-6541'
}, {
  city: 'Vancouver',
  number: '604-229-0471'
}]

class Splash extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dismissed: !this.isSplashLocation()
    }

    this.handleEscapeKeyPress = this.handleEscapeKeyPress.bind(this)
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount () {
    if (this.isSplashLocation()) {
      document.addEventListener('keyup', this.handleEscapeKeyPress, false)
    }
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleEscapeKeyPress)
  }

  componentWillReceiveProps () {
    if (!this.isSplashLocation()) {
      this.dismiss()
    }
  }

  isSplashLocation () {
    return this.props.match.isExact
  }

  handleEscapeKeyPress (e) {
    if (e.keyCode === ESCAPE_KEY_CODE) {
      this.dismiss()
    }
  }

  dismiss () {
    document.removeEventListener('keyup', this.handleEscapeKeyPress)
    this.setState({ dismissed: true })
  }

  render () {
    if (!this.isSplashLocation()) {
      return null
    }

    return (
      <div className={`${css.splashWrapper} ${this.state.dismissed && css.dismissed}`}>
        <div className={css.splashContent}>
          <h1>/// Mindmaker /// June 08 2018 ///</h1>
          <table>
            {NUMBERS.map(({ city, number }) => (
              <tr key={city}>
                <td>{city}</td>
                <td>{number}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    )
  }
}

export default Splash
