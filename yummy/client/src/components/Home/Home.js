import React from 'react'
import './home.css'
import logo from './logo.svg'

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
    <div className='home-actions'>Actions</div>
  </div>
)
