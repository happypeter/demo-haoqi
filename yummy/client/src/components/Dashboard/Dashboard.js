import React, { Component } from 'react'
import './dashboard.css'
import FeedItem from './FeedItem'

class Dashboard extends Component {
  render () {
    const cardList = [
      <FeedItem key='1' />,
      <FeedItem key='2' />
    ]

    return (
      <div className='dashboard'>
        <div className='feed-wrap'>
          {cardList}
        </div>
      </div>
    )
  }
}

export default Dashboard
