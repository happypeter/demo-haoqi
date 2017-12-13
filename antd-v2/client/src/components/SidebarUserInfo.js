import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { avatarUrl } from '../constants/ApiConstants'

const UserInfo = ({ isAuthenticated, logout, currentUser, closeMenu }) => (
  <Wrap>
    <CenteredAvatar avatar={avatarUrl(currentUser.avatar)} size='100' />
    {
      isAuthenticated &&
      <Text>
        <Name onClick={closeMenu} to='/settings' >
          { currentUser.username }
        </Name>
        <Link to='#' onClick={logout}>退出</Link>
      </Text>
    }
  </Wrap>
)

export default UserInfo

const Wrap = styled.div``

const Name = styled(Link)`
  display: inline-block;
  padding-right: 5px;
  border-right: 2px solid #F77062;
`

const Text = styled.div`
  font-size: 14px;
  text-align: center;
  line-height: 1.0;
  display: block;
  margin: 16px auto;
  a {
    padding-left: 5px;
    color: #F77062;
  }
`

const CenteredAvatar = styled(Avatar)`
  margin: 0 auto
`
