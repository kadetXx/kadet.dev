import React, { Component } from 'react'

export class Resume extends Component {

  componentDidMount() {
    this.props.activeMenu(1)
  }

  render() {
    return (
      <div>
        Waddup
      </div>
    )
  }
}

export default Resume
