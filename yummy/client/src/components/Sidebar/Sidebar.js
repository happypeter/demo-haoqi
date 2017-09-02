import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './sidebar.css'

let userInfoText = (
  <div className='sidebar-user-text'>
    <Link to='#' className='sidebar-user-name'>
      happypeter
    </Link>
    <Link to='#'>退出</Link>
  </div>
)

export default class Sidebar extends React.Component {
  state = {
    isOpen: false
  }

  closeMenu = () => {
    this.setState({
      isOpen: false
    })
  }
  render () {
    return (
      <div className='sidebar'>
        <Menu isOpen={this.state.isOpen}
          customCrossIcon={false}
          >
          <div className='sidebar-user-info'>
            <div className='sidebar-avatar' />
            {userInfoText}
          </div>
          <div className='bm-link-list'>
            <Link
              onClick={this.closeMenu}
              className='menu-item' to='/'>首页</Link>
            <Link
              onClick={this.closeMenu}
              className='menu-item' to='/login'>登录</Link>
            <Link
              onClick={this.closeMenu}
              className='menu-item' to='/dishes'>猜你喜欢</Link>
          </div>
          <div className='bottom-button'>
            <button
              onClick={this.closeMenu}
              className='bm-close-button' >关闭</button>
          </div>
        </Menu>
      </div>
    )
  }
}
