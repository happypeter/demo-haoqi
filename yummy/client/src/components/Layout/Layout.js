import React from 'react'
import './layout.css'

export default ({ children }) => (
  <div className='layout'>
    <div className='layout-header'>
      header
    </div>
    <div className='layout-main'>
      <div className='layout-main-inner'>
        {children}
      </div>
    </div>
  </div>
)
