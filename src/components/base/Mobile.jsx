import React, { Component } from 'react'
import Base from './Base'
import './Mobile.css'
import { Link } from 'react-router-dom'

export class Mobile extends Component {

  render() {
    return (
      <div id='mobile'>
        <Base menu={this.props.menu} />
      </div>
    )
  }
}

export default Mobile
