import React, { Component } from 'react'
import cartIcon from '../assets/cartIcon.svg'
import {
  Link
} from 'react-router-dom'
import styled from 'styled-components'

class CartButton extends Component {
  render () {
    const { cartCount } = this.props
    return (
      <Wrap to='/cart' >
        <No>
          {cartCount}
        </No>
        <img src={cartIcon} alt='icon' />
      </Wrap>
    )
  }
}

export default CartButton

const Wrap = styled(Link)`
  z-index: 1000;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
  width: 50px;
  height: 50px;
  padding: 15px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  img {
    display: block;
    width: 20px;
    height: 20px
  }
`

const No = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #212121;
  text-align: center;
  line-height: 17px;
  color: white;
`
