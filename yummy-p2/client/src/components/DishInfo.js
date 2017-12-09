import React, { Component } from 'react'
import DishPieChart from './DishPieChart'

class DishInfo extends Component {
  componentDidMount () {
    this.props.setSubTitle({
      title: '营养配比',
      details: '点圆弧查看细节'
    })
  }

  render () {
    return (
      <div>
        <DishPieChart />
      </div>
    )
  }
}

export default DishInfo
