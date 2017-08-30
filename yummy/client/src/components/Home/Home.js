import React from 'react'
import './home.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

export default () => (
  <div className='home'>
    <div className='home-hero'>
      <img src={logo} alt='logo' className='home-logo' />
      <div className='home-title'>
        吮指
      </div>
      <div className='home-slogan'>
        享受舌尖艳遇
      </div>
    </div>
    <div className='home-actions'>
      <Link to='/signup'>
        注册
      </Link>
      <Link to='/login'>
        登录
      </Link>
    </div>
  </div>
)
