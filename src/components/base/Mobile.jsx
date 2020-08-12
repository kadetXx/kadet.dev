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
    document.querySelector('.mobile_container').classList.add('set_height');
  }

  componentWillUnmount() {
    document.querySelector('.mobile_container').classList.remove('set_height');
  }
}

export default Mobile
