import React from 'react'
import DishBuyArea from '../components/DishBuyArea'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getDishesById } from '../selectors/dishSelectors'
import { getAddedIds } from '../selectors/cartSelectors'
import { addToCart } from '../actions/cartActions'

const DishBuyAreaContainer = props => <DishBuyArea {...props} />

const mapStateToProps = (state) => ({
  dishesById: getDishesById(state),
  cartAddedIds: getAddedIds(state)
})

export default connect(mapStateToProps, {
  addToCart
})(withRouter(DishBuyAreaContainer))
