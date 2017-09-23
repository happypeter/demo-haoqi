import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import './dog-icon.css'
import DeleteIcon from './delete.svg'
import axios from 'axios'

class DogIcon extends Component {

  handleDelete = (e) => {
    const { dog } = this.props
    e.preventDefault()
    axios.delete(`http://localhost:3008/dogs/${dog.id}`).then(
      res => {
        console.log('deleted!')
        this.props.updateDogs(dog.id)
      }
    )
  }

  render () {
    const { dog } = this.props
    return (
      <Link to={`/dog/${dog.id}`} className='dog-icon'>
        <img className='delete-icon'
          onClick={this.handleDelete}
          src={DeleteIcon} alt="delete"/>
        <div
        style={{backgroundImage: `url(${dog.imgUrl})`}}
        className='dog-img'>
        </div>
      </Link>
    )
  }
}

export default DogIcon
