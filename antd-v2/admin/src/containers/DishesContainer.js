import React from 'react'
import Dishes from '../components/Dishes'
import { connect } from 'react-redux'
import { deleteDish } from '../actions/dishActions'

const DishesContainer = props => <Dishes {...props} />

const mapStateToProps = state => ({
  dishes: state.dish.all,
  isFetching: state.dish.isFetching
})

export default connect(mapStateToProps, {
  deleteDish
})(DishesContainer)
