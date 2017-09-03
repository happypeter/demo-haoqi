import React, { Component } from 'react'
import './user-list.css'
import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'

class UserList extends Component {

  render () {
    const listStr = [
      <li className='user-list-item' key='1'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='2'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='3'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='4'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='5'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='6'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='7'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='8'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
      </li>,
      <li className='user-list-item' key='9'>
        <div style={{ 'background': `teal` }}
          className='user-list-avatar' />
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
