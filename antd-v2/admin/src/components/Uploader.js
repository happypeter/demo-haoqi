import { Upload, Icon, Button } from 'antd'
import React, { Component } from 'react'
import styled from 'styled-components'
import { uploadAction, uploadProps } from '../constants/ApiConstants'

class Uploader extends Component {
  handleSuccess = (result) => {
    console.log('handleSuccess', result.filename)
    const poster = result.filename
    this.props.setPoster(poster)
  }

  render () {
    return (
      <Wrap>
        <Upload { ...Object.assign(uploadProps(this.handleSuccess), uploadAction) } >
          <Button>
            <Icon type="upload" /> 上传海报
          </Button>
        </Upload>
      </Wrap>
    )
  }
}

export default Uploader

const Wrap = styled.div``
