import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import axios from 'axios'

class App extends Component {
  state = {
    dishes: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3008/dishes`).then(
      res => {
        this.setState({
          dishes: res.data
        })
      }
    )
  }

  order = (id) => {
    const dish = this.state.dishes.find(t => t.id === id)
    const { name, price, poster } = dish
    const data = {
      name,
      price,
      poster,
      completed: false
    }
    axios.post(`http://localhost:3008/orders`, data).then(
      res => {
        console.log(res.data)
        console.log('创建订单成功！')
      }
    )
  }

  render() {
    const { dishes } = this.state
    const dishList = dishes.map(t => (
      <div key={t.id} className="dish">
        <div className="name">
          {t.name}
        </div>
        <div className="price">
          {t.price}
        </div>
        <div className="action">
          <button onClick={() => this.order(t.id)}>
            购买
          </button>
        </div>
      </div>
    ))
    return (
      <div className="App">
        <div className="header">
          <h1>欢迎来到 happypeter 的甜品店</h1>
        </div>
        <div className="dish-list">
          {dishList}
        </div>
      </div>
    );
  }
}

export default App;
