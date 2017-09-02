import React from 'react'
import './dish-card.css'
import CommentIcon from '../CommentIcon'
import { Link } from 'react-router-dom'

export default () => (
  <Link to='' className='dish-card'>
    <div className='dish-card-poster' />
    <div className='dish-card-detail'>
      <h1 className='dish-name'>
        黑森林
      </h1>
      <div className='dish-price-tag'>
        12 元
      </div>
      <div className='dish-card-icon-wrap'>
        <div className='dish-card-icon-inner'>
          <CommentIcon color='#D0D0D0' />
          <span className='dish-comment-no'>
            4
          </span>
        </div>
      </div>
      <div className='dish-desc'>
        非常好吃
        <div className='dish-desc-mask' />
      </div>
    </div>
  </Link>
)
