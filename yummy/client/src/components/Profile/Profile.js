import React, { Component } from 'react'
import './profile.css'
import ProfileEditableContainer from '../../containers/ProfileEditableContainer'
import UserList from './UserList'

class Profile extends Component {

  render () {
    return (
      <div className='profile'>
        <div className='profile-editable-wrap'>
          <ProfileEditableContainer />
        </div>
        <div className='profile-details'>
          <UserList />
        </div>
      </div>
    )
  }
}

export default Profile
