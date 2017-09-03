import React, { Component } from 'react'
import './comment.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Avatar from '../Avatar/Avatar'

moment.locale('zh-cn')

class Comment extends Component {

  newComment = e => {
    e.preventDefault()
    let content = this.commentInput.value
    if(!content) {
      return
    }
    console.log(content)
  }

  render(){
    let commentList = [
        <li className='comment-item'
          key='1'>
          <Avatar size='50' />
          <div className='comment-detail'>
            <div className='username-time'>
              <div className='comment-username'>
                billie
              </div>
              <div className='comment-time'>
                {moment('2016-05-16T09:26:19.033Z').fromNow()}
              </div>
            </div>
            <div className='comment-content'>
              我的评论内容
            </div>
          </div>
        </li>
     ]

    const commentForm = (
      <form className='comment-form'>
        <input ref={value => this.commentInput = value}
       type='text'  />
     <button type='submit'>评论</button>
      </form>
    )

    return(
      <div className='comment'>
        {commentList}
        {commentForm}
      </div>
    )
  }
}

export default Comment
