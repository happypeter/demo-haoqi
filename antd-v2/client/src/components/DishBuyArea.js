import React, { Component } from 'react'
import DishBuyIcon from './DishBuyIcon'
import { BRAND_PINK, GRAY } from '../constants/Colors'
import styled from 'styled-components'

class DishBuyArea extends Component {
  render () {
    const { dishesById, match, addToCart, cartAddedIds } = this.props
    const { id } = match.params
    const dish = dishesById[id] || {}
    const isInCart = cartAddedIds.includes(id)
    return (
      <Wrap>
        <Name>
          {dish.name}
        </Name>
        <Price>
          {dish.price}元
        </Price>
        <Icon onClick={() => addToCart(id)}>
          <DishBuyIcon color={isInCart ? BRAND_PINK : GRAY} />
        </Icon>
        <Desc>
          {dish.desc}
        </Desc>
      </Wrap>
    )
  }
}

export default DishBuyArea

const Wrap = styled.div`
`

const Name = styled.div`
  text-align: center;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 26px;
  color: #F77062;
  line-height: 32px;
  margin-top: 20px;
`

const Price = styled.div`
  color: #878787;
  text-align: center;
  margin-top: 20px;
`

const Icon = styled.div`
  text-align: center;
  width: 30px;
  margin: 20px auto;
`

const Desc = styled.div`
  font-size: 14px;
  margin-top: 20px;
  color: #878787;
  text-align: center;
  line-height: 24px;
`
