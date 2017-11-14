import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentDirFiles } from '../redux/reducers'
import { removeFile } from '../redux/actions'
import FileTable from '../components/FileTable'

class FileTableContainer extends Component {
  handleDelete = record => this.props.removeFile(record)

  render () {
    return (
      <div>
        <FileTable
          onDelete={this.handleDelete}
          currentDirFiles={this.props.currentDirFiles} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentDirFiles: getCurrentDirFiles(state)
})
export default connect(mapStateToProps, { removeFile })(FileTableContainer)
