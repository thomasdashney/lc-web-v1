import React, { Component } from 'react'
import { database } from 'firebase'

class Tour extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tourListings: []
    }
    this.listingsRef = database.ref('tour_listings')
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

  render () {
    return (
      <div>
        Tour listings
      </div>
    )
  }
}

export default Tour
