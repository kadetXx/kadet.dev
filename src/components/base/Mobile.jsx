import React, { Component } from 'react'
import Base from './Base'
import './Mobile.css'

export class Mobile extends Component {

  render() {
    return (
      <div id='mobile'>
        <Base menu={this.props.menu} />
      </div>
    )
  }

  componentDidMount() {
    this.props.fullScreen(true)
  }

  componentWillUnmount() {
    this.props.fullScreen(false);
  }
}

export default Mobile
