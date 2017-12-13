import React, { Component } from 'react'
import { Table, Spin, message } from 'antd'
import dishTableColumns from '../constants/DishTableColumns'
import styled from 'styled-components'

class Dishes extends Component {
  handleClick = id => {
    this.props.deleteDish(id).then(
      success => message.success(success.msg)
    ).catch(
      err => message.error(err.message)
    )
  }

  render () {
    const { dishes, isFetching } = this.props

    const content = (
      <Table columns={dishTableColumns(this.handleClick)}
        dataSource={dishes}
        rowKey={record => record._id}
      />
    )
    return (
      <Wrap>
        {
          isFetching
          ? <StyledSpin />
          : content
        }
      </Wrap>
    )
  }
}

export default Dishes

const Wrap = styled.div``

const StyledSpin = styled(Spin)`
  margin: 30px auto;
  display: block;
`
