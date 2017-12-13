import React from 'react'
import Nav from '../components/Nav'
import { connect } from 'react-redux'
import { selectItem } from '../actions/navActions'

const NavContainer = props => <Nav {...props} />

const mapStateToProps = state => ({
  selectedIndex: state.common.selectedIndex
})

export default connect(mapStateToProps, {
  selectItem
})(NavContainer)
