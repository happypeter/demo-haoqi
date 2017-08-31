import React from 'react'
import './layout.css'
import SidebarContainer from '../../containers/SidebarContainer'

export default ({ children }) => (
  <div className='layout'>
    <SidebarContainer />
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
