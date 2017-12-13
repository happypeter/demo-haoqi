import React, { Component } from 'react'
import styled from 'styled-components'
import { avatarUrl } from '../constants/ApiConstants'

class SettingsAvatar extends Component {
  render () {
    const { currentUser } = this.props
    const { avatar, username } = currentUser
    return (
      <Wrap>
        <UploadImgLabel
          style={{
            'backgroundImage': `url(${avatarUrl(avatar)})`
          }}
        >
          <ImageInput type='file'
            onChange={this.props.updateAvatar}
          />
        </UploadImgLabel>
        <Username>
          {username}
        </Username>
      </Wrap>
    )
  }
}

export default SettingsAvatar

const Wrap = styled.div`
  display: flex;
  padding: 20px
`

const Username = styled.div`
  font-size: 19px;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
  flex-grow: 1;
`

const UploadImgLabel = styled.label`
  outline: 0;
  border: 0;
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
  background-size: 150px;
  background-position: center center;
`

const ImageInput = styled.input`
  width: 0;
  height: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
`
