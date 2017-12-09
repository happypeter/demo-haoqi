import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { posterUrl } from '../constants/ApiConstants'

class DishesCard extends Component {
  render () {
    const { dish } = this.props
    return (
      <Wrap to={`/dish/${dish._id}`} >
        <Poster poster={dish.poster} />
        <Details>
          <Name>
            {dish.name}
          </Name>
          <Price>
            {dish.price}元
          </Price>
          <Desc>
            {dish.desc}
            <Mask />
          </Desc>
        </Details>
      </Wrap>
    )
  }
}

export default DishesCard

const Wrap = styled(Link)`
  display: block;
  min-height: 75vh;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.20);
  display: flex;
  flex-direction: column;
`

const Poster = styled.div`
  width: 100%;
  height: 210px;
  background: url(${props => posterUrl(props.poster)});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 370px;
`

const Details = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Name = styled.div`
  text-align: center;
  font-size: 26px;
  color: #F77062;
  line-height: 32px;
  margin-top: 45px;
`

const Price = styled.div`
  color: #878787;
  text-align: center;
  margin-top: 20px;
`

const Desc = styled.div`
  font-size: 14px;
  color: #878787;
  margin-top: 20px;
  text-align: center;
  line-height: 24px;
  position: relative;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%);
`
