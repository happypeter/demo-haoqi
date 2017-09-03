import React from 'react'
import CartItem from './CartItem'
import './cart.css'

const itemList = [
  <CartItem key='1' />
]

export default () => (
  <div className='cart'>
    <div className='cart-hero'>
      <h1 className='total-price'>
        23 元
      </h1>
    </div>
    <div className='cart-list-wrap'>
      <div className='cart-item-list'>
        {itemList}
      </div>
      <div className='cart-checkout-button'>
        结算
      </div>
    </div>
  </div>
)
