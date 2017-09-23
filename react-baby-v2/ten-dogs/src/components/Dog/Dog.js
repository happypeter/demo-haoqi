import React, { Component } from 'react'
import './dog.css'
import axios from 'axios'

class Dog extends Component {

  state = {
    imgUrl: ''
  }

  componentDidMount () {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/dogs/${id}`).then(
      res => {
        this.setState({
          imgUrl: res.data.imgUrl
        })
      }
    )
  }
  render () {
    const { imgUrl } = this.state
    return (
      <div className='dog'>
        <img src={imgUrl} alt="dog"/>
      </div>
    )
  }
}

export default Dog
