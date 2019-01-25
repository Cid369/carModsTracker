import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link,Redirect } from 'react-router-dom'

import apiUrl from '../apiConfig'
import messages from './carMessages'

class Car extends Component {
  constructor (props) {
    super(props)

    this.state = {
      car: null,
      notFound: false,
      deleted: false
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/cars/${id}`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ movie: data.movie }))
      .catch(console.err)
  }

  destroy = () => {
    const options = {
      method: 'DELETE'
    }

    const id = this.props.match.params.id

    fetch(`${apiUrl}/cars/${id}`)
      .then(res => res.ok ? res : new Error())
      .then(() => this.setState({ deleted: true }))
      .then(() => console.log('delete it'))
      .catch(console.err)
  }

  render () {
    const { car, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to='/' />
    } else if (!car) {
      return <Redirect to={{
        pathname: '/',
        state: { message: 'You deleted your car 💢!' }
      }} />
    }

    return (
      <React.Fragment>
        <h5>{this.state.car.year}</h5>
        <p>Make: {this.state.car.make}</p>
        <p>Model: {this.state.car.model}</p>
        <button>
          <Link
            to={`/cars/${this.state.car.id}/edit`}>Edit</Link>
        </button>
        <button onClick={this.destroy}>Delete💥</button>
      </React.Fragment>
    )
  }
}



export  default withRouter(Car)
