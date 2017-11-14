import React, { Component } from 'react'
import DirCreator from '../components/DirCreator'
import {
  createDir
} from '../redux/actions'
import { connect } from 'react-redux'

class DirCreatorContainer extends Component {
  handleClick = dir => {
    this.props.createDir(dir)
  }

  render () {
    return (
      <div>
        <DirCreator  onClick={this.handleClick}/>
      </div>
    )
  }
}

export default connect(null, { createDir })(DirCreatorContainer)
