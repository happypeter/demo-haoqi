import React, { Component } from 'react'
import DirMenu from '../components/DirMenu'
import { getDirNames } from '../redux/reducers'
import { connect } from 'react-redux'
import { setCurrentDir } from '../redux/actions'
import { getCurrentDir } from '../redux/reducers'

class DirMenuContainer extends Component {
  handleClick = e => {
    this.props.dispatch(setCurrentDir(e.key))
  }
  render () {
    const { dirNames, currentDir } = this.props
    return (
      <div>
        <DirMenu
          dirNames={dirNames}
          currentDir={currentDir}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dirNames: getDirNames(state),
  currentDir: getCurrentDir(state)
})

export default connect(mapStateToProps)(DirMenuContainer)
