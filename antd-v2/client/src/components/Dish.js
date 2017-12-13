import React, { Component } from 'react'
import styled from 'styled-components'
import DishBuyAreaContainer from '../containers/DishBuyAreaContainer'
import Section from './DishSection'
import { posterUrl } from '../constants/ApiConstants'
import DishInfoContainer from '../containers/DishInfoContainer'
import DishCommentsContainer from '../containers/DishCommentsContainer'

class Dish extends Component {
  render () {
    const { dishesById, match } = this.props
    const { id } = match.params
    const dish = dishesById[id] || {}
    return (
      <Wrap>
        <ImgWrap>
          <Img poster={dish.poster} />
        </ImgWrap>
        <Card>
          <DishBuyAreaContainer />
          <Section>
            <DishInfoContainer />
          </Section>
          <Section>
            <DishCommentsContainer />
          </Section>
        </Card>
      </Wrap>
    )
  }
}

export default Dish

const Wrap = styled.div`
  background-color: #F9FAFB;
  padding: 10px;
  margin-top: 80px;
`

const Card = styled.div`
  min-height: 300px;
  width: 100%;
  margin-top: 10px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  padding: 10px;
`

const ImgWrap = styled.div`
  background-color: #fff;
  margin: 0 auto;
  margin-top: -80px;
  height: 200px;
  width: 230px;
  padding: 5px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);
`

const Img = styled.div`
  background: url(${props => posterUrl(props.poster)});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 370px;
  width: 100%;
  height: 100%;
`
