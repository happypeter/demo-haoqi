import React from 'react'
import CartButton from '../components/CartButton'
import { connect } from 'react-redux'
import { getCartCount } from '../selectors/cartSelectors'

const CartButtonContainer = props => <CartButton {...props} />

const mapStateToProps = state => ({
  cartCount: getCartCount(state)
})

export default connect(mapStateToProps)(CartButtonContainer)
