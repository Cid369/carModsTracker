import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './CarHeader.scss'

const carListOptions = (
  <Fragment>
    <Link to="/cars">Cars List</Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Link to="/">Home</Link>
  </Fragment>
)

const CarHeader = ({ cars }) => (
  <header className="car-header">
    <h4>This app will help you track your vehicles history!🏁</h4>
    <nav>
      { carListOptions }
      { alwaysOptions }
    </nav>
  </header>
)


export default CarHeader
