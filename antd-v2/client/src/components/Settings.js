import React, { Component } from 'react'
import styled from 'styled-components'
import SettingsAvatarContainer from '../containers/SettingsAvatarContainer'
import SettingsList from './SettingsList'

class Settings extends Component {
  render () {
    return (
      <Wrap>
        <UpperWrap>
          <SettingsAvatarContainer />
        </UpperWrap>
        <LowerWrap>
          <SettingsList {...this.props} />
        </LowerWrap>
      </Wrap>
    )
  }
}

export default Settings

const Wrap = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
`

const UpperWrap = styled.div``

const LowerWrap = styled.div`
  background: #F9FAFB;
  flex-grow: 1;
`
