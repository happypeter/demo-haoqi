import React, { Component } from 'react'
import './home.css'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    const { id } = this.props.match.params
    axios.get('http://localhost:3008/posts').then(
      res => {
        this.setState({
          posts: res.data
        })
      }
    )
  }


  render () {
    const postList = this.state.posts.map((t, i) => (
      <Link className='post-link'
        key={i} to={`/post/${t.id}`}>
        {t.title}
      </Link>
    ))
    return (
      <div className='home'>
        <div className='post-list'>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home
