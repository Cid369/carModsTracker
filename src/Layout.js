import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Layout = (props) => (
  <Fragment>
    <h4>An app where you can keep track of your vehicles and modifications!</h4>
    <nav>
    </nav>
    {props.children}
  </Fragment>

)


export default Layout
