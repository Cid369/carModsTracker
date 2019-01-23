import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

import apiUrl from './apiUrl'
import CarForm from './CarForm'

class CarCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      car: {
        year: '',
        make: '',
        model: ''
      }
    }
  }

handleChange = event => {
  const editedCar = {
    ...this.state.car, [event.target.name]:
    event.target.value
  }
  this.setState({ car: editedCar })
}

handleSubmit = event => {
  event.preventDefault()

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      car: this.state.car
    })
  }
  const id = this.props.match.params.id

  fetch(`${apiUrl}/cars`, options)
    .then(res => res.ok? res : new Error())
    .then(res => res.json())
    .then(data => this.setState({ id: data.car.id }))
    .catch(console.err)
}

render () {
  const { id } = this.state
  if (this.state.id)
    return <Redirect to={`/cars/${id}`} />
  const { year, make, model } = this.state.car
  return (
    <CarForm
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      car={this.state.car}
    />
  )
}
}

export default withRouter(CarCreate)
