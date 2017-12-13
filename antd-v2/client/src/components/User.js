import React, { Component } from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import { avatarUrl } from '../constants/ApiConstants'

class User extends Component {
  render () {
    const { match, usersById, currentUser, follow, unfollow } = this.props
    const { id } = match.params
    const isFriend = currentUser.followings && currentUser.followings.includes(id)
    const user = usersById[id] || {}
    const { username, avatar } = user
    return (
      <Wrap>
        <Holder />
        <Main>
          <StyledAvatar
            size={120}
            avatar={avatarUrl(avatar)}
          />
          <Name>
            {username}
          </Name>
          <Card>
            <Title>
              个性签名
            </Title>
            <div>
              世界第一美食家
            </div>
          </Card>
          {
            isFriend
              ? <Button onClick={() => unfollow(user._id)} > unfollow </Button>
              : <Button onClick={() => follow(user._id)} > follow </Button>
          }
        </Main>
      </Wrap>
    )
  }
}

export default User

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  background: #F9FAFB;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 0;
`

const Holder = styled.div`
  height: 80px;
`

const StyledAvatar = styled(Avatar)`
  position: absolute;
  left: 50%;
  margin-left: -60px;
  top: -60px;
`

const Name = styled.div`
  margin-top: 80px;
  text-align: center;
  font-size: 26px;
  color: #F77062;
  line-height: 32px;
`

const Card = styled.div`
  background: #FFFFFF;
  margin-top: 50px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  font-size: 16px;
  color: #878787;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 0;
  text-align: center;
  flex-grow: 1;
  margin-bottom: 5px;
`

const Title = styled.div`
  line-height: 24px;
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 16px;
  color: #F77062;
`

const Button = styled.div`
  background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  font-size: 14px;
  line-height: 56px;
  text-align: center;
  color: #FFFFFF;
`
