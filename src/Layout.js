import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Layout = (props) => (
  <Fragment>
    <h4>An app where you can keep track of your vehicles and modifications!</h4>
    <nav>
      <Link to="/cars">Cars </Link>
      <Link to="/create">Create</Link>
    </nav>
    {props.children}
  </Fragment>

)


export default Layout
