import React, { Component } from 'react'
import cartIcon from './cartIcon.svg'
import './cart-button.css'
import {
  Link
} from 'react-router-dom'

export default () => (
  <Link to='/cart' style={{ display: `block` }}
    className='cart-button'>
    <div className='cart-count'>
      3
    </div>
    <img src={cartIcon} alt="icon" />
  </Link>
)
