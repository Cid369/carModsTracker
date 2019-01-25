import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

// import { carCreate } from './carApi'
import apiUrl from '../apiConfig'
import CarForm from '../CarForm'
import messages from './carMessages'


class CarCreate extends Component {
  constructor (props) {
    super(props)
    console.log('omg is props!',props)
    this.state = {
      id: null,
      // user: user,
      car: {
        year: '',
        make: '',
        model: ''
      }
    }
  }

handleChange = event => {
  const createdCar = {
    ...this.state.car, [event.target.name]:
    event.target.value
  }
  this.setState({ car: createdCar })
}

handleSubmit = event => {
  event.preventDefault()

  console.log(this.state.user)
  // debugger
  const options = {
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${this.props.user.token}`
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
