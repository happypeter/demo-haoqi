import React, { Component } from 'react'
import CommentIcon from '../CommentIcon'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import './feed-item.css'
import moment from 'moment'

class FeedItem extends Component {
  state = {
    expand: false
  }

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    return(
      <div
        className={`feed-item ${this.state.expand ? 'expand' : ''}`}>
        <div className="feed-expand">
          好吃的很
        </div>
        <div className="feed-card">
          <div className="feed-card-header">
              <Link to={`/user/`}
                className="feed-user">
                <div className='feed-avatar-wrap'>
                  <Avatar size='50' />
                </div>
                <div className="feed-user-info">
                  <div className="feed-username">
                    happypeter
                  </div>
                  <div className="feed-time">
                    {moment('2016-05-16T09:26:19.033Z').fromNow()}
                  </div>
                </div>
              </Link>
              <div className="feed-button"
                to="" onClick={this.toggleExpand}>
                <CommentIcon color={this.state.expand ? 'deeppink' : '#D0D0D0'}/>
              </div>
            </div>
          <Link  style={{ 'background': `teal`}}
              to={`/dish/`} className='feed-dish'>
            </Link>
        </div>
      </div>
    )
  }
}

export default FeedItem
