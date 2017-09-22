import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import './dog-icon.css'

class DogIcon extends Component {
  render () {
    const { dog } = this.props
    return (
      <Link to={`/dog/${dog.id}`} className='dog-icon'>
        <div
        style={{backgroundImage: `url(${dog.imgUrl})`}}
        className='dog-img'>
        </div>
      </Link>
    )
  }
}

export default DogIcon
