import React from 'react'
import Dishes from '../components/Dishes'
import { connect } from 'react-redux'
import { getDishes } from '../selectors/dishSelectors'

const DishesContainer = props => <Dishes {...props} />

const mapStateToProps = state => ({
  dishes: getDishes(state)
})

export default connect(mapStateToProps)(DishesContainer)
