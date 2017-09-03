import React from 'react'
import './avatar.css'

export default ({ size }) => (
  <div style={{
    width: `${size}px`,
    height: `${size}px`
  }}
    className='avatar' />
)
