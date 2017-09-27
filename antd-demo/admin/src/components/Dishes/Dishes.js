import React, { Component } from 'react'
import { Table } from 'antd'
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
      render: () => <Link to=''>删除</Link>
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
