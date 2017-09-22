import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import './layout.css'

class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <div className='header'>
          <Link to='/'>首页</Link>
        </div>
        <div className='main-wrap'>
          {this.props.children}
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    )
  }
}

export default Layout
