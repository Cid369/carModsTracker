import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import CarHeader from './header/CarHeader'
import Car from './cars/Car'
import Cars from './cars/Cars'
import CarCreate from './cars/CarCreate'
import CarEdit from './cars/CarEdit'
// import Layout from './Layout'
import CarForm from './CarForm'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      car: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  setCar = car => this.setState({ car })

  clearCar = () => this.setState({ car: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user, car } = this.state
    console.log('my user is cool', user)
    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />

          <Route exact path='/cars' render={() => (
            <Cars flash={this.flash} user={user} />
          )} />
          <Route exact path='/car' render={() => (
            <Car flash={this.flash} user={this.user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/create' render={() => (
            <CarCreate flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/carEdit' render={() => (
            <CarEdit flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
