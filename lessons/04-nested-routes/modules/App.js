import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink></li>
          <li><NavLink to="/repos" activeStyle={{ color: 'red' }}>Repos</NavLink></li>
        </ul>
         {this.props.children}
      </div>
    )
  }
})
