import React from 'react'
import { Link } from 'react-router-dom'
import { posterUrl } from '../constants/ApiConstants'
import styled from 'styled-components'

const dishTableColumns = (deleteDish) => [
  {
    title: '海报',
    dataIndex: 'poster',
    render: poster => {
      return <Poster src={posterUrl(poster)} />
    }
  },
  {
    title: '菜品名称',
    dataIndex: 'name'
  },
  {
    title: '描述',
    dataIndex: 'desc'
  },
  {
    title: '价格',
    dataIndex: 'price',
    render: price => {
      return `${price}元`
    }
  },
  {
    title: '操作',
    dataIndex: '_id',
    render: id => {
      return <Link to='#' onClick={() => deleteDish(id)}>删除</Link>
    }
  }
]

export default dishTableColumns

const Poster = styled.img`
  display: block;
  width: 100px;
`
