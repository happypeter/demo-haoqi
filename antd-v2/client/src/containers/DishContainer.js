import React from 'react'
import Dish from '../components/Dish'
import { connect } from 'react-redux'
import { getDishesById } from '../selectors/dishSelectors'

const DishContainer = props => <Dish {...props} />

const mapStateToProps = state => ({
  dishesById: getDishesById(state)
})

export default connect(mapStateToProps)(DishContainer)
