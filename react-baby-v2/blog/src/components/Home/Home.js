import React, { Component } from 'react'
import './home.css'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {

  state = {
    posts: [
      {
        id: '134',
        title: 'Git 使用技巧',
        content: 'main content'
      },
      {
        id: '256',
        title: '命令使用技巧',
        content: 'main content'
      },
      {
        id: '545',
        title: 'Github 基础',
        content: 'main content'
      }
    ]
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
