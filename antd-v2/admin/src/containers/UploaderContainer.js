import React from 'react'
import Uploader from '../components/Uploader'
import { connect } from 'react-redux'
import { setPoster } from '../actions/dishActions'

const UploaderContainer = props => <Uploader {...props} />

const mapStateToProps = state => ({ })

export default connect(mapStateToProps, {
  setPoster
})(UploaderContainer)
