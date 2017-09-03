import React from 'react'
import './dish.css'
import ShoppingIcon from '../ShoppingIcon'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import Comment from './Comment'

export default () => (
  <div className='dish'>
    <div className='dish-info'>
      <div className='dish-img-wrap'>
        <div style={{ 'background': `teal` }}
          className='dish-img' />
      </div>
      <div className='dish-info-card'>
        <h1 className='dish-name'>
          提拉米苏
        </h1>
        <div className='dish-price-tag'>
          20 元
        </div>
        <div className='shopping-icon-wrap'>
          <ShoppingIcon color={true ? '#F77062' : '#D0D0D0'} />
        </div>
        <p className='dish-desc'>
          这份甜点的介绍
        </p>
        <h1 className='dish-sub-title'>营养成分</h1>
        <PieChart />
        <h1 className='dish-sub-title'>销售额</h1>
        <AreaChart />
        <h1 className='dish-sub-title'>评论区</h1>
        <Comment />
      </div>
    </div>
  </div>
)
