import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { avatarUrl } from '../constants/ApiConstants'

class UserList extends Component {
  render () {
    const { friends } = this.props
    const listStr = friends.map(user => (
      <ListItem key={user._id}>
        <Avatar avatar={user.avatar} />
        <UsernameLink to={`/user/${user._id}`} >
          {user.username}
        </UsernameLink>
      </ListItem>
    ))
    return (
      <Wrap>
        {listStr}
      </Wrap>
    )
  }
}

export default UserList

const Wrap = styled.div`
  padding: 20px;
`

const ListItem = styled.li`
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  margin: 18px;
  padding: 15px;
  display: flex;
`

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: center center;
  background-size: 90px;
  background-image: url(${props => avatarUrl(props.avatar)});
`

const UsernameLink = styled(Link)`
  font-size: 16px;
  color: #F77062;
  line-height: 50px;
  flex-grow: 1;
  margin-left: 10px;
`
