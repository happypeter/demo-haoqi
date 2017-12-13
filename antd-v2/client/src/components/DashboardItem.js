import React, { Component } from 'react'
import CommentIcon from './CommentIcon'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { posterUrl, avatarUrl } from '../constants/ApiConstants'
import { BRAND_PINK, GRAY } from '../constants/Colors'
import styled from 'styled-components'

class DashBoardItem extends Component {
  state = {
    expand: false
  }

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    const { comment } = this.props
    const { expand } = this.state
    return (
      <Wrap expand={expand}>
        <div className="feed-expand">
          {comment.content}
        </div>
        <div className="feed-card">
          <div className="feed-card-header">
            <Link to={`/user/${comment.user._id}`}
              className="feed-user">
              <div style={{
                'backgroundImage':
                  `url(${avatarUrl(comment.user.avatar)})`
              }}
                className="feed-avatar">
              </div>
              {/* avatar 部分应该抽出成一个组件了 */}
              <div className="feed-user-info">
                <div className="feed-username">
                  {comment.user.username}
                </div>
                <div className="feed-time">
                  {moment(comment.createdAt).fromNow()}
                </div>
              </div>
            </Link>
            <div className="feed-button"
              to="" onClick={this.toggleExpand}>
              <CommentIcon color={expand ? BRAND_PINK : GRAY} />
            </div>
          </div>
          <Link style={{ 'backgroundImage': `url(${posterUrl(comment.dish.poster)})` }}
            to={`/dish/${comment.dish._id}`} className='feed-dish'>
          </Link>
        </div>
      </Wrap>
    )
  }
}

export default DashBoardItem

const Wrap = styled.div`
  width: 90%;
  margin: 10px auto;
  position: relative;
  height: ${props => props.expand ? '330px' : '290px'};
  transition: height .5s ease;
  .feed-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: ${props => props.expand
    ? '0 10px 10px 0 rgba(0,0,0,0.21)'
    : '0 2px 4px 0 rgba(0,0,0,0.21)'};
    box-shadow: ;
    background-color: #fff;
    padding: 10px;
    padding-top: 20px;
    transition: box-shadow .5s ease;
  }

  .feed-card-header {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  .feed-user {
    display: flex;
  }

  .feed-avatar{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 8px;
    margin-bottom: 8px;
    background-position: center center;
    background-size: 65px;
  }

  .feed-username {
    font-size: 16px;
    color: #F77062;
    line-height: 25px;
    margin-top: 5px;
  }

  .feed-time {
    font-size: 12px;
    color: #878787;
  }

  .feed-expand {
    position: absolute;
    left: 2%;
    top: ${props => props.expand ? '245px' : '180px'};
    width: 96%;
    color: white;
    transition: top .5s ease;
    height: 70px;
    padding-top: 35px;
    padding-bottom: 5px;
    text-align: center;
    background-color: green;
    background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
  }

  .feed-button {
    width: 20px;
    display: block;
    line-height: 40px;
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
  }

  .feed-dish {
    display: block;
    width: 100%;
    height: 160px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 350px;
  }
`
