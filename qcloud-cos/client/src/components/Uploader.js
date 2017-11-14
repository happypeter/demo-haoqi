import React, { Component } from 'react'
import { Upload, Icon, message } from 'antd'
const Dragger = Upload.Dragger

class Uploader extends Component {
  myCustormRequest = () => {
    console.log('avoid no action error')
  }

  handleChange = (info) => {
    this.props.onChange(info).then(
      fileName => message.success(`${fileName} 上传成功`)
    ).catch(
      fileName => message.error(`${fileName} 上传失败`)
    )
  }

  render () {
    const params = {
      multiple: true,
      showUploadList: false,
      onChange: this.handleChange,
      customRequest: this.myCustormRequest
    }
    return (
      <Dragger {...params}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
      </Dragger>
    )
  }
}

export default Uploader
