import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './sidebar.css'


export default () => (
  <div className='sidebar'>
    <Menu>
      <Link className='menu-item' to='/'>首页</Link>
      <Link className='menu-item' to='/login'>登录</Link>
    </Menu>
  </div>
)
