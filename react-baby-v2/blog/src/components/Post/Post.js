import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {

  state = {
    post: {}
  }

  componentDidMount () {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/posts/${id}`).then(
      res => {
        this.setState({
          post: res.data
        })
      }
    )
  }

  render () {
    const { post } = this.state
    return (
      <div className='post'>
        <h1>
          {post.title}
        </h1>
        <p>
          {post.content}
        </p>
      </div>
    )
  }
}

export default Post
