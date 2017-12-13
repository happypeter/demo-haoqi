import React from 'react'
import NewDish from '../components/NewDish'
import { connect } from 'react-redux'
import { submitDish } from '../actions/dishActions'

const NewDishContainer = props => <NewDish {...props} />

const mapStateToProps = state => ({
  poster: state.dish.poster
})

export default connect(mapStateToProps, {
  submitDish
})(NewDishContainer)
