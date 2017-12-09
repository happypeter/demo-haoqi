import React from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { incrCartItem, decrCartItem, checkout } from '../actions/cartActions'
import { getCartDishes, getTotal } from '../selectors/cartSelectors'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
  cartDishes: getCartDishes(state),
  total: getTotal(state)
})

export default connect(mapStateToProps, {
  incrCartItem,
  decrCartItem,
  checkout
})(CartContainer)
