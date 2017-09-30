import React, { Component } from 'react'
import { Table } from 'antd'
import styled from 'styled-components'
import axios from 'axios'

const Poster = styled.img`
  width: 70px;
`

class CompletedOrders extends Component {
  state = {
    orders: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3008/orders`).then(
      res => {
        this.setState({
          orders: res.data
        })
      }
    )
  }

  render () {
    const columns = [{
      title: '海报',
      dataIndex: 'poster',
      key: 'poeter',
      render: (text) => <Poster src={text} alt='poster' />
    }, {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    }]

    const { orders } = this.state
    const completedOrders = orders.filter( t => t.completed === true )
    return (
      <div className='completed-orders'>
        <Table rowKey={record => record.id}
          dataSource={completedOrders} columns={columns} />
      </div>
    )
  }
}

export default CompletedOrders
