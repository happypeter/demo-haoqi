import React from 'react'
import Avatar from '../Avatar/Avatar'
import './user.css'

export default () => (
  <div className='user'>
    <div className='user-info-wrap'>
      <div className='user-avatar-wrap'>
        <Avatar size='120' />
      </div>
      <div className='user-name'>
        happypeter
      </div>
      <div className='user-info-card'>
        <div className='user-info-card-title'>
          个性签名
        </div>
        <div className='slogan'>
          我的个性签名
        </div>
      </div>
      <div className='friend-button'>
          已是好友
      </div>
    </div>
  </div>
)
