import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

import { carEdit } from './carApi'
import apiUrl from '../apiConfig'
import CarForm from '../CarForm'
import messages from './carMessages'

class CarEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      updated: false,
      car: {
        year: '',
        make: '',
        model: ''
      }
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/cars/${id}`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ car: data.car }))
      .catch(() => this.setState({ notFound: true }))

  }

  handleChange = event => {
    console.log(event.target)
    const updatedField = { [event.target.name]: event.target.value }
    const editedCar = Object.assign(this.state, updatedField)
    this.setState({ car: editedCar })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('submmited form')

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        car: this.state.car
      })
    }
    const id = this.props.match.params.id

    fetch(`${apiUrl}/cars/${id}`, options)
      .then(res => res.ok ? res : new Error())
      .then(data => this.setState({ updated: true }))
      .catch(console.err)

  }

  render () {
    const id = this.props.match.params.id

    if (this.state.updated) {
      return <Redirect to={`/cars/${id}`} />
    }

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


export default withRouter(CarEdit)
