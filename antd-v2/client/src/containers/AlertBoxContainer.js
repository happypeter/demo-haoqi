import React from 'react'
import AlertBox from '../components/AlertBox'
import { getAlertMsg } from '../selectors/commonSelectors'
import { hideAlert } from '../actions/commonActions'
import { connect } from 'react-redux'

const AlertBoxContainer = props => <AlertBox {...props} />

const mapStateToProps = state => ({
  alertMsg: getAlertMsg(state)
})
export default connect(mapStateToProps, {
  hideAlert
})(AlertBoxContainer)
