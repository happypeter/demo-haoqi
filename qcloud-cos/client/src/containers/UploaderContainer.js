import React, { Component } from 'react'
import Settings from '../settings'
import cos from '../lib/qcloud'
import Uploader from '../components/Uploader'
import {
  getCurrentDir,
  getProgressBars
} from '../redux/reducers'
import { connect } from 'react-redux'
import ProgressBars from '../components/ProgressBars'
import {
  addFile,
  addProgressBar,
  setProgressPercent,
  handleException
} from '../redux/actions'

class UploaderContainer extends Component {
  handleChange = (info) => {
    const { currentDir } = this.props
    const file = info.file.originFileObj
    this.props.addProgressBar(file, currentDir)
    const key = `${currentDir}/${file.name}`
    const params = {
      Bucket: Settings.Bucket,
      Region: Settings.Region,
      Key: key,
      Body: file,
      onProgress: progressData => {
        const percent = Math.round(progressData.percent*100)
        this.props.setProgressPercent(percent, file)
      }
    }
    return new Promise (
      (resolve, reject) => {
        cos.sliceUploadFile(params, (err, data) => {
          if (err) {
            reject(file.name)
            this.props.handleException(file)
            console.log(err)
          }else {
            resolve(file.name)
            this.props.addFile(key)
            console.log(data)
          }
        })
      }
    )
  }

  render () {
    const { progressBars } = this.props
    return (
      <div>
        <Uploader onChange={this.handleChange} />
        <ProgressBars progressBars={progressBars} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentDir: getCurrentDir(state),
  progressBars: getProgressBars(state)
})

export default connect(mapStateToProps, {
  addFile,
  addProgressBar,
  setProgressPercent,
  handleException
})(UploaderContainer)
