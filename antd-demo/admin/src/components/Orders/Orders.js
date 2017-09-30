import React, { Component } from 'react'
import { Table, message } from 'antd'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

const Poster = styled.img`
  width: 70px;
`

class Orders extends Component {
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

  sendGoods = (e, id) => {
    e.preventDefault()
    const data = {
      ...this.state.orders.find(t => t.id === id),
      completed: true
    }
    axios.put(`http://localhost:3008/orders/${id}`, data).then(
      res => {
        message.info('发货成功')
        console.log(res.data)
        this.setState({
          orders: this.state.orders.map(t => {
            if (t.id === id) {
              return { ...t, completed: true }
            }
            return t
          })
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
    },{
      title: '操作',
      key: 'actions',
      dataIndex: 'id',
      render: (id) => <Link to='' onClick={(e) => this.sendGoods(e, id)}>发货</Link>
    }]
    const { orders } = this.state
    const uncompletedOrders = orders.filter( t => t.completed === false )
    return (
      <div className='orders'>
        <Table rowKey={record => record.id}
          dataSource={uncompletedOrders} columns={columns} />
      </div>
    )
  }
}

export default Orders
