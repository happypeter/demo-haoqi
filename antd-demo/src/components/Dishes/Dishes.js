import React, { Component } from 'react'
import { Table } from 'antd'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

const Poster = styled.img`
  width: 70px;
`

class Dishes extends Component {
  state = {
    dishes: [
      {
        _id: '1212',
        poster: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460',
        name: '提拉米苏',
        price: 23,
        desc: '来自意大利'
      },
      {
        _id: '2343',
        poster: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460',
        name: '黑森林',
        price: 24,
        desc: '来自德国'
      }
    ]
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
        <Table rowKey={record => record._id}
          dataSource={this.state.dishes} columns={columns} />
      </div>
    )
  }
}

export default Dishes
