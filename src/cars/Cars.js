import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getCar } from './carApi'
import apiUrl from '../apiConfig'
import messages from './carMessages'

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
      .then(data => this.setState({ cars: data.cars }))
      .catch(console.err)
  }

  render () {
    if (!this.state.cars) {
      return <p>You better fetch my cars!</p>
    }
    const cars = this.state.cars.map(car => (
      <li key={car.id}>
        <Link
          to={`/cars/${car.id}`}>{car.year}</Link>
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
