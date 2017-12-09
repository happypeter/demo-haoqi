import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import DishesCard from '../components/DishesCard'

class Dishes extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
    const { dishes } = this.props
    return (
      <Wrap>
        <Slider {...settings}>
          {
            dishes.map(dish => (
              <Card key={dish._id} >
                <DishesCard dish={dish} />
              </Card>
            ))
          }
        </Slider>
      </Wrap>
    )
  }
}

export default Dishes

const Wrap = styled.div`
  height: 100%;
  padding-bottom: 90px;
  .slick-dots {
    bottom: -40px;
    li.slick-active button:before {
      opacity: .9;
      color: white;
    }
    li button:before {
      opacity: .4;
      color: white;
    }
  }
`

const Card = styled.div`
  padding: 35px;
  padding-top: 5px;
  padding-bottom: 0;
  height: 100%;
`
