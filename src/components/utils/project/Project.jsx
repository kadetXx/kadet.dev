import React, { Component } from 'react'
import './Project.css'

export class Project extends Component {
  render() {

    const {title, description, github, live, stack, isPrivate} = this.props.data;

    return (
      <div className='box_container'>
        <div className="box">
          <div className="project_details">
            <h3> {title} </h3>
            <small> {stack} </small>
            <p> {description} </p>
            
          </div>
          
          <div className="project_links">
            <small><a href={live} target='_blank' rel="noopener noreferrer"> <i className="far fa-eye"></i> Live </a></small>
            
            {isPrivate? '' :  (<small><a href={github} target='_blank' rel="noopener noreferrer"> <i className="fas fa-code-branch"></i> Code </a></small>)}
            
          </div>
        </div>
      </div>
    )
  }
}

export default Project
