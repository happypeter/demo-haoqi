import React, { Component } from 'react'
import './user-list.css'
import Toggle from 'react-toggle'
import Avatar from '../Avatar/Avatar'
import { Link } from 'react-router-dom'

class UserList extends Component {

  render () {
    const listStr = [
      <li className='user-list-item' key='2'>
        <div className='user-list-avatar-wrap'>
          <Avatar size='50' />
        </div>
        <Link to='' className='user-list-username'>
          billie
        </Link>
        <div className='user-list-switch'>
          <label>
            <Toggle
              defaultChecked
              icons={false} />
          </label>
        </div>
      </li>
    ]
    return (
      <div className='user-list'>
        {listStr}
      </div>
    )
  }
}

export default UserList
