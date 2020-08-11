import React, { Component } from 'react'
import Form from '../utils/form/Form'

export class Contact extends Component {

  componentDidMount() {
    this.props.activeMenu(2)
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default Contact
