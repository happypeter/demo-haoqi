import React, { Component } from 'react'
import styled from 'styled-components'
import { posterUrl } from '../constants/ApiConstants'

class CartItem extends Component {
  render () {
    const { name, poster, price, _id, quantity } = this.props.dish
    return (
      <Wrap>
        <Info>
          <Poster poster={poster} />
          <NamePriceWrap>
            <Name>
              {name}
            </Name>
            <Price>
              {price}
            </Price>
          </NamePriceWrap>
        </Info>
        <CartAction>
          <Minus onClick={() => this.props.decrCartItem(_id)}>
            -
          </Minus>
          <ItemCount>
            { quantity }
          </ItemCount>
          <Plus onClick={() => this.props.incrCartItem(_id)}>
            +
          </Plus>
        </CartAction>
      </Wrap>
    )
  }
}

export default CartItem

const Wrap = styled.div`
  border-bottom: 1px solid  #E3E9EC;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`

const Poster = styled.div`
  width: 50px;
  height: 50px;
  background-size: 70px;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  background-image: ${props => `url(${posterUrl(props.poster)})`};
  &:after {
    background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
    opacity: 0.6;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Info = styled.div`
  display: flex;
`

const NamePriceWrap = styled.div`
  margin-left: 10px;
  padding-top: 5px;
`

const Name = styled.div`
  font-size: 16px;
  color: #F77062;
`

const Price = styled.div`
  font-size: 12px;
  color: #878787;
`

const CartAction = styled.div`
  display: flex;
  line-height: 30px;
  padding-top: 10px;
`

const ItemCount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  color: white;
  line-height: 30px;
  background-color: #fff;
  margin: 0px 15px;
  background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.20);
`

const Plus = styled.div`
  color: #D0D0D0;
  font-size: 19px;
`

const Minus = styled.div`
  color: #D0D0D0;
  font-size: 19px;
`
