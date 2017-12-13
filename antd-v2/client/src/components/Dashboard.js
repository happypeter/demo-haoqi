import React, { Component } from 'react'
import styled from 'styled-components'
import DashboardItem from './DashboardItem'

class Dashboard extends Component {
  render () {
    const { friendComments } = this.props
    const commentsCopy = friendComments.slice()
    const cardList = commentsCopy.map(comment =>
      <DashboardItem key={comment._id} comment={comment} />
    )
    return (
      <Wrap>
        { cardList }
      </Wrap>
    )
  }
}

export default Dashboard

const Wrap = styled.div`
  height: 100%;
  background-color: #F9FAFB;
  padding-bottom: 10px;
  padding-top: 10px;
`
