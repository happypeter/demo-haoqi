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

class Dishes extends Component {
  state = {
    dishes: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3008/dishes`).then(
      res => {
        this.setState({
          dishes: res.data
        })
      }
    )
  }

  handleClick = (e, id) => {
    e.preventDefault()
    axios.delete(`http://localhost:3008/dishes/${id}`).then(
      res => {
        message.info('删除成功了！')
        this.setState({
          dishes: this.state.dishes.filter(t => t.id !== id)
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
      title: '描述',
      dataIndex: 'desc',
      key: 'desc'
    },{
      title: '操作',
      key: 'actions',
      dataIndex: 'id',
      render: (id) => <Link to='' onClick={(e) => this.handleClick(e, id)}>删除</Link>
    }]
    return (
      <div className='dishes'>
        <Table rowKey={record => record.id}
          dataSource={this.state.dishes} columns={columns} />
      </div>
    )
  }
}

export default Dishes
