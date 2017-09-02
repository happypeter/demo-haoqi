import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './dishes.css'
import Slider from 'react-slick'
import DishCard from './DishCard'

class Dishes extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }

    const slides = [
      <div className='dish-card-wrap' key='1'>
        <DishCard />
      </div>,
      <div className='dish-card-wrap' key='2'>
        <DishCard />
      </div>
    ]

    const slider = (
      <Slider {...settings}>
        {slides}
      </Slider>
    )
    return (
      <div className='dishes'>
        {slider}
      </div>
    )
  }
}

export default Dishes
