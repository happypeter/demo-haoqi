import React, { Component } from 'react'

class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <div className='header'>
          header
        </div>
        {this.props.children}
        <div className='footer'>
          footer
        </div>
      </div>
    )
  }
}

export default Layout
