import React from 'react'
import './cart-item.css'

export default () => (
  <div className='cart-item'>
    <div className='cart-item-info'>
      <div className='cart-item-poster'
        style={{ 'background': `teal` }}
      />
      <div className='name-price-wrap'>
        <div className='cart-item-name'>
          提拉米苏
        </div>
        <div className='cart-item-price'>
          12
        </div>
      </div>
    </div>
    <div className='cart-action'>
      <div className='minus'>
        -
      </div>
      <div className='item-count'>
        2
      </div>
      <div className='plus'>
        +
      </div>
    </div>
  </div>
)
