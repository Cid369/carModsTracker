import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import apiUrl from './apiConfig.js'

class Cars extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: null
    }
  }

  componentDidMount() {
    fetch(`${apiUrl}/cars`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ cars: data.cars}))
      .catch(console.err)
  }

  render () {
    if (!this.state.cars) {
      return <p>You better fetch my car</p>
    }
    const cars = this.state.cars.map(car => (
      <li key={car.id}>
        <Link
          to={`/cars/${car.id}`}>{car.make}</Link>
      </li>
    ))
    return (
      <React.Fragment>
        <h4>Cars:</h4>
        <ul>
          {cars}
        </ul>
      </React.Fragment>
    )
  }
}


export default Cars
